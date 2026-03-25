"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projectImages = [
  "/images/projects/project-1.jpg",
  "/images/projects/project-2.jpg",
  "/images/projects/project-3.jpg",
  "/images/projects/project-4.webp",
  "/images/projects/project-5.jpeg",
  "/images/projects/project-6.jpg",
];

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-secondary">
            PROJECTS
          </h2>
          <p className="mt-4 text-foreground/90 font-body text-base md:text-lg max-w-3xl mx-auto">
            We have been working in South Florida since 2006 and have done
            over 1,000 installations. Here are a few of our projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projectImages.map((src, index) => (
            <motion.div
              key={src}
              className="relative overflow-hidden rounded-lg border border-brand-sky/25 bg-white"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 md:gap-5 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-steel text-brand-steel font-heading font-bold rounded hover:bg-brand-steel hover:text-white transition-colors uppercase text-sm"
            >
              LEARN MORE
            </Link>
            <Link
              href="https://www.orlandotgroupinc.com/testimonials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-steel text-brand-steel font-heading font-bold rounded hover:bg-brand-steel hover:text-white transition-colors uppercase text-sm"
            >
              MORE TESTIMONIALS
            </Link>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-secondary font-heading font-bold rounded hover:bg-accent/90 transition-colors uppercase text-sm"
            >
              FREE CONSULTATION
            </a>
          </motion.div>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-brand-sky/25">
            <iframe
              src="https://www.youtube.com/embed/cqXwjVG-UZk"
              title="Orlando T Group Projects"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

