"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
};

const inputClass =
  "w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded text-charcoal placeholder:text-muted font-body text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors";

const labelClass = "block text-sm font-body font-medium text-charcoal mb-2";

export function ConsultationForm() {
  const { t } = useLanguage();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const formSchema = useMemo(
    () =>
      z.object({
        firstName: z.string().min(2, t.consultation.firstNameError),
        lastName: z.string().min(2, t.consultation.lastNameError),
        email: z.string().email(t.consultation.emailError),
        phone: z.string().min(10, t.consultation.phoneError),
        message: z.string().optional(),
      }),
    [t]
  );

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
            {t.consultation.heading}
          </h2>
          <p className="mt-3 font-body text-muted text-sm">
            {t.consultation.subtitle}
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
              <label htmlFor="firstName" className={labelClass}>
                {t.consultation.firstName} {t.consultation.required}
              </label>
              <input
                id="firstName"
                {...register("firstName")}
                className={inputClass}
                placeholder={t.consultation.firstNamePlaceholder}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                {t.consultation.lastName} {t.consultation.required}
              </label>
              <input
                id="lastName"
                {...register("lastName")}
                className={inputClass}
                placeholder={t.consultation.lastNamePlaceholder}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                {t.consultation.email} {t.consultation.required}
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={inputClass}
                placeholder={t.consultation.emailPlaceholder}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                {t.consultation.phone} {t.consultation.required}
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className={inputClass}
                placeholder={t.consultation.phonePlaceholder}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              {t.consultation.message}
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder={t.consultation.messagePlaceholder}
            />
          </div>

          {submitStatus === "success" && (
            <p className="text-blue font-body text-sm text-center py-2">
              {t.consultation.success}
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500 font-body text-sm text-center py-2">
              {t.consultation.error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-white font-heading font-bold py-4 px-6 rounded uppercase tracking-[0.05em] hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.30)" }}
          >
            {t.consultation.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
