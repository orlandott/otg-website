"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/data/products";
import { ProductSection } from "@/components/products/ProductSection";

export default function ProductsPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/80 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">Products</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR PRODUCTS
          </motion.h1>
          <motion.p
            className="mt-4 text-white/90 font-body text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From impact windows to retractable awnings—comprehensive protection solutions for your South Florida home.
          </motion.p>
        </div>
      </section>

      <section className="bg-white">
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            READY TO PROTECT YOUR HOME?
          </h2>
          <p className="text-white/90 font-body mb-8">
            Get a free in-home consultation and estimate. No obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-heading font-bold px-8 py-4 rounded hover:bg-white/90 transition-colors uppercase"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
