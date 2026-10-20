"use client";

import Image from "next/image";
import { landingWork } from "@/lib/data/landing";
import { Reveal } from "@/components/ui/Reveal";
import { LandingSection } from "./LandingSection";
import { useLandingCopy } from "./useLandingCopy";

export function LandingWork() {
  const { copy, language } = useLandingCopy();

  return (
    <LandingSection
      id="recent-work"
      tone="surface"
      heading={{ title: copy.work.heading, subtitle: copy.work.subtitle }}
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {landingWork.map((photo, i) => (
          <li key={photo.src}>
            <Reveal delay={i * 0.08}>
              <div className="relative aspect-square overflow-hidden rounded-[12px] bg-border">
                <Image
                  src={photo.src}
                  alt={photo.alt[language]}
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </LandingSection>
  );
}
