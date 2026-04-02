"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "impact-windows-vs-shutters",
    category: "Buying Guide",
    date: "March 2025",
    title: "Impact Windows vs. Hurricane Shutters: Which Is Right for Your Home?",
    excerpt:
      "Both impact windows and hurricane shutters protect your home, but they work differently and suit different homeowners. Here's how to choose the right solution based on your budget, lifestyle, and property.",
    readTime: "5 min read",
  },
  {
    slug: "accordion-shutters-guide",
    category: "Product Guide",
    date: "February 2025",
    title: "Everything You Need to Know About Accordion Shutters",
    excerpt:
      "Accordion shutters are the most popular hurricane protection choice in South Florida for good reason. We break down how they work, what they cost, and why so many homeowners choose them over other shutter types.",
    readTime: "4 min read",
  },
  {
    slug: "insurance-savings-impact-windows",
    category: "Home Insurance",
    date: "January 2025",
    title: "How Impact Windows Can Lower Your Homeowner's Insurance Premium",
    excerpt:
      "Installing impact-rated windows and doors can qualify you for significant wind insurance discounts in Florida. Learn how the savings work and what documentation your insurer needs.",
    readTime: "4 min read",
  },
  {
    slug: "hurricane-prep-checklist",
    category: "Hurricane Season",
    date: "December 2024",
    title: "South Florida Hurricane Prep Checklist: Protect Your Home Before the Season",
    excerpt:
      "Hurricane season starts June 1st. Don't wait until a storm is in the forecast. This practical checklist covers everything you need to do to make sure your home is ready — from windows and doors to backup power.",
    readTime: "6 min read",
  },
  {
    slug: "retractable-awnings-benefits",
    category: "Product Guide",
    date: "November 2024",
    title: "5 Reasons to Add a Retractable Awning to Your South Florida Home",
    excerpt:
      "A motorized retractable awning does more than provide shade. It can cut cooling costs, protect outdoor furniture, expand your usable living space, and add real curb appeal. Here's what to know before buying.",
    readTime: "3 min read",
  },
  {
    slug: "florida-building-code-impact-products",
    category: "Regulations",
    date: "October 2024",
    title: "Florida Building Code & Impact Products: What Homeowners Need to Know",
    excerpt:
      "Florida has some of the strictest building codes in the country when it comes to wind-resistant construction. Understanding what's required — and what that means for permits — can save you time and money on your next project.",
    readTime: "5 min read",
  },
  {
    slug: "patio-enclosure-guide",
    category: "Product Guide",
    date: "September 2024",
    title: "How to Choose the Right Patio Enclosure for Your Florida Home",
    excerpt:
      "A patio enclosure can transform an underused outdoor space into a year-round living area. From screen rooms to glass-enclosed lanais, here's everything you need to know about the options available.",
    readTime: "4 min read",
  },
  {
    slug: "garage-door-hurricane-rating",
    category: "Buying Guide",
    date: "August 2024",
    title: "Why Your Garage Door Is Your Home's Biggest Hurricane Vulnerability",
    excerpt:
      "Most homeowners focus on windows and doors when planning hurricane protection — but the garage door is often the weakest point. An impact-rated garage door can prevent catastrophic structural failure during a storm.",
    readTime: "4 min read",
  },
];

const categories = ["All", "Buying Guide", "Product Guide", "Hurricane Season", "Home Insurance", "Regulations"];

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">Blog</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hurricane &amp; Home<br />Protection Tips
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert guides, product comparisons, and storm season advice from the Orlando T Group team.
          </motion.p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-[#E0E0E0] py-5 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-xs uppercase tracking-wider border transition-colors ${
                  cat === "All"
                    ? "bg-blue text-white border-navy"
                    : "bg-white text-charcoal border-[#E0E0E0] hover:border-navy hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden border border-[#E0E0E0] mb-10"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent font-body text-xs uppercase tracking-wider rounded-full">
                  {posts[0].category}
                </span>
                <span className="font-body text-muted text-xs flex items-center gap-1.5">
                  <Calendar size={12} />
                  {posts[0].date}
                </span>
                <span className="font-body text-muted text-xs">{posts[0].readTime}</span>
              </div>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-4"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                {posts[0].title}
              </h2>
              <p className="font-body text-charcoal text-sm leading-relaxed mb-6 max-w-3xl">
                {posts[0].excerpt}
              </p>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="inline-flex items-center gap-2 text-blue font-body font-medium text-sm hover:gap-3 transition-all"
              >
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden border border-[#E0E0E0] flex flex-col"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="px-2.5 py-0.5 bg-surface text-charcoal font-body text-[11px] uppercase tracking-wider rounded-full border border-[#E0E0E0]">
                      {post.category}
                    </span>
                    <span className="font-body text-muted text-[11px] flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy uppercase text-sm leading-[1.3] tracking-[0.02em] mb-3 flex-1">
                    {post.title}
                  </h3>
                  <p className="font-body text-charcoal text-xs leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-blue font-body text-xs font-medium hover:gap-2.5 transition-all"
                    >
                      Read <ArrowRight size={12} />
                    </Link>
                    <span className="font-body text-muted text-xs">{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/65 font-body text-sm mb-8">
            Schedule a free consultation and let our team help protect what matters most.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-sm uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            Get Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
