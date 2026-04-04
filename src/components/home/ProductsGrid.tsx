"use client";

import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { products } from "@/lib/data/products";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Product } from "@/types";

function ProductCard({
  product,
  index,
  language,
}: {
  product: Product;
  index: number;
  language: string;
}) {
  const name = language === "es" && product.nameEs ? product.nameEs : product.name;
  const features =
    language === "es" && product.featuresEs ? product.featuresEs : product.features;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <Link
        href={product.href}
        className="group flex flex-col bg-white rounded-lg overflow-hidden border border-[#E0E0E0] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <ProductImage
            src={product.imagePath}
            alt={name}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading font-semibold text-[20px] text-navy mb-4 leading-snug">
            {name}
          </h3>
          <ul className="space-y-2 flex-1">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-charcoal text-base font-body"
              >
                <Check className="w-4 h-4 text-blue flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProductsGrid() {
  const { t, language } = useLanguage();

  return (
    <section id="products" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-heading font-bold text-navy uppercase tracking-[0.01em] leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            {t.products.heading}
          </h2>
          <p className="mt-3 font-body text-muted text-base max-w-lg mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              language={language}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue text-blue font-heading font-bold rounded text-base uppercase tracking-wide hover:bg-blue hover:text-white transition-colors"
          >
            {t.products.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
