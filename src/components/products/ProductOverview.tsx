"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ProductImage } from "@/components/ui/ProductImage";

interface ProductOverviewProps {
  name: string;
  headline: string;
  description: string;
  heroImage: string;
  specs: string[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.48, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function ProductOverview({ name, headline, description, heroImage, specs }: ProductOverviewProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-surface"
            {...fadeUp()}
          >
            <ProductImage
              src={heroImage}
              alt={name}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.p
              className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-3"
              {...fadeUp(0.05)}
            >
              Overview
            </motion.p>
            <motion.h2
              className="font-heading font-bold text-navy uppercase leading-[1.1] mb-5"
              style={{ fontSize: "clamp(26px, 2.5vw, 36px)" }}
              {...fadeUp(0.1)}
            >
              {headline}
            </motion.h2>
            <motion.p
              className="font-body text-charcoal text-[15px] leading-relaxed mb-8"
              {...fadeUp(0.15)}
            >
              {description}
            </motion.p>

            <motion.ul className="space-y-2.5 mb-8" {...fadeUp(0.2)}>
              {specs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-3 font-body text-[15px] text-charcoal"
                >
                  <Check className="w-4 h-4 text-green flex-shrink-0" strokeWidth={2.5} />
                  {spec}
                </li>
              ))}
            </motion.ul>

            <motion.div className="flex flex-col sm:flex-row gap-3" {...fadeUp(0.25)}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-8 py-3.5 rounded-[8px] text-[14px] uppercase tracking-[0.06em] transition-colors shadow-cta"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+19546255318"
                className="inline-flex items-center justify-center gap-2 border border-blue text-blue hover:bg-blue hover:text-white font-heading font-bold px-8 py-3.5 rounded-[8px] text-[14px] uppercase tracking-[0.06em] transition-colors"
              >
                (954) 625-5318
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
