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
  slug: "accordion-shutters",
  name: "Accordion Shutters",
  headline: "Most Affordable. Storm-Ready in Minutes.",
  description:
    "Accordion shutters fold flat against the sides of your windows when not in use. Before a storm, unfold and lock them across your opening in minutes — no tools, no ladders, no heavy panels. The most cost-effective way to fully protect every opening in your home.",
  metaTitle: "Accordion Hurricane Shutters South Florida | Orlando T Group Inc.",
  metaDescription:
    "Accordion hurricane shutters — the most affordable option for South Florida homes. Deploy in minutes. Free estimate from Orlando T Group — (954) 625-5318.",
  heroImage: "/images/accordion-shutters.png",
  galleryImages: [
    "/images/accordion-shutters-2.jpg",
    "/images/accordion-shutters-3.jpg",
  ],
  features: [
    {
      title: "Most Affordable Option",
      body: "Accordion shutters offer the lowest cost per opening of any hurricane protection product — making whole-home protection accessible for any budget.",
    },
    {
      title: "Deploy in Minutes",
      body: "Pull the panels across and lock them. No tools. No ladders. No heavy lifting. One person can secure an entire home quickly.",
    },
    {
      title: "Inside or Outside Operation",
      body: "Our accordion shutters can be opened and locked from both inside and outside your home — giving you flexibility when storm preparation time is short.",
    },
    {
      title: "Custom-Built to Fit",
      body: "Each shutter is fabricated to the exact dimensions of your window or door. They sit flush against the frame with no gaps when closed.",
    },
    {
      title: "Heavy-Duty Aluminum",
      body: "Manufactured from heavy-gauge, marine-grade aluminum alloy that resists corrosion in South Florida's salt-air coastal environment.",
    },
    {
      title: "Always Ready",
      body: "Because the shutters stay mounted beside your windows year-round, they're always in place when you need them — no retrieval from storage.",
    },
  ],
  specs: [
    "Miami-Dade NOA certified",
    "Heavy-gauge marine-grade aluminum",
    "Rust-proof and corrosion-resistant",
    "Multiple color options",
    "Custom-fabricated to each opening",
    "Manufacturers: South Evolution",
  ],
  faqs: [
    {
      q: "How quickly can I deploy accordion shutters before a storm?",
      a: "An experienced homeowner can secure all windows and doors in 15–30 minutes depending on the number of openings. One person can do it alone.",
    },
    {
      q: "Can accordion shutters be opened from inside?",
      a: "Yes. Our accordion shutters are designed to lock and unlock from both inside and outside, so you can seal up even after you've gone inside.",
    },
    {
      q: "Are accordion shutters strong enough for a major hurricane?",
      a: "Yes. Our accordion shutters carry Miami-Dade NOA certification and are tested to withstand the large missile impact standard — the toughest in the US.",
    },
    {
      q: "Do accordion shutters require maintenance?",
      a: "Minimal. Lubricate the track annually and rinse with fresh water to remove salt buildup. Our free 3-year maintenance program includes annual tune-ups.",
    },
    {
      q: "Can I use accordion shutters on sliding glass doors?",
      a: "Yes. Accordion shutter systems are available for any opening type — including wide sliding glass doors, French doors, and garage entries.",
    },
  ],
  relatedSlugs: ["rolldown-shutters", "impact-windows", "impact-doors"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/accordion-shutters",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/accordion-shutters",
  },
};

export default function AccordionShuttersPage() {
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
