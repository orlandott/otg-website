/**
 * Deterministic validation for the blog collection. No API calls, no secrets —
 * this is the CI half of the weekly blog process (see docs/weekly-blog-post.md).
 *
 * The weekly post is written by a scheduled Claude Code routine, which commits
 * the post as data. This script is what proves the committed data is well
 * formed and free of the claims a licensed Florida contractor must not make.
 *
 * Usage: node automation/blog/validate.mjs
 */
import fs from "node:fs";
import { repoPath, readJson, existingBlogPosts } from "../lib/files.mjs";
import { BRAND, BLOG_CATEGORIES, MONTHS_EN, MONTHS_ES } from "../lib/brand.mjs";

const SECTION_TYPES = ["paragraph", "h2", "h3", "list", "callout"];
const TEXT_SECTIONS = ["paragraph", "h2", "h3", "callout"];

/**
 * Claims a licensed contractor must not publish. Deliberately narrow: each
 * pattern is something that is wrong (or legally risky) in every context, not
 * merely worth a second look.
 */
const BANNED_CLAIMS = [
  { pattern: /\bguarantee(s|d)?\b\s+(you\s+)?(a\s+)?\d+\s*%/i, why: "guarantees a specific percentage" },
  { pattern: /\bguarantee(s|d)?\s+(your\s+)?insurance\s+(discount|savings)/i, why: "guarantees an insurance discount" },
  { pattern: /\b(will|guaranteed to)\s+lower\s+your\s+premium\b/i, why: "promises a premium reduction" },
  { pattern: /\b(hurricane|storm|impact)[- ]proof\b/i, why: "'-proof' overstates any rated product (use 'impact-rated')" },
  { pattern: /\bfree\s+(installation|windows|doors)\b/i, why: "advertises a free product or install" },
  { pattern: /\bcheapest\s+in\s+(south\s+)?florida\b/i, why: "unverifiable superlative pricing claim" },
];

const wordCount = (sections) =>
  sections
    .flatMap((s) => [s.text ?? "", ...(s.items ?? [])])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

const sectionText = (post) =>
  post.sections.flatMap((s) => [s.text ?? "", ...(s.items ?? [])]).join("\n");

function validateShape(post, index, errors) {
  const at = (msg) => errors.push(`post[${index}] (${post.slug ?? "no slug"}): ${msg}`);

  if (!/^[a-z0-9]+(-[a-z0-9]+){1,7}$/.test(post.slug ?? "")) {
    at(`slug "${post.slug}" is not 2–8 lowercase hyphenated words`);
  }
  if (!BLOG_CATEGORIES.includes(post.category)) {
    at(`category "${post.category}" is not one of: ${BLOG_CATEGORIES.join(", ")}`);
  }
  if (!post.title?.trim()) at("missing title");
  if (post.title && post.title.length > 70) {
    at(`title is ${post.title.length} chars (max 70)`);
  }
  if (!post.excerpt?.trim()) at("missing excerpt");
  if (post.excerpt && (post.excerpt.length < 120 || post.excerpt.length > 175)) {
    at(`excerpt is ${post.excerpt.length} chars (target 150–160, hard range 120–175)`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt ?? "")) {
    at(`publishedAt "${post.publishedAt}" is not YYYY-MM-DD`);
  } else if (Number.isNaN(Date.parse(post.publishedAt))) {
    at(`publishedAt "${post.publishedAt}" is not a real date`);
  }
  if (!MONTHS_EN.some((m) => post.date?.startsWith(m))) {
    at(`date "${post.date}" should read like "March 2026"`);
  }

  if (!Array.isArray(post.sections) || !post.sections.length) {
    at("has no sections");
    return;
  }
  if (post.sections[0].type !== "paragraph") at("first section must be a lead paragraph");
  if (post.sections.at(-1).type !== "callout") at("last section must be a CTA callout");

  for (const [i, s] of post.sections.entries()) {
    if (!SECTION_TYPES.includes(s.type)) {
      at(`section[${i}] has unknown type "${s.type}"`);
      continue;
    }
    if (TEXT_SECTIONS.includes(s.type) && !s.text?.trim()) {
      at(`section[${i}] (${s.type}) is missing text`);
    }
    if (s.type === "list" && !s.items?.length) {
      at(`section[${i}] is a list with no items`);
    }
  }

  // Heading hierarchy must not skip from the lead straight to an h3.
  const firstHeading = post.sections.find((s) => s.type === "h2" || s.type === "h3");
  if (firstHeading?.type === "h3") at("heading hierarchy starts at h3 (needs an h2 first)");
}

function validateLength(post, index, config, errors, warnings) {
  if (!Array.isArray(post.sections)) return;
  const { minWords, maxWords } = config.blog;
  const words = wordCount(post.sections);
  const label = `post[${index}] (${post.slug})`;

  if (words < Math.round(minWords * (2 / 3))) {
    errors.push(`${label}: far too short at ${words} words (min ${minWords})`);
  } else if (words < minWords || words > maxWords) {
    warnings.push(`${label}: ${words} words, outside the ${minWords}–${maxWords} target`);
  }

  const expected = `${Math.max(2, Math.ceil(words / 200))} min read`;
  if (post.readTime !== expected) {
    errors.push(`${label}: readTime is "${post.readTime}", expected "${expected}" for ${words} words`);
  }
}

function validateClaims(post, index, errors) {
  const body = `${post.title}\n${post.excerpt}\n${sectionText(post)}`;

  for (const { pattern, why } of BANNED_CLAIMS) {
    const hit = body.match(pattern);
    if (hit) {
      errors.push(`post[${index}] (${post.slug}): ${why} — "${hit[0].trim()}"`);
    }
  }

  // Any phone number in the copy must be the real one.
  for (const phone of body.match(/\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/g) ?? []) {
    const digits = phone.replace(/\D/g, "");
    if (digits !== BRAND.phone.replace(/\D/g, "")) {
      errors.push(`post[${index}] (${post.slug}): phone "${phone}" is not ${BRAND.phone}`);
    }
  }
}

function validateMeta(posts, meta, errors) {
  for (const post of posts) {
    for (const lang of ["en", "es"]) {
      const entry = meta[lang]?.[post.slug];
      if (!entry) {
        errors.push(`generated-post-meta.json: missing ${lang} entry for "${post.slug}"`);
        continue;
      }
      for (const field of ["title", "excerpt", "date"]) {
        if (!entry[field]?.trim()) {
          errors.push(`generated-post-meta.json: ${lang}."${post.slug}".${field} is empty`);
        }
      }
    }
    const es = meta.es?.[post.slug];
    if (es?.date && !MONTHS_ES.some((m) => es.date.startsWith(m))) {
      errors.push(`generated-post-meta.json: es."${post.slug}".date "${es.date}" is not a Spanish month`);
    }
  }
}

function main() {
  const config = readJson(repoPath("automation/config.json"));
  const posts = readJson(repoPath("src/lib/data/generated-posts.json"));
  const meta = readJson(repoPath("src/lib/data/generated-post-meta.json"));

  if (!Array.isArray(posts)) {
    console.error("✗ generated-posts.json must be an array");
    process.exit(1);
  }

  const errors = [];
  const warnings = [];

  // Slugs must be unique across generated *and* hand-authored posts, since both
  // render at /blog/<slug> and generateStaticParams would collide.
  const handSlugs = existingBlogPosts().slugs.filter(
    (slug) => !posts.some((p) => p.slug === slug)
  );
  const seen = new Map();
  for (const [i, post] of posts.entries()) {
    if (seen.has(post.slug)) {
      errors.push(`post[${i}]: duplicate slug "${post.slug}" (also post[${seen.get(post.slug)}])`);
    }
    seen.set(post.slug, i);
    if (handSlugs.includes(post.slug)) {
      errors.push(`post[${i}]: slug "${post.slug}" collides with a hand-authored post`);
    }

    validateShape(post, i, errors);
    validateLength(post, i, config, errors, warnings);
    validateClaims(post, i, errors);
  }

  validateMeta(posts, meta, errors);

  // Newest first — the listing page and RSS feed both rely on this order.
  const dates = posts.map((p) => p.publishedAt).filter(Boolean);
  for (let i = 1; i < dates.length; i += 1) {
    if (dates[i] > dates[i - 1]) {
      errors.push(
        `generated-posts.json: post[${i}] (${dates[i]}) is newer than post[${i - 1}] (${dates[i - 1]}) — newest must come first`
      );
      break;
    }
  }

  for (const w of warnings) console.warn(`  warning: ${w}`);

  if (errors.length) {
    console.error(`\n✗ Blog validation failed (${errors.length}):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log(
    `✓ ${posts.length} generated post(s) valid` +
      (warnings.length ? ` (${warnings.length} warning(s))` : "")
  );
}

main();
