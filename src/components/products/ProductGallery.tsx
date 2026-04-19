"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductImage } from "@/components/ui/ProductImage";
import Image from "next/image";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const allImages = [heroImage, ...galleryImages];
  const total = allImages.length;

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? 0 : (i - 1 + total) % total)), [total]);
  const next = useCallback(() => setActiveIndex((i) => (i === null ? 0 : (i + 1) % total)), [total]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  if (galleryImages.length === 0) return null;

  return (
    <>
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
              <motion.button
                key={img}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-surface cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
                aria-label={`View ${i === 0 ? `${name} installation` : `${name} example ${i + 1}`} fullscreen`}
                {...fadeUp(i * 0.08)}
              >
                <ProductImage
                  src={img}
                  alt={i === 0 ? `${name} installation` : `${name} example ${i + 1}`}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close fullscreen image"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={22} strokeWidth={2} />
            </button>

            {/* Prev */}
            {total > 1 && (
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft size={24} strokeWidth={2} />
              </button>
            )}

            {/* Image — draggable for swipe */}
            <motion.div
              key={activeIndex}
              className="relative z-10 w-full max-w-5xl mx-14 sm:mx-20 aspect-[4/3] touch-pan-y"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              drag={total > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
            >
              <Image
                src={allImages[activeIndex]}
                alt={activeIndex === 0 ? `${name} installation` : `${name} example ${activeIndex + 1}`}
                fill
                unoptimized
                className="object-contain pointer-events-none"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Next */}
            {total > 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight size={24} strokeWidth={2} />
              </button>
            )}

            {/* Counter */}
            {total > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      i === activeIndex ? "bg-white w-4" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
