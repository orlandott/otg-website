"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { eyebrow, primaryCta } from "@/components/ui/styles";
import { Reveal } from "@/components/ui/Reveal";
import { useLandingAgent } from "./LandingAgentContext";
import { LandingSection } from "./LandingSection";
import { useLandingCopy } from "./useLandingCopy";

export function LandingFinancing() {
  const { copy } = useLandingCopy();
  const { financing } = copy;
  const { start } = useLandingAgent();

  return (
    <LandingSection id="financing" tone="surface">
      <Reveal>
        <div className="grid items-center gap-8 rounded-[20px] bg-navy p-6 text-white sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:p-14">
          <div>
            <p className={cn(eyebrow, "text-accent")}>
              {financing.eyebrow}
            </p>
            <h2
              id="financing-heading"
              className="mt-3 font-heading font-bold uppercase text-[28px] leading-[1.05] md:text-[34px]"
            >
              {financing.heading}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {financing.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 font-body text-[15px] text-white/90">
                  <CheckCircle2 size={20} strokeWidth={1.5} aria-hidden className="mt-px shrink-0 text-accent" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[12px] bg-white p-6 text-center text-charcoal sm:p-8">
            <p className={cn(eyebrow, "text-charcoal/80")}>
              {financing.priceLabel}
            </p>
            <p className="mt-2 font-heading font-bold text-navy">
              <span className="text-[56px] leading-none">{financing.price}</span>
              <span className="text-[20px]">{financing.priceUnit}</span>
            </p>
            <button type="button" onClick={() => start("chat")} className={cn(primaryCta, "mt-6 w-full")}>
              {financing.cta}
            </button>
            <p className="mt-4 font-body text-[11px] leading-snug text-charcoal/80">
              {financing.footnote}
            </p>
          </div>
        </div>
      </Reveal>
    </LandingSection>
  );
}
