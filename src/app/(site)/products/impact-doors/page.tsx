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
  slug: "impact-doors",
  name: "Impact Doors",
  headline: "20+ Styles. Zero Compromise on Protection.",
  description:
    "Impact doors combine hurricane-rated laminated glass and reinforced frames with real design flexibility. Whether you're replacing a front entry, a sliding glass door, or a set of French doors, we have a style that fits your home.",
  metaTitle: "Impact Doors South Florida | Orlando T Group Inc.",
  metaDescription:
    "Hurricane impact doors installed in South Florida. 20+ styles including French, sliding glass, and solid entry. Free estimate — call (954) 625-5318.",
  heroImage: "/images/impact-doors.png",
  galleryImages: [
    "/images/impact-doors-2.jpg",
    "/images/impact-doors-3.jpg",
  ],
  features: [
    {
      title: "20+ Door Styles",
      body: "From single entry and French doors to wide sliding glass panels — we carry impact-rated options for every opening in your home.",
    },
    {
      title: "Hinged or Sliding",
      body: "Traditional hinged doors and space-saving sliding configurations are both available in full impact-rated options.",
    },
    {
      title: "Intruder Protection",
      body: "Multi-point locking systems and laminated glass make impact doors one of the most effective deterrents against forced entry.",
    },
    {
      title: "Permanent Hurricane Defense",
      body: "Like impact windows, impact doors require no storm prep. Your home stays protected 365 days a year without any action on your part.",
    },
    {
      title: "Curb Appeal",
      body: "Modern impact door designs enhance the exterior of your home. Choose from a wide range of finishes, glass options, and frame colors.",
    },
    {
      title: "Energy Performance",
      body: "Impact glass and thermally broken frames reduce heat transfer, keeping your interior cooler and your energy costs lower.",
    },
  ],
  specs: [
    "Miami-Dade NOA certified",
    "Multi-point locking hardware",
    "Laminated impact-resistant glass",
    "Heavy-duty aluminum and PVC frame options",
    "Available in single, double, and sliding configurations",
    "Manufacturers: ES Windows, CGI, PGT",
  ],
  faqs: [
    {
      q: "What types of impact doors do you install?",
      a: "We install all door types including single entry doors, French doors, sliding glass doors, pivot doors, and more — all in impact-rated versions.",
    },
    {
      q: "Can I get an impact door that matches my home's style?",
      a: "Yes. We carry 20+ styles with various glass patterns, frame colors, and hardware finishes. Our team will help you find the right fit during your consultation.",
    },
    {
      q: "Do impact doors require permits in South Florida?",
      a: "Yes, and we handle all permitting for you — including city and HOA approvals. You don't have to manage any paperwork.",
    },
    {
      q: "How do impact doors compare to hurricane shutters for doors?",
      a: "Impact doors provide permanent, always-on protection with no setup required. Shutters must be deployed before a storm, which isn't possible if you're away from home.",
    },
    {
      q: "Are impact sliding glass doors as strong as hinged impact doors?",
      a: "Yes. Our sliding glass doors carry the same Miami-Dade NOA certifications as our hinged doors and are rated to withstand hurricane-force winds.",
    },
  ],
  relatedSlugs: ["impact-windows", "impact-garage-doors", "patio-enclosures"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/impact-doors",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/impact-doors",
  },
};

export default function ImpactDoorsPage() {
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
