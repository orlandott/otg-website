import { BLOG_CATEGORIES } from "../lib/brand.mjs";

export const TOPIC_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["topic", "targetKeyword", "category", "angle", "rationale"],
  properties: {
    topic: { type: "string", description: "The chosen blog topic" },
    targetKeyword: { type: "string", description: "Primary SEO keyword phrase" },
    category: { type: "string", enum: BLOG_CATEGORIES },
    angle: { type: "string", description: "The specific angle/structure for this post" },
    rationale: { type: "string", description: "Why this topic now (seasonality, gaps)" },
  },
};

const SECTION_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: { type: "string", enum: ["paragraph", "h2", "h3", "list", "callout"] },
    text: { type: "string", description: "Text for paragraph/h2/h3/callout sections" },
    items: {
      type: "array",
      items: { type: "string" },
      description: "Bullet items for list sections",
    },
  },
};

export const POST_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["slug", "category", "title", "excerpt", "sections"],
  properties: {
    slug: {
      type: "string",
      description: "URL slug: lowercase words separated by hyphens, 3-6 words",
    },
    category: { type: "string", enum: BLOG_CATEGORIES },
    title: { type: "string", description: "Post title, max ~70 characters" },
    excerpt: {
      type: "string",
      description: "Meta description, 150-160 characters, includes the target keyword",
    },
    sections: { type: "array", items: SECTION_SCHEMA },
  },
};

export const CLAIMS_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["verdict", "flags"],
  properties: {
    verdict: {
      type: "string",
      enum: ["approved", "approved_with_notes", "needs_review"],
    },
    flags: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["severity", "claim", "issue"],
        properties: {
          severity: { type: "string", enum: ["info", "warning", "blocker"] },
          claim: { type: "string", description: "The exact claim in question" },
          issue: { type: "string", description: "What is wrong or unverifiable" },
          suggestion: { type: "string", description: "How to fix it" },
        },
      },
    },
  },
};

export const TRANSLATION_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["title", "excerpt"],
  properties: {
    title: { type: "string", description: "Spanish title" },
    excerpt: { type: "string", description: "Spanish excerpt, 150-160 characters" },
  },
};
