"use client";

import { motion } from "framer-motion";
import PaperCycler from "@/components/PaperCycler";
import { useT } from "@/components/LocaleProvider";

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

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <p className="overflow-hidden">
              <motion.span variants={item} className="block font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Valencia, Venezuela
              </motion.span>
            </p>
          </div>
          <h1 className="text-[15vw] font-medium leading-[0.9] tracking-tight md:text-[6.5vw]">
            <span className="block overflow-hidden">
              <motion.span variants={item} className="block">
                Jesús
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={item} className="block">
                Araujo
              </motion.span>
            </span>
          </h1>
          <p className="mt-8 max-w-md overflow-hidden">
            <motion.span variants={item} className="block text-base text-foreground/80 md:text-lg">
              {t.hero.pitchBefore}
              <span className="text-accent">Intelix Synergy</span>
              {t.hero.pitchAfter}
            </motion.span>
          </p>
        </motion.div>

        <div className="hidden shrink-0 flex-col items-end gap-10 md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-56 w-56 lg:h-72 lg:w-72"
          >
            <div className="absolute inset-[-20%] -z-10 rounded-full bg-accent/20 blur-3xl" />
            <PaperCycler className="h-full w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col items-end gap-6"
          >
            {[
              { label: t.hero.rol, value: t.hero.rolValue },
              { label: t.hero.ahoraEn, value: "Intelix Synergy" },
              { label: t.hero.stack, value: t.hero.stackValue },
            ].map((fact) => (
              <div key={fact.label} className="text-right font-mono text-xs uppercase tracking-widest">
                <span className="block text-muted">{fact.label}</span>
                <span className="text-foreground">{fact.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-6 font-mono text-xs uppercase tracking-widest text-muted md:left-12"
      >
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
