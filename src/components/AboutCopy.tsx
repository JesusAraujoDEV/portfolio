"use client";

import Reveal from "@/components/Reveal";
import { useT } from "@/components/LocaleProvider";

export default function AboutCopy() {
  const t = useT();

  return (
    <Reveal className="min-w-0">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        {t.about.eyebrow}
      </span>
      <h2 className="mt-4 max-w-2xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
        {t.about.heading}
      </h2>
      <p className="mt-6 max-w-2xl text-foreground/80">{t.about.bio}</p>
    </Reveal>
  );
}
