"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria G.",
    location: "Pembroke Pines, FL",
    product: "Impact Windows & Doors",
    rating: 5,
    text: "Orlando T Group did an amazing job on our home. From the first consultation to the final installation, everything was professional and on time. Our windows look beautiful and we already feel safer knowing we're protected. Highly recommend them to anyone in South Florida.",
  },
  {
    name: "Robert M.",
    location: "Boca Raton, FL",
    product: "Accordion Shutters",
    rating: 5,
    text: "We've been customers for years and they never disappoint. Had accordion shutters installed on the whole house and the crew was clean, fast, and respectful. The price was fair and the quality is outstanding. This is the team to call.",
  },
  {
    name: "Sandra T.",
    location: "Doral, FL",
    product: "Rolldown Shutters",
    rating: 5,
    text: "I was nervous about a big installation like this but Orlando T Group made the whole process easy. They explained everything, got the permits handled, and finished ahead of schedule. I have total peace of mind going into hurricane season now.",
  },
  {
    name: "James L.",
    location: "Coral Springs, FL",
    product: "Impact Garage Door",
    rating: 5,
    text: "Had my old garage door replaced with an impact-rated door. The difference is night and day — it's quieter, stronger, and looks great. The installers were professional and finished in a single day. Very happy with the result.",
  },
  {
    name: "Ana R.",
    location: "Hialeah, FL",
    product: "Patio Enclosure",
    rating: 5,
    text: "We got a patio enclosure and we absolutely love it. It's completely transformed how we use our backyard. The team was knowledgeable and took the time to answer every question we had. Very professional company.",
  },
  {
    name: "Kevin B.",
    location: "Plantation, FL",
    product: "Impact Windows",
    rating: 5,
    text: "After the last hurricane season we finally decided to upgrade our old windows. Orlando T Group came out, gave us a fair quote, and got the job done cleanly and efficiently. Our energy bill has also gone down noticeably. Great investment.",
  },
  {
    name: "Claudia F.",
    location: "Davie, FL",
    product: "Retractable Awning",
    rating: 5,
    text: "The retractable awning they installed is perfect. Quality product, great install, and excellent customer service throughout. They followed up after the job to make sure we were happy. That kind of care is rare these days.",
  },
  {
    name: "Tony S.",
    location: "Fort Lauderdale, FL",
    product: "Impact Windows & Shutters",
    rating: 5,
    text: "Got impact windows on the main floor and rolldown shutters on the second. Both crews were fantastic — punctual, professional, and left the place spotless. I've already referred three neighbors. Truly excellent work.",
  },
  {
    name: "Patricia N.",
    location: "Miramar, FL",
    product: "Impact Doors",
    rating: 5,
    text: "Our new front and back impact doors are gorgeous. They gave us several style options to choose from and helped us pick what looked best with our home. The installation was quick and we couldn't be happier.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-accent fill-accent" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">Testimonials</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Over 1,000 projects completed across South Florida. Here&apos;s what homeowners are saying.
          </motion.p>
        </div>
      </section>

      {/* Summary bar */}
      <section className="bg-white border-b border-[#E0E0E0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1">5.0</div>
              <StarRow count={5} />
              <div className="font-body text-muted text-xs mt-1 uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#E0E0E0]" />
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1">1,000+</div>
              <div className="font-body text-muted text-xs uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#E0E0E0]" />
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1">18+</div>
              <div className="font-body text-muted text-xs uppercase tracking-wider">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid bg-white rounded-xl p-7 border border-[#E0E0E0]"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <StarRow count={t.rating} />
                <p className="font-body text-charcoal text-sm leading-relaxed mt-4 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#F0F0F0] pt-4">
                  <div className="font-heading font-bold text-navy text-sm uppercase tracking-[0.03em]">
                    {t.name}
                  </div>
                  <div className="font-body text-muted text-xs mt-0.5">{t.location}</div>
                  <div className="font-body text-blue text-xs mt-1 uppercase tracking-wider">{t.product}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            Join Our Happy Customers
          </h2>
          <p className="text-white/65 font-body text-sm mb-8">
            Get a free in-home consultation with no obligation. See why South Florida trusts Orlando T Group.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-sm uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            Get Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
