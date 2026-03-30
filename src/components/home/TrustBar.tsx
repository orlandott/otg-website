"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2006", label: "Year Established" },
  { value: "1,000+", label: "Projects Completed" },
  { value: "3", label: "Counties Served" },
];

export function TrustBar() {
  return (
    <section className="bg-blue py-14 md:py-18">
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
              key={stat.label}
              className="space-y-1.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="font-heading font-bold text-accent leading-none"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
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
