"use client";

import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { products } from "@/lib/data/products";
import type { Product } from "@/types";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={product.href}
        className="block bg-white dark:bg-dark-section rounded-lg overflow-hidden border border-gray-200 dark:border-dark-section hover:shadow-lg transition-all duration-300 h-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <ProductImage
            src={product.imagePath}
            alt={product.name}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-lg text-primary uppercase mb-4">
            {product.name}
          </h3>
          <ul className="space-y-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-foreground/90 text-sm font-body"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
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
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            PRODUCTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
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
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-heading font-bold rounded hover:bg-primary hover:text-white transition-colors uppercase"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
