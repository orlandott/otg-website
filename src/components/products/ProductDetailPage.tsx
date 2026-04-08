"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/data/products";
import type { ProductDetail } from "@/lib/data/productDetails";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.48, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-border last:border-0"
      {...fadeUp(index * 0.06)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-navy text-[15px] leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-blue flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      {open && (
        <p className="font-body text-charcoal text-[15px] leading-relaxed pb-5 pr-8">
          {faq.a}
        </p>
      )}
    </motion.div>
  );
}

interface Props {
  detail: ProductDetail;
}

export function ProductDetailPage({ detail }: Props) {
  const related = products.filter((p) => detail.relatedSlugs.includes(p.slug));

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{detail.name}</span>
          </nav>

          <motion.p
            className="font-body text-sm text-white uppercase tracking-[0.1em] font-semibold mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Orlando T Group · South Florida
          </motion.p>

          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {detail.name}
          </motion.h1>

          <motion.p
            className="text-white/70 font-body text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {detail.headline}
          </motion.p>
        </div>
      </section>

      {/* ── Overview: image + description + specs ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Main image */}
            <motion.div
              className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-surface"
              {...fadeUp()}
            >
              <Image
                src={detail.heroImage}
                alt={detail.name}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Content */}
            <div>
              <motion.p
                className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-3"
                {...fadeUp(0.05)}
              >
                Overview
              </motion.p>
              <motion.h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-5"
                style={{ fontSize: "clamp(26px, 2.5vw, 36px)" }}
                {...fadeUp(0.1)}
              >
                {detail.headline}
              </motion.h2>
              <motion.p
                className="font-body text-charcoal text-[15px] leading-relaxed mb-8"
                {...fadeUp(0.15)}
              >
                {detail.description}
              </motion.p>

              {/* Specs */}
              <motion.ul className="space-y-2.5 mb-8" {...fadeUp(0.2)}>
                {detail.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-center gap-3 font-body text-[15px] text-charcoal"
                  >
                    <Check className="w-4 h-4 text-green flex-shrink-0" strokeWidth={2.5} />
                    {spec}
                  </li>
                ))}
              </motion.ul>

              <motion.div className="flex flex-col sm:flex-row gap-3" {...fadeUp(0.25)}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-8 py-3.5 rounded-[8px] text-[14px] uppercase tracking-[0.06em] transition-colors shadow-cta"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+19546255318"
                  className="inline-flex items-center justify-center gap-2 border border-blue text-blue hover:bg-blue hover:text-white font-heading font-bold px-8 py-3.5 rounded-[8px] text-[14px] uppercase tracking-[0.06em] transition-colors"
                >
                  (954) 625-5318
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-16 md:py-24 bg-surface" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
            {...fadeUp()}
          >
            Why Choose This Product
          </motion.p>
          <motion.h2
            id="features-heading"
            className="font-heading font-bold text-navy uppercase text-center mb-14"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            {...fadeUp(0.05)}
          >
            Key Features & Benefits
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-[12px] p-7 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                {...fadeUp(i * 0.07)}
              >
                <div className="w-8 h-8 rounded-[6px] bg-blue/10 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-blue" strokeWidth={2.5} />
                </div>
                <h3 className="font-heading font-semibold text-navy text-[18px] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-body text-charcoal text-[14px] leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {detail.galleryImages.length > 0 && (
        <section className="py-16 bg-white" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              id="gallery-heading"
              className="font-heading font-bold text-navy uppercase text-center mb-10"
              style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              {...fadeUp()}
            >
              Product Gallery
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Hero image as first gallery item */}
              <motion.div
                className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-surface"
                {...fadeUp(0)}
              >
                <Image
                  src={detail.heroImage}
                  alt={`${detail.name} installation`}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              {detail.galleryImages.map((img, i) => (
                <motion.div
                  key={img}
                  className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-surface"
                  {...fadeUp((i + 1) * 0.08)}
                >
                  <Image
                    src={img}
                    alt={`${detail.name} example ${i + 2}`}
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Trust strip ── */}
      <section className="py-10 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "Licensed & Insured",
              "Miami-Dade NOA Certified",
              "3 Years Free Maintenance",
              "Free In-Home Estimate",
              "Permit Handling Included",
            ].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 font-body font-medium text-[13px] text-white/75 uppercase tracking-[0.07em]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-surface" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
            {...fadeUp()}
          >
            Common Questions
          </motion.p>
          <motion.h2
            id="faq-heading"
            className="font-heading font-bold text-navy uppercase text-center mb-12"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            {...fadeUp(0.05)}
          >
            FAQ — {detail.name}
          </motion.h2>

          <div className="bg-white rounded-[12px] border border-border px-6 divide-y-0">
            {detail.faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-white" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              id="related-heading"
              className="font-heading font-bold text-navy uppercase text-center mb-10"
              style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              {...fadeUp()}
            >
              Related Products
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((product, i) => (
                <motion.div key={product.id} {...fadeUp(i * 0.08)}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group flex flex-col bg-white rounded-[12px] overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading font-semibold text-navy text-[18px] mb-2">
                        {product.name}
                      </h3>
                      <p className="font-body text-muted text-[14px] flex-1">
                        {product.shortDescription}
                      </p>
                      <span className="mt-4 font-body font-semibold text-blue text-[13px] uppercase tracking-wide group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            {...fadeUp()}
          >
            Ready to Protect Your Home?
          </motion.h2>
          <motion.p
            className="font-body text-white/70 text-lg mb-8 leading-relaxed max-w-xl mx-auto"
            {...fadeUp(0.1)}
          >
            Get a free in-home consultation with no obligation. Our team will assess your home and walk you through the best options for your budget.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeUp(0.2)}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-10 py-4 rounded-[8px] text-base uppercase tracking-[0.06em] transition-colors shadow-cta"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-heading font-bold px-10 py-4 rounded-[8px] text-base uppercase tracking-[0.06em] hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
