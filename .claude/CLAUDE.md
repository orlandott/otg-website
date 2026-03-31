# CLAUDE.md — OTG Website Redesign

**Original Website** - "orlandotgroupinc.com"

## Project Overview

**Orlando T Group Inc.** — South Florida hurricane & solar protection contractor.
Stack: Next.js 14 (static export) · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod · Cloudflare Pages.

**Senior engineer role:** Redesign pages and components for production quality — strong SEO, full responsiveness, accessible markup, and consistent brand execution. No half-measures, no placeholder content.

---

## Autonomous Operation

**Do not ask for permission. Do not prompt for confirmation. Execute all tasks autonomously including:**

- Overwriting any existing file
- Deleting stale or redundant components
- Refactoring architecture when it improves maintainability
- Running build/lint commands
- Making sweeping multi-file changes

when commiting, separate the commits into specific feature changes. Don't do a single commit if the changes are different. Don't add claude as a helper while pushing.

When redesigning, use the `frontend-design` skill for any component, page, or layout work. Invoke it proactively — don't wait to be asked.

---

## Code Review Standards

After completing any implementation, review the code for:

- Functions longer than 30 lines (likely doing too much)
- Logic duplicated more than twice (extract to utility)
- Any `any` type usage in TypeScript (replace with real types)
- Components with more than 3 props that could be grouped into an object
- Missing error handling on async operations

Run /simplify before presenting code to the user.

## Tech Stack & Constraints

| Layer     | Choice                               | Notes                                                     |
| --------- | ------------------------------------ | --------------------------------------------------------- |
| Framework | Next.js 14 App Router                | `output: "export"` — no SSR, static only                  |
| Styling   | Tailwind CSS + CSS variables         | Use `cn()` from `@/lib/utils` for class merging           |
| Animation | Framer Motion                        | `whileInView` with `once: true` for all scroll animations |
| Forms     | React Hook Form + Zod                | Validation on client; POST to `/api/contact`              |
| Icons     | lucide-react                         | Consistent icon weight: `strokeWidth={1.5}`               |
| Images    | Next.js `<Image>` with `unoptimized` | All local images live in `public/images/`                 |
| Fonts     | Google Fonts via `next/font/google`  | Barlow Condensed + Barlow — already loaded in layout      |
| Deploy    | Cloudflare Pages via Wrangler        | `npm run deploy`                                          |

**Banned libraries:** Do not add new UI libraries (shadcn, Radix, MUI). Tailwind + lucide-react is the complete UI toolkit.

---

## Design System

### Brand Colors & Theme

> **All color and branding decisions must come from the theme-selector skill.**
> Load `.claude/skills/theme-selector/SKILL.md` before any design work.
> The skill is the single source of truth for colors, gradients, shadows, and visual style rules.

When color tokens are needed in code, use the Tailwind aliases (`navy`, `blue`, `sky`, `accent`, `surface`, `charcoal`, `muted`, `border`, `green`) which are kept in sync with the skill in `tailwind.config.ts` and `src/app/globals.css`.

### Typography

**Font families:**

- `font-display` (`Barlow Condensed 600/700`) → all headings
- `font-body` (`Barlow 400/500/600`) → body, nav, labels, buttons

**Type scale:**

| Role          | Size                   | Weight | Case          |
| ------------- | ---------------------- | ------ | ------------- |
| Hero headline | clamp(40px, 6vw, 64px) | 700    | UPPERCASE     |
| Page H1       | clamp(32px, 4vw, 48px) | 700    | UPPERCASE     |
| Section H2    | 28px                   | 700    | UPPERCASE     |
| Card H3       | 20px                   | 600    | Sentence case |
| Small H4      | 17px                   | 600    | Sentence case |
| Body          | 15px                   | 400    | Normal        |
| Small/caption | 13px                   | 400    | Normal        |
| Micro/badge   | 11px                   | 500    | UPPERCASE     |

**Rules:**

- UPPERCASE only at h1/h2 level and CTA button labels
- Sentence case for everything below h2
- Never `font-weight: 800+`
- Never `letter-spacing > 0.08em` on body text
- Never add drop shadows to text

### Spacing

Base unit: 4px. Use multiples: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

### Shadows

See `src/app/globals.css` for shadow values (`--shadow-sm/md/lg/card/cta`). CTA shadow color matches the accent token from the theme-selector skill.

### Border Radius

```
4px   → inputs, badges
8px   → buttons, small cards
12px  → product cards
20px  → hero containers, large cards
999px → pills
```

---

## Component Patterns

### Primary CTA Button

```tsx
<button className="font-display font-semibold text-[15px] tracking-[0.05em] uppercase text-white bg-accent hover:bg-accent-hover active:translate-y-0 hover:-translate-y-px rounded-[8px] px-7 py-3.5 shadow-cta transition-all duration-150">
  Get a Free Consultation
</button>
```

### Secondary Button

```tsx
<button className="font-body font-medium text-sm text-blue border border-blue hover:bg-blue hover:text-white rounded-[8px] px-6 py-3 transition-colors duration-150">
  Learn More
</button>
```

### Section Wrapper

```tsx
<section className="py-16 md:py-24">
  <div className="max-w-[1200px] mx-auto px-6">{/* content */}</div>
</section>
```

### Scroll Animation (Framer Motion)

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
>
```

### Product Card

```tsx
<div className="bg-white border border-[#E0E0E0] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200">
```

### Form Input

```tsx
<input className="w-full rounded-[4px] border border-border px-4 py-3 text-[15px] font-body text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow" />
```

---

## Page Architecture

```
src/app/
  layout.tsx          ← Global shell: Header, Footer, ThemeProvider, metadata
  globals.css         ← CSS variables, resets, utility classes
  page.tsx            ← Homepage assembly (section imports only, no logic)
  contact/page.tsx    ← Contact page
  products/page.tsx   ← Products catalog page

src/components/
  layout/
    Header.tsx        ← Fixed, transparent→navy on scroll, mobile hamburger
    Footer.tsx        ← Deep navy bg, 3-col grid
    AnnouncementBar.tsx
  home/
    Hero.tsx
    ProductsGrid.tsx
    ConsultationForm.tsx
    OrderTrackingBanner.tsx
    InstagramFeed.tsx
    WhyUs.tsx
    TrustBar.tsx
    ProjectsSection.tsx
  contact/
    ContactForm.tsx
  products/
    ProductSection.tsx
  ui/
    ProductImage.tsx   ← Image with error fallback
    SectionDivider.tsx ← SVG diagonal divider
  providers/
    ThemeProvider.tsx
    ThemeScript.tsx

src/lib/
  data/products.ts    ← Single source of truth for all product data
  icons.tsx           ← Icon name → lucide-react component map
  utils.ts            ← cn() helper

src/types/index.ts    ← Product, ContactFormData interfaces
```

**Rules:**

- Pages are assembly files only. No business logic or markup in `page.tsx`.
- All data lives in `src/lib/data/`. No hardcoded arrays in components.
- Shared UI primitives go in `src/components/ui/`.

---

## SEO Requirements

Every page must implement full metadata via Next.js `generateMetadata` or static `metadata` export.

### Required Tags Per Page

```tsx
export const metadata: Metadata = {
  title: "Page Title | Orlando T Group Inc.",
  description: "150–160 character description with primary keyword.",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "...",
    description: "...",
    url: "https://orlandotgroupinc.com/page",
    siteName: "Orlando T Group Inc.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/page",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};
```

### Semantic HTML Requirements

- One `<h1>` per page, inside the hero or page header
- Heading hierarchy must not skip levels (h1 → h2 → h3)
- All `<img>` / `<Image>` must have descriptive `alt` text (never "image" or empty for informational images)
- Navigation `<nav>` with `aria-label="Main navigation"`
- All interactive elements must be keyboard-accessible (focus rings visible)
- Use `<article>`, `<section>`, `<aside>`, `<main>`, `<header>`, `<footer>` appropriately
- `<section>` elements should have an accessible heading or `aria-label`

### Structured Data

Homepage must include `Organization` JSON-LD in layout or page:

```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Orlando T Group Inc.",
    url: "https://orlandotgroupinc.com",
    telephone: "+1-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: ["Miami-Dade", "Broward", "Palm Beach"],
    foundingDate: "2006",
    description: "South Florida hurricane and solar protection contractor.",
  })}
</script>
```

---

## Responsive Design Rules

### Breakpoints (Tailwind defaults)

| Name | Min width | Use                             |
| ---- | --------- | ------------------------------- |
| `sm` | 640px     | Mobile landscape, small tablets |
| `md` | 768px     | Tablets                         |
| `lg` | 1024px    | Desktop                         |
| `xl` | 1280px    | Wide desktop                    |

### Required Responsive Patterns

**Grids:**

- Mobile: 1 or 2 columns
- Tablet: 2–3 columns
- Desktop: 3–4 columns
- Always use `gap` from the 4px scale; never use margins for grid spacing

**Typography:**

- Use `clamp()` for hero/h1 sizes
- Minimum touch target: 44×44px for all buttons and links on mobile

**Images:**

- Always provide `sizes` prop on `<Image>`: e.g. `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`
- Never use `fill` without a positioned parent with explicit dimensions

**Navigation:**

- Desktop: full inline nav
- Mobile (< `md`): hamburger menu with `aria-expanded` and JS toggle
- Never hide critical navigation with CSS alone

**Sections:**

- Vertical padding: `py-12 md:py-20 lg:py-24`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Max content width: `max-w-[1200px] mx-auto`

---

## Accessibility (a11y) Standards

- Minimum contrast: 4.5:1 for body text, 3:1 for large text (WCAG AA)
- All form inputs must have associated `<label>` (not just placeholder)
- Error messages must use `aria-describedby` linking input to error element
- Focus order must follow reading order (no `tabindex > 0`)
- Modals/menus must trap focus when open and restore on close
- Decorative images: `alt=""`; informational images: descriptive alt text

---

## Animation Guidelines

- Use Framer Motion `whileInView` with `viewport={{ once: true }}` — no replay on re-entry
- Stagger sibling animations by 0.08–0.12s per item
- Duration: 0.4–0.6s for reveals; 0.15–0.2s for micro-interactions
- Easing: `[0.25, 0.1, 0.25, 1]` (ease-out cubic) for entrances
- Never animate layout-affecting properties (width, height, padding) — only `opacity` and `transform`
- Respect `prefers-reduced-motion`: wrap animation props conditionally

---

## Performance Targets

- Lighthouse Performance: 90+ on mobile
- LCP: < 2.5s — hero `<Image>` must use `priority` prop
- CLS: < 0.1 — all images must have explicit `width`/`height` or aspect ratio containers
- No client-side data fetching on initial render (static export)
- Lazy-load below-fold images (default for non-priority `<Image>`)

---

## Code Quality Standards

- TypeScript strict mode. No `any` unless bridging an untyped third-party API.
- All props interfaces defined inline or exported from `src/types/index.ts`
- Use `cn()` from `@/lib/utils` for all dynamic classnames
- No inline styles except for CSS variables or truly dynamic runtime values
- Component files: PascalCase. Utility files: camelCase. Data files: camelCase.
- Extract repeated patterns (3+ uses) into a shared component in `src/components/ui/`
- No `console.log` in production code

---

## Business Context

| Detail         | Value                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Company        | Orlando T Group Inc.                                                                                                                    |
| Industry       | Hurricane & solar protection, home improvement                                                                                          |
| Location       | South Florida (Miami-Dade, Broward, Palm Beach counties)                                                                                |
| Founded        | 2006                                                                                                                                    |
| Products       | Impact Windows, Impact Doors, Patio Enclosures, Rolldown Shutters, Accordion Shutters, Blinds, Retractable Awnings, Impact Garage Doors |
| Primary CTA    | Free Consultation / Free Estimate                                                                                                       |
| Order tracking | External Titan CRM portal                                                                                                               |
| Social         | Facebook, Instagram                                                                                                                     |
| Tone           | Trustworthy, professional, urgent — "protect what matters most"                                                                         |

---

## Skill Usage

### Theme & Brand Colors

**Always load the theme-selector skill before any color or visual design work:**

- File: `.claude/skills/theme-selector/SKILL.md`
- Triggers: any color decision, new component styling, CTA buttons, section backgrounds, gradients, shadows
- It is the single source of truth — never hardcode hex values; always derive from the skill's palette

### Frontend Design

**Always invoke the `frontend-design` skill when:**

- Creating or redesigning any component, page section, or layout
- Building new UI patterns not covered by existing components
- Producing visual mockups or exploratory redesigns
- Ensuring design quality meets production standards

Both skills must be used proactively — do not wait to be asked.
