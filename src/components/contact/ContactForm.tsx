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
        <label htmlFor="contact-name" className="block text-sm font-body font-medium text-foreground mb-2">
          Name *
        </label>
        <input
          id="contact-name"
          {...register("name")}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-foreground placeholder:text-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-body font-medium text-foreground mb-2">
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-foreground placeholder:text-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-body font-medium text-foreground mb-2">
          Phone *
        </label>
        <input
          id="contact-phone"
          type="tel"
          {...register("phone")}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-foreground placeholder:text-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="(954) 555-1234"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-body font-medium text-foreground mb-2">
          Message (optional)
        </label>
        <textarea
          id="contact-message"
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-foreground placeholder:text-gray-500 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {submitStatus === "success" && (
        <p className="text-primary font-body text-center py-2">
          Thanks! We will contact you to schedule a consultation.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-400 font-body text-center py-2">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-primary text-white font-heading font-bold py-4 px-6 rounded hover:bg-primary/90 transition-colors uppercase flex items-center justify-center"
      >
        Submit
      </button>
    </form>
  );
}
