import type { MetadataRoute } from "next";
import { blogPosts, getPostDate } from "@/lib/data/blogPosts";
import { products } from "@/lib/data/products";
import { SITE_URL } from "@/lib/siteUrl";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/products", priority: 0.9 },
  ...products.map((p) => ({ path: p.href, priority: 0.8 })),
  { path: "/contact", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/financing", priority: 0.7 },
  { path: "/free-maintenance", priority: 0.6 },
  { path: "/materials", priority: 0.6 },
  { path: "/testimonials", priority: 0.6 },
  { path: "/refer-a-friend", priority: 0.5 },
  { path: "/donations", priority: 0.5 },
  { path: "/blog", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly",
      priority,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: getPostDate(post),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
