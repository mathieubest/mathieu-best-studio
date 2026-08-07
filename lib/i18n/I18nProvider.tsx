"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import translations, {
  type Locale,
} from "./translations";

export type { Locale };

const STORAGE_KEY = "mbs-locale";

function getBrowserLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const lang = navigator.language || "fr";
  return lang.startsWith("fr") ? "fr" : "en";
}

function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;
  return null;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredLocale();
    setLocaleState(stored ?? getBrowserLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale] as Record<string, string>;
      return dict?.[key] ?? (translations.fr as Record<string, string>)[key] ?? key;
    },
    [locale],
  );

  // Prevent flash of wrong language during SSR
  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{ locale: "fr", setLocale, t: (k) => (translations.fr as Record<string, string>)[k] ?? k }}
      >
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used inside I18nProvider");
  return ctx;
}
