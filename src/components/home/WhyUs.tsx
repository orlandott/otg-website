"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Leaf } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const cardIcons = [Shield, Wrench, Leaf];
const cardHrefs = [
  "https://www.orlandotgroupinc.com/materials",
  "https://www.orlandotgroupinc.com/free-maintenance",
  "https://www.orlandotgroupinc.com/donations",
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-heading font-bold text-white uppercase tracking-[0.01em] leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            {t.whyUs.heading}
          </h2>
          <p className="mt-4 text-white/70 font-body text-sm max-w-2xl mx-auto leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.whyUs.cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <motion.div
                key={index}
                className="bg-white/5 rounded-lg p-7 border border-white/10 hover:border-white/20 transition-colors"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center text-accent mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-[20px] text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-white/65 font-body text-sm leading-relaxed mb-5">
                  {card.description}
                </p>
                <Link
                  href={cardHrefs[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-sky hover:text-white uppercase tracking-wider transition-colors"
                >
                  {t.whyUs.learnMore} &rarr;
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
