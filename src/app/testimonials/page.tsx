"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const testimonials = [
  {
    name: "Gigi",
    source: "Google Reviews",
    rating: 5,
    text: "Excellent job. Professional and with affordable prices.",
  },
  {
    name: "Janet B.",
    source: "Google Reviews",
    rating: 5,
    text: "I'm very pleased by work done by Orlando T Group. Very professional and work was done quickly and staff was courteous and careful with my living space. Everything was left impecable, I strongly recommend this company.",
  },
  {
    name: "Javier M.",
    source: "Google Reviews",
    rating: 5,
    text: "Excellent service, good communication, great prices, friendly and professional staff, highly recommended.",
  },
  {
    name: "Adriana V.",
    source: "Google Reviews",
    rating: 5,
    text: "The Orlando T Group did an outstanding job replacing our old windows. Since we live in another location most of the time our neighbor let them in to do the job. Not only did they put the new windows they cleaned up the mess! Kudos to the Orlando T Group!!",
  },
  {
    name: "Shalina J.",
    source: "Yelp Reviews",
    rating: 5,
    text: "Jaffer Realty has been working with Orlando T Group for many years now on a range of projects all over South Florida. They are reliable, work well with the city inspectors and get the job done. We have been very happy with the quality of work and overall experience.",
  },
  {
    name: "Anthony S.",
    source: "Google Reviews",
    rating: 5,
    text: "I'm very satisfied with the results. My experience with Orlando T Group was great — Sebastian Alvarez in sales and Monica Gutierrez was very helpful. I highly recommend them.",
  },
  {
    name: "Tom M.",
    source: "Google Reviews",
    rating: 5,
    text: "Great service, fast, efficient and clean. All done in a timely fashion.",
  },
  {
    name: "Egliana G.",
    source: "Google Reviews",
    rating: 5,
    text: "Orlando T Group was very professional at all stages of the process. I recommend them — excellent customer service and also recommend their super prices. It was a waste of time quoting with other providers that almost doubled Orlando T Group's quote. Their salesperson and Monica Gutierrez offered an amazing service.",
  },
  {
    name: "Lord J.",
    source: "Google Reviews",
    rating: 5,
    text: "The job was completed in one day (balcony enclosure with impact glass). It came out amazing — the 3 installers were very competent and professional. I recommend Orlando T Group very highly and I will use them again when I am ready to do my other windows. The owner Mr. Orlando Torres, the salesman, and the job supervisor Aldo are very fair and knowledgeable.",
  },
  {
    name: "Adriana V.",
    source: "Google Reviews",
    rating: 5,
    text: "Excellent job, service and price!!! They were diligent, helpful and delivered as promised. Highly recommended!",
  },
  {
    name: "Harry D.",
    source: "Google Reviews",
    rating: 5,
    text: "I would like to say that everything was done excellently. I am very happy with the results. I would recommend them to anyone that wants to do any home improvements.",
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
            Real reviews from real South Florida homeowners. No scripts, no incentives — just honest feedback.
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
              <div className="font-heading font-bold text-navy text-4xl mb-1"><CountUp to={1000} suffix="+" /></div>
              <div className="font-body text-muted text-xs uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#E0E0E0]" />
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1"><CountUp to={18} suffix="+" /></div>
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
                  <div className="font-body text-blue text-xs mt-1 uppercase tracking-wider">{t.source}</div>
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
