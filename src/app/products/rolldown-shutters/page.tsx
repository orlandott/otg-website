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
  slug: "rolldown-shutters",
  name: "Rolldown Shutters",
  headline: "Storm Protection in Seconds.",
  description:
    "Rolldown shutters sit permanently above your windows and doors in a compact housing. When a storm approaches, deploy them in seconds with a hand crank or motorized control. No storage, no hauling panels — just reliable protection when you need it.",
  metaTitle: "Rolldown Hurricane Shutters South Florida | Orlando T Group Inc.",
  metaDescription:
    "Rolldown hurricane shutters installed in South Florida. Motorized & manual options. 2nd most affordable protection. Free estimate — (954) 625-5318.",
  heroImage: "/images/rolldown-shutters.png",
  galleryImages: [
    "/images/rolldown-shutters-2.jpg",
    "/images/rolldown-shutters-3.jpg",
  ],
  features: [
    {
      title: "Deploy in Seconds",
      body: "Rolldown shutters drop from their permanent housing above the window with a simple crank or button press — full protection in under a minute.",
    },
    {
      title: "Motorized Option",
      body: "Add a motorized drive and deploy or retract every shutter in your home with a single button. Works even during a power outage with battery backup.",
    },
    {
      title: "Permanently Installed",
      body: "The housing sits above each window or door at all times. No storage space needed, no heavy panels to retrieve from the garage.",
    },
    {
      title: "2nd Most Affordable",
      body: "Rolldown shutters offer an excellent balance of price and performance — more affordable than impact windows with fast, easy deployment.",
    },
    {
      title: "Full Coverage",
      body: "Rolldown shutters can protect any opening: windows, doors, garage openings, and large commercial storefronts.",
    },
    {
      title: "Privacy & Security",
      body: "When deployed, rolldown shutters provide complete privacy and a solid barrier against break-ins in addition to hurricane protection.",
    },
  ],
  specs: [
    "Miami-Dade NOA certified",
    "Heavy-duty aluminum slats",
    "Manual crank or motorized with battery backup",
    "Compact hood housing above each opening",
    "Available in multiple colors",
    "Manufacturers: South Evolution",
  ],
  faqs: [
    {
      q: "What's the difference between rolldown and accordion shutters?",
      a: "Rolldown shutters deploy vertically from a housing above the window. Accordion shutters fold out from the sides. Rolldowns deploy slightly faster; accordion shutters are generally less expensive.",
    },
    {
      q: "Can I get motorized rolldown shutters?",
      a: "Yes. We install both manual crank and motorized rolldown systems. Motorized options include battery backup so they work during power outages.",
    },
    {
      q: "Will rolldown shutters work on large openings?",
      a: "Yes. Rolldown shutters are available for wide windows, double doors, garage openings, and large commercial facades.",
    },
    {
      q: "Do rolldown shutters protect against break-ins?",
      a: "Yes. When deployed, the heavy-duty aluminum slats make forced entry extremely difficult — adding a layer of security beyond hurricane protection.",
    },
    {
      q: "How visible is the housing above the window?",
      a: "The compact aluminum housing is low-profile and can be painted to match your home's exterior. Most homeowners find it unobtrusive.",
    },
  ],
  relatedSlugs: ["accordion-shutters", "impact-windows", "impact-doors"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/rolldown-shutters",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/rolldown-shutters",
  },
};

export default function RolldownShuttersPage() {
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
