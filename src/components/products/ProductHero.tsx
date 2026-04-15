"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ProductHeroProps {
  name: string;
  headline: string;
}

export function ProductHero({ name, headline }: ProductHeroProps) {
  return (
    <section className="pt-44 pb-16 md:pt-36 md:pb-24 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <ChevronRight size={14} />
          <span className="text-white/90">{name}</span>
        </nav>

        <motion.p
          className="font-body text-sm text-white uppercase tracking-[0.1em] font-semibold mb-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Orlando T Group · South Florida
        </motion.p>

        <motion.h1
          className="font-heading font-bold text-white uppercase leading-[1.05] mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="text-white/70 font-body text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {headline}
        </motion.p>
      </div>
    </section>
  );
}
