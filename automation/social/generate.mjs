/**
 * Weekly Instagram + Facebook post pipeline.
 *
 * Agents: Campaign Planner → Copywriter → Designer → (render) → Brand Guardrail.
 * Publishing is gated: dry-run by default; live only when config.social.live is
 * true AND the Meta credentials are present in the environment.
 *
 * Usage:
 *   node automation/social/generate.mjs             # full run (needs ANTHROPIC_API_KEY)
 *   node automation/social/generate.mjs --mock      # skip API, use fixture (tests render path)
 *   node automation/social/generate.mjs --no-render # skip Playwright (agents only)
 */
import fs from "node:fs";
import { runAgent } from "../lib/claude.mjs";
import { notifyOwner } from "../lib/notify.mjs";
import { repoPath, readJson, writeJson, writeText, existingBlogPosts } from "../lib/files.mjs";
import { todayInMiami } from "../lib/dates.mjs";
import { BRAND, MONTHS_EN } from "../lib/brand.mjs";
import { PLAN_SCHEMA, COPY_SCHEMA, DESIGN_SCHEMA, GUARDRAIL_SCHEMA } from "./schemas.mjs";
import { renderSocialImage } from "./render.mjs";
import {
  getPageAccessToken,
  postFacebookPhoto,
  uploadToCloudflareImages,
  publishInstagram,
} from "./meta.mjs";

const MOCK = process.argv.includes("--mock");
const NO_RENDER = process.argv.includes("--no-render");

const SYSTEM = `You are the social media team for ${BRAND.company}, a licensed hurricane & solar protection contractor serving ${BRAND.serviceArea}, family-owned since ${BRAND.founded}.

Brand voice:
${BRAND.voice.map((v) => `- ${v}`).join("\n")}

Verified company facts (the ONLY company claims you may make):
${BRAND.proofPoints.map((p) => `- ${p}`).join("\n")}
- Phone: ${BRAND.phone}
- Website: ${BRAND.site}

Social style: energetic, emoji-friendly (💙 is the brand signature emoji, plus 🏠🌪️💪), educational or promotional, never fearmongering without a solution. Never invent statistics, prices, or offers beyond the verified facts.`;

function pickFormat(config, state) {
  const rotation = config.social.formatRotation;
  if (!state.social.lastFormat) return rotation[0];
  const idx = rotation.indexOf(state.social.lastFormat);
  return rotation[(idx + 1) % rotation.length];
}

function productPhotoOptions() {
  const dir = repoPath("public", "images");
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g)$/i.test(f) && BRAND.products.some((p) => f.startsWith(p.slug)));
}

async function runPipeline({ format, today, state }) {
  const month = MONTHS_EN[Number(today.slice(5, 7)) - 1];
  const blog = existingBlogPosts().latest;
  const recentPosts = state.social.history.slice(0, 8);

  console.log("→ Agent 1/4: Campaign Planner");
  const plan = await runAgent({
    name: "campaign-planner",
    system: SYSTEM,
    schema: PLAN_SCHEMA,
    prompt: `Plan this week's Instagram + Facebook post. Today: ${today} (${month}).

Latest blog article (you MAY promote it, especially if it is new since the last social post): "${blog.title}" — ${BRAND.siteUrl}/blog/${blog.slug}

Recent post themes (do NOT repeat these angles):
${recentPosts.length ? recentPosts.map((h) => `- ${h.date}: [${h.postType}] ${h.theme}`).join("\n") : "- none yet"}

Products available to spotlight: ${BRAND.products.map((p) => `${p.slug} (${p.tagline})`).join("; ")}

Pick ONE post type, rotating variety across weeks: safety-tip, product-spotlight, seasonal, financing, blog-promo, trust. Consider the month (hurricane season runs June 1 – November 30).`,
  });
  console.log(`  plan: [${plan.postType}] ${plan.theme}`);

  console.log("→ Agent 2/4: Copywriter");
  const copy = await runAgent({
    name: "copywriter",
    system: SYSTEM,
    schema: COPY_SCHEMA,
    prompt: `Write the copy for this week's post.

Theme: ${plan.theme}
Angle: ${plan.angle}
Type: ${plan.postType}${plan.productSlug ? `\nProduct: ${plan.productSlug}` : ""}${plan.tieToBlog ? `\nPromotes blog article: "${blog.title}" — ${BRAND.siteUrl}/blog/${blog.slug}` : ""}

Requirements:
- IG caption: 2-4 short paragraphs, hook first line, 💙 somewhere, CTA with phone ${BRAND.phone}. NO hashtags inside the caption.
- Hashtags: 8-14 total, always include: ${BRAND.hashtags.join(" ")}.
- FB caption: slightly longer, conversational, include ${BRAND.siteUrl}${plan.tieToBlog ? `/blog/${blog.slug}` : "/contact"} and the phone number.
- On-image text: headline ≤ 40 chars, subline ≤ 90 chars, badge ≤ 22 chars, CTA label ≤ 24 chars.`,
  });

  console.log("→ Agent 3/4: Designer");
  const photoOptions = productPhotoOptions();
  const design = await runAgent({
    name: "designer",
    system: SYSTEM,
    schema: DESIGN_SCHEMA,
    prompt: `You are the visual designer. This week's image format is "${format}" (${format === "card" ? "branded gradient card, no photo" : "real product photo with a dark overlay and text"}).

Finalize the on-image text (tighten for visual impact; hard limits: headline 40 chars, subline 90, badge 22, CTA 24):
${JSON.stringify({ headline: copy.onImageHeadline, subline: copy.onImageSubline, badge: copy.badge, cta: copy.cta }, null, 2)}

${format === "photo" ? `Choose the photo that best matches the theme "${plan.theme}"${plan.productSlug ? ` (product: ${plan.productSlug})` : ""} from this list — return its exact filename in "photo":\n${photoOptions.join("\n")}` : `Leave "photo" out — the card format uses no photo.`}`,
  });

  if (format === "photo") {
    if (!design.photo || !photoOptions.includes(design.photo)) {
      const fallback = plan.productSlug
        ? photoOptions.find((f) => f.startsWith(plan.productSlug))
        : null;
      design.photo = fallback ?? photoOptions[0];
      console.warn(`  designer photo invalid — falling back to ${design.photo}`);
    }
  } else {
    delete design.photo;
  }

  console.log("→ Agent 4/4: Brand Guardrail");
  const guardrail = await runAgent({
    name: "brand-guardrail",
    system: SYSTEM,
    schema: GUARDRAIL_SCHEMA,
    prompt: `Final pre-publish review. Check both captions and the on-image text for:
- Claims not in the verified facts list, invented stats/prices/offers
- Wrong phone (must be ${BRAND.phone}) or wrong website (must be ${BRAND.site})
- Typos, broken tone, fearmongering without a solution
- Anything a licensed Florida contractor should not say publicly

Fix small problems yourself and return the corrected captions in igCaptionFinal/fbCaptionFinal (return them UNCHANGED if already clean). Set approved=false ONLY if the post is unsalvageable.

IG caption:
${copy.igCaption}

Hashtags: ${copy.hashtags.join(" ")}

FB caption:
${copy.fbCaption}

On-image: ${JSON.stringify(design)}`,
  });

  return { plan, copy, design, guardrail };
}

async function publishLive({ igCaption, fbCaption, imagePath }) {
  const token = process.env.META_SYSTEM_USER_TOKEN;
  const pageId = process.env.FB_PAGE_ID;
  const igUserId = process.env.IG_USER_ID;
  const results = {};

  const pageToken = await getPageAccessToken(pageId, token);
  results.facebookPostId = await postFacebookPhoto({
    pageId,
    pageToken,
    imagePath,
    caption: fbCaption,
  });
  console.log(`  ✓ Facebook post: ${results.facebookPostId}`);

  if (igUserId) {
    const imageUrl = await uploadToCloudflareImages(imagePath);
    results.instagramMediaId = await publishInstagram({ igUserId, token, imageUrl, caption: igCaption });
    console.log(`  ✓ Instagram post: ${results.instagramMediaId}`);
  } else {
    console.log("  IG_USER_ID not set — skipped Instagram");
  }
  return results;
}

async function main() {
  const config = readJson(repoPath("automation/config.json"));
  if (!config.social.enabled) {
    console.log("Social automation disabled in automation/config.json — exiting.");
    return;
  }

  const statePath = repoPath("automation/state.json");
  const state = readJson(statePath);
  const today = todayInMiami().iso;
  const format = pickFormat(config, state);
  const outDir = repoPath("automation", "out", "social", today);

  console.log(`Social pipeline starting (${today}, format: ${format})${MOCK ? " [MOCK]" : ""}`);

  const result = MOCK
    ? readJson(repoPath("automation/social/mock-plan.json"))
    : await runPipeline({ format, today, state });

  const { plan, design, guardrail } = result;
  if (!guardrail.approved) {
    throw new Error(`Guardrail rejected the post:\n- ${guardrail.issues.join("\n- ")}`);
  }

  const igCaption = `${guardrail.igCaptionFinal}\n\n${result.copy.hashtags.join(" ")}`;
  const fbCaption = guardrail.fbCaptionFinal;

  // Render the image
  const imagePath = `${outDir}/post.png`;
  if (!NO_RENDER) {
    console.log(`→ Rendering ${format} image`);
    await renderSocialImage(
      format,
      {
        badge: design.badge,
        headline: design.headline,
        subline: design.subline,
        cta: design.cta,
        phone: BRAND.phone,
        site: BRAND.site,
        photoFile: design.photo,
      },
      imagePath
    );
    console.log(`  ✓ ${imagePath}`);
  }

  // Artifacts
  writeJson(`${outDir}/plan.json`, result);
  writeText(
    `${outDir}/captions.md`,
    `# Social post — ${today} (${format})\n\n## Instagram\n\n${igCaption}\n\n## Facebook\n\n${fbCaption}\n\n## Guardrail\n\n${guardrail.issues.length ? guardrail.issues.map((i) => `- ${i}`).join("\n") : "No issues."}\n`
  );

  // Publish or dry-run
  const live = config.social.live && process.env.META_SYSTEM_USER_TOKEN && process.env.FB_PAGE_ID;
  if (live && !MOCK) {
    console.log("→ Publishing live to Meta");
    const posted = await publishLive({ igCaption, fbCaption, imagePath });
    writeJson(`${outDir}/published.json`, posted);
  } else {
    console.log(`→ DRY RUN (live=${Boolean(config.social.live)}, creds=${Boolean(process.env.META_SYSTEM_USER_TOKEN)}) — artifacts written, nothing posted`);
  }

  // Update state
  state.social.lastRun = today;
  state.social.lastFormat = format;
  state.social.history.unshift({ date: today, postType: plan.postType, theme: plan.theme, format });
  state.social.history = state.social.history.slice(0, 12);
  writeJson(statePath, state);

  console.log(`✓ Social post ready: [${plan.postType}] ${plan.theme}`);
}

main().catch(async (err) => {
  console.error(`✗ Social pipeline failed: ${err.message}`);
  await notifyOwner(
    "OTG social automation failed",
    `The weekly social pipeline failed:\n\n${err.stack ?? err.message}\n\nRe-run: GitHub → Actions → Weekly social post → Run workflow.`
  );
  process.exit(1);
});
