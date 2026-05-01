"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Gift, Users, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

const schema = z.object({
  friendName: z.string().min(2, "Friend's name must be at least 2 characters"),
  friendPhone: z.string().min(10, "Please enter a valid phone number"),
  yourName: z.string().min(2, "Your name must be at least 2 characters"),
  yourEmail: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-[4px] border border-border px-4 py-3 text-[15px] font-body text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow bg-white";
const labelClass =
  "block text-[13px] font-body font-medium text-charcoal/70 uppercase tracking-wider mb-1.5";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const benefits = [
  {
    icon: Gift,
    title: "Help a Neighbor, Earn $50",
    body: "Refer a friend or family member — when they complete an installation, you pocket $50. Good for them, good for you.",
  },
  {
    icon: Users,
    title: "Easy Process",
    body: "Fill out the short form below. Our team will reach out to your referral within one business day.",
  },
  {
    icon: CheckCircle,
    title: "We Handle the Rest",
    body: "We take care of the follow-up — your contact just sits back and gets a free consultation.",
  },
];

export default function ReferAFriendPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/refer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              {t.pages.common.home}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">Refer a Friend</span>
          </nav>

          <motion.p
            className="font-body text-accent uppercase tracking-[0.12em] text-sm font-semibold mb-3"
            {...fadeUp(0)}
          >
            Spread the Word
          </motion.p>

          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            {...fadeUp(0.05)}
          >
            Refer a Friend,<br />Protect a Neighbor
          </motion.h1>

          <motion.p
            className="mt-2 text-white/70 font-body text-lg max-w-2xl leading-relaxed"
            {...fadeUp(0.1)}
          >
            Know someone who needs hurricane protection? Share their info and
            we&apos;ll reach out with a free consultation — no obligation, no hassle.
          </motion.p>

          <motion.div
            className="mt-8 inline-flex items-center gap-3 bg-accent/15 border border-accent/30 rounded-[8px] px-5 py-3"
            {...fadeUp(0.18)}
          >
            <span className="text-2xl" aria-hidden="true">💵</span>
            <p className="font-body text-white text-base leading-snug">
              <span className="font-heading font-bold text-accent text-lg">Get $50</span>
              {" "}for every friend who completes an installation with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-surface" aria-label="How it works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-[12px] p-7 border border-border"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-11 h-11 rounded-[8px] bg-blue/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-navy text-[17px] mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-charcoal text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-white" aria-label="Referral form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-body text-blue uppercase tracking-[0.12em] text-sm font-semibold mb-3">
                Referral Form
              </p>
              <h2
                className="font-heading font-bold text-navy uppercase leading-[1.1] mb-5"
                style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
              >
                Tell us about you<br />and your friend
              </h2>
              <p className="font-body text-charcoal text-base leading-relaxed mb-8 max-w-sm">
                Fill in the details below and our team will contact your friend
                within one business day to schedule a free in-home consultation.
              </p>

              <div className="space-y-4 text-[15px] font-body text-charcoal/70">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span>Free, no-obligation consultation for your referral</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span>We serve Miami-Dade, Broward &amp; Palm Beach counties</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span>Licensed &amp; insured since 2006</span>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-[12px] p-10 text-center">
                  <CheckCircle
                    size={40}
                    className="text-green-600 mx-auto mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading font-bold text-navy text-xl uppercase mb-2">
                    Referral Sent!
                  </h3>
                  <p className="font-body text-charcoal text-base leading-relaxed">
                    Thanks for spreading the word. We&apos;ll reach out to your friend
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-body font-medium text-sm text-blue hover:underline"
                  >
                    Refer another friend
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="bg-surface rounded-[12px] p-8 border border-border"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                >
                  {/* Friend section */}
                  <p className="font-heading font-bold text-navy uppercase text-[11px] tracking-[0.12em] mb-4">
                    Your Friend&apos;s Details
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="friendName" className={labelClass}>
                        What&apos;s their full name? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="friendName"
                        type="text"
                        placeholder="e.g. Maria Gonzalez"
                        autoComplete="off"
                        aria-describedby={errors.friendName ? "friendName-error" : undefined}
                        {...register("friendName")}
                        className={cn(inputClass, errors.friendName && "border-red-400 focus:ring-red-400")}
                      />
                      {errors.friendName && (
                        <p id="friendName-error" className="mt-1.5 text-red-500 text-[13px] font-body">
                          {errors.friendName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="friendPhone" className={labelClass}>
                        What&apos;s their phone number? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="friendPhone"
                        type="tel"
                        placeholder="(954) 555-1234"
                        autoComplete="off"
                        aria-describedby={errors.friendPhone ? "friendPhone-error" : undefined}
                        {...register("friendPhone")}
                        className={cn(inputClass, errors.friendPhone && "border-red-400 focus:ring-red-400")}
                      />
                      {errors.friendPhone && (
                        <p id="friendPhone-error" className="mt-1.5 text-red-500 text-[13px] font-body">
                          {errors.friendPhone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-6" />

                  {/* Referrer section */}
                  <p className="font-heading font-bold text-navy uppercase text-[11px] tracking-[0.12em] mb-4">
                    Your Details
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label htmlFor="yourName" className={labelClass}>
                        What&apos;s your full name? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="yourName"
                        type="text"
                        placeholder="e.g. John Smith"
                        autoComplete="name"
                        aria-describedby={errors.yourName ? "yourName-error" : undefined}
                        {...register("yourName")}
                        className={cn(inputClass, errors.yourName && "border-red-400 focus:ring-red-400")}
                      />
                      {errors.yourName && (
                        <p id="yourName-error" className="mt-1.5 text-red-500 text-[13px] font-body">
                          {errors.yourName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="yourEmail" className={labelClass}>
                        What is your email address? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="yourEmail"
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        aria-describedby={errors.yourEmail ? "yourEmail-error" : undefined}
                        {...register("yourEmail")}
                        className={cn(inputClass, errors.yourEmail && "border-red-400 focus:ring-red-400")}
                      />
                      {errors.yourEmail && (
                        <p id="yourEmail-error" className="mt-1.5 text-red-500 text-[13px] font-body">
                          {errors.yourEmail.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-[13px] font-body mb-4">
                      Something went wrong. Please try again or call us at (954) 625-5318.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full font-heading font-bold text-[15px] tracking-[0.05em] uppercase text-white bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-[8px] px-7 py-4 shadow-cta transition-all duration-150"
                  >
                    {status === "loading" ? "Sending…" : "Submit Referral"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Need Protection<br />for Yourself?
          </motion.h2>
          <motion.p
            className="font-body text-white/70 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get a free in-home consultation with no obligation. South Florida&apos;s
            trusted hurricane protection since 2006.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold px-10 py-4 rounded-[8px] text-base uppercase tracking-[0.06em] transition-colors shadow-cta"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-heading font-bold px-10 py-4 rounded-[8px] text-base uppercase tracking-[0.06em] hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              View Our Products
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
