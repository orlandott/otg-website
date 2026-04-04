"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  CheckCircle,
  Award,
  Layers,
  Wind,
  Droplets,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const standardIcons = [Award, Shield, Layers, Droplets];

const brandAccents: Record<string, string> = {
  "ES Windows":       "bg-blue/10 text-blue border-blue/20",
  "PGT Innovations":  "bg-sky/10 text-sky border-sky/20",
  "CGI Windows & Doors": "bg-navy/8 text-navy border-navy/15",
  Lawson:             "bg-green/10 text-green border-green/20",
  Bandalux:           "bg-accent/10 text-accent border-accent/20",
  "South Evolution":  "bg-blue/10 text-blue border-blue/20",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function MaterialsPage() {
  const { t } = useLanguage();
  const p = t.pages.materials;
  const common = t.pages.common;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              {common.home}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{p.breadcrumb}</span>
          </nav>

          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-8 h-8 text-white flex-shrink-0" strokeWidth={1.75} />
            <h1
              className="font-heading font-bold text-white uppercase leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              {p.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            className="mt-2 text-white/70 font-body text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Brand grid */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="brands-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
            {...fadeUp()}
          >
            {p.brandsEyebrow}
          </motion.p>
          <motion.h2
            id="brands-heading"
            className="font-heading font-bold text-navy uppercase text-center mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            {...fadeUp(0.05)}
          >
            {p.brandsHeading}
          </motion.h2>
          <motion.p
            className="font-body text-charcoal text-base max-w-2xl mx-auto text-center leading-relaxed mb-14"
            {...fadeUp(0.1)}
          >
            {p.brandsBody}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.brands.map((brand, i) => {
              const accentClass =
                brandAccents[brand.name] ?? "bg-blue/10 text-blue border-blue/20";
              return (
                <motion.div
                  key={brand.name}
                  className="bg-surface rounded-[12px] p-7 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  {...fadeUp(i * 0.07)}
                >
                  <span
                    className={`inline-block font-body font-semibold text-[11px] uppercase tracking-[0.1em] px-3 py-1 rounded-[4px] border mb-4 ${accentClass}`}
                  >
                    {brand.category}
                  </span>
                  <h3 className="font-heading font-semibold text-navy text-[20px] mb-3 leading-snug">
                    {brand.name}
                  </h3>
                  <p className="font-body text-charcoal text-[15px] leading-relaxed">
                    {brand.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 md:py-24 bg-surface" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
            {...fadeUp()}
          >
            {p.standardsEyebrow}
          </motion.p>
          <motion.h2
            id="standards-heading"
            className="font-heading font-bold text-navy uppercase text-center mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            {...fadeUp(0.05)}
          >
            {p.standardsHeading}
          </motion.h2>
          <motion.p
            className="font-body text-charcoal text-base max-w-2xl mx-auto text-center leading-relaxed mb-14"
            {...fadeUp(0.1)}
          >
            {p.standardsBody}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.standards.map((standard, i) => {
              const Icon = standardIcons[i] ?? Shield;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-[12px] p-7 border border-border"
                  {...fadeUp(i * 0.08)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[8px] bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-blue" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy text-[20px] mb-2">
                        {standard.title}
                      </h3>
                      <p className="font-body text-charcoal text-[15px] leading-relaxed">
                        {standard.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wind-resistance callout strip */}
      <section className="py-12 bg-bright-green" aria-label="Certification callout">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              className="flex items-center gap-4"
              {...fadeUp()}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Wind className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <p className="font-body text-white text-base leading-relaxed max-w-xl">
                All products we carry are rated for{" "}
                <span className="font-semibold text-white">
                  hurricane-force winds up to 200+ mph
                </span>{" "}
                and tested to Miami-Dade County&apos;s large missile impact standards.
              </p>
            </motion.div>
            <motion.div className="flex-shrink-0" {...fadeUp(0.1)}>
              <div className="flex items-center gap-3">
                {["NOA Certified", "FL Building Code", "Energy Star"].map((label) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white font-body font-medium text-xs px-3 py-1.5 rounded-[4px] uppercase tracking-[0.08em]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            {...fadeUp()}
          >
            {p.ctaHeading}
          </motion.h2>
          <motion.p
            className="font-body text-white/70 text-lg mb-8 leading-relaxed"
            {...fadeUp(0.1)}
          >
            {p.ctaSubtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeUp(0.2)}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-10 py-4 rounded-[8px] text-base uppercase tracking-[0.06em] transition-colors shadow-cta"
            >
              {common.freeEstimate}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-heading font-bold px-10 py-4 rounded-[8px] text-base uppercase tracking-[0.06em] hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              View Our Products
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
