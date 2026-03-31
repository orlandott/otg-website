"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const instagramImages = [
  "/images/instagram/instagram-1.webp",
  "/images/instagram/instagram-2.webp",
  "/images/instagram/instagram-3.webp",
  "/images/instagram/instagram-4.jpg",
];

export function InstagramFeed() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-navy uppercase tracking-[0.01em] text-2xl">
            {t.instagram.heading}
          </h2>
          <a
            href="https://instagram.com/orlandotgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue font-body text-sm font-medium hover:text-sky transition-colors"
          >
            <Instagram size={16} />
            @orlandotgroup
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {instagramImages.map((src, index) => (
            <a
              key={index}
              href="https://instagram.com/orlandotgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group border border-[#E0E0E0]"
            >
              <Image
                src={src}
                alt={`${t.instagram.imageAlt} ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-400"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
