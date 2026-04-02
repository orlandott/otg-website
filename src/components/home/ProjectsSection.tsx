"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const projectImages = [
  "/images/projects/project-1.jpg",
  "/images/projects/project-2.jpg",
  "/images/projects/project-3.jpg",
  "/images/projects/project-4.webp",
  "/images/projects/project-5.jpeg",
  "/images/projects/project-6.jpg",
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t.projects.heading}
          </h2>
          <p className="mt-3 font-body text-muted text-sm max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {projectImages.map((src, index) => (
            <motion.div
              key={src}
              className="relative overflow-hidden rounded-lg bg-surface border border-[#E0E0E0]"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Image
                src={src}
                alt={`${t.projects.projectAlt} ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue text-blue font-heading font-bold rounded text-sm uppercase tracking-wide hover:bg-blue hover:text-white transition-colors"
          >
            {t.projects.learnMore}
          </Link>
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue text-blue font-heading font-bold rounded text-sm uppercase tracking-wide hover:bg-blue hover:text-white transition-colors"
          >
            {t.projects.testimonials}
          </Link>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-heading font-bold rounded text-sm uppercase tracking-wide hover:bg-accent-hover transition-colors"
            style={{ boxShadow: "0 4px 16px rgba(245,158,11,0.25)" }}
          >
            {t.projects.freeConsultation}
          </a>
        </motion.div>

        {/* YouTube embed */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#E0E0E0]">
            <iframe
              src="https://www.youtube.com/embed/cqXwjVG-UZk"
              title="Orlando T Group Projects"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
