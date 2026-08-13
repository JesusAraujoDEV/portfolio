"use client";

import { motion } from "framer-motion";

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
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <p className="mb-4 overflow-hidden">
            <motion.span variants={item} className="block font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Valencia, Venezuela
            </motion.span>
          </p>
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
              Programo cosas que la gente termina usando de verdad: APIs que no
              se caen, dashboards que se entienden a la primera, procesos que
              antes tomaban horas y ahora corren solos. Ahora mismo, en{" "}
              <span className="text-accent">Intelix Synergy</span>, armando un
              sistema de logística para una 4PL de Costa Rica.
            </motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="hidden shrink-0 flex-col gap-6 md:flex md:items-end"
        >
          {[
            { label: "Rol", value: "Full-Stack Developer" },
            { label: "Ahora en", value: "Intelix Synergy" },
            { label: "Stack", value: "TypeScript · Node · Next.js" },
          ].map((fact) => (
            <div key={fact.label} className="text-right font-mono text-xs uppercase tracking-widest">
              <span className="block text-muted">{fact.label}</span>
              <span className="text-foreground">{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-6 font-mono text-xs uppercase tracking-widest text-muted md:left-12"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
