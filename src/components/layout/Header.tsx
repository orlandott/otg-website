"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Facebook, Instagram, Moon, Sun, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled
    ? "bg-brand-offwhite/95 backdrop-blur shadow-md border-b border-brand-sky/20"
    : "bg-transparent";

  const overHero = !isScrolled;
  const mutedClass = overHero
    ? "text-white/90"
    : "text-brand-slate";
  const logoTextClass = overHero ? "text-white" : "text-foreground";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBg
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-xl md:text-2xl tracking-tight hover:opacity-90 transition-opacity"
          >
            <Shield className={cn("w-7 h-7", overHero ? "text-white" : "text-primary")} />
            <span className={logoTextClass}>ORLANDO T GROUP</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+19546255318"
              className={cn("flex items-center gap-2 text-sm font-body", mutedClass)}
            >
              <Phone size={16} />
              (954) 625-5318
            </a>
            <a
              href="https://facebook.com/orlandotgroup"
              target="_blank"
              rel="noopener noreferrer"
              className={mutedClass}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/orlandotgroup"
              target="_blank"
              rel="noopener noreferrer"
              className={mutedClass}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("font-body text-sm font-medium uppercase tracking-wider hover:text-brand-steel transition-colors", mutedClass)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className={cn("w-5 h-5", overHero ? "text-white" : "text-foreground")} />
              ) : (
                <Sun className={cn("w-5 h-5", overHero ? "text-white" : "text-foreground")} />
              )}
            </button>
            <Link
              href="/contact"
              className="bg-accent text-secondary font-heading font-bold px-6 py-2.5 rounded hover:bg-accent/90 transition-colors uppercase text-sm"
            >
              Free Estimate Online
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-secondary" />
              ) : (
                <Sun className="w-5 h-5 text-secondary" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2", overHero ? "text-white" : "text-foreground")}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-offwhite border-t border-brand-sky/20">
          <nav className="flex flex-col p-4 gap-2">
            <a
              href="tel:+19546255318"
              className="flex items-center gap-2 py-3 px-4 text-foreground font-body"
            >
              <Phone size={16} />
              (954) 625-5318
            </a>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-secondary hover:bg-white rounded font-body uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 py-3 px-4 bg-accent text-secondary font-heading font-bold text-center rounded hover:bg-accent/90 uppercase"
            >
              Free Estimate Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
