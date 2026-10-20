"use client";

import { CalendarCheck, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { eyebrow } from "@/components/ui/styles";
import { cn } from "@/lib/utils";
import { LandingSection } from "./LandingSection";
import { useLandingCopy } from "./useLandingCopy";

const STEP_ICONS = [CalendarCheck, ClipboardCheck, ShieldCheck];

export function LandingSteps() {
  const { copy } = useLandingCopy();
  const { steps } = copy;

  return (
    <LandingSection id="how-it-works" heading={{ title: steps.heading, subtitle: steps.subtitle }}>
      <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.items.map((step, i) => {
          const Icon = STEP_ICONS[i];
          return (
            <li key={step.title}>
              <Reveal delay={i * 0.1} className="h-full">
                <div className="h-full rounded-[12px] border border-border bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-blue">
                      <Icon size={24} strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className={cn(eyebrow, "text-charcoal/80")}>
                      {steps.stepLabel} {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-navy text-[20px] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-charcoal">{step.body}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </LandingSection>
  );
}
