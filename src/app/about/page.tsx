"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield, Award, Users, MapPin, CheckCircle } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: "2006", label: "Year Founded", countTo: null, suffix: "" },
  { value: "1,000+", label: "Projects Completed", countTo: 1000, suffix: "+" },
  { value: "3", label: "Counties Served", countTo: 3, suffix: "" },
  { value: "18+", label: "Years Experience", countTo: 18, suffix: "+" },
];

const values = [
  {
    icon: Shield,
    title: "Hurricane Protection",
    body: "We specialize in impact-resistant products built to withstand South Florida's toughest storms. Every product we install meets or exceeds Florida Building Code requirements.",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    body: "Orlando T Group is a fully licensed and insured contractor. Our team holds all required state certifications, so you can trust the work is done right and your home is protected.",
  },
  {
    icon: Users,
    title: "Family-Owned",
    body: "We're a local, family-owned business — not a national chain. That means personalized service, honest pricing, and a team that genuinely cares about your home.",
  },
  {
    icon: MapPin,
    title: "South Florida Focused",
    body: "We know the climate, the codes, and the neighborhoods. Operating across Miami-Dade, Broward, and Palm Beach counties, we're your neighbors — not just your contractor.",
  },
];

const services = [
  "Impact Windows",
  "Impact Doors",
  "Accordion Shutters",
  "Rolldown Shutters",
  "Patio Enclosures",
  "Retractable Awnings",
  "Impact Garage Doors",
  "Blinds & Solar Shades",
];

export default function AboutPage() {
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
            <span className="text-white/90">About</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Orlando T Group
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            South Florida&apos;s trusted hurricane and solar protection specialists since 2006.
          </motion.p>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
                Our Story
              </p>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-6"
                style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
              >
                Built on Trust,<br />Backed by Results
              </h2>
              <div className="space-y-4 font-body text-charcoal text-sm leading-relaxed">
                <p>
                  Orlando T Group was founded in 2006 with a simple mission: provide South Florida homeowners with the highest-quality hurricane protection products and the kind of honest, straightforward service they deserve.
                </p>
                <p>
                  Over nearly two decades, we&apos;ve completed more than 1,000 projects across Miami-Dade, Broward, and Palm Beach counties — from single-family homes to large commercial properties. Every job, big or small, gets the same attention to detail and commitment to excellence.
                </p>
                <p>
                  We&apos;re not a national franchise. We&apos;re a local team that lives and works in the same communities we serve. When a storm rolls through, we feel it too — and that&apos;s exactly why we take this work seriously.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface rounded-xl p-7 border border-[#E0E0E0] text-center"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="font-heading font-bold text-navy mb-1"
                    style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
                  >
                    {stat.countTo ? (
                      <CountUp to={stat.countTo} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="font-body text-muted text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
              Why Choose Us
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="bg-white rounded-xl p-8 border border-[#E0E0E0]"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <val.icon className="w-7 h-7 text-blue mb-4" strokeWidth={1.75} />
                <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.02em] mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-charcoal text-sm leading-relaxed">{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
                What We Do
              </p>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-6"
                style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
              >
                Full-Service<br />Protection Solutions
              </h2>
              <p className="font-body text-charcoal text-sm leading-relaxed mb-8">
                From impact windows and doors to shutters, awnings, and patio enclosures — we offer a complete range of products to protect every part of your home and help you save on energy costs.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-blue text-white font-heading font-bold px-8 py-3.5 rounded text-sm uppercase tracking-[0.06em] hover:bg-blue transition-colors"
              >
                View All Products
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 font-body text-charcoal text-sm">
                  <CheckCircle size={16} className="text-blue flex-shrink-0" strokeWidth={1.75} />
                  {service}
                </li>
              ))}
            </ul>
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
            Ready to Protect Your Home?
          </h2>
          <p className="text-white/65 font-body text-sm mb-8">
            Get a free in-home consultation with no obligation.
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
