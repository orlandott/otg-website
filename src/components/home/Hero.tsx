"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  const badges = [t.hero.badge1, t.hero.badge2, t.hero.badge3, t.hero.badge4];

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.png"
        alt="Modern Florida home at dusk"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/15" />

      {/* Content — anchored at bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <motion.p
          className="font-body text-white uppercase tracking-[0.22em] text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-heading font-bold text-white leading-[1.05] mb-5"
          style={{ fontSize: "clamp(42px, 6.5vw, 76px)" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {t.hero.headline1}
          <br />
          {t.hero.headline2}
        </motion.h1>

        <motion.p
          className="font-body text-white text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#consultation"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-heading font-bold uppercase tracking-[0.06em] rounded text-base hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(17,109,255,0.35)" }}
          >
            {t.hero.ctaConsultation}
          </Link>
          <a
            href="tel:+19546255318"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-heading font-bold uppercase tracking-[0.06em] rounded text-base hover:border-white hover:bg-white/10 transition-colors"
          >
            <Phone size={15} />
            (954) 625-5318
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap gap-x-6 gap-y-2 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {badges.map((item, i) => (
            <span key={i} className="font-body text-white text-sm uppercase tracking-wider">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <button
          onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to products"
          className="cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
