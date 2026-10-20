import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface LandingSectionProps {
  /** Anchor id; the heading gets `${id}-heading`. */
  id: string;
  /** Centered section title. Omit when the children render their own `${id}-heading`. */
  heading?: { title: string; subtitle?: string };
  tone?: "white" | "surface";
  children: React.ReactNode;
}

export function LandingSection({ id, heading, tone = "white", children }: LandingSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-12 md:py-20 lg:py-24", tone === "surface" ? "bg-surface" : "bg-white")}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {heading && (
          <Reveal className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <h2
              id={headingId}
              className="font-heading font-bold uppercase text-navy text-[28px] leading-[1.1] md:text-[34px]"
            >
              {heading.title}
            </h2>
            {heading.subtitle && (
              <p className="mt-3 font-body text-[15px] text-charcoal/80 md:text-[17px]">
                {heading.subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
