import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  ".."
);

export function repoPath(...segments) {
  return path.join(REPO_ROOT, ...segments);
}

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

export function writeText(filePath, text) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, text, "utf8");
}

/**
 * Every existing post's slugs and titles (generated JSON + hand-authored in
 * blogPosts.ts), plus the newest post — read and parsed once per call.
 */
export function existingBlogPosts() {
  const generated = readJson(repoPath("src/lib/data/generated-posts.json"));
  const source = fs.readFileSync(repoPath("src/lib/data/blogPosts.ts"), "utf8");
  const extract = (field) =>
    [...source.matchAll(new RegExp(`^\\s*${field}: "([^"]+)"`, "gm"))].map((m) => m[1]);
  const handSlugs = extract("slug");
  const handTitles = extract("title");
  const latest = generated[0]
    ? { slug: generated[0].slug, title: generated[0].title, excerpt: generated[0].excerpt }
    : { slug: handSlugs[0] ?? "", title: handTitles[0] ?? "", excerpt: "" };
  return {
    slugs: [...generated.map((p) => p.slug), ...handSlugs],
    titles: [...generated.map((p) => p.title), ...handTitles],
    latest,
  };
}
