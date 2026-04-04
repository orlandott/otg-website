"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function OrderTrackingBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-white/60 text-sm uppercase tracking-[0.18em] mb-3">
            {t.orderTracking.eyebrow}
          </p>
          <h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-6"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            {t.orderTracking.heading}
          </h2>
          <p className="text-white/65 font-body text-base mb-8">
            {t.orderTracking.subtitle}
          </p>
          <Link
            href="https://titan.orlandotgroupinc.com/status-tracking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-white font-heading font-bold px-10 py-4 rounded uppercase tracking-[0.06em] text-base hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            {t.orderTracking.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
