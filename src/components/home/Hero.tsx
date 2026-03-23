"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Modern Florida home at dusk"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.2] uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Protecting Florida
          <br />
          Homes & Families
        </motion.h1>
      </div>
    </section>
  );
}
