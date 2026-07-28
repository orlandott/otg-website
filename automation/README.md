# Marketing Automation

Two weekly multi-agent pipelines, scheduled with GitHub Actions:

| Pipeline | Schedule | Workflow | Output |
|---|---|---|---|
| **Blog post** | Tuesdays 9am ET | `.github/workflows/weekly-blog.yml` | Publishes itself to `main` — you get an email once it's live |
| **IG + FB post** | Thursdays 10am ET | `.github/workflows/weekly-social.yml` | Rendered image + captions (dry-run artifacts until Meta is wired) |

Both can be run on demand: GitHub → Actions → pick the workflow → *Run workflow* (check **mock** to test without spending API tokens).

## How the blog pipeline works

`automation/blog/generate.mjs` runs five Claude agents (model: `claude-opus-5`, structured outputs so every step returns schema-valid JSON):

1. **Topic Strategist** — picks this week's topic from `automation/topics.json` seeds + seasonality, avoiding overlap with every existing post.
2. **Writer** — drafts the full post in the site's exact section schema (900–1300 words).
3. **SEO Editor** — title ≤70 chars, 150–160-char meta excerpt, keyword placement, heading hierarchy, slug.
4. **Claims Checker** — audits Florida Building Code / NOA / insurance / pricing claims; its verdict decides whether the post can publish unattended.
5. **Translator** — Spanish title/excerpt for the bilingual listing page.

The publisher then validates the post in code (slug uniqueness, section shapes, word count, computed read time), appends it to `src/lib/data/generated-posts.json` + `generated-post-meta.json`, and verifies `npm run build` passes.

### What actually publishes it

Cloudflare Pages builds `main` through its own GitHub App, so **landing the commit on `main` is what puts the post on the site** — usually live a couple of minutes later. No merge, no manual step.

Each run ends one of two ways:

| Outcome | When | What you get |
|---|---|---|
| **Published** | Claims verdict is `approved` or `approved_with_notes`, with no `blocker` flags | Commit pushed to `main`; email with the post, its claims table, and the live URL |
| **Held for review** | Any `blocker` flag (verdict `needs_review`), `blog.autoPublish: false`, or a `--mock` run | A PR instead of a push, plus an email — nothing goes live until you merge |

Two things never reach `main` on their own: a post the Claims Checker judged unpublishable, and a mock run. Lower-severity `warning`/`info` flags **do** publish — they are "verify this" notes rather than stop signs, and holding every one of them would mean nothing ever ships unattended. They're listed in full in the email so you can correct a live post if one reads wrong.

If a run fails *after* the post was written (e.g. the push is rejected), you get a separate failure email and nothing is published.

> One-time GitHub settings: repo **Settings → Actions → General → Workflow permissions** — enable *"Allow GitHub Actions to create and approve pull requests"* (for the review path). If `main` has a branch-protection rule, allow `github-actions[bot]` to push to it, or the publish step cannot land the commit.

## How the social pipeline works

`automation/social/generate.mjs` runs four agents:

1. **Campaign Planner** — picks the week's angle (safety tip / product spotlight / seasonal / financing / blog promo / trust), avoiding the last 8 themes.
2. **Copywriter** — IG caption + hashtags, FB caption, on-image text.
3. **Designer** — finalizes on-image copy; picks the product photo when it's a photo week.
4. **Brand Guardrail** — final claims/tone/typo check; can correct captions or block the post.

The image is rendered from `automation/social/templates/{card,photo}.html` (1080×1080, brand palette) via headless Chromium. Formats **rotate weekly**: branded card ⇄ real product photo.

**Publishing is gated twice:** `automation/config.json` → `social.live` must be `true`, AND the Meta secrets must exist. Until both are true every run is a dry-run — the image + captions are uploaded as workflow artifacts for you to review (and post manually if you like).

## Kill switches

`automation/config.json`:

```json
{ "blog": { "enabled": true, "autoPublish": true }, "social": { "enabled": true, "live": false } }
```

- Set `enabled: false` to pause a pipeline entirely.
- Set `blog.autoPublish: false` to keep writing a post every week but go back to opening a PR for each one instead of publishing it.
- Set `social.live: true` (plus secrets below) to switch social from dry-run to auto-posting.

Failures email `orlandot@gmail.com` via SendGrid.

## Secrets (GitHub → Settings → Secrets and variables → Actions)

| Secret | Needed for | Where to get it |
|---|---|---|
| `ANTHROPIC_API_KEY` | both pipelines | console.anthropic.com |
| `SENDGRID_API_KEY` | failure emails | already used by the site's contact form |
| `META_SYSTEM_USER_TOKEN` | live FB/IG posting | Business Manager → System User (see checklist) |
| `FB_PAGE_ID` | live FB posting | Page → About, or Graph Explorer `me/accounts` |
| `IG_USER_ID` | live IG posting | Graph API: `{page-id}?fields=instagram_business_account` |
| `CF_ACCOUNT_ID` / `CF_IMAGES_TOKEN` | IG image hosting | Cloudflare dashboard → Images (IG's API requires a public image URL; FB uploads directly) |

## Meta readiness checklist (do before flipping `social.live`)

1. Instagram account is a **Professional** account (IG app → Settings → Account type).
2. That IG account is **linked to the Facebook Page** (Page Settings → Linked accounts).
3. You have a **Meta Business Manager** (business.facebook.com) containing the Page + IG.
4. Create a **Meta app** (developers.facebook.com) with the Instagram Graph API product.
5. In Business Manager, create a **System User**, assign it the Page + IG asset, and generate a token with scopes: `pages_manage_posts`, `pages_read_engagement`, `instagram_basic`, `instagram_content_publish`.
6. Add the secrets above, set `social.live: true`, and run the workflow manually once to verify.

**FB-only shortcut:** steps 3–5 with just the Page asset → set `META_SYSTEM_USER_TOKEN` + `FB_PAGE_ID` and leave `IG_USER_ID` unset. The pipeline posts to Facebook and skips Instagram.

## Local testing

```bash
node automation/blog/generate.mjs --mock      # full publisher path, no API calls
node automation/blog/generate.mjs --dry-run   # real agents, writes out/ only
node automation/social/generate.mjs --mock    # renders a real PNG from the fixture
```

Mock blog runs write a `mock-*` post into the data files — discard with `git checkout -- src/lib/data automation/state.json` afterwards. Run artifacts land in `automation/out/` (gitignored).
