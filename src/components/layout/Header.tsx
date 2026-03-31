"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Facebook, Instagram, Shield, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/data/products";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n/translations";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  children?: { href: string; label: string }[];
};

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const labels: Record<Language, string> = { en: "English", es: "Español" };

  return (
    <div
      className="flex items-center rounded overflow-hidden border border-white/20"
      role="group"
      aria-label="Language selector"
    >
      {(["en", "es"] as Language[]).map((lang, i) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          aria-label={lang === "en" ? "Switch to English" : "Cambiar a Español"}
          className={cn(
            "flex-1 text-center px-3 py-1 text-[11px] font-heading font-bold tracking-[0.05em] uppercase transition-colors duration-150",
            i === 0 ? "border-r border-white/20" : "",
            language === lang
              ? "bg-white/15 text-white"
              : "text-white/45 hover:text-white/80"
          )}
        >
          {labels[lang]}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const firstFocusRef = useRef<HTMLButtonElement>(null);
  const { t, language } = useLanguage();

  const navLinks: NavLink[] = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    {
      href: "/products",
      label: t.nav.products,
      children: products.map((p) => ({
        href: p.href,
        label: language === "es" && p.nameEs ? p.nameEs : p.name,
      })),
    },
    { href: "/financing", label: t.nav.financing },
    { href: "/testimonials", label: t.nav.testimonials },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isOpen ? "bg-navy shadow-lg" : "bg-navy"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={close}
              className="flex items-center gap-2.5 font-heading font-bold text-xl md:text-2xl tracking-tight hover:opacity-90 transition-opacity"
            >
              <Shield className="w-7 h-7 text-accent" />
              <span className="text-white">ORLANDO T GROUP</span>
            </Link>

            {/* Center — language selector */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <LanguageToggle />
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Contact links */}
              <a
                href="tel:+19546255318"
                className="hidden sm:flex items-center gap-1.5 text-white/75 hover:text-white transition-colors font-body text-sm"
              >
                <Phone size={14} strokeWidth={1.75} />
                (954) 625-5318
              </a>
              <a
                href="https://facebook.com/orlandotgroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hidden sm:flex text-white/55 hover:text-white transition-colors"
              >
                <Facebook size={17} strokeWidth={1.75} />
              </a>
              <a
                href="https://instagram.com/orlandotgroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hidden sm:flex text-white/55 hover:text-white transition-colors"
              >
                <Instagram size={17} strokeWidth={1.75} />
              </a>
              <div className="hidden sm:block w-px h-5 bg-white/15 mx-1" />
              {/* Animated hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isOpen}
                aria-controls="sidebar-nav"
                className="flex flex-col items-center justify-center gap-[5px] w-10 h-10 text-white"
              >
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-white origin-center transition-all duration-300",
                    isOpen && "rotate-45 translate-y-[7px]"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-white transition-all duration-300",
                    isOpen && "opacity-0 scale-x-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-white origin-center transition-all duration-300",
                    isOpen && "-rotate-45 -translate-y-[7px]"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Backdrop overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar"
            id="sidebar-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 sm:w-80 bg-navy flex flex-col shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Sidebar top — logo + close */}
            <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-white">
                <Shield className="w-5 h-5 text-accent" />
                <span>ORLANDO T GROUP</span>
              </div>
              <button
                ref={firstFocusRef}
                type="button"
                onClick={close}
                aria-label={t.nav.closeMenu}
                className="p-1 text-white/70 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav
              className="flex-1 overflow-y-auto py-4 px-4"
              aria-label="Main navigation"
            >
              <ul className="space-y-0.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.children ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setProductsOpen((v) => !v)}
                          className="flex items-center justify-between w-full py-3 px-3 rounded text-white/80 hover:text-white hover:bg-white/[0.07] font-body font-medium uppercase tracking-wider text-sm transition-colors"
                        >
                          {link.label}
                          <ChevronDown
                            size={15}
                            className={cn(
                              "flex-shrink-0 transition-transform duration-200",
                              productsOpen && "rotate-180"
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {productsOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                              className="overflow-hidden ml-2 border-l border-white/10"
                            >
                              <li>
                                <Link
                                  href="/products"
                                  onClick={close}
                                  className="flex items-center gap-2.5 py-2.5 pl-4 pr-3 text-sky text-[13px] font-body font-medium hover:text-white transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-sky flex-shrink-0" />
                                  {t.nav.allProducts}
                                </Link>
                              </li>
                              {link.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={close}
                                    className="flex items-center gap-2.5 py-2.5 pl-4 pr-3 text-white/55 text-[13px] font-body hover:text-white transition-colors"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={close}
                        className="block py-3 px-3 rounded text-white/80 hover:text-white hover:bg-white/[0.07] font-body font-medium uppercase tracking-wider text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Language toggle in sidebar */}
              <div className="mt-6 px-3">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-body">
                  {language === "en" ? "Language" : "Idioma"}
                </p>
                <LanguageToggle />
              </div>
            </nav>

            {/* Sidebar footer — contact + CTA */}
            <div className="flex-shrink-0 border-t border-white/10 px-6 py-5 space-y-4">
              <a
                href="tel:+19546255318"
                className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors font-body text-sm"
              >
                <Phone size={14} strokeWidth={1.75} />
                (954) 625-5318
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/orlandotgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Facebook size={17} strokeWidth={1.75} />
                </a>
                <a
                  href="https://instagram.com/orlandotgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Instagram size={17} strokeWidth={1.75} />
                </a>
              </div>

              <Link
                href="/contact"
                onClick={close}
                className="block w-full text-center bg-accent text-white font-heading font-bold px-6 py-3 rounded text-sm uppercase tracking-wide hover:bg-accent-hover transition-colors"
                style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
              >
                {t.nav.freeEstimate}
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
