"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, Clock, Facebook, Instagram } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/80 text-sm font-body mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">Contact</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GET YOUR FREE CONSULTATION
          </motion.h1>
          <motion.p
            className="mt-4 text-white/90 font-body text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Request an estimate and home visit from one of our sales associates.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                  CONTACT INFORMATION
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+19546255318"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-body"
                  >
                    <Phone size={20} />
                    <span>(954) 625-5318</span>
                  </a>
                  <a
                    href="https://wa.me/19546491508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-body"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp: +1 (954) 649-1508</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 font-body">
                    <Clock size={20} />
                    <span>Serving South Florida</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-foreground mb-4">
                  FOLLOW US
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/orlandotgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com/orlandotgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-foreground mb-4">
                  TRACK YOUR ORDER
                </h3>
                <a
                  href="https://titan.orlandotgroupinc.com/status-tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-body hover:underline"
                >
                  Check order status →
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                SEND US A MESSAGE
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
