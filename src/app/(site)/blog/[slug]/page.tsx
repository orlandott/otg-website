import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getPostDate, blogPosts } from "@/lib/data/blogPosts";
import { SITE_URL } from "@/lib/siteUrl";
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

  return {
    title: `${post.title} | Orlando T Group`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
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
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: getPostDate(post).toISOString().slice(0, 10),
    articleSection: post.category,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Orlando T Group Inc.",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Orlando T Group Inc.",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
