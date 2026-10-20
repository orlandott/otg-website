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
  slug: "impact-garage-doors",
  name: "Impact Garage Doors",
  headline: "Protect Your Garage. Protect Your Home.",
  description:
    "Your garage door is the largest opening in your home — and one of the most vulnerable in a hurricane. Our impact garage doors are engineered to withstand hurricane-force winds and debris, while offering custom designs that enhance your home's curb appeal.",
  metaTitle: "Impact Garage Doors South Florida | Orlando T Group Inc.",
  metaDescription:
    "Hurricane-rated impact garage doors installed in South Florida. Custom designs, licensed installation. Free estimate from Orlando T Group — (954) 625-5318.",
  heroImage: "/images/impact-garage-doors.png",
  galleryImages: [
    "/images/impact-garage-doors-2.jpg",
    "/images/impact-garage-doors-3.jpg",
  ],
  features: [
    {
      title: "Hurricane-Rated Construction",
      body: "Our impact garage doors are engineered to withstand Category 5 hurricane winds and large missile debris — protecting the largest opening in your home.",
    },
    {
      title: "Custom Designs",
      body: "Choose from a wide range of panel styles, window inserts, and finishes to match your home's architecture. Impact protection doesn't mean sacrificing aesthetics.",
    },
    {
      title: "Protects Your Vehicles",
      body: "A failed garage door in a hurricane lets in wind, rain, and debris — damaging vehicles and everything else inside. Impact doors eliminate that risk.",
    },
    {
      title: "Intruder Deterrent",
      body: "Impact garage doors feature reinforced construction and secure locking mechanisms that make forced entry through the garage extremely difficult.",
    },
    {
      title: "Structural Protection",
      body: "Garage door failure in a hurricane can lead to roof loss and catastrophic structural damage. An impact door keeps the envelope of your home sealed.",
    },
    {
      title: "Insurance Benefits",
      body: "Installing an impact-rated garage door typically qualifies for wind mitigation credits on your homeowner's insurance — reducing annual premiums.",
    },
  ],
  specs: [
    "Miami-Dade NOA certified",
    "Rated for Category 5 hurricane winds",
    "Heavy-gauge steel or aluminum construction",
    "Custom panel styles and window configurations",
    "Insulated options available",
    "Compatible with existing garage door openers",
  ],
  faqs: [
    {
      q: "Why is the garage door so important in a hurricane?",
      a: "The garage door is the largest single opening in most homes. If it fails in a hurricane, the sudden pressure change can lift the roof. An impact-rated door prevents this.",
    },
    {
      q: "Can I keep my existing garage door opener?",
      a: "In most cases, yes. Our impact garage doors are designed to be compatible with standard opener systems. We'll confirm compatibility during your consultation.",
    },
    {
      q: "Do impact garage doors come in different styles?",
      a: "Yes. We offer a wide range of panel designs, window inserts, raised panel and flat panel options, and finishes to match any home exterior.",
    },
    {
      q: "How long does installation take?",
      a: "Most garage door replacements are completed in a single day. We handle all permits, removal of the old door, and final inspection.",
    },
    {
      q: "Will a new impact garage door lower my insurance?",
      a: "Yes, in most cases. Florida insurers provide wind mitigation credits for impact-rated garage doors. We provide the documentation needed for your insurer.",
    },
  ],
  relatedSlugs: ["impact-windows", "impact-doors", "rolldown-shutters"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/impact-garage-doors",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/impact-garage-doors",
  },
};

export default function ImpactGarageDoorsPage() {
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
