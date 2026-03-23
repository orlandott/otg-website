# Orlando T Group Inc. — Website

Production-ready Next.js MVP for Orlando T Group Inc., a hurricane and solar protection company in South Florida.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Barlow Condensed (headings) + DM Sans (body)

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── AnnouncementBar.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ProductsGrid.tsx
│   │   ├── WhyUs.tsx
│   │   └── ConsultationForm.tsx
│   ├── products/
│   │   └── ProductSection.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── SectionDivider.tsx
│       └── ProductImage.tsx
├── lib/
│   ├── data/products.ts
│   ├── icons.tsx
│   └── utils.ts
└── types/
    └── index.ts
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` in the project root:

```env
# Optional: Add these when integrating email
# RESEND_API_KEY=re_xxxxx
# CONTACT_EMAIL=info@orlandotgroupinc.com
```

## Contact Form (Static / GitHub Pages)

On GitHub Pages, the contact form is UI-only: it shows a success message on submit without sending data. For real submissions, deploy to Vercel or another platform with API support and wire up Resend/Nodemailer in `src/app/api/contact/route.ts`.

## Adding Real Product Images

Place product images in `public/images/` with these filenames:

- `impact-windows.jpg`
- `impact-doors.jpg`
- `patio-enclosures.jpg`
- `rolldown-shutters.jpg`
- `accordion-shutters.jpg`
- `blinds.jpg`
- `retractable-awnings.jpg`
- `impact-garage-doors.jpg`

Recommended size: 800×600px or larger. The app shows a fallback placeholder when an image is missing.

## GitHub Pages Deployment

The site is configured for static export and deploys automatically via GitHub Actions.

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys to GitHub Pages.

Live URL: `https://<username>.github.io/otg-website/`

**Local build (with basePath):**
```bash
NEXT_PUBLIC_BASE_PATH=/otg-website npm run build
```

## Cloudflare Pages Deployment

### Why this repo shows up as a Worker ("Hello World")

**Workers** and **Pages** are separate products. The Cloudflare dashboard asks which one you want when you create a project:

- If you create a **Worker** (or connect the repo as a **Worker**), you get a Worker script. The default is often "Hello World". Your Next static site in `out/` is not what gets served.
- If you create **Pages** and connect Git, Cloudflare publishes the **build output directory** (`out/`). That is what this project needs.

The repository cannot convert an existing Worker project into Pages. Add a **new** **Pages** project (below) and use its `*.pages.dev` URL, or attach your custom domain to **that** Pages project, not to the Worker.

### Create a Pages project (not Workers)

Cloudflare’s dashboard often shows **Workers** and **Pages** in the same place, and both can connect to Git. If you pick the repository *before* choosing **Pages**, the flow can create a **Worker** (or “Workers Builds”) instead of **Pages**. The order matters.

Per [Cloudflare’s Pages Git docs](https://developers.cloudflare.com/pages/get-started/git-integration/):

1. [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) → **Create application** → **Pages** → **Connect to Git** (not “Create Worker” / not a repo-first Worker flow).
2. Authorize GitHub and **then** select this repository.
3. Build settings:
   - **Root directory:** `/` (unless the app lives in a subfolder).
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. If the UI requires a deploy command: `npm run deploy:ci` (no-op; Pages still uploads `out/` after the build).
5. Deploy. The live URL looks like `https://<project-name>.pages.dev` (not `*.workers.dev`).

`wrangler.toml` sets `pages_build_output_dir = "./out"` to match Next's static export.

### Manual deploy from your machine

```bash
npm run deploy:cloudflare
```

Requires Wrangler login or `CLOUDFLARE_API_TOKEN` with **Account → Cloudflare Pages → Edit**.

## Vercel Deployment (alternative)

1. Push the project to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Deploy. For Vercel, remove `output: "export"` from `next.config.mjs` to use server features.

## Brand Colors

| Token   | Hex       | Usage              |
|---------|-----------|--------------------|
| primary | `#377abe` | Brand blue (CTAs, links) |
| secondary | `#1e3d5c` | Dark blue (section backgrounds) |
| accent  | `#82c55a` | Brand green (highlights) |
| text-primary | `#ffffff` | Main text on dark UI |
| text-muted | `#8a9bbf` | Secondary text  |

## License

© Orlando T Group Inc. All rights reserved.
