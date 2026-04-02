"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, DollarSign, Clock, CheckCircle, TrendingUp, Phone } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Low Monthly Payments",
    body: "Flexible financing plans let you spread the cost over time, keeping your monthly payments manageable while you enjoy full protection right away.",
  },
  {
    icon: Clock,
    title: "Quick Approval",
    body: "Our application process is fast and straightforward. Many customers receive a decision within minutes so you can move forward without delay.",
  },
  {
    icon: TrendingUp,
    title: "Increase Home Value",
    body: "Impact windows, doors, and shutters are proven to increase property value in South Florida — making financing an investment that pays back.",
  },
  {
    icon: CheckCircle,
    title: "Insurance Savings",
    body: "Many homeowners see significant reductions in their wind insurance premiums after installing hurricane protection products — helping offset the cost.",
  },
];

const faqs = [
  {
    q: "What credit score do I need to qualify?",
    a: "We work with a range of credit profiles. Many of our financing partners have options for customers with fair, good, or excellent credit. We encourage everyone to apply — qualification requirements vary by program.",
  },
  {
    q: "Are there 0% interest options?",
    a: "Yes. Depending on the financing program and the size of your project, promotional interest rates including 0% APR options may be available for qualified applicants for a set introductory period.",
  },
  {
    q: "How much can I finance?",
    a: "Financing is available for projects of all sizes. Whether you're replacing a single door or outfitting your entire home with impact windows and shutters, we can help structure a plan that fits your budget.",
  },
  {
    q: "Does financing include installation?",
    a: "Yes. Your financing covers the full project cost including product, labor, permits, and installation — everything needed to get the job done.",
  },
  {
    q: "How do I apply?",
    a: "The easiest way is to request a free consultation. One of our sales associates will walk you through the financing options available for your specific project during the in-home visit.",
  },
];

export default function FinancingPage() {
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
            <span className="text-white/90">Financing</span>
          </nav>
          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Flexible Financing<br />Options
          </motion.h1>
          <motion.p
            className="mt-4 text-white/70 font-body text-base max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Protect your home today — pay over time. We offer financing solutions to fit any budget.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
              Why Finance?
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1] mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              Don&apos;t Wait for Storm Season
            </h2>
            <p className="font-body text-charcoal text-sm leading-relaxed">
              Hurricane season doesn&apos;t wait — and neither should your protection. Financing lets you install the impact windows, doors, and shutters your home needs right now, without having to pay the full cost upfront. With low monthly payments and competitive rates, there&apos;s no reason to delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-surface rounded-xl p-8 border border-[#E0E0E0]"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <b.icon className="w-7 h-7 text-blue mb-4" strokeWidth={1.75} />
                <h3 className="font-heading font-bold text-navy uppercase text-base tracking-[0.02em] mb-3">
                  {b.title}
                </h3>
                <p className="font-body text-charcoal text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
              Simple Process
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Request a Consultation", body: "Schedule your free in-home estimate. A sales associate visits your property and assesses what protection you need." },
              { step: "02", title: "Review Your Options", body: "We present the products that fit your home and walk you through available financing plans — no pressure, no obligation." },
              { step: "03", title: "Get Installed", body: "Once approved, we schedule your installation. Our certified crew handles everything from permits to final inspection." },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-accent text-sm">{step.step}</span>
                </div>
                <h3 className="font-heading font-bold text-navy uppercase text-sm tracking-[0.04em] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-charcoal text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-accent uppercase tracking-[0.18em] text-xs font-medium mb-3">
              FAQ
            </p>
            <h2
              className="font-heading font-bold text-navy uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border-b border-[#E0E0E0] pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <h3 className="font-heading font-bold text-navy text-sm uppercase tracking-[0.02em] mb-2">
                  {faq.q}
                </h3>
                <p className="font-body text-charcoal text-sm leading-relaxed">{faq.a}</p>
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
            Let&apos;s Talk Financing
          </h2>
          <p className="text-white/65 font-body text-sm mb-8 max-w-xl mx-auto">
            Contact us today to learn which financing plan is right for your project. Our team will walk you through every option.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-heading font-bold px-10 py-4 rounded text-sm uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors"
              style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+19546255318"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/40 text-white font-heading font-bold rounded text-sm uppercase tracking-[0.06em] hover:border-white hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              (954) 625-5318
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
