"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Facebook, Instagram, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overHero = !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-heading font-bold text-xl md:text-2xl tracking-tight hover:opacity-90 transition-opacity"
          >
            <Shield
              className={cn(
                "w-7 h-7",
                overHero ? "text-accent" : "text-accent"
              )}
            />
            <span className="text-white">ORLANDO T GROUP</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+19546255318"
              className="flex items-center gap-1.5 text-sm font-body text-white/80 hover:text-white transition-colors"
            >
              <Phone size={15} />
              (954) 625-5318
            </a>
            <a
              href="https://facebook.com/orlandotgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com/orlandotgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-white/80 hover:text-white uppercase tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-white font-heading font-bold px-6 py-2.5 rounded text-sm uppercase tracking-wide hover:bg-accent-hover transition-colors"
              style={{ boxShadow: "0 2px 10px rgba(245,158,11,0.3)" }}
            >
              Free Estimate
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="flex flex-col p-4 gap-1">
            <a
              href="tel:+19546255318"
              className="flex items-center gap-2 py-3 px-4 text-white/80 font-body hover:text-white transition-colors"
            >
              <Phone size={16} />
              (954) 625-5318
            </a>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-white/80 hover:text-white font-body uppercase tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 py-3 px-4 bg-accent text-white font-heading font-bold text-center rounded hover:bg-accent-hover uppercase tracking-wide transition-colors"
            >
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
