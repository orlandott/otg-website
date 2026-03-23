"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function OrderTrackingBanner() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
            Hurricane and Solar Protection
          </h2>
          <p className="text-white/90 font-body mb-8">
            Are you already our customer?
          </p>
          <Link
            href="https://titan.orlandotgroupinc.com/status-tracking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary font-heading font-bold px-8 py-4 rounded hover:bg-white/90 transition-colors uppercase"
          >
            Track Your Order Status
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
