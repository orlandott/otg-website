"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { translations } from "@/lib/i18n/translations";
import type { Language, Translations } from "@/lib/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

const STORAGE_KEY = "language";

function parseLanguage(value: string | null): Language | null {
  return value === "en" || value === "es" ? value : null;
}

/**
 * The visitor's language before React state catches up: a `?lang=es|en` URL
 * param (e.g. a Spanish ad linking to /landing?lang=es) wins over the saved
 * preference. Null means "use the default".
 */
export function readPreferredLanguage(): Language | null {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    return parseLanguage(fromUrl) ?? parseLanguage(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    const preferred = readPreferredLanguage();
    if (preferred) setLanguage(preferred);
  }, [setLanguage]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] as Translations,
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
