"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, DollarSign, Clock, Home, Zap, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const perkIcons = [DollarSign, Clock, CheckCircle, Home, Zap];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function FinancingSection() {
  const { t } = useLanguage();
  const f = t.homeFinancing;

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy + perks */}
          <div>
            <motion.p
              className="font-body text-accent uppercase tracking-[0.18em] text-sm font-medium mb-3"
              {...fadeUp(0)}
            >
              {f.eyebrow}
            </motion.p>
            <motion.h2
              className="font-heading font-bold text-navy uppercase leading-[1.1] mb-5"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              {...fadeUp(0.05)}
            >
              {f.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h2>
            <motion.p
              className="font-body text-charcoal text-base leading-relaxed mb-8 max-w-lg"
              {...fadeUp(0.1)}
            >
              {f.body}
            </motion.p>

            <motion.ul className="space-y-3 mb-10" {...fadeUp(0.15)}>
              {f.perks.map((perk, i) => {
                const Icon = perkIcons[i];
                return (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                    </span>
                    <span className="font-body text-charcoal text-[15px]">{perk}</span>
                  </li>
                );
              })}
            </motion.ul>

            <motion.div className="flex flex-col sm:flex-row gap-3" {...fadeUp(0.2)}>
              <Link
                href="/financing"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-8 py-3.5 rounded-[8px] text-[15px] uppercase tracking-[0.05em] transition-colors"
                style={{ boxShadow: "0 4px 16px rgba(130,197,90,0.30)" }}
              >
                {f.cta}
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-blue text-blue font-heading font-bold rounded-[8px] text-[15px] uppercase tracking-[0.05em] hover:bg-blue hover:text-white transition-colors"
              >
                {f.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Right — payment table */}
          <motion.div {...fadeUp(0.1)}>
            <div
              className="bg-white rounded-[16px] overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(0,48,135,0.10)" }}
            >
              {/* Table header */}
              <div className="bg-navy px-6 py-5 text-center">
                <p className="font-heading font-bold text-white uppercase tracking-[0.04em] text-lg">
                  {f.tableHeading}
                </p>
                <p className="text-white/60 font-body text-sm mt-1">{f.tableCaption}</p>
              </div>

              {/* Column labels */}
              <div className="grid grid-cols-3 bg-blue px-6 py-3">
                {[f.tableTerms, f.tablePayment, f.tableRate].map((label) => (
                  <p
                    key={label}
                    className="font-heading font-bold text-white uppercase tracking-[0.08em] text-[11px] text-center"
                  >
                    {label}
                  </p>
                ))}
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#E8EEF6]">
                {f.rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 px-6 py-5 items-center hover:bg-surface transition-colors"
                  >
                    {/* Term with clock icon */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading font-bold text-navy text-[13px] uppercase tracking-[0.04em] text-center">
                        {row.term}
                      </span>
                    </div>

                    {/* Payment */}
                    <p className="font-heading font-bold text-navy text-xl text-center">
                      {row.payment}
                    </p>

                    {/* Rate */}
                    <p className="font-body font-semibold text-charcoal text-base text-center">
                      {row.rate}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer disclaimer */}
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
  );
}
