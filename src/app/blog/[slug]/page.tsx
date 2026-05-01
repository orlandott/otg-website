import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/lib/data/blogPosts";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://www.orlandotgroupinc.com";

  return {
    title: `${post.title} | Orlando T Group`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Orlando T Group Inc.",
      type: "article",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
