"use client";

import { getImageProps } from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import type { LandingCopy } from "@/lib/i18n/landing";
import { StarRating } from "@/components/ui/StarRating";
import { LandingAgent } from "./LandingAgent";
import { useLandingCopy } from "./useLandingCopy";

// No entrance animation here on purpose: the headline and agent card are the
// first thing paid traffic sees and should paint immediately.
export function LandingHero() {
  const { copy } = useLandingCopy();

  return (
    <section
      aria-labelledby="landing-hero-heading"
      className="relative isolate overflow-hidden bg-navy"
    >
      <HeroBackdrop />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95 lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/85 lg:to-primary/60"
      />

      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 pb-12 pt-8 sm:px-6 md:pb-16 md:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-x-14 lg:gap-y-8 lg:px-8 lg:py-20">
        <HeroIntro hero={copy.hero} ratingLabel={copy.reviews.starsAria(5)} />
        <div className="w-full max-w-[560px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <LandingAgent />
        </div>
        <HeroBullets bullets={copy.hero.bullets} />
      </div>
    </section>
  );
}

const HERO_IMAGE = { alt: "", fill: true, priority: true, sizes: "100vw" };

/**
 * The photo sits under a dark overlay, so phones get a 560px center crop
 * (60 KB) instead of the 1500px desktop image (210 KB).
 */
function HeroBackdrop() {
  const desktop = getImageProps({ ...HERO_IMAGE, src: "/images/landing/hero.webp" }).props;
  const { props: mobile } = getImageProps({ ...HERO_IMAGE, src: "/images/landing/hero-mobile.webp" });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop.src} />
      <img {...mobile} alt="" className="-z-20 object-cover" />
    </picture>
  );
}

function HeroIntro({ hero, ratingLabel }: { hero: LandingCopy["hero"]; ratingLabel: string }) {
  return (
    <div className="lg:self-end">
      <p className="flex items-center gap-2 font-body font-medium text-[13px] uppercase tracking-[0.08em] text-white/80">
        <MapPin size={14} strokeWidth={1.5} aria-hidden />
        {hero.eyebrow}
      </p>
      <h1
        id="landing-hero-heading"
        className="mt-4 font-heading font-bold uppercase text-white text-[clamp(40px,6vw,64px)] leading-[1.02] text-balance"
      >
        {hero.headline} <span className="block text-accent">{hero.headlineAccent}</span>
      </h1>
      <p className="mt-5 max-w-xl font-body text-[17px] leading-relaxed text-white/85 md:text-lg">
        {hero.subtitle}
      </p>
      <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[15px] text-white/85">
        <StarRating rating={5} label={ratingLabel} />
        {hero.rating}
      </p>
    </div>
  );
}

function HeroBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:self-start">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-2.5 font-body text-[15px] text-white">
          <CheckCircle2 size={20} strokeWidth={1.5} aria-hidden className="mt-px shrink-0 text-accent" />
          {bullet}
        </li>
      ))}
    </ul>
  );
}
