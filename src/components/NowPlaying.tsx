"use client";

import PaperPhoto from "@/components/PaperPhoto";
import Reveal from "@/components/Reveal";
import { useT } from "@/components/LocaleProvider";

const songs = ["drivers license", "good 4 u", "vampire", "deja vu", "obsessed"];

export default function NowPlaying() {
  const t = useT();

  return (
    <Reveal className="mt-24 grid gap-8 border-t border-foreground/10 pt-16 md:grid-cols-[280px_1fr] md:items-center md:gap-16">
      <div className="mx-auto w-48 md:mx-0 md:w-full">
        <PaperPhoto src="/images/olivia-rodrigo-v2.png" alt="Olivia Rodrigo" rotate={-4} />
      </div>
      <div className="min-w-0">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          {t.nowPlaying.eyebrow}
        </span>
        <h3 className="mt-3 text-4xl leading-[0.95] tracking-tight md:text-6xl">Olivia Rodrigo</h3>
        <p className="mt-3 max-w-xl text-foreground/80">{t.nowPlaying.blurb}</p>
        <div className="mt-6 min-w-0 overflow-hidden border-y border-foreground/10 py-2">
          <p className="animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest text-accent">
            {songs.concat(songs).map((song, i) => (
              <span key={i} className="mx-4">
                ♪ {song}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
