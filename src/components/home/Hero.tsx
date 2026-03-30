"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";

export function Hero() {
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

      {/* Gradient overlay — heavy navy at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />

      {/* Content — anchored at bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <motion.p
          className="font-body text-accent uppercase tracking-[0.22em] text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          South Florida&apos;s Hurricane &amp; Solar Protection Experts
        </motion.p>

        <motion.h1
          className="font-heading font-bold text-white leading-[1.05] mb-5"
          style={{ fontSize: "clamp(42px, 6.5vw, 76px)" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          PROTECT WHAT
          <br />
          MATTERS MOST
        </motion.h1>

        <motion.p
          className="font-body text-white/75 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Impact windows, doors, shutters, awnings and more.
          Licensed &amp; insured since 2006. Serving South Florida.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#consultation"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-heading font-bold uppercase tracking-[0.06em] rounded text-sm hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.35)" }}
          >
            Get a Free Consultation
          </Link>
          <a
            href="tel:+19546255318"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-heading font-bold uppercase tracking-[0.06em] rounded text-sm hover:border-white hover:bg-white/10 transition-colors"
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
          {["Since 2006", "Licensed & Insured", "1,000+ Projects", "3 Counties Served"].map((item) => (
            <span key={item} className="font-body text-white/50 text-xs uppercase tracking-wider">
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
        <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
