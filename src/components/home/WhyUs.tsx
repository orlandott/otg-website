"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Leaf } from "lucide-react";
import Link from "next/link";

const valueProps = [
  {
    icon: Shield,
    title: "Top quality materials",
    description:
      "Premium products from ES Windows, PGT, CGI, Lawson, Bandalux and South Evolution.",
    href: "https://www.orlandotgroupinc.com/materials",
  },
  {
    icon: Wrench,
    title: "3 years of free maintenance and support",
    description:
      "Yearly visits by us, free of charge, to tune up your purchases.",
    href: "https://www.orlandotgroupinc.com/free-maintenance",
  },
  {
    icon: Leaf,
    title: "We donate a part of our profits to NGOs",
    description:
      "Hurricanes need to be addressed at the root. We support reforesting.",
    href: "https://www.orlandotgroupinc.com/donations",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-heading font-bold text-white uppercase tracking-[0.01em] leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            What Makes Us Different
          </h2>
          <p className="mt-4 text-white/70 font-body text-sm max-w-2xl mx-auto leading-relaxed">
            There are dozens of companies in South Florida offering hurricane protection.
            Let us tell you why we think we&apos;re different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white/5 rounded-lg p-7 border border-white/10 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center text-accent mb-5">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-[20px] text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/65 font-body text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-sky hover:text-white uppercase tracking-wider transition-colors"
              >
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
