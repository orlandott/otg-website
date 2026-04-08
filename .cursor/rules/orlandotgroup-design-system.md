# OrlandoTGroup — Design System

> Design tokens, typography rules, and component guidelines for Orlando T Group Inc.
> Platform: Next.js 14 (static export) · Tailwind CSS · Framer Motion

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Company | Orlando T Group Inc. |
| Industry | Hurricane Protection · Home Improvement |
| Tone | Trustworthy · Professional · Urgent · South Florida |
| Platform | Next.js 14 (Cloudflare Pages) |

---

## 2. Color Palette

> **All colors come from the theme-selector skill.**
> Source: `.claude/skills/theme-selector/SKILL.md`
> The Tailwind config (`tailwind.config.ts`) and CSS variables (`src/app/globals.css`) are kept in sync with that skill.

### Tailwind Token Reference

| Token | Role |
|---|---|
| `navy` | Header, footer, dark section backgrounds |
| `blue` | Primary interactive — links, borders, focus rings |
| `sky` | Secondary accents, hover states, icons |
| `accent` | Primary CTAs — logo green (buttons, key actions) |
| `accent-hover` | CTA hover state (darker green) |
| `surface` | Section backgrounds, form backgrounds |
| `charcoal` | Primary body text |
| `muted` | Secondary / caption text |
| `border` | Dividers, card borders, input borders |
| `green` | Trust indicators — checkmarks, benefit lists |

**Rules:**
- Never hardcode hex values in components — always use Tailwind tokens above
- `accent` is reserved for the single highest-priority CTA per page
- `green` matches the CTA green (`#2E7D52`); use `accent` for buttons and `green` for inline trust marks (checkmarks, etc.)
- Load the theme-selector skill before making any new color decisions

---

## 3. Typography

### Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap');

:root {
  --font-display: 'Barlow Condensed', sans-serif; /* All headings */
  --font-body:    'Barlow', sans-serif;            /* Body, labels, nav */
}
```

### Type Scale

```css
:root {
  --text-hero:    clamp(40px, 6vw, 64px);
  --text-h1:      clamp(32px, 4vw, 48px);
  --text-h2:      28px;
  --text-h3:      20px;
  --text-h4:      17px;
  --text-body:    15px;
  --text-small:   13px;
  --text-micro:   11px;
}
```

### Type Rules

- Uppercase only on `h1` / `h2` and CTA button labels
- Sentence case for everything below `h2`
- Never `font-weight: 800+`
- Never `letter-spacing > 0.08em` on body text
- Never add drop shadows to text

---

## 4. Spacing System

Base unit: 4px. Always use multiples: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

---

## 5. Border Radius

```css
:root {
  --radius-sm:   4px;   /* Badges, tags, inputs */
  --radius-md:   8px;   /* Buttons, small cards */
  --radius-lg:   12px;  /* Product cards */
  --radius-xl:   20px;  /* Hero sections, large containers */
  --radius-pill: 999px; /* Pills, toggle switches */
}
```

---

## 6. Shadows

Shadow values live in `src/app/globals.css` as `--shadow-sm/md/lg/card/cta`.
The `--shadow-cta` glow color matches the `accent` token from the theme-selector skill.

---

## 7. Component Patterns

### Primary CTA Button

```tsx
<button className="bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm uppercase tracking-[0.05em] rounded-[8px] px-7 py-3.5 shadow-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150">
  Get a Free Consultation
</button>
```

### Secondary Button

```tsx
<button className="text-blue border border-blue hover:bg-blue hover:text-white font-body font-medium text-sm rounded-[8px] px-6 py-3 transition-colors duration-150">
  Learn More
</button>
```

### Product Card

```tsx
<div className="bg-white border border-border rounded-[12px] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
```

### Form Input

```tsx
<input className="w-full rounded-[4px] border border-border px-4 py-3 text-[15px] font-body text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow" />
```

### Section Wrapper

```tsx
<section className="py-12 md:py-20 lg:py-24">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">{/* content */}</div>
</section>
```

---

## 8. Layout Grid

```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* Product grid */
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }

@media (max-width: 640px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
```

---

## 9. Do / Don't Rules

### ✅ Do
- Use `navy` token for all header/footer backgrounds
- Use `accent` **only** for the single most important CTA per page
- Use `green` for benefit checkmarks and trust indicators
- Use `Barlow Condensed` for headings, `Barlow` for body copy
- Load the theme-selector skill before making any new color decisions

### ❌ Don't
- Don't hardcode hex colors in components — use Tailwind tokens
- Don't use ALL-CAPS on product names, card titles, or body text
- Don't use `font-weight: 800` or heavier
- Don't use `accent` on borders, backgrounds, or decorative elements
- Don't mix more than 2 color shades in any single section

---

## 10. Cursor AI Prompt Template

```
Use the OrlandoTGroup design system (orlandotgroup-design-system.md).
For colors, load the theme-selector skill at .claude/skills/theme-selector/SKILL.md.
Fonts: Barlow Condensed (headings) + Barlow (body) from Google Fonts.
Tailwind color tokens: navy, blue, sky, accent, surface, charcoal, muted, border, green.
Typography rules: Uppercase only on h1/h2. Sentence case everywhere else.
Spacing: 4px base unit, multiples of 4.
Build: [YOUR COMPONENT HERE]
```

---

*Last updated: March 2026 — colors delegated to `.claude/skills/theme-selector/SKILL.md`*
