"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { LANDING_PHONE_DISPLAY, LANDING_PHONE_HREF } from "@/lib/data/landing";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLandingCopy } from "./useLandingCopy";

/**
 * Ad-landing header: logo, language and a call button. No site navigation
 * on purpose, so paid visitors stay on the page with the form.
 */
export function LandingHeader() {
  const { copy } = useLandingCopy();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/landing/logo.webp"
          alt="Orlando T Group Inc."
          width={138}
          height={40}
          priority
          className="h-9 w-auto md:h-10"
        />
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageToggle compact />
          <a
            href={LANDING_PHONE_HREF}
            aria-label={copy.header.callAria}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-[8px] bg-blue px-4 font-heading font-semibold text-[15px] uppercase tracking-[0.05em] text-white transition-colors duration-150 hover:bg-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            <Phone size={16} strokeWidth={1.5} aria-hidden />
            <span className="sm:hidden">{copy.header.call}</span>
            <span className="hidden sm:inline">{LANDING_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
