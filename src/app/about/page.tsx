"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield, Award, Users, MapPin, CheckCircle } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/components/providers/LanguageProvider";

const statCounters = [
  { countTo: null, suffix: "" },
  { countTo: 1000, suffix: "+" },
  { countTo: 3, suffix: "" },
  { countTo: 18, suffix: "+" },
];

const valueIcons = [Shield, Award, Users, MapPin];

export default function AboutPage() {
  const { t } = useLanguage();
  const p = t.pages.about;
  const common = t.pages.common;

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-body uppercase tracking-wider mb-6">
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
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
                {p.storyEyebrow}
              </p>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-6"
                style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
              >
                {p.storyHeading.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <div className="space-y-4 font-body text-charcoal text-sm leading-relaxed">
                <p>{p.storyP1}</p>
                <p>{p.storyP2}</p>
                <p>{p.storyP3}</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {p.statsLabels.map((label, i) => (
                <div
                  key={label}
                  className="bg-surface rounded-xl p-7 border border-[#E0E0E0] text-center"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="font-heading font-bold text-navy mb-1"
                    style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
                  >
                    {statCounters[i].countTo ? (
                      <CountUp to={statCounters[i].countTo!} suffix={statCounters[i].suffix} />
                    ) : (
                      "2006"
                    )}
                  </div>
                  <div className="font-body text-muted text-xs uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
              {p.valuesEyebrow}
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              {p.valuesHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p.values.map((val, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={val.title}
                  className="bg-white rounded-xl p-8 border border-[#E0E0E0]"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Icon className="w-7 h-7 text-blue mb-4" strokeWidth={1.75} />
                  <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.02em] mb-3">
                    {val.title}
                  </h3>
                  <p className="font-body text-charcoal text-sm leading-relaxed">{val.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
                {p.servicesEyebrow}
              </p>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-6"
                style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
              >
                {p.servicesHeading.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="font-body text-charcoal text-sm leading-relaxed mb-8">{p.servicesBody}</p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-blue text-white font-heading font-bold px-8 py-3.5 rounded text-sm uppercase tracking-[0.06em] hover:bg-blue transition-colors"
              >
                {p.servicesButton}
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {p.services.map((service) => (
                <li key={service} className="flex items-center gap-3 font-body text-charcoal text-sm">
                  <CheckCircle size={16} className="text-blue flex-shrink-0" strokeWidth={1.75} />
                  {service}
                </li>
              ))}
            </ul>
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
          <p className="text-white/65 font-body text-sm mb-8">{p.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-sm uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            {common.freeEstimate}
          </Link>
        </div>
      </section>
    </>
  );
}
