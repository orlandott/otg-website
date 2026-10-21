"use client";

import { getImageProps } from "next/image";
import type { LandingCopy } from "@/lib/i18n/landing";
import { REVIEW_RATING } from "@/lib/data/testimonials";
import { StarRating } from "@/components/ui/StarRating";
import { LandingAgent } from "./LandingAgent";
import { useLandingCopy } from "./useLandingCopy";

// No entrance animation here on purpose: the headline and agent card are the
// first thing paid traffic sees and should paint immediately. The intro stays
// short so the booking card is the one place to look; selling points live in
// the proof strip below.
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

      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 pb-12 pt-8 sm:px-6 md:pb-16 md:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-x-16 lg:px-8 lg:py-20">
        <HeroIntro hero={copy.hero} ratingLabel={copy.reviews.starsAria(REVIEW_RATING)} />
        <div className="w-full max-w-[560px]">
          <LandingAgent />
        </div>
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
    <div>
      <h1
        id="landing-hero-heading"
        className="font-heading font-bold uppercase text-white text-[clamp(40px,6vw,64px)] leading-[1.02] text-balance"
      >
        {hero.headline} <span className="block text-accent">{hero.headlineAccent}</span>
      </h1>
      {/* A grid keeps each product whole: one per line on phones, 2 × 2 above. */}
      <ul className="mt-5 grid max-w-xl gap-x-6 gap-y-1.5 font-body text-[17px] text-white/85 sm:grid-cols-2 md:text-lg">
        {hero.products.map((product) => (
          <li key={product} className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {product}
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-center gap-3 font-body text-[15px] text-white/85">
        <StarRating rating={REVIEW_RATING} label={ratingLabel} />
        {hero.rating}
      </p>
    </div>
  );
}
