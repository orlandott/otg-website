"use client";

import { MotionConfig } from "framer-motion";

/** Site-wide: Framer Motion drops transform animations for reduced-motion users. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
