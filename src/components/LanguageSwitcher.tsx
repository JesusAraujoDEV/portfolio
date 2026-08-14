"use client";

import { useState } from "react";
import { useLocale, useT } from "@/components/LocaleProvider";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const t = useT();
  const [hovered, setHovered] = useState<Locale | null>(null);

  return (
    <div className="relative flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-wider sm:text-xs sm:tracking-widest">
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          data-cursor={t.cursor.go}
          onClick={() => setLocale(code)}
          onMouseEnter={() => setHovered(code)}
          onMouseLeave={() => setHovered((h) => (h === code ? null : h))}
          onFocus={() => setHovered(code)}
          onBlur={() => setHovered((h) => (h === code ? null : h))}
          aria-pressed={locale === code}
          aria-label={`${t.langSwitcher.label}: ${code.toUpperCase()}`}
          className={`rounded-sm px-1.5 py-0.5 transition ${
            locale === code ? "text-accent" : "text-foreground/50 hover:text-foreground"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}

      {hovered === "de" && (
        <div className="absolute top-full right-0 z-50 mt-2 w-56 rounded-sm border border-foreground/15 bg-background px-3 py-2 text-left font-mono text-[10px] normal-case tracking-normal text-foreground/80 shadow-lg">
          {t.langSwitcher.deNote}
        </div>
      )}
    </div>
  );
}
