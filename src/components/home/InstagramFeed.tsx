"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instagramImages = [
  "/images/instagram/instagram-1.webp",
  "/images/instagram/instagram-2.webp",
  "/images/instagram/instagram-3.webp",
  "/images/instagram/instagram-4.jpg",
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl text-secondary">
            Follow us on Instagram
          </h2>
          <a
            href="https://instagram.com/orlandotgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-steel font-body font-medium hover:underline"
          >
            @orlandotgroup
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
              className="relative aspect-square overflow-hidden rounded-lg group border border-brand-sky/20"
            >
              <Image
                src={src}
                alt={`Instagram project thumbnail ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
