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
  slug: "patio-enclosures",
  name: "Patio Enclosures",
  headline: "Turn Your Patio Into Living Space.",
  description:
    "Patio enclosures let you reclaim your outdoor space — converting an open patio or balcony into a comfortable, weather-protected room. Our hurricane-rated enclosure systems use impact glass panels that can be opened for fresh air or locked down for storm protection.",
  metaTitle: "Patio Enclosures South Florida | Orlando T Group Inc.",
  metaDescription:
    "Hurricane-rated patio enclosures installed in South Florida. Extend your living space with impact-rated glass panels. Free estimate — call (954) 625-5318.",
  heroImage: "/images/patio-enclosures.png",
  galleryImages: [
    "/images/patio-enclosures-2.jpg",
    "/images/patio-enclosures-3.jpg",
  ],
  features: [
    {
      title: "Extend Your Living Space",
      body: "Convert an unused patio, balcony, or lanai into a year-round room. Gain square footage without a full home addition.",
    },
    {
      title: "Hurricane-Rated Materials",
      body: "Our enclosure panels use impact-rated glass and aluminum framing that meets Florida Building Code for wind-borne debris protection.",
    },
    {
      title: "Sliding Panel Systems",
      body: "Open the panels for fresh air on nice days, close them for storm protection or air-conditioned comfort. Fully flexible.",
    },
    {
      title: "Custom-Built to Fit",
      body: "Every enclosure is measured and fabricated to your exact space. No standard sizes — your enclosure fits your patio precisely.",
    },
    {
      title: "Blocks UV & Insects",
      body: "Keep the South Florida sun and bugs out while still enjoying your outdoor view. UV-blocking glass options available.",
    },
    {
      title: "Increases Home Value",
      body: "An enclosed patio adds livable square footage to your home, which translates to real value increases in South Florida's real estate market.",
    },
  ],
  specs: [
    "Florida Building Code compliant",
    "Impact-rated glass panels",
    "Marine-grade aluminum frame system",
    "Sliding or folding panel configurations",
    "Custom sizing for any patio footprint",
    "Screen and glass panel hybrid options",
  ],
  faqs: [
    {
      q: "Will a patio enclosure withstand a hurricane?",
      a: "Our enclosures use impact-rated glass and reinforced aluminum framing. They're engineered to meet Florida Building Code for hurricane protection when panels are closed.",
    },
    {
      q: "Can I open the enclosure panels for fresh air?",
      a: "Yes. Our sliding and folding panel systems fully open so you can enjoy the outdoors on nice days and lock down before a storm.",
    },
    {
      q: "Does adding a patio enclosure require permits?",
      a: "Yes. We manage all permits and HOA approvals as part of our full-service installation.",
    },
    {
      q: "How long does installation take?",
      a: "Most patio enclosures are installed in 2–4 days. Timeline depends on the size and complexity of the space.",
    },
    {
      q: "Can I add air conditioning to an enclosed patio?",
      a: "Yes. Once enclosed with our impact glass system, the space is weather-tight and can support a mini-split or extension of your existing HVAC system.",
    },
  ],
  relatedSlugs: ["impact-windows", "retractable-awnings", "blinds"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/patio-enclosures",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/patio-enclosures",
  },
};

export default function PatioEnclosuresPage() {
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
