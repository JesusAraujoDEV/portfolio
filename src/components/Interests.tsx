"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import QuickFacts from "@/components/QuickFacts";
import NowPlaying from "@/components/NowPlaying";
import FandomPile from "@/components/FandomPile";
import PushText from "@/components/PushText";
import { useT } from "@/components/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const line = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Interests() {
  const t = useT();
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: introRef, offset: ["center center", "end start"] });
  const introOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="gustos" className="band--ink overflow-x-clip px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div ref={introRef}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            style={{ opacity: introOpacity, y: introY }}
            className="will-change-transform"
          >
            <motion.span variants={line} className="block font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.interests.eyebrow}
            </motion.span>
            <motion.h2 variants={line} className="mt-4 max-w-2xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
              <PushText>{t.interests.heading}</PushText>
            </motion.h2>
            <motion.p variants={line} className="mt-6 max-w-2xl text-foreground/80">
              {t.interests.introBefore}
              <a
                href="https://letterboxd.com/JesuCritico/"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
              >
                {t.interests.introLink}
              </a>
            </motion.p>
          </motion.div>
        </div>

        {/* FandomPile owns its own drag-canvas interaction — no scroll-linked
            transform wrapper here, that would fight the drag mechanic. */}
        <div className="mt-16 overflow-x-clip">
          <FandomPile />
        </div>

        <QuickFacts />
        <NowPlaying />
      </div>
    </section>
  );
}
