"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductImage } from "@/components/ui/ProductImage";
import { products } from "@/lib/data/products";

interface ProductRelatedProps {
  relatedSlugs: string[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.48, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function ProductRelated({ relatedSlugs }: ProductRelatedProps) {
  const related = products.filter((p) => relatedSlugs.includes(p.slug));
  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="related-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="related-heading"
          className="font-heading font-bold text-navy uppercase text-center mb-10"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
          {...fadeUp()}
        >
          Related Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((product, i) => (
            <motion.div key={product.id} {...fadeUp(i * 0.08)}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex flex-col bg-white rounded-[12px] overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <ProductImage
                    src={product.imagePath}
                    alt={product.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-navy text-[18px] mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-muted text-[14px] flex-1">
                    {product.shortDescription}
                  </p>
                  <span className="mt-4 font-body font-semibold text-blue text-[13px] uppercase tracking-wide group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
