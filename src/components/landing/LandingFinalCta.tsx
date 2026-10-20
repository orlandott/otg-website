"use client";

import { MessageCircle, Phone } from "lucide-react";
import { LANDING_PHONE_HREF } from "@/lib/data/landing";
import { outlineOnDarkCta, primaryCta } from "@/components/ui/styles";
import { Reveal } from "@/components/ui/Reveal";
import { useLandingAgent } from "./LandingAgentContext";
import { useLandingCopy } from "./useLandingCopy";

export function LandingFinalCta() {
  const { copy } = useLandingCopy();
  const { finalCta } = copy;
  const { start } = useLandingAgent();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-gradient-to-br from-navy via-navy to-primary py-16 md:py-24"
    >
      <Reveal className="mx-auto max-w-[880px] px-4 text-center sm:px-6">
        <h2
          id="final-cta-heading"
          className="font-heading font-bold uppercase text-white text-[28px] leading-[1.05] text-balance md:text-[40px]"
        >
          {finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-[17px] leading-relaxed text-white/85">
          {finalCta.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <button type="button" onClick={() => start("chat")} className={primaryCta}>
            <MessageCircle size={18} strokeWidth={1.5} aria-hidden />
            {finalCta.cta}
          </button>
          <a href={LANDING_PHONE_HREF} className={outlineOnDarkCta}>
            <Phone size={18} strokeWidth={1.5} aria-hidden />
            {finalCta.call}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
