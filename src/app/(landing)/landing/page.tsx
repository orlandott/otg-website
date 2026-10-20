import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProof } from "@/components/landing/LandingProof";
import { LandingProducts } from "@/components/landing/LandingProducts";
import { LandingSteps } from "@/components/landing/LandingSteps";
import { LandingWork } from "@/components/landing/LandingWork";
import { LandingReviews } from "@/components/landing/LandingReviews";
import { LandingFinancing } from "@/components/landing/LandingFinancing";
import { LandingFinalCta } from "@/components/landing/LandingFinalCta";

const title = "Free Hurricane Protection Estimate | Orlando T Group Inc.";
const description =
  "Ask Orlando, our 24/7 AI assistant, about impact windows, doors and shutters. Licensed South Florida installer since 2006, with free in-home estimates.";
const url = `${SITE_URL}/landing`;
const ogImage = {
  url: "/images/hero.png",
  width: 1500,
  height: 760,
  alt: "Orlando T Group — hurricane protection for South Florida homes",
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "hurricane protection estimate",
    "impact windows South Florida",
    "hurricane shutters",
    "impact doors",
    "Miami-Dade",
    "Broward",
    "Palm Beach",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Orlando T Group Inc.",
    images: [ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
  alternates: { canonical: url },
  // Paid-traffic page: kept out of search results so it doesn't compete with
  // the homepage. Ad crawlers (AdsBot, Meta) still fetch it.
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <LandingProof />
      <LandingProducts />
      <LandingSteps />
      <LandingWork />
      <LandingReviews />
      <LandingFinancing />
      <LandingFinalCta />
    </>
  );
}
