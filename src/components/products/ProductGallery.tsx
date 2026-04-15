"use client";

import { motion } from "framer-motion";
import { ProductImage } from "@/components/ui/ProductImage";

interface ProductGalleryProps {
  name: string;
  heroImage: string;
  galleryImages: string[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.48, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function ProductGallery({ name, heroImage, galleryImages }: ProductGalleryProps) {
  if (galleryImages.length === 0) return null;

  const allImages = [heroImage, ...galleryImages];

  return (
    <section className="py-16 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="gallery-heading"
          className="font-heading font-bold text-navy uppercase text-center mb-10"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
          {...fadeUp()}
        >
          Product Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allImages.map((img, i) => (
            <motion.div
              key={img}
              className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-surface"
              {...fadeUp(i * 0.08)}
            >
              <ProductImage
                src={img}
                alt={i === 0 ? `${name} installation` : `${name} example ${i + 1}`}
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
