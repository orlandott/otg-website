"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  GOOGLE_REVIEWS_LANDING_URL,
  YELP_REVIEWS_LANDING_URL,
} from "@/lib/data/reviewLinks";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google Reviews">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Yelp Reviews">
      <path fill="#FF1A1A" d="M20.16 12.73l-4.46 1.223c-.96.267-1.83-.76-1.4-1.66l2.02-4.123c.413-.853 1.6-.8 1.94.08l2.44 4.9c.2.4-.07.86-.53.98zM12.1 7.587L11.14 2.92c-.19-.96.71-1.73 1.6-1.36l4.653 1.92c.853.35.893 1.56.067 1.97l-4.653 2.31c-.786.387-1.57-.2-1.71-1.17zm-1.61.293c-.2.96-1.2 1.4-1.993.88L4.347 6.053c-.773-.52-.64-1.72.21-2.04L9.21 2.347c.9-.32 1.72.493 1.493 1.426L10.49 7.88zm-.333 4.12c.507.84.08 1.9-.88 2.113l-4.56 1.013c-.96.213-1.72-.72-1.347-1.626l1.8-4.32c.373-.893 1.573-.88 1.907.02l3.08 2.8zm1.8 3.707c-.04.973-1 1.573-1.853 1.12l-.707-.36-.66 4.12c-.147.947-1.387 1.24-1.947.44L5.747 17.8c-.56-.8-.04-1.907.92-1.987l4.68-.4c.973-.08 1.66.893 1.613 1.493z"/>
    </svg>
  );
}

type TestimonialSource = "Google Reviews" | "Yelp Reviews";

type Testimonial = {
  name: string;
  source: TestimonialSource;
  rating: number;
  text: string;
  /** Optional direct link to this review; otherwise uses Google or Yelp landing URL */
  reviewUrl?: string;
};

const testimonials: Testimonial[] = [
  { name: "Gigi", source: "Google Reviews", rating: 5, text: "Excellent job. Professional and with affordable prices." },
  { name: "Janet B.", source: "Google Reviews", rating: 5, text: "I'm very pleased by work done by Orlando T Group. Very professional and work was done quickly and staff was courteous and careful with my living space. Everything was left impecable, I strongly recommend this company." },
  { name: "Javier M.", source: "Google Reviews", rating: 5, text: "Excellent service, good communication, great prices, friendly and professional staff, highly recommended." },
  { name: "Adriana V.", source: "Google Reviews", rating: 5, text: "The Orlando T Group did an outstanding job replacing our old windows. Since we live in another location most of the time our neighbor let them in to do the job. Not only did they put the new windows they cleaned up the mess! Kudos to the Orlando T Group!!" },
  { name: "Shalina J.", source: "Yelp Reviews", rating: 5, text: "Jaffer Realty has been working with Orlando T Group for many years now on a range of projects all over South Florida. They are reliable, work well with the city inspectors and get the job done. We have been very happy with the quality of work and overall experience." },
  { name: "Anthony S.", source: "Google Reviews", rating: 5, text: "I'm very satisfied with the results. My experience with Orlando T Group was great — Sebastian Alvarez in sales and Monica Gutierrez was very helpful. I highly recommend them." },
  { name: "Tom M.", source: "Google Reviews", rating: 5, text: "Great service, fast, efficient and clean. All done in a timely fashion." },
  { name: "Egliana G.", source: "Google Reviews", rating: 5, text: "Orlando T Group was very professional at all stages of the process. I recommend them — excellent customer service and also recommend their super prices. It was a waste of time quoting with other providers that almost doubled Orlando T Group's quote. Their salesperson and Monica Gutierrez offered an amazing service." },
  { name: "Lord J.", source: "Google Reviews", rating: 5, text: "The job was completed in one day (balcony enclosure with impact glass). It came out amazing — the 3 installers were very competent and professional. I recommend Orlando T Group very highly and I will use them again when I am ready to do my other windows. The owner Mr. Orlando Torres, the salesman, and the job supervisor Aldo are very fair and knowledgeable." },
  { name: "Adriana V.", source: "Google Reviews", rating: 5, text: "Excellent job, service and price!!! They were diligent, helpful and delivered as promised. Highly recommended!" },
  { name: "Harry D.", source: "Google Reviews", rating: 5, text: "I would like to say that everything was done excellently. I am very happy with the results. I would recommend them to anyone that wants to do any home improvements." },
];

function hrefForTestimonial(t: Testimonial): string {
  if (t.reviewUrl) return t.reviewUrl;
  return t.source === "Yelp Reviews" ? YELP_REVIEWS_LANDING_URL : GOOGLE_REVIEWS_LANDING_URL;
}

function labelForTestimonial(t: Testimonial): string {
  const platform = t.source === "Yelp Reviews" ? "Yelp" : "Google";
  return `Read ${t.name}'s review on ${platform} (opens in a new tab)`;
}

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
  const { t } = useLanguage();
  const p = t.pages.testimonials;
  const common = t.pages.common;

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">{common.home}</Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{p.breadcrumb}</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {p.heading}
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="bg-white border-b border-[#E0E0E0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1">5.0</div>
              <StarRow count={5} />
              <div className="font-body text-muted text-sm mt-1 uppercase tracking-wider">{p.averageRating}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#E0E0E0]" />
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1"><CountUp to={1000} suffix="+" /></div>
              <div className="font-body text-muted text-sm uppercase tracking-wider">{p.projectsCompleted}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#E0E0E0]" />
            <div>
              <div className="font-heading font-bold text-navy text-4xl mb-1"><CountUp to={18} suffix="+" /></div>
              <div className="font-body text-muted text-sm uppercase tracking-wider">{p.yearsInBusiness}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid bg-white rounded-xl p-7 border border-[#E0E0E0]"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <StarRow count={testimonial.rating} />
                <p className="font-body text-charcoal text-base leading-relaxed mt-4 mb-5">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-[#F0F0F0] pt-4 flex items-center justify-between gap-3">
                  <div className="font-heading font-bold text-navy text-base uppercase tracking-[0.03em]">
                    {testimonial.name}
                  </div>
                  <a
                    href={hrefForTestimonial(testimonial)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={labelForTestimonial(testimonial)}
                    className="inline-flex shrink-0 rounded-md p-1.5 text-current ring-offset-2 hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors"
                  >
                    {testimonial.source === "Google Reviews" ? <GoogleIcon /> : <YelpIcon />}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            {p.ctaHeading}
          </h2>
          <p className="text-white/65 font-body text-base mb-8">{p.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-base uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(46,125,82,0.30)" }}
          >
            {common.freeEstimate}
          </Link>
        </div>
      </section>
    </>
  );
}
