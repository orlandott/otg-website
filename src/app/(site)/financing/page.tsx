"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, DollarSign, Clock, CheckCircle, TrendingUp, Phone, Home, Zap } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const benefitIcons = [DollarSign, Clock, TrendingUp, CheckCircle];
const perkIcons = [DollarSign, Clock, CheckCircle, Home, Zap];

export default function FinancingPage() {
  const { t } = useLanguage();
  const p = t.pages.financing;
  const f = t.homeFinancing;
  const common = t.pages.common;

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

      {/* Perks + Payment Summary */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Feature perks */}
            <div>
              <p className="font-body text-accent uppercase tracking-[0.18em] text-sm font-medium mb-3">
                {f.eyebrow}
              </p>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-6"
                style={{ fontSize: "clamp(24px, 2.8vw, 34px)" }}
              >
                {f.tableHeading}
              </h2>
              <ul className="space-y-4">
                {f.perks.map((perk, i) => {
                  const Icon = perkIcons[i];
                  return (
                    <motion.li
                      key={i}
                      className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-[#E0E0E0]"
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                      </span>
                      <span className="font-body font-medium text-charcoal text-[15px]">{perk}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Payment table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="bg-white rounded-[16px] overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,48,135,0.10)" }}
              >
                <div className="bg-blue px-6 py-5 text-center">
                  <p className="font-heading font-bold text-white uppercase tracking-[0.04em] text-lg">
                    {f.tableHeading}
                  </p>
                  <p className="text-white/60 font-body text-sm mt-1">{f.tableCaption}</p>
                </div>

                <div className="grid grid-cols-3 bg-muted px-6 py-3">
                  {[f.tableTerms, f.tablePayment, f.tableRate].map((label) => (
                    <p
                      key={label}
                      className="font-heading font-bold text-white uppercase tracking-[0.08em] text-[11px] text-center"
                    >
                      {label}
                    </p>
                  ))}
                </div>

                <div className="divide-y divide-[#E8EEF6]">
                  {f.rows.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 px-6 py-6 items-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue" strokeWidth={1.5} />
                        </div>
                        <span className="font-heading font-bold text-navy text-[13px] uppercase tracking-[0.04em] text-center">
                          {row.term}
                        </span>
                      </div>
                      <p className="font-heading font-bold text-navy text-2xl text-center">{row.payment}</p>
                      <p className="font-body font-semibold text-charcoal text-base text-center">{row.rate}</p>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 bg-surface border-t border-[#E8EEF6]">
                  <p className="font-body text-muted text-[12px] text-center leading-relaxed">
                    Rates are approximate and subject to credit approval. Contact us for your personalized quote.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
