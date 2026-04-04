"use client";

import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Product } from "@/types";

interface ProductSectionProps {
  product: Product;
  index: number;
}

export function ProductSection({ product, index }: ProductSectionProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.section
      id={product.slug}
      className="scroll-mt-24 py-16 md:py-24 border-b border-[#E0E0E0] last:border-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Image */}
          <div className={isReversed ? "lg:order-2" : ""}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface">
              <ProductImage
                src={product.imagePath}
                alt={product.name}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className={isReversed ? "lg:order-1" : ""}>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1] mb-3"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              {product.name}
            </h2>
            <p className="text-muted font-body text-base mb-6 leading-relaxed">
              {product.shortDescription}
            </p>
            <ul className="space-y-3 mb-8">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-charcoal font-body text-base"
                >
                  <Check className="w-4 h-4 text-blue flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-7 py-3.5 rounded text-base uppercase tracking-[0.05em] hover:bg-accent-hover transition-colors"
              style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.25)" }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
