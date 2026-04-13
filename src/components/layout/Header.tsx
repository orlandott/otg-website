"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Facebook, Instagram, PackageSearch, CalendarCheck } from "lucide-react";
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

function LanguageToggle({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { language, setLanguage } = useLanguage();

  const labels: Record<Language, string> = { en: "English", es: "Español" };

  return (
    <div
      className={cn(
        "flex items-center rounded overflow-hidden border",
        variant === "dark" ? "border-white/20" : "border-navy/20"
      )}
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
            variant === "dark"
              ? i === 0 ? "border-r border-white/20" : ""
              : i === 0 ? "border-r border-navy/20" : "",
            variant === "dark"
              ? language === lang ? "bg-white/15 text-white" : "text-white/45 hover:text-white/80"
              : language === lang ? "bg-navy/10 text-navy" : "text-navy/40 hover:text-navy/70"
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
    { href: "/donations", label: t.nav.donations },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
          isScrolled || isOpen ? "shadow-md" : "shadow-sm"
        )}
      >
        {/* Mobile: order tracking at top of viewport (desktop uses bar button below) */}
        <div className="md:hidden border-b border-white/15 bg-blue pt-[env(safe-area-inset-top,0px)]">
          <a
            href="https://titan.orlandotgroupinc.com/status-tracking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-center font-heading font-bold text-[11px] uppercase tracking-[0.08em] text-white hover:bg-white/10 active:bg-white/15 transition-colors"
          >
            <PackageSearch size={15} strokeWidth={2} aria-hidden />
            {t.orderTracking.cta}
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" onClick={close} className="hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Orlando T Group Inc."
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Center — language selector (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <LanguageToggle />
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Contact links */}
              <a
                href="tel:+19546255318"
                className="hidden sm:flex items-center gap-1.5 text-navy/65 hover:text-navy transition-colors font-body text-base"
              >
                <Phone size={14} strokeWidth={1.75} />
                (954) 625-5318
              </a>
              <a
                href="https://facebook.com/orlandotgroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hidden sm:flex text-navy/50 hover:text-navy transition-colors"
              >
                <Facebook size={17} strokeWidth={1.75} />
              </a>
              <a
                href="https://instagram.com/orlandotgroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hidden sm:flex text-navy/50 hover:text-navy transition-colors"
              >
                <Instagram size={17} strokeWidth={1.75} />
              </a>
              <a
                href="https://titan.orlandotgroupinc.com/status-tracking"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-[12px] uppercase tracking-[0.06em] rounded-[8px] px-4 py-2 shadow-cta hover:-translate-y-px transition-all duration-150"
              >
                <PackageSearch size={14} strokeWidth={2} aria-hidden />
                {t.orderTracking.cta}
              </a>
              <div className="hidden sm:block w-px h-5 bg-navy/15 mx-1" />
              {/* Animated hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isOpen}
                aria-controls="sidebar-nav"
                className="flex flex-col items-center justify-center gap-[5px] w-10 h-10 text-navy"
              >
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-navy origin-center transition-all duration-300",
                    isOpen && "rotate-45 translate-y-[7px]"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-navy transition-all duration-300",
                    isOpen && "opacity-0 scale-x-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-navy origin-center transition-all duration-300",
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
            className="fixed top-0 right-0 z-50 w-72 sm:w-80 h-[100dvh] bg-white flex flex-col overflow-hidden"
            style={{ boxShadow: "-8px 0 40px rgba(0,0,0,0.18)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Sidebar top — logo + close */}
            <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-gray-200 flex-shrink-0">
              <Link href="/" onClick={close} className="hover:opacity-90 transition-opacity">
                <Image
                  src="/images/logo.png"
                  alt="Orlando T Group Inc."
                  width={130}
                  height={40}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                ref={firstFocusRef}
                type="button"
                onClick={close}
                aria-label={t.nav.closeMenu}
                className="p-1 text-navy/50 hover:text-navy transition-colors"
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
                      <Link
                        href={link.href}
                        onClick={close}
                        className="block py-3 px-3 rounded text-navy/75 hover:text-navy hover:bg-navy/[0.05] font-body font-medium uppercase tracking-wider text-base transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={close}
                        className="block py-3 px-3 rounded text-navy/75 hover:text-navy hover:bg-navy/[0.05] font-body font-medium uppercase tracking-wider text-base transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Language toggle in sidebar (below desktop only) */}
              <div className="lg:hidden mt-6 px-3">
                <p className="text-navy/35 text-[10px] uppercase tracking-widest mb-2 font-body">
                  {language === "en" ? "Language" : "Idioma"}
                </p>
                <LanguageToggle variant="light" />
              </div>
            </nav>

            {/* Sidebar footer — contact + CTA */}
            <div className="flex-shrink-0 border-t border-gray-200 px-6 py-3 sm:py-5 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <a
                  href="tel:+19546255318"
                  className="flex items-center gap-2.5 text-navy/60 hover:text-navy transition-colors font-body text-base"
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
                    className="text-navy/45 hover:text-navy transition-colors"
                  >
                    <Facebook size={17} strokeWidth={1.75} />
                  </a>
                  <a
                    href="https://instagram.com/orlandotgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-navy/45 hover:text-navy transition-colors"
                  >
                    <Instagram size={17} strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              <a
                href="https://titan.orlandotgroupinc.com/status-tracking"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue/90 text-white font-heading font-bold px-6 py-3 rounded-[8px] text-base uppercase tracking-wide transition-colors"
              >
                <PackageSearch size={15} strokeWidth={2} aria-hidden />
                {t.orderTracking.cta}
              </a>

              <Link
                href="/contact"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white font-heading font-bold px-6 py-3 rounded-[8px] text-base uppercase tracking-wide transition-colors shadow-cta"
              >
                <CalendarCheck size={15} strokeWidth={2} />
                {t.nav.freeEstimate}
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
