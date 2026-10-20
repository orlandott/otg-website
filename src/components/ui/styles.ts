// Shared class recipes. CTAs follow CLAUDE.md "Primary CTA Button" and work on links
// and buttons alike. min-h keeps the 44px touch target on phones.

export const primaryCta =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] bg-accent px-7 py-3.5 font-heading font-semibold text-[15px] uppercase tracking-[0.05em] text-white shadow-cta transition-all duration-150 hover:-translate-y-px hover:bg-accent-hover active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2";

/** Secondary action on navy / photo backgrounds. */
export const outlineOnDarkCta =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] border border-white/40 px-5 py-3 font-body font-medium text-[15px] text-white transition-colors duration-150 hover:border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

/** Micro label above headings and stats (CLAUDE.md "Micro/badge"); add a color. */
export const eyebrow = "font-body font-medium text-[11px] uppercase tracking-[0.08em]";

/** Secondary action on light backgrounds (CLAUDE.md "Secondary Button"). */
export const secondaryCta =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] border border-blue px-6 py-3 font-body font-medium text-sm text-blue transition-colors duration-150 hover:bg-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2";
