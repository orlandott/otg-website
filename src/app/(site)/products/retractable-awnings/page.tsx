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
  slug: "retractable-awnings",
  name: "Retractable Awnings",
  headline: "Solar Protection. Deployed in Seconds.",
  description:
    "Retractable awnings extend over your patio, deck, or door in seconds with motorized convenience. Block the South Florida sun, stay cooler outdoors, and retract fully when not needed — or before a storm. Durable, weather-resistant, and custom-made to fit your space.",
  metaTitle: "Retractable Awnings South Florida | Orlando T Group Inc.",
  metaDescription:
    "Motorized retractable awnings installed in South Florida. Solar protection for patios, decks, and doors. Free estimate from Orlando T Group — (954) 625-5318.",
  heroImage: "/images/retractable-awnings.png",
  galleryImages: [
    "/images/retractable-awnings-2.jpg",
    "/images/retractable-awnings-3.jpg",
  ],
  features: [
    {
      title: "Solar Protection On Demand",
      body: "Extend your awning to block intense South Florida sun and retract it when you want full sky. Full control over light, heat, and outdoor comfort.",
    },
    {
      title: "Motorized Operation",
      body: "Our awnings include motorized mechanisms so you can extend or retract with a button press or remote — no cranking required.",
    },
    {
      title: "Installed Anywhere",
      body: "Retractable awnings mount to walls, soffits, and fascias. Ideal for patios, decks, pool areas, windows, and sliding glass door entries.",
    },
    {
      title: "Cooler Outdoor Spaces",
      body: "A quality awning can reduce the surface temperature of your patio by up to 20°F — making outdoor living comfortable even in summer.",
    },
    {
      title: "Protects Interior",
      body: "By blocking direct sun on your windows and doors, awnings reduce the UV and heat that would otherwise enter your home.",
    },
    {
      title: "Durable Construction",
      body: "Marine-grade aluminum arms and weather-resistant acrylic canvas stand up to South Florida's climate — including salt air, humidity, and UV exposure.",
    },
  ],
  specs: [
    "Motorized with remote control",
    "Marine-grade aluminum frame",
    "Weather-resistant acrylic canvas",
    "Custom sizing for any span",
    "Multiple fabric colors and patterns",
    "Optional wind sensor for automatic retraction",
  ],
  faqs: [
    {
      q: "Can retractable awnings withstand Florida weather?",
      a: "Our awnings are built with marine-grade aluminum and UV-resistant fabric. They're designed for coastal climates. Retract before high winds or tropical weather.",
    },
    {
      q: "How are retractable awnings powered?",
      a: "Our motorized awnings run on standard 110V power. We handle all electrical connections during installation. Optional battery backup is available.",
    },
    {
      q: "What size awning do I need?",
      a: "We custom-fabricate each awning to your space. During your free consultation, we'll measure your area and recommend the right projection and width.",
    },
    {
      q: "Can I add a wind sensor?",
      a: "Yes. An optional wind sensor automatically retracts the awning when wind speeds exceed a set threshold — protecting the awning during unexpected gusts.",
    },
    {
      q: "How do I clean a retractable awning?",
      a: "Brush off loose debris and rinse with mild soap and water. Allow to dry fully before retracting. Our maintenance program includes awning inspection annually.",
    },
  ],
  relatedSlugs: ["blinds", "patio-enclosures", "impact-windows"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/retractable-awnings",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/retractable-awnings",
  },
};

export default function RetractableAwningsPage() {
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
