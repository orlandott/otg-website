# Weekly blog post

A scheduled Claude Code task (a "routine") runs weekly — every **Tuesday
morning** — to research and write one SEO blog post for orlandotgroupinc.com and
open it as a pull request. Each run works in a fresh session and follows the
process below.

**Nothing publishes itself.** The owner merges the PR, and merging is what puts
the post on the site. GitHub sends the notification email when the PR opens, so
this process sends no mail of its own.

This file is the canonical, editable description of that process. The routine
reads it at the start of every run, so changing this file changes what the
routine does — no need to touch the schedule itself.

**Nothing in this process needs an `ANTHROPIC_API_KEY`.** The writing happens
inside a Claude Code session on the account's own subscription; GitHub Actions
only runs the deterministic checks in `automation/blog/validate.mjs`. (The
separate social pipeline still uses an API key — that is unrelated to this
process.)

## Process

1. **Read the collection.** `src/lib/data/generated-posts.json` holds every
   automated post (newest first); `src/lib/data/blogPosts.ts` holds the
   hand-authored ones. Both render at `/blog/<slug>`, so a new post must not
   reuse a slug or re-cover a topic either list already handles.

2. **Pick the topic.** `automation/topics.json` is the seed backlog — adapt one
   or propose something better. Prioritize, in order:
   - **seasonality** — South Florida hurricane season runs June 1 – November 30;
     insurance renewals, permit cycles, and post-storm repair all have seasons;
   - **purchase intent** — "cost", "vs", "how to choose", "what to ask" beat
     general-interest topics;
   - **coverage gaps** against the existing posts.

   Update `automation/topics.json` when you use a seed or think of a new one, so
   the backlog stays useful.

3. **Write the post.** 900–1300 words in the exact `BlogPost` shape (see
   `src/lib/data/blogPosts.ts` for the `BlogSection` union). Requirements:
   - The **first** section is a `paragraph` — the lead. The **last** is a
     `callout` with the free in-home consultation and the phone number
     **(954) 625-5318**.
   - 5–8 `h2` sections, `list` sections where they genuinely help, `h3` only
     under an `h2`.
   - Work the target keyword into the title, the excerpt, and at least two
     headings or paragraphs — naturally, not stuffed.
   - `title` ≤ 70 characters. `excerpt` 150–160 characters, written as a meta
     description. `slug` 3–6 lowercase hyphenated words.
   - `readTime` is `Math.max(2, ceil(words / 200))` — the validator recomputes
     it and fails on a mismatch, so let it tell you the number.
   - Ground everything in South Florida specifics: Broward, Miami-Dade, Palm
     Beach, the Florida Building Code, Miami-Dade NOA product approvals.

4. **Stay inside the verified facts.** The only company claims available to you
   are the ones in `automation/lib/brand.mjs` (`BRAND.proofPoints`). Beyond
   those:
   - Never invent statistics, prices, or study citations. Cost figures must be
     broad typical ranges, clearly framed as estimates.
   - Never guarantee insurance savings — discounts "may" or "typically" apply.
   - Never write that a product is hurricane-, storm-, or impact-*proof*.
     Products are impact-**rated** and carry a Miami-Dade NOA.
   - No markdown, HTML, or links inside section text — plain sentences only.

   `automation/blog/validate.mjs` enforces the mechanical subset of this, but it
   is a backstop, not the standard. Read the post as a compliance reviewer for a
   licensed Florida contractor before you commit it.

5. **Add the Spanish listing meta.** Every post needs an `en` and an `es` entry
   in `src/lib/data/generated-post-meta.json` (`title`, `excerpt`, `date`). Use
   the neutral Latin American Spanish spoken in Miami and translate the
   marketing copy naturally, not literally. The `es` `date` is the Spanish month
   name (`Enero` … `Diciembre`) plus the year.

6. **Insert the post newest-first.** Prepend to `generated-posts.json` — the
   listing page, the sitemap, and the RSS feed all rely on that order, and the
   validator enforces it. Set `publishedAt` to the run date (`YYYY-MM-DD`) and
   `date` to the English month and year.

7. **Validate and build.**
   ```bash
   npm run validate:blog   # schema, slugs, word count, readTime, claims, meta
   npm run build           # proves the post renders and the site still builds
   ```
   Fix anything either one reports. Warnings (e.g. a word count slightly outside
   the target) are yours to judge; errors must be fixed.

8. **Open a pull request.** Nothing publishes itself — the owner merges. Commit
   the post and its meta together with a message naming the slug, on a branch
   named `claude/blog-<slug>`, and open a PR against `main`. The PR body should
   give the owner everything they need to approve without opening the diff:

   - the title, target keyword, category, word count, and read time;
   - why this topic this week;
   - the Spanish title and excerpt;
   - anything you were unsure about, especially any claim you softened or any
     figure you framed as an estimate.

   Merging is what publishes: Cloudflare Pages builds `main` through its own
   GitHub App, so the post goes live a couple of minutes after the merge.

   Opening the PR is also what notifies the owner — GitHub emails them. Send no
   mail yourself, and do not add a notification step. End the run with the post
   title, its target keyword, and the PR URL, so the link is on the run page too
   if the mail is ever missed.

9. **If nothing is worth publishing**, publish nothing and say why. A skipped
   week is a valid outcome and is far better than a thin post — the site is a
   licensed contractor's storefront, not a content farm. Do not open an empty
   PR; just end with what you considered and why none of it cleared the bar.

## Adjusting or stopping the schedule

The schedule lives in a Claude Code routine (scheduled trigger), not in this
repository. Manage it at
[claude.ai/code/routines](https://claude.ai/code/routines), or with `/schedule`
in the CLI. Deleting this file does not stop the schedule.

Because the routine only ever opens a PR, it needs no special branch
permissions: routines can push `claude/`-prefixed branches by default, and
**Allow unrestricted branch pushes** should stay **off**. It needs no secrets
and no environment variables either.

### Making sure the weekly email actually arrives

A routine acts under the owner's own GitHub identity, so the PR it opens is
authored by them — and GitHub does **not** email you about your own activity by
default. Enable **Settings → Notifications → "Include your own updates"** on the
account that owns the routine. Without it the PR still opens and still shows on
the run page; only the email is missing.

Suggested routine prompt:

> Follow `docs/weekly-blog-post.md` in the otg-website repository to research,
> write, and validate this week's SEO blog post, then open a pull request. Do
> not publish it and do not send email — opening the PR is what notifies me.
