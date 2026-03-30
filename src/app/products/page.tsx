"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/data/products";
import { ProductSection } from "@/components/products/ProductSection";

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">Products</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From impact windows to retractable awnings — comprehensive protection solutions for your South Florida home.
          </motion.p>
        </div>
      </section>

      {/* Product sections */}
      <section className="bg-white">
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </section>

      {/* CTA footer band */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            Ready to Protect Your Home?
          </h2>
          <p className="text-white/65 font-body text-sm mb-8">
            Get a free in-home consultation and estimate. No obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-sm uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
