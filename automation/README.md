# Marketing Automation

Two weekly multi-agent pipelines, scheduled with GitHub Actions:

| Pipeline | Schedule | Workflow | Output |
|---|---|---|---|
| **Blog post** | Tuesdays 9am ET | `.github/workflows/weekly-blog.yml` | A PR you approve — merging publishes on the next deploy |
| **IG + FB post** | Thursdays 10am ET | `.github/workflows/weekly-social.yml` | Rendered image + captions (dry-run artifacts until Meta is wired) |

Both can be run on demand: GitHub → Actions → pick the workflow → *Run workflow* (check **mock** to test without spending API tokens).

## How the blog pipeline works

`automation/blog/generate.mjs` runs five Claude agents (model: `claude-opus-4-8`, structured outputs so every step returns schema-valid JSON):

1. **Topic Strategist** — picks this week's topic from `automation/topics.json` seeds + seasonality, avoiding overlap with every existing post.
2. **Writer** — drafts the full post in the site's exact section schema (900–1300 words).
3. **SEO Editor** — title ≤70 chars, 150–160-char meta excerpt, keyword placement, heading hierarchy, slug.
4. **Claims Checker** — audits Florida Building Code / NOA / insurance / pricing claims; its verdict + flags table goes in the PR body.
5. **Translator** — Spanish title/excerpt for the bilingual listing page.

The publisher then validates the post in code (slug uniqueness, section shapes, word count, computed read time), appends it to `src/lib/data/generated-posts.json` + `generated-post-meta.json`, verifies `npm run build` passes, and opens a PR. **Nothing publishes without your merge.**

> One-time GitHub setting: repo **Settings → Actions → General → Workflow permissions** — enable *"Allow GitHub Actions to create and approve pull requests"*.

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
{ "blog": { "enabled": true }, "social": { "enabled": true, "live": false } }
```

- Set `enabled: false` to pause a pipeline entirely.
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
