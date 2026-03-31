# 🏢 BRAND SKILL — Orlando T Group Inc.

**Source:** orlandotgroupinc.com  
**Industry:** Hurricane Protection / Home Improvement — South Florida  
**Founded:** 2006 | Family-owned business

---

## 🎯 WHEN TO ACTIVATE THIS SKILL

Load this skill **automatically** whenever any of the following are requested for Orlando T Group:

- Marketing copy, ads, or social media captions
- Email campaigns or newsletters
- Website content, landing pages, or banners
- Proposals, quotes, or client-facing documents
- Presentations or pitch decks
- Any visual design specs (HTML, CSS, React, SVG)
- Brand-consistent image descriptions or prompts

---

## 🎨 COLOR PALETTE

### Primary Colors

| Role           | Name            | Hex       | RGB               | Usage                                     |
| -------------- | --------------- | --------- | ----------------- | ----------------------------------------- |
| **Primary**    | Brand Navy Blue | `#003087` | rgb(0, 48, 135)   | Headlines, CTAs, logo background, buttons |
| **Secondary**  | Sky Blue        | `#1E5EBF` | rgb(30, 94, 191)  | Accents, links, hover states, icons       |
| **Light Blue** | Calm Blue       | `#4A90D9` | rgb(74, 144, 217) | Supporting accent, gradients, dividers    |

### Neutral Colors

| Role           | Name        | Hex       | RGB                | Usage                      |
| -------------- | ----------- | --------- | ------------------ | -------------------------- |
| **Background** | White       | `#FFFFFF` | rgb(255, 255, 255) | Page backgrounds, cards    |
| **Surface**    | Light Gray  | `#F5F7FA` | rgb(245, 247, 250) | Section backgrounds, forms |
| **Border**     | Soft Gray   | `#D9E2EC` | rgb(217, 226, 236) | Dividers, input borders    |
| **Body Text**  | Dark Gray   | `#2D3748` | rgb(45, 55, 72)    | Paragraph text             |
| **Muted Text** | Medium Gray | `#718096` | rgb(113, 128, 150) | Captions, secondary info   |

### Accent / Action Colors

| Role            | Name         | Hex       | RGB               | Usage                                               |
| --------------- | ------------ | --------- | ----------------- | --------------------------------------------------- |
| **CTA / Alert** | Storm Orange | `#E07B39` | rgb(224, 123, 57) | Urgent CTAs, promotional badges, "Act Now" elements |
| **Trust Green** | Safety Green | `#2E7D52` | rgb(46, 125, 82)  | Checkmarks, benefits, "verified" indicators         |
| **Dark Navy**   | Deep Navy    | `#001A4D` | rgb(0, 26, 77)    | Footer, dark sections, overlays                     |

---

## 🔤 TYPOGRAPHY

### Font Stack

```css
/* Headlines */
font-family: "Montserrat", "Arial Black", sans-serif;
font-weight: 700 | 800;

/* Body */
font-family: "Open Sans", "Arial", sans-serif;
font-weight: 400 | 600;
```

### Type Scale

| Element       | Size    | Weight | Color              |
| ------------- | ------- | ------ | ------------------ |
| H1 Hero       | 48–64px | 800    | #003087 or #FFFFFF |
| H2 Section    | 32–40px | 700    | #003087            |
| H3 Card Title | 20–24px | 700    | #003087            |
| Body          | 16–18px | 400    | #2D3748            |
| Caption/Label | 13–14px | 600    | #718096            |
| CTA Button    | 16px    | 700    | #FFFFFF on #003087 |

---

## 📐 DESIGN SYSTEM (CSS Variables)

```css
:root {
  /* Brand Blues */
  --otg-primary: #003087;
  --otg-secondary: #1e5ebf;
  --otg-light-blue: #4a90d9;
  --otg-deep-navy: #001a4d;

  /* Neutrals */
  --otg-white: #ffffff;
  --otg-surface: #f5f7fa;
  --otg-border: #d9e2ec;
  --otg-text-dark: #2d3748;
  --otg-text-muted: #718096;

  /* Accents */
  --otg-orange: #e07b39;
  --otg-green: #2e7d52;

  /* Gradients */
  --otg-gradient-hero: linear-gradient(
    135deg,
    #001a4d 0%,
    #003087 50%,
    #1e5ebf 100%
  );
  --otg-gradient-cta: linear-gradient(90deg, #003087, #1e5ebf);

  /* Spacing */
  --otg-radius: 8px;
  --otg-radius-lg: 16px;
  --otg-shadow: 0 4px 16px rgba(0, 48, 135, 0.15);
  --otg-shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
}
```

---

## 🏷️ BRAND VOICE & TONE

### Personality

- **Trustworthy** — 18+ years of experience, family business since 2006
- **Urgent but reassuring** — Storm season is real; act now, stay safe
- **Community-focused** — South Florida neighbors helping neighbors
- **Professional yet approachable** — Clear, direct, no jargon

### Voice Guidelines

| Do ✅                                                       | Avoid ❌                         |
| ----------------------------------------------------------- | -------------------------------- |
| Use direct action verbs: "Protect," "Secure," "Fortify"     | Passive constructions            |
| Reference local expertise (South Florida, hurricane season) | Generic, national language       |
| Emphasize family safety and peace of mind                   | Fearmongering without a solution |
| Mention financing options (18 months 0% interest, Ygrene)   | Hiding the cost angle            |
| Use "since 2006" or "18+ years" for credibility             | Unsubstantiated claims           |

### Key Phrases & Proof Points

- "Since 2006, protecting South Florida families"
- "Factory-direct pricing — no middleman"
- "Free consultation and home visit"
- "18 months interest-free financing"
- "Hurricane-ready 24/7"
- Phone: **(954) 625-5318**

---

## 🛍️ PRODUCT LINES

| Product             | Tagline                                                 |
| ------------------- | ------------------------------------------------------- |
| Impact Windows      | Hurricane Ready 24/7 · 5 types · Clear visibility       |
| Impact Doors        | 20+ types · Slides or hinges · Intruder protection      |
| Patio Enclosures    | Extend your home · Recover your patio · Can slide open  |
| Rolldown Shutters   | Deployed in seconds · Includes motor                    |
| Accordion Shutters  | Most affordable · Deployed in minutes                   |
| Blinds              | UV protection · Reduce energy costs                     |
| Retractable Awnings | Solar protection · Deployed in seconds · Includes motor |
| Impact Garage Doors | Personalized designs · Protects vehicles                |

---

## 🖼️ VISUAL STYLE RULES

1. **Backgrounds:** White or very light gray (#F5F7FA) for content areas; deep navy (#001A4D) for hero sections and footers.
2. **Buttons:** Primary CTA = white text on `#003087` with 8px border radius. Secondary = outlined `#003087`.
3. **Cards:** White background, `--otg-shadow-card` shadow, 16px radius.
4. **Icons/Checkmarks:** Use `--otg-green` (#2E7D52) for benefit lists.
5. **Urgency badges:** Use `--otg-orange` (#E07B39) — "Limited Offer," "Act Now," etc.
6. **Photography:** Real South Florida homes, storms/windows (not stock-generic). Show the before/after transformation.
7. **Gradients:** Use `--otg-gradient-hero` for hero banners, dark overlays on photos.

---

## 📱 SOCIAL MEDIA STYLE

- **Tone:** Energetic, emoji-friendly 💙🏠🌪️💪, educational, promotional
- **Hashtags:** `#ImpactWindows #HurricaneProtection #OrlandoTGroup #HomeSafety #StormReady #SouthFlorida`
- **Color accent in posts:** Blue heart 💙 is the brand signature emoji
- **Post types:** Safety tips, customer reviews, seasonal promotions, financing offers, before/afters

---

## 📋 QUICK REFERENCE CARD

```
PRIMARY BLUE:   #003087   ← Buttons, headlines, logo
SECONDARY BLUE: #1E5EBF   ← Accents, links
LIGHT BLUE:     #4A90D9   ← Gradients, icons
ORANGE:         #E07B39   ← Urgent CTAs
GREEN:          #2E7D52   ← Benefits/checkmarks
WHITE:          #FFFFFF   ← Backgrounds
DARK TEXT:      #2D3748   ← Body copy
DEEP NAVY:      #001A4D   ← Footer, dark overlays
```

---

_Skill built from: orlandotgroupinc.com | Last scraped: March 2026_
