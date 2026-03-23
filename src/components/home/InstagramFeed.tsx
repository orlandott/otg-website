"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instagramImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop",
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl text-primary">
            Follow us on Instagram
          </h2>
          <a
            href="https://instagram.com/orlandotgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-body font-medium hover:underline"
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
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
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
