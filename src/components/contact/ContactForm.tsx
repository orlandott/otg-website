"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const inputClass =
  "w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded text-charcoal placeholder:text-muted font-body text-base focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-colors";

const labelClass = "block text-base font-body font-medium text-charcoal mb-2";

export function ContactForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelClass}>Name *</label>
        <input
          id="contact-name"
          {...register("name")}
          className={inputClass}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>Email *</label>
        <input
          id="contact-email"
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
        <label htmlFor="contact-phone" className={labelClass}>Phone *</label>
        <input
          id="contact-phone"
          type="tel"
          {...register("phone")}
          className={inputClass}
          placeholder="(954) 555-1234"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>Message (optional)</label>
        <textarea
          id="contact-message"
          {...register("message")}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      {submitStatus === "success" && (
        <p className="text-blue font-body text-base text-center py-2">
          Thanks! We will contact you to schedule a consultation.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500 font-body text-base text-center py-2">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-accent text-white font-heading font-bold py-4 px-6 rounded uppercase tracking-[0.05em] hover:bg-accent-hover transition-colors"
        style={{ boxShadow: "0 4px 16px rgba(46,125,82,0.25)" }}
      >
        Submit Request
      </button>
    </form>
  );
}
