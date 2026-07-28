# Weekly blog post

A scheduled Claude Code task (a "routine") runs weekly — every **Tuesday
morning** — to research, write, and publish one SEO blog post for
orlandotgroupinc.com. Each run works in a fresh session and follows the process
below.

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

8. **Publish the run.** Commit the post and its meta together with a message
   naming the slug.
   - If the run can push to `main`, push there. Cloudflare Pages builds `main`
     through its own GitHub App, so the post is live a couple of minutes later.
   - If the run was given a `claude/...` branch, commit and push there instead,
     and end with the branch name plus a one-paragraph summary of the post so a
     human can open the PR from the run's session page with one click.
   - If the push is rejected, still end with that summary — the diff remains
     reviewable on the session page.

   Either way, end the run with the post title, its target keyword, and the URL
   it will live at.

9. **If nothing is worth publishing**, publish nothing and say why. A skipped
   week is a valid outcome and is far better than a thin post — the site is a
   licensed contractor's storefront, not a content farm.

## Adjusting or stopping the schedule

The schedule lives in a Claude Code routine (scheduled trigger), not in this
repository. Ask Claude Code to list, update, or delete the trigger, or manage it
from the Claude Code web UI. Deleting this file does not stop the schedule.

**Create the routine through the web form at
[claude.ai/code/routines](https://claude.ai/code/routines)** with this
repository selected under Repositories. Routines created that way can push
branches and open pull requests on their own. A trigger created programmatically
from inside a session gets no repository branch-push permission and no GitHub
tools, so it can write a post but cannot publish it — step 8 degrades to ending
with a reviewable summary.

Suggested routine prompt:

> Follow `docs/weekly-blog-post.md` in the otg-website repository to research,
> write, validate, and publish this week's SEO blog post.
