import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Phone, Shield } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://titan.orlandotgroupinc.com/status-tracking",
    label: "Track Order",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading font-bold text-xl text-white tracking-tight mb-4"
            >
              <Shield className="w-6 h-6 text-accent" />
              ORLANDO T GROUP
            </Link>
            <p className="text-white/70 text-sm font-body max-w-xs leading-relaxed">
              Hurricane and solar protection for South Florida homeowners.
              Licensed, insured, and trusted since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-white/70 hover:text-accent text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+19546255318"
                className="flex items-center gap-2.5 text-white/70 hover:text-accent text-sm font-body transition-colors"
              >
                <Phone size={15} />
                (954) 625-5318
              </a>
              <a
                href="https://wa.me/19546491508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/70 hover:text-accent text-sm font-body transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://facebook.com/orlandotgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/orlandotgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs font-body">
            &copy; {new Date().getFullYear()} Orlando T Group Inc. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Licensed &amp; Insured · South Florida
          </p>
        </div>
      </div>
    </footer>
  );
}
