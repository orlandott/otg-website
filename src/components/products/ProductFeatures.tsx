"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  body: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.48, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-surface" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
          {...fadeUp()}
        >
          Why Choose This Product
        </motion.p>
        <motion.h2
          id="features-heading"
          className="font-heading font-bold text-navy uppercase text-center mb-14"
          style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          {...fadeUp(0.05)}
        >
          Key Features & Benefits
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-[12px] p-7 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              {...fadeUp(i * 0.07)}
            >
              <div className="w-8 h-8 rounded-[6px] bg-blue/10 flex items-center justify-center mb-4">
                <Check className="w-4 h-4 text-blue" strokeWidth={2.5} />
              </div>
              <h3 className="font-heading font-semibold text-navy text-[18px] mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="font-body text-charcoal text-[14px] leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
