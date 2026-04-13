"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, DollarSign, Clock, CheckCircle, TrendingUp, Phone } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const benefitIcons = [DollarSign, Clock, TrendingUp, CheckCircle];

export default function FinancingPage() {
  const { t } = useLanguage();
  const p = t.pages.financing;
  const common = t.pages.common;

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
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

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-sm font-medium mb-3">
              {p.whyEyebrow}
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1] mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              {p.whyHeading}
            </h2>
            <p className="font-body text-charcoal text-base leading-relaxed">{p.whyBody}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <motion.div
                  key={b.title}
                  className="bg-surface rounded-xl p-8 border border-[#E0E0E0]"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Icon className="w-7 h-7 text-blue mb-4" strokeWidth={1.75} />
                  <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.02em] mb-3">
                    {b.title}
                  </h3>
                  <p className="font-body text-charcoal text-base leading-relaxed">{b.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-sm font-medium mb-3">
              {p.howEyebrow}
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              {p.howHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {p.steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-white text-sm">{step.step}</span>
                </div>
                <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.04em] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-charcoal text-base leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-sm font-medium mb-3">
              {p.faqEyebrow}
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              {p.faqHeading}
            </h2>
          </div>
          <div className="space-y-6">
            {p.faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border-b border-[#E0E0E0] pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <h3 className="font-heading font-bold text-navy text-base uppercase tracking-[0.02em] mb-2">
                  {faq.q}
                </h3>
                <p className="font-body text-charcoal text-base leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
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
          <p className="text-white/65 font-body text-base mb-8 max-w-xl mx-auto">{p.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-base uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
              style={{ boxShadow: "0 4px 16px rgba(130,197,90,0.30)" }}
            >
              {common.freeEstimate}
            </Link>
            <a
              href="tel:+19546255318"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/40 text-white font-heading font-bold rounded text-base uppercase tracking-[0.06em] hover:border-white hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              (954) 625-5318
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
