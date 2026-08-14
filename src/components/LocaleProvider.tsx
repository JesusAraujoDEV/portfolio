"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const STORAGE_KEY = "locale";

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en" || value === "de";
}

// ponytail: localStorage is an external mutable store — useSyncExternalStore
// is the built-in tool for that, not a setState-in-a-useEffect dance. The
// server snapshot is always "es", so first paint never mismatches hydration.
let listeners: Array<() => void> = [];
function subscribe(callback: () => void) {
  listeners = [...listeners, callback];
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}
function getSnapshot(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "es";
}
function getServerSnapshot(): Locale {
  return "es";
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
} | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = (next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    listeners.forEach((l) => l());
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

/** Reads the current locale's static UI copy dictionary. */
export function useT() {
  const { locale } = useLocale();
  return translations[locale];
}
