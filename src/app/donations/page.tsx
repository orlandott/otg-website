"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Leaf, Wind } from "lucide-react";

const orgs = [
  {
    name: "Clean Air Task Force",
    url: "https://www.catf.us",
    icon: Wind,
    share: "50%",
    description:
      "A think tank driving research and policy on the energy technologies and regulatory frameworks needed to decarbonize the global energy system — making the air we breathe cleaner and our climate more stable.",
    impact: "Cutting-edge research on clean energy and climate solutions.",
  },
  {
    name: "Coalition for Rainforest Nations",
    url: "https://www.rainforestcoalition.org",
    icon: Leaf,
    share: "50%",
    description:
      "An intergovernmental organization protecting the world's tropical rainforests by empowering local and indigenous communities — because standing forests are our best defense against a warming climate.",
    impact: "Empowering communities to protect tropical rainforests.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function DonationsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-44 pb-16 md:pt-36 md:pb-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-white/60 text-sm font-body uppercase tracking-wider mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90">Donations</span>
          </nav>

          <motion.h1
            className="font-heading font-bold text-white uppercase leading-[1.05] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            {...fadeUp}
          >
            Supporting Our Planet
          </motion.h1>

          <motion.p
            className="mt-2 text-white/70 font-body text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Supporting long-term hurricane solutions — because protecting homes starts with protecting the planet.
          </motion.p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="font-body text-charcoal text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Every year, hurricanes keep getting stronger — and there are more of them. We recognize that hurricane
            protection must also encompass the root causes making our environment more unstable.
          </motion.p>
          <motion.p
            className="font-body text-charcoal text-lg leading-relaxed mt-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            That is why, at Orlando T Group, <strong>we donate a part of our profits every year</strong> to support
            organizations helping our environment. Half of our donation goes to the{" "}
            <strong>Clean Air Task Force</strong>, and the other half goes to the{" "}
            <strong>Coalition for Rainforest Nations</strong>.
          </motion.p>
        </div>
      </section>

      {/* Org cards */}
      <section className="py-16 md:py-24 bg-surface" aria-label="Our donation recipients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-navy uppercase text-2xl md:text-3xl text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Where Our Donations Go
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orgs.map((org, i) => (
              <motion.div
                key={org.name}
                className="bg-white rounded-[12px] p-8 border border-border flex flex-col gap-6"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[8px] bg-blue/10 flex items-center justify-center flex-shrink-0">
                      <org.icon className="w-6 h-6 text-blue" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy text-lg leading-tight">
                        {org.name}
                      </h3>
                      <p className="font-body text-muted text-sm uppercase tracking-wider mt-0.5">
                        {org.impact}
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 bg-accent/10 text-accent font-heading font-bold text-sm px-3 py-1 rounded-full">
                    {org.share} of donation
                  </span>
                </div>

                <p className="font-body text-charcoal text-base leading-relaxed">
                  {org.description}
                </p>

                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue font-body font-medium text-base hover:underline mt-auto"
                >
                  Learn more about {org.name}
                  <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bright-green py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-heading font-bold text-white uppercase leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Protect Your Home.<br />Protect the Planet.
          </motion.h2>
          <motion.p
            className="font-body text-white/70 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Every project we complete contributes to a cleaner, safer future. Get your free consultation today.
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
