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

/** Slugs of every existing post: generated JSON + hand-authored in blogPosts.ts. */
export function existingBlogSlugs() {
  const generated = readJson(repoPath("src/lib/data/generated-posts.json"));
  const source = fs.readFileSync(repoPath("src/lib/data/blogPosts.ts"), "utf8");
  const handAuthored = [...source.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);
  return [...generated.map((p) => p.slug), ...handAuthored];
}

/** Titles of every existing post (for topic-overlap avoidance). */
export function existingBlogTitles() {
  const generated = readJson(repoPath("src/lib/data/generated-posts.json"));
  const source = fs.readFileSync(repoPath("src/lib/data/blogPosts.ts"), "utf8");
  const handAuthored = [...source.matchAll(/^\s{4}title: "([^"]+)"/gm)].map((m) => m[1]);
  return [...generated.map((p) => p.title), ...handAuthored];
}
