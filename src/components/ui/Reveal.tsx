"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** Fades content up once as it scrolls into view (CLAUDE.md scroll animation). */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -64px 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
