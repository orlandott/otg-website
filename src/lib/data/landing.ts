import type { Language } from "@/lib/i18n/translations";
import { testimonials } from "@/lib/data/testimonials";

/** Anchor of the Orlando agent card; every "Ask Orlando" CTA on /landing goes here. */
export const LANDING_AGENT_ID = "ask-orlando";

/**
 * Paid-ads line, separate from the office number so ad calls are tracked.
 * Datagran answers it with the Orlando agent and, once office-hours routing
 * is set, rings the office first on weekdays 9–5 ET.
 */
export const LANDING_PHONE_DISPLAY = "(954) 914-7110";
export const LANDING_PHONE_HREF = "tel:+19549147110";

export const landingBrands = ["ES Windows", "PGT", "ECO", "Mr. Glass"];

/** Compressed thumbnails for ad traffic; the catalog PNGs are 1.5–2.6 MB each. */
export function landingProductImage(productId: string): string {
  return `/images/landing/products/${productId}.webp`;
}

export interface LandingPhoto {
  src: string;
  alt: Record<Language, string>;
}

export const landingWork: LandingPhoto[] = [
  {
    src: "/images/landing/work/glass-enclosure.webp",
    alt: {
      en: "Glass patio enclosure with white frames on a single-story South Florida home",
      es: "Cerramiento de patio en vidrio con marcos blancos en una casa del Sur de Florida",
    },
  },
  {
    src: "/images/landing/work/impact-windows-view.webp",
    alt: {
      en: "Enclosed condo balcony with floor-to-ceiling windows overlooking a lake",
      es: "Balcón de condominio cerrado con ventanales que dan a un lago",
    },
  },
  {
    src: "/images/landing/work/accordion-shutters.webp",
    alt: {
      en: "White accordion hurricane shutters closed across a curved window",
      es: "Persianas de acordeón blancas cerradas sobre una ventana curva",
    },
  },
  {
    src: "/images/landing/work/balcony-enclosure.webp",
    alt: {
      en: "Second-floor balcony enclosed with dark-framed glass panels",
      es: "Balcón del segundo piso cerrado con paneles de vidrio de marco oscuro",
    },
  },
];

const FEATURED_REVIEWERS = ["Janet B.", "Egliana G.", "Lord J."];

export const landingReviews = testimonials.filter((review) =>
  FEATURED_REVIEWERS.includes(review.name)
);
