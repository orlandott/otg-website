"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { blogPosts } from "@/lib/data/blogPosts";

const CATEGORY_KEYS = [
  "All",
  "Buying Guide",
  "Product Guide",
  "Hurricane Season",
  "Home Insurance",
  "Regulations",
] as const;

type CategoryKey = (typeof CATEGORY_KEYS)[number];

export default function BlogPage() {
  const { t } = useLanguage();
  const p = t.pages.blog;
  const common = t.pages.common;
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("All");

  const categoryLabels = p.categoryLabels as Record<string, string>;
  const postMeta = p.postMeta as Record<string, { title: string; excerpt: string; date: string } | undefined>;

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  const featuredPost = activeCategory === "All" ? filteredPosts[0] : null;
  const gridPosts = activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts;

  return (
    <>
      <section className="pt-44 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">{common.home}</Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{p.breadcrumb}</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {p.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="bg-white border-b border-[#E0E0E0] py-5 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
            {CATEGORY_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-xs uppercase tracking-wider border transition-colors ${
                  activeCategory === key
                    ? "bg-blue text-white border-blue"
                    : "bg-white text-charcoal border-[#E0E0E0] hover:border-navy hover:text-navy"
                }`}
              >
                {categoryLabels[key]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredPost && (
            <div
              className="bg-white rounded-xl overflow-hidden border border-[#E0E0E0] mb-10"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-body text-sm uppercase tracking-wider rounded-full">
                    {categoryLabels[featuredPost.category] ?? featuredPost.category}
                  </span>
                  <span className="font-body text-muted text-sm flex items-center gap-1.5">
                    <Calendar size={12} />
                    {postMeta[featuredPost.slug]?.date ?? featuredPost.date}
                  </span>
                  <span className="font-body text-muted text-sm">
                    {parseInt(featuredPost.readTime)} {p.minuteRead}
                  </span>
                </div>
                <h2
                  className="font-heading font-bold text-navy uppercase leading-[1.1] mb-4"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                >
                  {postMeta[featuredPost.slug]?.title ?? featuredPost.title}
                </h2>
                <p className="font-body text-charcoal text-base leading-relaxed mb-6 max-w-3xl">
                  {postMeta[featuredPost.slug]?.excerpt ?? featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-blue font-body font-medium text-base hover:gap-3 transition-all"
                >
                  {p.readArticle} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl overflow-hidden border border-[#E0E0E0] flex flex-col"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="px-2.5 py-0.5 bg-surface text-charcoal font-body text-[11px] uppercase tracking-wider rounded-full border border-[#E0E0E0]">
                        {categoryLabels[post.category] ?? post.category}
                      </span>
                      <span className="font-body text-muted text-[11px] flex items-center gap-1">
                        <Calendar size={11} />
                        {postMeta[post.slug]?.date ?? post.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-navy uppercase text-base leading-[1.3] tracking-[0.02em] mb-3 flex-1">
                      {postMeta[post.slug]?.title ?? post.title}
                    </h3>
                    <p className="font-body text-charcoal text-sm leading-relaxed mb-5 line-clamp-3">
                      {postMeta[post.slug]?.excerpt ?? post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-blue font-body text-sm font-medium hover:gap-2.5 transition-all"
                      >
                        {p.read} <ArrowRight size={12} />
                      </Link>
                      <span className="font-body text-muted text-sm">
                        {parseInt(post.readTime)} {p.minuteRead}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center font-body text-muted py-16">
              {p.noArticles}
            </p>
          )}
        </div>
      </section>

      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            {p.ctaHeading}
          </h2>
          <p className="text-white/65 font-body text-base mb-8">{p.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-base uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(130,197,90,0.30)" }}
          >
            {common.freeEstimate}
          </Link>
        </div>
      </section>
    </>
  );
}
