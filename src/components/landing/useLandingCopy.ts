"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { landingCopy } from "@/lib/i18n/landing";

export function useLandingCopy() {
  const { language } = useLanguage();
  return { copy: landingCopy[language], language };
}
