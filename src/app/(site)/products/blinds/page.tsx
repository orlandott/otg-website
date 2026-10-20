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
  slug: "blinds",
  name: "Blinds & Solar Shades",
  headline: "Block UV. Cut Energy Costs.",
  description:
    "Our Bandalux solar shades and custom blinds reduce heat gain through your windows, cut UV exposure, and lower your monthly energy bills — without sacrificing your view or natural light. Designed for South Florida's intense sun.",
  metaTitle: "Custom Blinds & Solar Shades South Florida | Orlando T Group Inc.",
  metaDescription:
    "Custom Bandalux blinds and solar shades installed in South Florida. Block UV, reduce energy costs, and protect your interiors. Call (954) 625-5318.",
  heroImage: "/images/blinds.png",
  galleryImages: ["/images/blinds-2.jpg", "/images/blinds-3.jpg"],
  features: [
    {
      title: "Block UV Rays",
      body: "South Florida's intense sun fades furniture, floors, and artwork. Our solar shades block up to 99% of UV radiation while maintaining your view.",
    },
    {
      title: "Cut Energy Costs",
      body: "By reducing solar heat gain through your windows, our shades lower the load on your AC — translating to real savings on your monthly energy bills.",
    },
    {
      title: "Boost AC Efficiency",
      body: "Cooler interiors mean your AC runs less. In South Florida's climate, properly installed solar shades can make a measurable difference in comfort and cost.",
    },
    {
      title: "Bandalux Quality",
      body: "We install Bandalux solar protection systems — an international leader in high-performance window coverings used in residential and commercial projects worldwide.",
    },
    {
      title: "Preserve Natural Light",
      body: "Unlike blackout blinds, solar shades reduce heat and glare while keeping your space bright and maintaining your view to the outside.",
    },
    {
      title: "Custom Sizing",
      body: "Every blind and shade is cut and fabricated to the exact dimensions of your windows. Perfect fit, clean lines, and professional installation.",
    },
  ],
  specs: [
    "Bandalux solar protection systems",
    "UV protection up to 99%",
    "Manual or motorized operation",
    "Wide range of openness factors (1%–10%)",
    "Multiple fabric colors and textures",
    "Custom sizing for all window types",
  ],
  faqs: [
    {
      q: "What's the difference between solar shades and regular blinds?",
      a: "Solar shades are designed specifically to reduce solar heat gain and UV transmission while preserving your view. Regular blinds primarily provide privacy and light blocking.",
    },
    {
      q: "Can solar shades be motorized?",
      a: "Yes. Motorized options allow you to raise and lower your shades with a remote or app, making it easy to adjust throughout the day.",
    },
    {
      q: "Will solar shades help with my AC bills?",
      a: "Yes. By reducing solar heat gain, solar shades lower the heat load in your home — which directly reduces how hard your AC has to work.",
    },
    {
      q: "Can I still see outside with solar shades down?",
      a: "Yes. Solar shades are designed to reduce glare and UV while still allowing outward visibility. The degree of visibility depends on the openness factor you choose.",
    },
    {
      q: "Do you install blinds for commercial properties?",
      a: "Yes. We install Bandalux solar protection systems in both residential and commercial properties across South Florida.",
    },
  ],
  relatedSlugs: ["patio-enclosures", "retractable-awnings", "impact-windows"],
};

export const metadata: Metadata = {
  title: detail.metaTitle,
  description: detail.metaDescription,
  openGraph: {
    title: detail.metaTitle,
    description: detail.metaDescription,
    url: "https://orlandotgroupinc.com/products/blinds",
    siteName: "Orlando T Group Inc.",
    images: [{ url: detail.heroImage, width: 1200, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://orlandotgroupinc.com/products/blinds",
  },
};

export default function BlindsPage() {
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
