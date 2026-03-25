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
    <footer className="bg-secondary text-white border-t border-brand-sky/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-heading font-bold text-xl text-white tracking-tight"
            >
              <Shield className="w-6 h-6" />
              ORLANDO T GROUP
            </Link>
            <p className="mt-3 text-white/80 text-sm font-body max-w-xs">
              Hurricane and solar protection for South Florida homeowners. Licensed, insured, and trusted since 2006.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-white/80 hover:text-accent text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+19546255318"
                className="flex items-center gap-2 text-white/80 hover:text-accent text-sm font-body transition-colors"
              >
                <Phone size={16} />
                (954) 625-5318
              </a>
              <a
                href="https://wa.me/19546491508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent text-sm font-body transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://facebook.com/orlandotgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/orlandotgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-xs font-body">
            © {new Date().getFullYear()} Orlando T Group Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
