"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "@/components/LocaleProvider";
import WobbleName from "@/components/WobbleName";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  // Hero has no scroll-in entrance (it's the first thing on load, handled by
  // the `container`/`item` variants above via initial+animate). It does get
  // a scroll-out: as About scrolls up to cover it, Hero recedes — fades and
  // scales down slightly — instead of just vanishing under the next section.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <motion.section
      ref={sectionRef}
      id="top"
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="band--ink relative flex min-h-screen flex-col justify-center overflow-x-clip px-6 pt-28 pb-20 will-change-transform md:px-12"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-6xl">
        <p className="mb-4 overflow-hidden">
          <motion.span variants={item} className="block font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Valencia, Venezuela
          </motion.span>
        </p>
        <motion.div variants={item}>
          <WobbleName lines={["Jesús", "Araujo"]} />
        </motion.div>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="max-w-md overflow-hidden">
            <motion.span variants={item} className="block text-base text-foreground/80 md:text-lg">
              {t.hero.pitchBefore}
              <span className="text-accent">Intelix Synergy</span>
              {t.hero.pitchAfter}
            </motion.span>
          </p>

          <motion.div variants={item} className="flex shrink-0 flex-wrap gap-x-8 gap-y-4 md:flex-col md:items-end md:gap-6">
            {[
              { label: t.hero.rol, value: t.hero.rolValue },
              { label: t.hero.ahoraEn, value: "Intelix Synergy" },
              { label: t.hero.stack, value: t.hero.stackValue },
            ].map((fact) => (
              <div key={fact.label} className="font-mono text-xs uppercase tracking-widest md:text-right">
                <span className="block text-muted">{fact.label}</span>
                <span className="text-foreground">{fact.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-6 font-mono text-xs uppercase tracking-widest text-muted md:left-12"
      >
        {t.hero.scroll}
      </motion.div>
    </motion.section>
  );
}
