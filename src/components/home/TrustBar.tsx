"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2006", label: "Year Established" },
  { value: "1000+", label: "Projects Completed" },
  { value: "3", label: "Counties Served" },
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-12 md:py-16 border-y border-brand-sky/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="font-heading font-bold text-3xl md:text-4xl text-accent">
                {stat.value}
              </p>
              <p className="text-white/80 font-body text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
