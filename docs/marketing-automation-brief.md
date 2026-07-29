# Marketing Automation — Build Brief

Two weekly, multi-agent content automations for the Orlando T Group site.

## Stack facts that constrain the build
- Next.js 14 App Router, deployed via **`@cloudflare/next-on-pages`** (NOT static export). Live edge API routes exist (`/api/contact` → SendGrid). Secrets already live in the Cloudflare env.
- **Blog is data-driven:** posts are typed objects in `src/lib/data/blogPosts.ts` (`BlogPost` with `sections[]` of paragraph/h2/h3/list/callout). Rendered by `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` via `generateStaticParams`. Adding a post = append one object.
- **Bilingual (en/es):** blog listing reads translated title/excerpt/date from `src/lib/i18n/translations.ts` → `postMeta[slug]` per language (falls back to the post's English). A new post should also get an `es` `postMeta` entry.
- **Stale CI:** `.github/workflows/deploy.yml` targets GitHub Pages and uploads `./out` (never produced by next-on-pages). Prod deploy is almost certainly Cloudflare Pages Git integration (rebuild on push). **Confirm this first**, then fix/remove the stale workflow.
- **SEO gaps:** no `sitemap.xml`, `robots.txt`, or RSS. Add all three.
- Blog posts are text-only (no image field).

## Locked decisions
- **Blog gating:** human-approved, as originally decided — but **no API key**. The post is written by a scheduled **Claude Code routine** (not a GitHub Action calling the API) following `docs/weekly-blog-post.md`. Each run opens a PR and emails the owner the link; merging is what publishes, via Cloudflare Pages. GitHub Actions only runs the deterministic, secret-free `npm run validate:blog`.
- **Social image:** **rotate** branded template cards ⇄ real product photos from `/public/images` week to week.
- **Meta setup:** unknown — owner completes the readiness checklist (bottom) before social posting is wired live.
- **Scheduler:** GitHub Actions cron for both (one place for secrets/logs/manual re-runs).

## Automation 1 — Weekly SEO blog post (GH Actions cron, e.g. Tue 9am ET)
Agent pipeline → deterministic publish:
1. **Topic Strategist** — keeps `automation/topics.json` (products × South-FL seasonal calendar: hurricane season, insurance renewals, permit cycles); picks next topic + target keyword + category, no overlap with existing posts.
2. **Writer** — full `BlogPost` object, ~900–1,300 words, brand voice, exact `sections` schema.
3. **SEO Editor** — title, 150–160-char excerpt, slug, heading hierarchy, keyword usage, **internal links to product pages**, `readTime`, `Article` JSON-LD.
4. **Claims/Brand Checker** — verify pricing ranges, Florida Building Code / NOA / OIR-form / insurance % claims, phone `954-625-5318`; the mechanical subset is enforced by `automation/blog/validate.mjs` in CI.
5. **Translator** — Spanish `postMeta` (title/excerpt/date) for the `es` block.
6. **Publisher** — insert into the generated-post data files, run `npm run validate:blog` and `npm run build`, then **open a PR** and email the owner the link.

Steps 1–6 all happen inside one scheduled Claude Code session; `docs/weekly-blog-post.md` is the editable process it follows.

One-time SEO add: `src/app/sitemap.ts`, `src/app/robots.ts`, RSS feed.

## Automation 2 — Weekly IG + Facebook post (GH Actions cron, e.g. Thu 10am ET)
Auto-created **and** auto-posted (after Meta setup). Agent pipeline → deterministic publish:
1. **Campaign Planner** — week's angle, often tied to the newest blog post; rotates product spotlight / testimonial / season.
2. **Copywriter** — platform-tuned captions: IG (local hashtags: #ImpactWindows #HurricaneProtection #SouthFlorida) + FB (conversational + link), each with CTA + phone/link.
3. **Designer** — this week's format per the rotation (branded card **or** real product photo + text band) and on-image copy.
4. **Render (code)** — HTML/SVG → PNG via headless Chromium; upload to a **public HTTPS URL** (Cloudflare R2/Images preferred; fallback = commit to `public/images/social/`). Instagram's API requires a public image URL.
5. **Brand Guardrail** — final check (claims, tone, typos, phone/link/image) + kill-switch.
6. **Publisher (code)** — Meta Graph API: IG create→publish (2-step), FB Page photo; retry w/ backoff; email owner on failure.

Limits: weekly volume is far under Meta's 25 IG posts/day.

## Phase 0 — Foundations (do first)
- Confirm real deploy path; fix/remove stale `deploy.yml`.
- Add `sitemap.ts`, `robots.ts`, RSS.
- Scaffold `automation/` toolkit: shared Claude client, brand/voice config, Meta + publish helpers, run-logging (reuse SendGrid to email `orlandot@gmail.com`), **kill-switch** + **dry-run mode** (generate artifact, don't post).

## Secrets (GitHub Actions)
`ANTHROPIC_API_KEY`, `META_SYSTEM_USER_TOKEN`, `IG_USER_ID`, `FB_PAGE_ID`, image-host creds (R2). SendGrid already configured.

## Build order
- **Phase 1 — Blog** first (low external risk). Ship behind PR review; prove quality over 2–3 posts.
- **Phase 2 — Social** after Meta checklist clears. Ship in **dry-run** (artifacts only), review a few weeks, then flip live posting on.

---

## Meta readiness checklist (owner — do before social posting)
1. Is your Instagram a **Professional** account (Business or Creator), not personal? (IG app → Settings → Account type)
2. Is that IG account **linked to a Facebook Page** you manage? (FB Page → Settings → Linked accounts / Instagram)
3. Do you have a **Meta Business Manager** (business.facebook.com) with the Page + IG under it?
4. Do you have (or can you create) a **Meta app** at developers.facebook.com with the Instagram Graph API product?
5. Can you generate a **System User token** in Business Manager with `pages_manage_posts`, `pages_read_engagement`, `instagram_basic`, `instagram_content_publish`? (This is the long-lived token the automation uses.)

Report yes/no on each — that tells us exactly what's missing and whether we ship FB-first or both at once.
