"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Leaf, Award } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Premium Materials",
    description: "We use top-quality products from trusted manufacturers like ES Windows, PGT, CGI, Lawson, Bandalux and South Evolution.",
  },
  {
    icon: Wrench,
    title: "3 Years Free Maintenance",
    description: "Yearly visits by our team, free of charge, to tune up your purchases and ensure everything performs optimally.",
  },
  {
    icon: Leaf,
    title: "Community Focused",
    description: "We donate a portion of our profits to reforestation and environmental causes. Hurricanes need to be addressed at the root.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Serving South Florida since 2006 with over 10,000 installations. Licensed, insured, and trusted by homeowners and property managers.",
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
          <p className="mt-4 text-text-muted font-body max-w-2xl mx-auto">
            There are dozens of companies in South Florida offering hurricane protection. Here&apos;s why homeowners choose us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-primary/50 rounded-lg p-6 border border-secondary hover:border-accent/30 transition-colors"
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
              <p className="text-text-muted font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
