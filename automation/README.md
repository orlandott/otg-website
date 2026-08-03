# Marketing Automation

Two weekly automations, driven two different ways:

| Pipeline | Schedule | Driven by | Output | Needs an API key? |
|---|---|---|---|---|
| **Blog post** | Tuesdays 9am ET | A **Claude Code routine** — see [`docs/weekly-blog-post.md`](../docs/weekly-blog-post.md) | A PR you merge (GitHub emails you) | **No** |
| **IG + FB post** | Thursdays 10am ET | GitHub Actions (`.github/workflows/weekly-social.yml`) | Image + captions (dry-run until Meta is wired) | Yes — `ANTHROPIC_API_KEY` |

## How the blog pipeline works

The weekly post is written by a **scheduled Claude Code session**, not by a
GitHub Action calling the Anthropic API. That session runs on the account's own
Claude subscription, so **the blog path needs no `ANTHROPIC_API_KEY`**.

The process the routine follows lives in
[`docs/weekly-blog-post.md`](../docs/weekly-blog-post.md) — pick a topic from
`automation/topics.json` and the seasonal calendar, write the post in the site's
`BlogPost` shape, add the Spanish listing meta, validate, build, and open a PR.
That file is the canonical description: **edit it to change what the routine
does**, without touching the schedule.

Create or change the schedule at
[claude.ai/code/routines](https://claude.ai/code/routines) with this repository
selected under Repositories.

### What actually publishes it

Each run opens a PR on a `claude/blog-<slug>` branch, and GitHub emails you the
link. **Nothing goes live until you merge.** Cloudflare Pages builds `main`
through its own GitHub App, so the post appears a couple of minutes after the
merge.

Two consequences worth knowing:

- The routine needs **no** special branch permission — `claude/`-prefixed pushes
  are allowed by default, so leave *Allow unrestricted branch pushes* **off**.
  It needs no secrets or environment variables either.
- A routine acts under **your** GitHub identity, so the PR is authored by you —
  and GitHub does not email you about your own activity by default. Turn on
  **Settings → Notifications → "Include your own updates"**, or the PR opens
  silently and the link only appears on the run page.

### What CI checks

`npm run validate:blog` (`automation/blog/validate.mjs`) runs on every push and
PR. It is deterministic and uses no secrets:

- slug format, uniqueness, and collisions with hand-authored posts
- section shapes, lead paragraph, closing CTA callout, heading hierarchy
- title ≤ 70 chars, excerpt 120–175 chars, word count against `automation/config.json`
- `readTime` recomputed from the actual word count
- `publishedAt` / `date` formats, and newest-first ordering
- an `en` **and** `es` entry in `generated-post-meta.json` for every post
- banned claims — guaranteed discounts or percentages, "hurricane-proof",
  free installs, unverifiable superlatives — and any phone number that isn't
  (954) 625-5318

The claim checks are a backstop, not the standard; the judgement lives in
`docs/weekly-blog-post.md` step 4.

> A branch-protection rule on `main` does not affect the routine — it only ever
> pushes a `claude/`-prefixed branch and opens a PR against `main`.

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
{ "blog": { "minWords": 900, "maxWords": 1300 }, "social": { "enabled": true, "live": false } }
```

- **Blog:** the schedule is a Claude Code routine, so pause or stop it at
  [claude.ai/code/routines](https://claude.ai/code/routines) (or ask Claude Code
  to delete the trigger) — there is no in-repo switch. `minWords`/`maxWords` are
  the word-count band the validator enforces.
- **Social:** set `enabled: false` to pause the pipeline entirely, or
  `social.live: true` (plus the secrets below) to switch it from dry-run to
  auto-posting.

The social pipeline emails `orlandot@gmail.com` via SendGrid on failure. The
blog routine sends no mail of its own: GitHub notifies you when its PR opens,
and a run that fails before opening one surfaces on its run page in the Claude
Code UI.

## Secrets (GitHub → Settings → Secrets and variables → Actions)

| Secret | Needed for | Where to get it |
|---|---|---|
| `ANTHROPIC_API_KEY` | the **social** pipeline only — the blog needs no key | console.anthropic.com |
| `SENDGRID_API_KEY` | social failure emails (the blog routine needs no secrets) | already used by the site's contact form |
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
npm run validate:blog                         # check every committed post (no API calls)
node automation/social/generate.mjs --mock    # renders a real PNG from the fixture
```

To rehearse the blog routine, just follow `docs/weekly-blog-post.md` yourself in
a Claude Code session — that is exactly what the schedule does. Social run
artifacts land in `automation/out/` (gitignored).
