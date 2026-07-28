/**
 * Weekly SEO blog post pipeline.
 *
 * Agents: Topic Strategist → Writer → SEO Editor → Claims Checker → Translator.
 * The publisher then appends the post to src/lib/data/generated-posts.json and
 * its en/es meta to generated-post-meta.json, and decides whether the post can
 * go live unattended (see decidePublication) — the workflow reads that decision
 * to either push straight to main or open a review PR.
 *
 * Usage:
 *   node automation/blog/generate.mjs             # full run (needs ANTHROPIC_API_KEY)
 *   node automation/blog/generate.mjs --mock      # skip API, use fixture (tests publisher)
 *   node automation/blog/generate.mjs --dry-run   # run agents, write out/ only, no data edits
 */
import { runAgent } from "../lib/claude.mjs";
import { notifyOwner } from "../lib/notify.mjs";
import {
  repoPath,
  readJson,
  writeJson,
  writeText,
  existingBlogPosts,
} from "../lib/files.mjs";
import { todayInMiami } from "../lib/dates.mjs";
import { BRAND, BLOG_CATEGORIES, MONTHS_EN, MONTHS_ES } from "../lib/brand.mjs";
import {
  TOPIC_SCHEMA,
  POST_SCHEMA,
  CLAIMS_SCHEMA,
  TRANSLATION_SCHEMA,
} from "./schemas.mjs";

const MOCK = process.argv.includes("--mock");
const DRY_RUN = process.argv.includes("--dry-run");

function wordCount(sections) {
  return sections
    .flatMap((s) => [s.text ?? "", ...(s.items ?? [])])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

const SYSTEM = `You are part of the content team for ${BRAND.company}, a licensed hurricane & solar protection contractor serving ${BRAND.serviceArea}, family-owned since ${BRAND.founded}.

Brand voice:
${BRAND.voice.map((v) => `- ${v}`).join("\n")}

Verified company facts (the ONLY company claims you may make):
${BRAND.proofPoints.map((p) => `- ${p}`).join("\n")}
- Phone: ${BRAND.phone}
- Products: ${BRAND.products.map((p) => p.name).join(", ")}

Hard rules:
- Never invent statistics, prices, or study citations. Cost figures must be broad typical ranges clearly framed as estimates.
- Never guarantee insurance savings — say discounts "may" or "typically" apply.
- No markdown, no HTML, no links inside text — plain sentences only.`;

async function runPipeline(today, existing, config) {
  const wordTarget = `${config.blog.minWords}–${config.blog.maxWords}`;
  const topics = readJson(repoPath("automation/topics.json"));

  console.log("→ Agent 1/5: Topic Strategist");
  const topic = await runAgent({
    name: "topic-strategist",
    system: SYSTEM,
    schema: TOPIC_SCHEMA,
    prompt: `Today is ${today.iso} (month: ${MONTHS_EN[today.month - 1]}). Pick the single best blog topic for this week.

Topic seed backlog (you may adapt one or propose a better one):
${JSON.stringify(topics.seeds, null, 2)}

Existing post titles — the new topic must NOT overlap with any of these:
${existing.titles.map((t) => `- ${t}`).join("\n")}

Prioritize: (1) seasonal relevance to the current month, (2) purchase-intent keywords, (3) coverage gaps vs existing posts. Categories allowed: ${BLOG_CATEGORIES.join(", ")}.`,
  });
  console.log(`  topic: ${topic.topic} [${topic.category}]`);

  console.log("→ Agent 2/5: Writer");
  const draft = await runAgent({
    name: "writer",
    system: SYSTEM,
    schema: POST_SCHEMA,
    maxTokens: 32000,
    prompt: `Write a complete blog post on this topic:

Topic: ${topic.topic}
Angle: ${topic.angle}
Target keyword: ${topic.targetKeyword}
Category: ${topic.category}

Requirements:
- ${wordTarget} words total.
- Structure: opening paragraph(s) that hook a South Florida homeowner, then h2 sections (5–8), with lists where they genuinely help, optional h3 subsections.
- The FIRST section must be type "paragraph" (the lead).
- The LAST section must be type "callout": a call to action mentioning the free in-home consultation and the phone number ${BRAND.phone}.
- Work the target keyword naturally into the title, excerpt, and at least two h2 headings or paragraphs.
- Ground everything in South Florida specifics (Broward, Miami-Dade, Palm Beach, Florida Building Code, hurricane season June 1 – November 30).`,
  });

  console.log("→ Agent 3/5: SEO Editor");
  const post = await runAgent({
    name: "seo-editor",
    system: SYSTEM,
    schema: POST_SCHEMA,
    maxTokens: 32000,
    prompt: `You are the SEO editor. Improve this draft and return the FULL revised post (same JSON shape).

Target keyword: ${topic.targetKeyword}

Checklist:
- Title ≤ 70 chars, keyword present, compelling.
- Excerpt exactly 150–160 characters, keyword present, reads as a meta description.
- Slug: 3–6 lowercase hyphenated words, keyword-based.
- Heading hierarchy clean (h2 → h3, no skips), headings scannable.
- Keyword and close variants appear naturally (no stuffing).
- Tighten weak sentences; keep ${wordTarget} words; keep the closing callout with the phone number.

Draft:
${JSON.stringify(draft, null, 2)}`,
  });

  // Claims checker and translator are independent — run them concurrently.
  console.log("→ Agents 4+5/5: Claims Checker ∥ Translator (es)");
  const claimsPromise = runAgent({
    name: "claims-checker",
    system: SYSTEM,
    schema: CLAIMS_SCHEMA,
    prompt: `You are the compliance reviewer for a licensed Florida contractor. Audit this post for risky or wrong claims. This is the LAST check before a human reviews the PR — be thorough and skeptical.

Audit for:
- Florida Building Code / permitting / licensing claims that are wrong or overstated
- Miami-Dade NOA / product-approval claims
- Insurance discount claims stated as guarantees
- Specific prices or percentages that are stated as fact rather than typical ranges
- Invented statistics or studies
- Company claims not in the verified facts list
- Wrong phone number (must be ${BRAND.phone} if mentioned)

Severity: "blocker" = must not publish as-is; "warning" = human should verify; "info" = minor.
Verdict: "approved" (no flags), "approved_with_notes" (info/warning only), "needs_review" (any blocker).

Post:
${JSON.stringify(post, null, 2)}`,
  });

  const translationPromise = runAgent({
    name: "translator",
    system:
      "You are a professional English→Spanish translator for a South Florida home improvement company. Use the neutral Latin American Spanish used in Miami. Translate marketing copy naturally, not literally.",
    schema: TRANSLATION_SCHEMA,
    prompt: `Translate this blog title and excerpt to Spanish. Keep the excerpt 150–160 characters.

Title: ${post.title}
Excerpt: ${post.excerpt}`,
  });

  const [claims, translation] = await Promise.all([claimsPromise, translationPromise]);
  console.log(`  verdict: ${claims.verdict} (${claims.flags.length} flags)`);

  return { topic, post, claims, translation };
}

function validatePost(post, existing, config) {
  const errors = [];
  const warnings = [];

  if (!/^[a-z0-9]+(-[a-z0-9]+){1,7}$/.test(post.slug)) {
    errors.push(`slug "${post.slug}" is not a valid hyphenated slug`);
  }
  if (existing.slugs.includes(post.slug)) {
    errors.push(`slug "${post.slug}" already exists`);
  }
  if (!BLOG_CATEGORIES.includes(post.category)) {
    errors.push(`category "${post.category}" is not a known category`);
  }
  if (!post.sections?.length) {
    errors.push("post has no sections");
  } else {
    if (post.sections[0].type !== "paragraph") {
      warnings.push("first section is not a lead paragraph");
    }
    if (post.sections[post.sections.length - 1].type !== "callout") {
      warnings.push("last section is not a CTA callout");
    }
    for (const s of post.sections) {
      if (["paragraph", "h2", "h3", "callout"].includes(s.type) && !s.text) {
        errors.push(`section of type "${s.type}" is missing text`);
      }
      if (s.type === "list" && !s.items?.length) {
        errors.push("list section is missing items");
      }
    }
  }

  const { minWords, maxWords } = config.blog;
  const words = wordCount(post.sections ?? []);
  if (words < Math.round(minWords * (2 / 3))) errors.push(`post too short: ${words} words`);
  else if (words < minWords - 50 || words > maxWords + 200) {
    warnings.push(`word count ${words} outside ${minWords}–${maxWords} target`);
  }

  if (post.excerpt.length < 120 || post.excerpt.length > 175) {
    warnings.push(`excerpt is ${post.excerpt.length} chars (target 150–160)`);
  }

  if (errors.length) {
    throw new Error(`Post validation failed:\n- ${errors.join("\n- ")}`);
  }
  return { words, warnings, readTime: `${Math.max(2, Math.ceil(words / 200))} min read` };
}

/**
 * Whether this post can go live unattended.
 *
 * Blockers (and the `needs_review` verdict that accompanies them) are the only
 * compliance stop: a licensed contractor should not auto-publish a claim the
 * checker judged unpublishable. Warnings still publish — they are "verify this"
 * notes, and holding every one of them would mean nothing ever ships on its own
 * — but they are listed in the owner's email so the live post can be corrected.
 */
function decidePublication(claims, config) {
  if (MOCK) return { autoPublish: false, reason: "mock run — never publishes to main" };
  if (DRY_RUN) return { autoPublish: false, reason: "dry run — no data files written" };
  if (!config.blog.autoPublish) {
    return { autoPublish: false, reason: "auto-publish is off in automation/config.json" };
  }

  const blockers = claims.flags.filter((f) => f.severity === "blocker");
  if (blockers.length) {
    return { autoPublish: false, reason: `claims check raised ${blockers.length} blocker(s)` };
  }
  if (claims.verdict === "needs_review") {
    return { autoPublish: false, reason: "claims verdict: needs_review" };
  }
  return { autoPublish: true, reason: `claims verdict: ${claims.verdict}` };
}

function publish({ topic, post, claims, translation }, today, meta, decision) {
  const fullPost = {
    slug: post.slug,
    category: post.category,
    date: `${MONTHS_EN[today.month - 1]} ${today.year}`,
    publishedAt: today.iso,
    title: post.title,
    excerpt: post.excerpt,
    readTime: meta.readTime,
    sections: post.sections,
  };

  const postsPath = repoPath("src/lib/data/generated-posts.json");
  const metaPath = repoPath("src/lib/data/generated-post-meta.json");

  if (!DRY_RUN) {
    const posts = readJson(postsPath);
    posts.unshift(fullPost);
    writeJson(postsPath, posts);

    const postMeta = readJson(metaPath);
    postMeta.en[post.slug] = {
      title: post.title,
      excerpt: post.excerpt,
      date: fullPost.date,
    };
    postMeta.es[post.slug] = {
      title: translation.title,
      excerpt: translation.excerpt,
      date: `${MONTHS_ES[today.month - 1]} ${today.year}`,
    };
    writeJson(metaPath, postMeta);

    const statePath = repoPath("automation/state.json");
    const state = readJson(statePath);
    state.blog.lastRun = today.iso;
    state.blog.postCount += 1;
    writeJson(statePath, state);
  }

  writeRunArtifacts({ topic, post: fullPost, claims, translation }, meta, decision);
  return fullPost;
}

/** Everything under automation/out/blog/ — consumed by the workflow, not committed. */
function writeRunArtifacts({ topic, post, claims, translation }, meta, decision) {
  const out = (name) => repoPath("automation/out/blog", name);

  writeJson(out("post.json"), { topic, post, claims, translation });
  writeJson(out("publish-decision.json"), {
    autoPublish: decision.autoPublish,
    reason: decision.reason,
    slug: post.slug,
    verdict: claims.verdict,
  });
  writeText(out("slug.txt"), post.slug);

  const flagLines = claims.flags.length
    ? claims.flags
        .map((f) => `| ${f.severity} | ${f.claim.slice(0, 80)} | ${f.issue}${f.suggestion ? ` — _${f.suggestion}_` : ""} |`)
        .join("\n")
    : "| — | No flags raised | — |";

  const details = `**Category:** ${post.category} · **Target keyword:** \`${topic.targetKeyword}\` · **${meta.words} words · ${meta.readTime}**

**Why this topic:** ${topic.rationale}

### Claims check: \`${claims.verdict}\`

| Severity | Claim | Issue |
|---|---|---|
${flagLines}

${meta.warnings.length ? `### Validation warnings\n${meta.warnings.map((w) => `- ${w}`).join("\n")}\n` : ""}
### Spanish meta (listing page)

- **Título:** ${translation.title}
- **Extracto:** ${translation.excerpt}
`;

  writeText(
    out("pr-body.md"),
    `## Weekly blog post held for review: ${post.title}

**This post did not publish automatically.** Reason: ${decision.reason}

${details}
### Review checklist

- [ ] Claims table reviewed — nothing risky for a licensed contractor
- [ ] Title/excerpt read well
- [ ] Preview: \`/blog/${post.slug}\`

Merging publishes the post on the next Cloudflare Pages deploy.
`
  );

  writeText(
    out("summary.md"),
    `${post.title}

Live at ${BRAND.siteUrl}/blog/${post.slug} once Cloudflare Pages finishes the deploy
(usually a couple of minutes after the commit lands on main).

${details}
Nothing to do if this all reads well. To correct the post, edit
src/lib/data/generated-posts.json on main. To pause weekly publishing, set
blog.autoPublish (or blog.enabled) to false in automation/config.json.
`
  );
}

async function main() {
  const config = readJson(repoPath("automation/config.json"));
  if (!config.blog.enabled) {
    console.log("Blog automation disabled in automation/config.json — exiting.");
    return;
  }

  const today = todayInMiami();
  const existing = existingBlogPosts();
  console.log(`Blog pipeline starting (${today.iso})${MOCK ? " [MOCK]" : ""}${DRY_RUN ? " [DRY-RUN]" : ""}`);

  const result = MOCK
    ? readJson(repoPath("automation/blog/mock-post.json"))
    : await runPipeline(today, existing, config);

  const meta = validatePost(result.post, existing, config);
  const decision = decidePublication(result.claims, config);
  const fullPost = publish(result, today, meta, decision);

  console.log(`✓ Post ready: /blog/${fullPost.slug} (${meta.words} words, verdict: ${result.claims.verdict})`);
  console.log(
    decision.autoPublish
      ? `  → publishing to main (${decision.reason})`
      : `  → held for review (${decision.reason})`
  );
  if (meta.warnings.length) {
    console.log(`  warnings:\n  - ${meta.warnings.join("\n  - ")}`);
  }
}

main().catch(async (err) => {
  console.error(`✗ Blog pipeline failed: ${err.message}`);
  await notifyOwner(
    "OTG blog automation failed",
    `The weekly blog pipeline failed:\n\n${err.stack ?? err.message}\n\nRe-run: GitHub → Actions → Weekly blog post → Run workflow.`
  );
  process.exit(1);
});
