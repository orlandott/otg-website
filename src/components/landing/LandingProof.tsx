"use client";

import { CheckCircle2 } from "lucide-react";
import { landingBrands } from "@/lib/data/landing";
import { eyebrow } from "@/components/ui/styles";
import { cn } from "@/lib/utils";
import { useLandingCopy } from "./useLandingCopy";

export function LandingProof() {
  const { copy } = useLandingCopy();
  const { proof } = copy;

  return (
    <section aria-label={proof.label} className="border-b border-border bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8 text-center md:grid-cols-4">
          {proof.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 font-body text-[13px] text-charcoal/80">{stat.label}</dt>
              <dd className="font-heading font-bold text-navy text-[36px] leading-none md:text-[44px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 grid gap-x-6 gap-y-3 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {proof.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2.5 font-body text-[15px] text-charcoal">
              <CheckCircle2 size={20} strokeWidth={1.5} aria-hidden className="mt-px shrink-0 text-green" />
              {perk}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-8 md:flex-row md:justify-center md:gap-6">
          <p className={cn(eyebrow, "text-charcoal/80")}>
            {proof.brandsLabel}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {landingBrands.map((brand) => (
              <li
                key={brand}
                className="font-heading font-semibold text-[17px] uppercase tracking-[0.04em] text-navy/70"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
