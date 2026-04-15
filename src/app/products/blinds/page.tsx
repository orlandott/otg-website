import type { Metadata } from "next";
import { getProductDetail } from "@/lib/data/productDetails";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";

const detail = getProductDetail("blinds")!;

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
  return <ProductDetailPage detail={detail} />;
}
