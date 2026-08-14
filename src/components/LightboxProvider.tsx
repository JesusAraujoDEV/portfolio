"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Active = { src: string; alt: string; caption?: string } | null;

const LightboxContext = createContext<{ open: (src: string, alt: string, caption?: string) => void } | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Active>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <LightboxContext.Provider value={{ open: (src, alt, caption) => setActive({ src, alt, caption }) }}>
      {children}
      {active && (
        <div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-4 bg-foreground/95 p-6 md:p-16"
          onClick={() => setActive(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[75vh] max-w-full object-contain shadow-2xl"
          />
          {active.caption && (
            <p
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl text-center text-sm text-background/90 md:text-base"
            >
              {active.caption}
            </p>
          )}
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 font-mono text-xs uppercase tracking-widest text-background/80 transition hover:text-background"
          >
            Cerrar ✕
          </button>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
