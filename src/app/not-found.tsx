import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { eyebrow, primaryCta } from "@/components/ui/styles";
import { cn } from "@/lib/utils";

// Unmatched URLs render under the root layout only, so this page brings the
// main-site chrome back itself.
export default function NotFound() {
  return (
    <SiteShell>
      <section
        className="min-h-screen bg-white pt-40 pb-24 md:pt-48"
        aria-labelledby="not-found-heading"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={cn(eyebrow, "text-charcoal/80")}>
            Error 404
          </p>
          <h1
            id="not-found-heading"
            className="mt-3 font-heading font-bold uppercase text-navy text-[clamp(32px,4vw,48px)] leading-[1.05]"
          >
            Page not found
          </h1>
          <p className="mt-4 font-body text-[15px] text-charcoal">
            The page you are looking for does not exist or has moved.
          </p>
          <Link
            href="/"
            className={cn(primaryCta, "mt-8")}
          >
            Back to home
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
