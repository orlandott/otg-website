import { notFound } from "next/navigation";
import { productDetails, getProductDetail } from "@/lib/data/productDetails";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";

export function generateStaticParams() {
  return productDetails.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const detail = getProductDetail(params.slug);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      url: `https://orlandotgroupinc.com/products/${detail.slug}`,
      siteName: "Orlando T Group Inc.",
      images: [{ url: detail.heroImage, width: 1200, height: 900 }],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://orlandotgroupinc.com/products/${detail.slug}`,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const detail = getProductDetail(params.slug);
  if (!detail) notFound();
  return <ProductDetailPage detail={detail} />;
}
