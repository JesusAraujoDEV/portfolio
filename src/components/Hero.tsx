"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
        <HeroScene />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <p className="mb-4 overflow-hidden">
          <motion.span variants={item} className="block font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Full-Stack Developer · Valencia, Venezuela
          </motion.span>
        </p>
        <h1 className="max-w-4xl text-[13vw] font-medium leading-[0.95] tracking-tight md:text-[7vw]">
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
            Construyo productos web de punta a punta — APIs, dashboards y
            automatización — con Node.js, .NET y React. Actualmente en{" "}
            <span className="text-accent">Intelix Synergy</span>.
          </motion.span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-6 font-mono text-xs uppercase tracking-widest text-muted md:left-12"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
