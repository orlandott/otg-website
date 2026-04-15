import type { Metadata } from "next";
import type { ProductDetail } from "@/types";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductOverview } from "@/components/products/ProductOverview";
import { ProductFeatures } from "@/components/products/ProductFeatures";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductBadgeStrip } from "@/components/products/ProductBadgeStrip";
import { ProductFAQSection } from "@/components/products/ProductFAQSection";
import { ProductRelated } from "@/components/products/ProductRelated";
import { ConsultationForm } from "@/components/home/ConsultationForm";

const detail: ProductDetail = {
  slug: "impact-windows",
  name: "Impact Windows",
  headline: "Hurricane-Ready Windows. 24/7.",
  description:
    "Impact windows replace your existing windows with laminated, impact-rated glass sealed in heavy-duty aluminum frames. Once installed, they protect your home year-round with zero setup — no shutters to deploy, no boards to hang.",
  metaTitle: "Impact Windows South Florida | Orlando T Group Inc.",
  metaDescription:
    "Hurricane impact windows installed by Orlando T Group in South Florida. 5 styles, licensed & insured since 2006. Free in-home estimate — call (954) 625-5318.",
  heroImage: "/images/impact-windows.png",
  galleryImages: [
    "/images/impact-windows-2.jpg",
    "/images/impact-windows-3.jpg",
  ],
  features: [
    {
      title: "Always-On Protection",
      body: "No shutters to deploy before a storm. Impact windows provide full hurricane resistance 24/7 — even when you're away from home.",
    },
    {
      title: "5 Window Styles",
      body: "Fixed, single-hung, casement, horizontal roller, and arch. Every opening in your home is covered with the right style for the job.",
    },
    {
      title: "UV & Noise Reduction",
      body: "Laminated glass blocks up to 99% of UV radiation and significantly reduces outside noise — making your home more comfortable year-round.",
    },
    {
      title: "Intruder Deterrent",
      body: "The same laminated glass that stops hurricane debris resists forced entry. Impact windows are a proven deterrent against break-ins.",
    },
    {
      title: "Energy Savings",
      body: "Impact glass reduces solar heat gain, cutting the load on your AC and lowering monthly energy bills — especially in South Florida summers.",
    },
    {
      title: "Insurance Discounts",
      body: "Many South Florida homeowners see meaningful reductions in wind insurance premiums after replacing windows with impact-rated products.",
    },
  ],
  specs: [
    "Miami-Dade NOA certified",
    "Florida Building Code compliant",
    "Laminated impact-resistant glass",
    "Heavy-duty marine-grade aluminum frames",
    "Available in clear, tinted, and low-E glass",
    "Manufacturers: ES Windows, CGI, PGT, Lawson",
  ],
  faqs: [
    {
      q: "Do I still need shutters if I have impact windows?",
      a: "No. Impact windows are a complete, permanent replacement for hurricane shutters. They provide full protection without any deployment required before a storm.",
    },
    {
      q: "How long does installation take?",
      a: "A typical residential installation takes 1–3 days depending on the number of openings. Our crews handle everything including permits and final inspection.",
    },
    {
      q: "Are impact windows energy efficient?",
      a: "Yes. Low-E glass options significantly reduce solar heat gain, which lowers AC usage. Many homeowners see measurable reductions in their monthly energy bills.",
    },
    {
      q: "Will impact windows reduce my insurance premium?",
      a: "In most cases, yes. Florida insurers offer wind mitigation credits for homes with impact-rated openings. We can provide the documentation your insurer requires.",
    },
    {
      q: "What maintenance do impact windows need?",
      a: "Very little. Clean the glass as you would any window. Lubricate tracks and hinges annually. Our free 3-year maintenance program covers annual tune-ups at no charge.",
    },
  ],
  relatedSlugs: ["impact-doors", "accordion-shutters", "rolldown-shutters"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/impact-windows",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/impact-windows",
  },
};

export default function ImpactWindowsPage() {
  return (
    <>
      <ProductHero name={detail.name} headline={detail.headline} />
      <ProductOverview
        name={detail.name}
        headline={detail.headline}
        description={detail.description}
        heroImage={detail.heroImage}
        specs={detail.specs}
      />
      <ProductFeatures features={detail.features} />
      <ProductGallery name={detail.name} heroImage={detail.heroImage} galleryImages={detail.galleryImages} />
      <ProductBadgeStrip />
      <ProductFAQSection name={detail.name} faqs={detail.faqs} />
      <ProductRelated relatedSlugs={detail.relatedSlugs} />
      <ConsultationForm />
    </>
  );
}
