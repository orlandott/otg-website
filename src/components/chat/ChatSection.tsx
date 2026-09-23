"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { DATAGRAN_AGENT_ID, DATAGRAN_WIDGET_SRC } from "@/lib/chatWidget";

export function ChatSection() {
  const { t, language } = useLanguage();
  const p = t.pages.chat;
  const common = t.pages.common;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    // The widget script renders the chat inside its parent element and must
    // only be loaded once per page, so guard against re-runs.
    if (!container || container.childElementCount > 0) return;
    const script = document.createElement("script");
    script.src = DATAGRAN_WIDGET_SRC;
    script.async = true;
    script.dataset.agent = DATAGRAN_AGENT_ID;
    script.dataset.label = "Orlando";
    script.dataset.inline = "true";
    script.dataset.controlled = "true";
    script.dataset.mode = "chat";
    script.dataset.language = language;
    container.appendChild(script);
  }, [language]);

  return (
    <>
      <section className="pt-44 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {common.home}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{p.breadcrumb}</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {p.heading}
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20" aria-label={p.cardTitle}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-[20px] border border-[#E0E0E0] overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-4 px-5 py-5 md:px-8 border-b border-border">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-blue/10 shrink-0">
                <MessageCircle size={22} strokeWidth={1.5} className="text-blue" />
              </span>
              <div>
                <h2 className="font-heading font-bold text-navy uppercase text-lg tracking-[0.01em] leading-tight">
                  {p.cardTitle}
                </h2>
                <p className="text-muted font-body text-sm">{p.cardSubtitle}</p>
              </div>
            </div>
            <div ref={containerRef} className="px-3 py-3 md:px-6 md:py-4" />
          </motion.div>

          <p className="mt-6 text-center text-muted font-body text-sm">
            {p.fallback}{" "}
            <a
              href="tel:+19546255318"
              className="text-blue font-medium hover:text-sky hover:underline transition-colors"
            >
              (954) 625-5318
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
