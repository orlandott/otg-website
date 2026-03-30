"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const inputClass =
  "w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded text-charcoal placeholder:text-muted font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors";

const labelClass = "block text-sm font-body font-medium text-charcoal mb-2";

export function ConsultationForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit() {
    setSubmitStatus("success");
    reset();
  }

  return (
    <section className="py-20 md:py-28 bg-white" id="consultation">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-heading font-bold text-navy uppercase tracking-[0.01em] leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Free Consultation
          </h2>
          <p className="mt-3 font-body text-muted text-sm">
            Schedule a free in-home estimate. No obligation.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-surface rounded-xl p-7 md:p-10 border border-[#E0E0E0]"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className={labelClass}>First Name *</label>
              <input
                id="firstName"
                {...register("firstName")}
                className={inputClass}
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>Last Name *</label>
              <input
                id="lastName"
                {...register("lastName")}
                className={inputClass}
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>Email Address *</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={inputClass}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number *</label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className={inputClass}
                placeholder="(954) 555-1234"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>How can we help you?</label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your project..."
            />
          </div>

          {submitStatus === "success" && (
            <p className="text-blue font-body text-sm text-center py-2">
              Thanks! We will contact you to schedule a consultation.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500 font-body text-sm text-center py-2">
              Something went wrong. Please try again or call us at (954) 625-5318.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-white font-heading font-bold py-4 px-6 rounded uppercase tracking-[0.05em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            Get My Free Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
