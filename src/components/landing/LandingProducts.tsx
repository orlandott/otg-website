"use client";

import { ArrowRight } from "lucide-react";
import { localizeProduct, products } from "@/lib/data/products";
import { landingProductImage } from "@/lib/data/landing";
import { ProductImage } from "@/components/ui/ProductImage";
import { Reveal } from "@/components/ui/Reveal";
import { LandingSection } from "./LandingSection";
import { useLandingAgent } from "./LandingAgentContext";
import { useLandingCopy } from "./useLandingCopy";

export function LandingProducts() {
  const { copy, language } = useLandingCopy();
  const { start } = useLandingAgent();

  return (
    <LandingSection
      id="products"
      tone="surface"
      heading={{ title: copy.products.heading, subtitle: copy.products.subtitle }}
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {products.map((product, i) => {
          const { name, summary } = localizeProduct(product, language);

          return (
            <li key={product.id}>
              <Reveal delay={(i % 4) * 0.08} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-border bg-white shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue hover:-translate-y-0.5 hover:shadow-md">
                  <div className="relative aspect-[4/3] bg-surface">
                    <ProductImage
                      src={landingProductImage(product.id)}
                      alt=""
                      sizes="(max-width: 1024px) 50vw, 280px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <h3 className="font-heading font-semibold text-navy text-[17px] leading-tight sm:text-[20px]">
                      {name}
                    </h3>
                    <p className="mt-1 font-body text-[13px] text-charcoal/80">{summary}</p>
                    <button
                      type="button"
                      onClick={() => start("chat")}
                      aria-label={copy.products.ctaAria(name)}
                      className="mt-auto inline-flex items-center gap-1 pt-3 font-body font-medium text-[13px] text-blue after:absolute after:inset-0 focus-visible:outline-none sm:text-[15px]"
                    >
                      {copy.products.cta}
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden
                        className="transition-transform duration-150 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </LandingSection>
  );
}
