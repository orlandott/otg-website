export const PLAN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["theme", "angle", "postType", "tieToBlog"],
  properties: {
    theme: { type: "string", description: "One-line theme for this week's post" },
    angle: { type: "string", description: "The specific hook/angle" },
    postType: {
      type: "string",
      enum: ["safety-tip", "product-spotlight", "seasonal", "financing", "blog-promo", "trust"],
    },
    productSlug: {
      type: "string",
      description: "Product slug if the post spotlights one product",
    },
    tieToBlog: {
      type: "boolean",
      description: "True when the post promotes the latest blog article",
    },
  },
};

export const COPY_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["igCaption", "fbCaption", "hashtags", "onImageHeadline", "onImageSubline", "badge", "cta"],
  properties: {
    igCaption: {
      type: "string",
      description: "Instagram caption, 2-4 short paragraphs, emoji-friendly, no hashtags (added separately)",
    },
    fbCaption: {
      type: "string",
      description: "Facebook caption, conversational, includes the website link",
    },
    hashtags: {
      type: "array",
      items: { type: "string" },
      description: "8-14 hashtags including brand set, each starting with #",
    },
    onImageHeadline: { type: "string", description: "On-image headline, max 40 characters" },
    onImageSubline: { type: "string", description: "On-image supporting line, max 90 characters" },
    badge: { type: "string", description: "Short badge/eyebrow text, max 22 characters" },
    cta: { type: "string", description: "CTA chip label, max 24 characters" },
  },
};

export const DESIGN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["headline", "subline", "badge", "cta"],
  properties: {
    photo: {
      type: "string",
      description: "Filename of the product photo to use (photo format only, from the provided list)",
    },
    headline: { type: "string", description: "Final on-image headline, max 40 chars, punchy" },
    subline: { type: "string", description: "Final on-image subline, max 90 chars" },
    badge: { type: "string", description: "Final badge text, max 22 chars, uppercase-friendly" },
    cta: { type: "string", description: "Final CTA label, max 24 chars" },
  },
};

export const GUARDRAIL_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["approved", "issues", "igCaptionFinal", "fbCaptionFinal"],
  properties: {
    approved: {
      type: "boolean",
      description: "False only when the post must not go out even after your corrections",
    },
    issues: {
      type: "array",
      items: { type: "string" },
      description: "Problems found (empty when clean)",
    },
    igCaptionFinal: { type: "string", description: "Final IG caption (corrected or unchanged)" },
    fbCaptionFinal: { type: "string", description: "Final FB caption (corrected or unchanged)" },
  },
};
