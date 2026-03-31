"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TrustBar() {
  const { t } = useLanguage();

  const stats = [
    { id: "established", value: "2006", label: t.trustBar.stat1Label },
    { id: "projects", value: "1,000+", label: t.trustBar.stat2Label },
    { id: "counties", value: "3", label: t.trustBar.stat3Label },
  ];

  return (
    <section className="bg-navy py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="space-y-1.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p
                className="font-heading font-bold text-white leading-none"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
              >
                {stat.value}
              </p>
              <p className="text-white/75 font-body text-xs uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
