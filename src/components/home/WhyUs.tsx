"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Leaf } from "lucide-react";
import Link from "next/link";

const valueProps = [
  {
    icon: Shield,
    title: "Top quality materials",
    description:
      "Premium products from ES Windows, PGT, CGI, Lawson, Bandalux and South Evolution",
    href: "https://www.orlandotgroupinc.com/materials",
  },
  {
    icon: Wrench,
    title: "3 years of free maintenance and support.",
    description:
      "Yearly visits by us, free of charge, to tune up your purchases.",
    href: "https://www.orlandotgroupinc.com/free-maintenance",
  },
  {
    icon: Leaf,
    title: "We donate a part of our profits to NGOs.",
    description:
      "Hurricanes need to be addressed at the root. We support reforesting.",
    href: "https://www.orlandotgroupinc.com/donations",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            WHAT MAKES US DIFFERENT
          </h2>
          <p className="mt-4 text-white/80 font-body max-w-2xl mx-auto">
            There are dozens of companies in South Florida offering hurricane protection.
            <br />
            Who should you choose? Let us tell you why we think we&apos;re different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-brand-steel/20 rounded-lg p-6 border border-brand-sky/20 hover:border-accent/60 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/80 font-body text-sm leading-relaxed">
                {item.description}
              </p>

              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-white/90 font-heading font-bold uppercase tracking-wider text-xs hover:underline"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
