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
      className="scroll-mt-24 py-16 md:py-24 border-b border-gray-200 last:border-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={isReversed ? "lg:order-2" : ""}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
              <ProductImage
                src={product.imagePath}
                alt={product.name}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className={isReversed ? "lg:order-1" : ""}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              {product.name.toUpperCase()}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-body text-lg mb-6">
              {product.shortDescription}
            </p>
            <ul className="space-y-2 mb-8">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-foreground font-body"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors uppercase"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
