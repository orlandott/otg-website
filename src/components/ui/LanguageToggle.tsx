"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n/translations";

const LANGUAGES: Language[] = ["en", "es"];

/** English / Español switch. `compact` shows "EN | ES" for tight headers. */
export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  const labels: Record<Language, string> = compact
    ? { en: "EN", es: "ES" }
    : { en: "English", es: "Español" };

  return (
    <div
      className="flex items-center rounded overflow-hidden border border-navy/20"
      role="group"
      aria-label="Language selector"
    >
      {LANGUAGES.map((lang, i) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          aria-label={lang === "en" ? "Switch to English" : "Cambiar a Español"}
          className={cn(
            "flex-1 text-center px-3 py-1 text-[11px] font-heading font-bold tracking-[0.05em] uppercase transition-colors duration-150",
            compact && "min-h-[44px] min-w-[44px] px-2 text-[13px]",
            i === 0 && "border-r border-navy/20",
            language === lang ? "bg-navy/10 text-navy" : "text-navy/40 hover:text-navy/70"
          )}
        >
          {labels[lang]}
        </button>
      ))}
    </div>
  );
}
