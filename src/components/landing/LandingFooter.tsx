"use client";

import Image from "next/image";
import { LANDING_PHONE_DISPLAY, LANDING_PHONE_HREF } from "@/lib/data/landing";
import { useLandingCopy } from "./useLandingCopy";

export function LandingFooter() {
  const { copy } = useLandingCopy();
  const { footer } = copy;

  return (
    // Bottom padding keeps the last line clear of the floating chat launcher.
    <footer className="border-t border-border bg-white pb-28 pt-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
        <div>
          <Image
            src="/images/landing/logo.webp"
            alt="Orlando T Group Inc."
            width={124}
            height={36}
            className="mx-auto h-9 w-auto md:mx-0"
          />
          <p className="mt-3 max-w-md font-body text-[13px] text-charcoal/80">{footer.tagline}</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:items-end">
          <a
            href={LANDING_PHONE_HREF}
            className="inline-flex min-h-[44px] items-center font-heading font-semibold text-[20px] text-navy hover:text-blue"
          >
            {LANDING_PHONE_DISPLAY}
          </a>
          {/* A full page load (not next/link) so the main site boots its own chat widget config. */}
          <a
            href="/"
            className="inline-flex min-h-[44px] items-center font-body text-[13px] text-blue underline-offset-4 hover:underline"
          >
            {footer.visitSite}
          </a>
          <p className="font-body text-[13px] text-charcoal/80">
            &copy; {new Date().getFullYear()} Orlando T Group Inc. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
