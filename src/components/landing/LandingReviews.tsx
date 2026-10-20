"use client";

import { ExternalLink } from "lucide-react";
import { landingReviews } from "@/lib/data/landing";
import { GOOGLE_REVIEWS_LANDING_URL } from "@/lib/data/reviewLinks";
import { Reveal } from "@/components/ui/Reveal";
import { secondaryCta } from "@/components/ui/styles";
import { StarRating } from "@/components/ui/StarRating";
import { LandingSection } from "./LandingSection";
import { useLandingCopy } from "./useLandingCopy";

export function LandingReviews() {
  const { copy } = useLandingCopy();
  const { reviews } = copy;

  return (
    <LandingSection id="reviews" heading={{ title: reviews.heading, subtitle: reviews.subtitle }}>
      <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
        {landingReviews.map((review, i) => (
          <li key={review.name}>
            <Reveal delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-[12px] border border-border bg-white p-6 shadow-sm">
                <StarRating
                  rating={review.rating}
                  label={reviews.starsAria(review.rating)}
                />
                {/* Reviews are quoted verbatim in English on both locales. */}
                <blockquote lang="en" className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-charcoal">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-body text-[13px]">
                  <span className="font-semibold text-navy">{review.name}</span>
                  <span className="text-charcoal/80"> · {review.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <a
          href={GOOGLE_REVIEWS_LANDING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryCta}
        >
          {reviews.more}
          <ExternalLink size={14} strokeWidth={1.5} aria-hidden />
          <span className="sr-only">{reviews.newTab}</span>
        </a>
      </div>
    </LandingSection>
  );
}
