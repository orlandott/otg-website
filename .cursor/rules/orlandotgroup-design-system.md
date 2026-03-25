# OrlandoTGroup — Design System

> Design tokens, typography rules, and component guidelines extracted and refined from `orlandotgroupinc.com`.  
> Drop this file into your Cursor project root and reference it in any AI prompt.

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Company | Orlando T Group Inc. |
| Industry | Hurricane Protection · Home Improvement |
| Tone | Trustworthy · Professional · Urgent · South Florida |
| Platform | Wix (migrating) |

---

## 2. Color Palette

### Primary Colors

```css
:root {
  --color-navy:       #002855; /* Brand anchor — logo, headers, footers */
  --color-blue:       #1565C0; /* Primary interactive — links, borders */
  --color-sky:        #1E88E5; /* Secondary interactive — hover states, icons */
}
```

### Neutral Colors

```css
:root {
  --color-white:      #FFFFFF;
  --color-surface:    #F5F5F5; /* Page background, card surfaces */
  --color-charcoal:   #333333; /* Primary body text */
  --color-gray:       #757575; /* Secondary / muted text */
  --color-border:     #E0E0E0; /* Dividers, card borders */
}
```

### Accent (CTA) — NEW ✦

```css
:root {
  --color-accent:     #F59E0B; /* ONLY used on primary CTAs — "Get a Free Consultation" */
  --color-accent-hover: #D97706;
}
```

> **Rule:** `--color-accent` must never be used for decorative purposes.  
> It is reserved exclusively for the primary call-to-action button.

### Semantic Colors

```css
:root {
  --color-success:    #2E7D32;
  --color-warning:    #F59E0B;
  --color-danger:     #C62828;
}
```

---

## 3. Typography

### Font Stack

```css
/* Display / Headings */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap');

:root {
  --font-display: 'Barlow Condensed', sans-serif; /* All headings */
  --font-body:    'Barlow', sans-serif;            /* Body, labels, nav */
}
```

> **Why Barlow?** It's a South Florida–adjacent workhorse — condensed for impact, wide enough for readability. Bold compressed headings echo the "strength" of hurricane protection without being cliché. It's a significant upgrade over Wix's default sans.

### Type Scale

```css
:root {
  --text-hero:    clamp(40px, 6vw, 64px); /* Hero headline */
  --text-h1:      clamp(32px, 4vw, 48px); /* Page-level section title */
  --text-h2:      28px;                   /* Section heading */
  --text-h3:      20px;                   /* Card / subsection heading */
  --text-h4:      17px;                   /* Small headings, product names */
  --text-body:    15px;                   /* Default body copy */
  --text-small:   13px;                   /* Captions, labels, meta */
  --text-micro:   11px;                   /* Tags, badges, footnotes */
}
```

### Type Rules

```css
/* Section headings */
h1, h2 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.01em;
  text-transform: uppercase;  /* ONLY at h1/h2 level */
  color: var(--color-navy);
  line-height: 1.1;
}

/* Card headings */
h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  text-transform: none;        /* Sentence case below h2 */
  color: var(--color-navy);
  line-height: 1.2;
}

/* Body */
p, li, td {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-body);
  color: var(--color-charcoal);
  line-height: 1.65;
}

/* Muted / secondary */
.text-muted {
  color: var(--color-gray);
  font-size: var(--text-small);
}

/* BANNED: Never use all-caps below h2 level */
/* BANNED: Never use font-weight: 800+ (too heavy) */
/* BANNED: Never use letter-spacing > 0.08em on body text */
```

### Typography — Before vs After

| Element | Before (Wix default) | After (this system) |
|---|---|---|
| Section title | ALL CAPS + bold + same size as card title | `Barlow Condensed 700` uppercase, 32–48px, navy |
| Product name | ALL CAPS small, same weight as section | `Barlow Condensed 600` 20px, sentence case |
| Body copy | Generic sans, 14px | `Barlow 400` 15px, charcoal, 1.65 line height |
| CTA button | Blue, same style as nav links | Amber bg, white text, Barlow 600, uppercase |
| Nav links | Helvetica fallback | `Barlow 500` 14px, sky blue on hover |

---

## 4. Spacing System

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   24px;
  --space-6:   32px;
  --space-7:   48px;
  --space-8:   64px;
  --space-9:   96px;
  --space-10: 128px;
}
```

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

```css
:root {
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg:  0 8px 24px rgba(0,0,0,0.12);
  --shadow-cta: 0 4px 16px rgba(245,158,11,0.30); /* Amber glow for CTA */
}
```

---

## 7. Component Patterns

### Primary CTA Button

```css
.btn-primary {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  background-color: var(--color-accent);
  border: none;
  border-radius: var(--radius-md);
  padding: 14px 28px;
  cursor: pointer;
  box-shadow: var(--shadow-cta);
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.btn-primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}
```

### Secondary Button

```css
.btn-secondary {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  color: var(--color-blue);
  background: transparent;
  border: 1.5px solid var(--color-blue);
  border-radius: var(--radius-md);
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.btn-secondary:hover {
  background-color: var(--color-blue);
  color: var(--color-white);
}
```

### Product Card

```css
.product-card {
  background: var(--color-white);
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.product-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.product-card h3 {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: var(--space-2);
}
.product-card p {
  font-size: var(--text-small);
  color: var(--color-gray);
  line-height: 1.55;
}
```

### Trust Bar

```css
/* Recommended: sticky above hero */
.trust-bar {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  background: var(--color-navy);
  color: rgba(255,255,255,0.85);
  font-family: var(--font-body);
  font-size: var(--text-small);
  padding: var(--space-2) var(--space-6);
}
.trust-bar strong {
  color: var(--color-white);
  font-weight: 600;
}
```

---

## 8. Layout Grid

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-5);
}

/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-5);
}

/* Mobile */
@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}
```

---

## 9. Do / Don't Rules

### ✅ Do
- Use `--color-navy` for all primary headings and the header bar
- Use `--color-accent` (amber) **only** for the single most important CTA per page
- Use `Barlow Condensed` for all headings, `Barlow` for all body copy
- Use sentence case for all text below `h2` level
- Keep button labels short: "Get a Free Quote", "Learn More", "Call Now"
- Include year founded ("Since 2006") and BBB badge in the header trust bar

### ❌ Don't
- Don't mix more than 2 blue shades on any one section
- Don't use ALL-CAPS on product names, card titles, or body text
- Don't use `font-weight: 800` or heavier — it looks amateur on web
- Don't use the accent color on borders, backgrounds, or decorative elements
- Don't use more than 3 type sizes in a single card component
- Don't add drop shadows to text

---

## 10. Cursor AI Prompt Template

When asking Cursor to build a component using this system, use this prefix:

```
Use the OrlandoTGroup design system (orlandotgroup-design-system.md).
Fonts: Barlow Condensed (headings) + Barlow (body) from Google Fonts.
Colors: Navy #002855, Blue #1565C0, Sky #1E88E5, Accent #F59E0B, White #FFFFFF.
Typography rules: Uppercase only on h1/h2. Sentence case everywhere else.
Spacing: 4px base unit, multiples of 4.
Build: [YOUR COMPONENT HERE]
```

---

*Last updated: March 2026 — based on orlandotgroupinc.com audit*
