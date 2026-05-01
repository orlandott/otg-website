"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { BlogPost, BlogSection } from "@/lib/data/blogPosts";
import { blogPosts } from "@/lib/data/blogPosts";

interface Props {
  post: BlogPost;
}

function SectionBlock({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="font-heading font-bold text-navy uppercase text-[22px] leading-[1.2] tracking-[0.02em] mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-heading font-bold text-navy text-[17px] leading-[1.3] mt-7 mb-3">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="font-body text-charcoal text-[16px] leading-[1.75] mb-5">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-2.5">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-charcoal text-[15px] leading-[1.65]">
              <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-8 bg-blue/5 border-l-4 border-blue rounded-r-xl p-6">
          <p className="font-body text-navy text-[15px] leading-[1.7] m-0">
            {section.text}
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostClient({ post }: Props) {
  const { t } = useLanguage();
  const p = t.pages.blog;
  const common = t.pages.common;

  const related = blogPosts
    .filter((b) => b.slug !== post.slug && b.category === post.category)
    .slice(0, 2)
    .concat(
      blogPosts.filter(
        (b) => b.slug !== post.slug && b.category !== post.category
      ).slice(0, Math.max(0, 2 - blogPosts.filter((b) => b.slug !== post.slug && b.category === post.category).length))
    )
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-14 md:pt-36 md:pb-20 bg-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {common.home}
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-white transition-colors">
              {p.breadcrumb}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90 truncate max-w-[200px]">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-white/15 text-white/90 font-body text-xs uppercase tracking-wider rounded-full">
              {post.category}
            </span>
          </div>

          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05] mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-5 text-white/60 font-body text-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-surface py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Main content */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Lead / excerpt */}
              <p className="font-body text-charcoal text-[17px] leading-[1.8] mb-6 pb-6 border-b border-[#E0E0E0] font-medium">
                {post.excerpt}
              </p>

              {/* Article sections */}
              {post.sections.map((section, i) => (
                <SectionBlock key={i} section={section} />
              ))}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-[#E0E0E0]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-blue font-body font-medium text-sm hover:gap-3 transition-all"
                >
                  <ArrowLeft size={14} />
                  {p.backToBlog}
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              className="space-y-6 lg:sticky lg:top-28"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* CTA card */}
              <div className="bg-blue rounded-xl p-6 text-white">
                <p className="font-heading font-bold text-white uppercase text-[17px] leading-[1.2] mb-2">
                  Ready to protect your home?
                </p>
                <p className="font-body text-white/75 text-[13px] leading-[1.6] mb-5">
                  Free in-home consultation. No obligation. Licensed & insured since 2006.
                </p>
                <Link
                  href="/contact"
                  className="block text-center font-heading font-bold text-[13px] uppercase tracking-[0.05em] bg-accent text-white rounded-[8px] px-5 py-3 hover:bg-accent-hover transition-colors"
                  style={{ boxShadow: "0 4px 12px rgba(130,197,90,0.30)" }}
                >
                  {common.freeEstimate}
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-muted mb-3">
                    More Articles
                  </p>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="flex gap-3 bg-white border border-[#E0E0E0] rounded-xl p-4 hover:border-blue/40 hover:shadow-sm transition-all group"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-body text-[10px] uppercase tracking-wider text-muted block mb-1">
                            {r.category}
                          </span>
                          <p className="font-body font-medium text-navy text-[13px] leading-[1.4] line-clamp-2 group-hover:text-blue transition-colors">
                            {r.title}
                          </p>
                        </div>
                        <ArrowRight size={14} className="flex-shrink-0 mt-1 text-muted group-hover:text-blue transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* CTA section */}
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
