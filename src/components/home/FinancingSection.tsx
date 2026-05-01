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
    <section className="py-20 md:py-28 bg-blue">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="font-body text-white/60 uppercase tracking-[0.18em] text-sm font-medium mb-3"
          {...fadeUp(0)}
        >
          {f.eyebrow}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-white uppercase leading-[1.1] mb-5"
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
          className="font-body text-white/80 text-base leading-relaxed mb-10 max-w-xl mx-auto"
          {...fadeUp(0.1)}
        >
          {f.body}
        </motion.p>

        <motion.ul className="grid grid-cols-2 sm:grid-cols-5 mb-12" {...fadeUp(0.15)}>
          {f.perks.map((perk, i) => {
            const Icon = perkIcons[i];
            return (
              <li key={i} className="flex flex-col items-center gap-2 px-4 py-3">
                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                </span>
                <span className="font-body text-white text-[13px] text-center">{perk}</span>
              </li>
            );
          })}
        </motion.ul>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-3" {...fadeUp(0.2)}>
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 text-white font-heading font-bold rounded-[8px] text-[15px] uppercase tracking-[0.05em] hover:bg-white/10 transition-colors"
          >
            {f.ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
