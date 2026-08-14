"use client";

import Reveal from "@/components/Reveal";
import QuickFacts from "@/components/QuickFacts";
import NowPlaying from "@/components/NowPlaying";
import FandomPile from "@/components/FandomPile";
import { useT } from "@/components/LocaleProvider";

export default function Interests() {
  const t = useT();

  return (
    <section id="gustos" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {t.interests.eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
            {t.interests.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-foreground/80">
            {t.interests.introBefore}
            <a
              href="https://letterboxd.com/JesuCritico/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
            >
              {t.interests.introLink}
            </a>
          </p>
        </Reveal>

        <div className="mt-16">
          <FandomPile />
        </div>

        <QuickFacts />
        <NowPlaying />
      </div>
    </section>
  );
}
