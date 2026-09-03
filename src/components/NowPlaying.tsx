"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PaperPhoto from "@/components/PaperPhoto";
import PushText from "@/components/PushText";
import { useT } from "@/components/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

const songs = ["drivers license", "good 4 u", "vampire", "deja vu", "obsessed"];

export default function NowPlaying() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  // Same "pull apart" exit as AboutStage, mirrored direction (photo right,
  // copy left this time) so it doesn't read as a copy-paste of that section.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["center center", "end start"] });
  const photoX = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const copyX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="mt-24 grid gap-8 overflow-x-clip border-t border-foreground/10 pt-16 md:grid-cols-[280px_1fr] md:items-center md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mx-auto w-48 md:mx-0 md:w-full"
      >
        <motion.div style={{ x: photoX, opacity: photoOpacity }} className="will-change-transform">
          <PaperPhoto src="/images/olivia-rodrigo-v2.png" alt="Olivia Rodrigo" rotate={-4} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="min-w-0"
      >
        <motion.div style={{ x: copyX, opacity: copyOpacity }} className="will-change-transform">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {t.nowPlaying.eyebrow}
          </span>
          <h3 className="mt-3 text-4xl leading-[0.95] tracking-tight md:text-6xl">Olivia Rodrigo</h3>
          <p className="mt-3 max-w-xl text-foreground/80">
            <PushText>{t.nowPlaying.blurb}</PushText>
          </p>
          <div className="mt-6 min-w-0 overflow-hidden border-y border-foreground/10 py-2">
            <p className="animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest text-accent">
              {songs.concat(songs).map((song, i) => (
                <span key={i} className="mx-4">
                  ♪ {song}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
