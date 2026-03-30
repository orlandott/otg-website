"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, Clock, Facebook, Instagram } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">Contact</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Your Free Consultation
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Request an estimate and home visit from one of our sales associates.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="font-heading font-bold text-navy uppercase text-xl tracking-[0.01em] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+19546255318"
                    className="flex items-center gap-3 text-charcoal hover:text-blue transition-colors font-body text-sm"
                  >
                    <Phone size={18} className="text-blue" />
                    (954) 625-5318
                  </a>
                  <a
                    href="https://wa.me/19546491508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal hover:text-blue transition-colors font-body text-sm"
                  >
                    <MessageCircle size={18} className="text-blue" />
                    WhatsApp: +1 (954) 649-1508
                  </a>
                  <div className="flex items-center gap-3 text-muted font-body text-sm">
                    <Clock size={18} className="text-blue" />
                    Serving South Florida
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.01em] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/orlandotgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-blue transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="https://instagram.com/orlandotgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-blue transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.01em] mb-3">
                  Track Your Order
                </h3>
                <a
                  href="https://titan.orlandotgroupinc.com/status-tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue font-body text-sm hover:text-sky hover:underline transition-colors"
                >
                  Check order status &rarr;
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="bg-surface rounded-xl p-7 md:p-10 border border-[#E0E0E0]"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading font-bold text-navy uppercase text-xl tracking-[0.01em] mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
