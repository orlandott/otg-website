"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface ProductFAQSectionProps {
  name: string;
  faqs: FAQ[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.48, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="border-b border-border last:border-0" {...fadeUp(index * 0.06)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-navy text-[15px] leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-blue flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-body text-charcoal text-[15px] leading-relaxed pb-5 pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProductFAQSection({ name, faqs }: ProductFAQSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-surface" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-body text-sm text-blue uppercase tracking-[0.1em] font-semibold mb-2 text-center"
          {...fadeUp()}
        >
          Common Questions
        </motion.p>
        <motion.h2
          id="faq-heading"
          className="font-heading font-bold text-navy uppercase text-center mb-12"
          style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          {...fadeUp(0.05)}
        >
          FAQ — {name}
        </motion.h2>

        <div className="bg-white rounded-[12px] border border-border px-6 divide-y-0">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
