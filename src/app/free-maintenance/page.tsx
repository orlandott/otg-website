"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Wrench, CheckCircle, Calendar, ClipboardCheck, Home } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const stepIcons = [Home, Calendar, ClipboardCheck];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function FreeMaintenancePage() {
  const { t } = useLanguage();
  const p = t.pages.freeMaintenance;
  const common = t.pages.common;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-white/60 text-xs font-body uppercase tracking-wider mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">{common.home}</Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{p.breadcrumb}</span>
          </nav>

          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Wrench className="w-8 h-8 text-accent flex-shrink-0" strokeWidth={1.75} />
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
            className="mt-2 text-white/70 font-body text-base max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.subtitle}
          </motion.p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="whats-included-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="font-body text-xs text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
            {...fadeUp()}
          >
            {p.whatEyebrow}
          </motion.p>
          <motion.h2
            id="whats-included-heading"
            className="font-heading font-bold text-navy uppercase text-center mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            {...fadeUp(0.05)}
          >
            {p.whatHeading}
          </motion.h2>
          <motion.p
            className="font-body text-charcoal text-base max-w-2xl mx-auto text-center leading-relaxed mb-14"
            {...fadeUp(0.1)}
          >
            {p.whatBody}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.coverageItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-surface rounded-[12px] p-7 border border-border"
                {...fadeUp(i * 0.08)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench className="w-5 h-5 text-blue" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-[18px] mb-2">{item.title}</h3>
                    <p className="font-body text-charcoal text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-surface" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="font-body text-xs text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
            {...fadeUp()}
          >
            {p.howEyebrow}
          </motion.p>
          <motion.h2
            id="how-it-works-heading"
            className="font-heading font-bold text-navy uppercase text-center mb-14"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            {...fadeUp(0.05)}
          >
            {p.howHeading}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  className="text-center flex flex-col items-center"
                  {...fadeUp(i * 0.1)}
                >
                  <div className="w-14 h-14 rounded-full bg-blue flex items-center justify-center mb-5 shadow-md">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div className="font-heading font-bold text-blue text-xs uppercase tracking-[0.1em] mb-1">{step.step}</div>
                  <h3 className="font-heading font-semibold text-navy text-[18px] mb-3">{step.title}</h3>
                  <p className="font-body text-charcoal text-sm leading-relaxed max-w-xs">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products covered + Why it matters side by side */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Products covered */}
            <motion.div {...fadeUp()}>
              <p className="font-body text-xs text-blue uppercase tracking-[0.1em] font-semibold mb-2">{p.productsEyebrow}</p>
              <h2
                className="font-heading font-bold text-navy uppercase mb-4"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                {p.productsHeading}
              </h2>
              <p className="font-body text-charcoal text-sm leading-relaxed mb-7">{p.productsBody}</p>
              <ul className="space-y-3">
                {p.products.map((product, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green flex-shrink-0" strokeWidth={2} />
                    <span className="font-body text-charcoal text-sm">{product}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why it matters */}
            <motion.div {...fadeUp(0.1)}>
              <p className="font-body text-xs text-blue uppercase tracking-[0.1em] font-semibold mb-2">{p.whyEyebrow}</p>
              <h2
                className="font-heading font-bold text-navy uppercase mb-4"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                {p.whyHeading}
              </h2>
              <p className="font-body text-charcoal text-sm leading-relaxed mb-7">{p.whyBody}</p>
              <ul className="space-y-3">
                {p.whyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-body text-charcoal text-sm">{point}</span>
                  </li>
                ))}
              </ul>
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
            className="font-body text-white/70 text-base mb-8 leading-relaxed"
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
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-10 py-4 rounded-[8px] text-sm uppercase tracking-[0.06em] transition-colors shadow-cta"
            >
              {common.freeEstimate}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-heading font-bold px-10 py-4 rounded-[8px] text-sm uppercase tracking-[0.06em] hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              View Our Products
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
