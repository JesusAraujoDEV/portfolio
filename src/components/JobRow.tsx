"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import type { ExperienceItem } from "@/lib/experience";

const studyLabel = { es: "Formación", en: "Studies", de: "Studium" } as const;
const whatLabel = { es: "Qué hice", en: "What I did", de: "Was ich gemacht habe" } as const;

export default function JobRow({
  job,
  isOpen,
  dimmed,
  onToggle,
  onHover,
}: {
  job: ExperienceItem;
  isOpen: boolean;
  /** true cuando otra fila está enfocada — esta se atenúa. */
  dimmed: boolean;
  onToggle: () => void;
  onHover: (hovering: boolean) => void;
}) {
  const { locale } = useLocale();
  const reduce = useReducedMotion();

  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`grid gap-3 border-b-2 border-foreground/25 py-8 transition-[opacity,padding] duration-300 ease-out md:grid-cols-[220px_1fr] md:gap-10 ${
        dimmed ? "opacity-40" : "opacity-100"
      } ${isOpen ? "md:pl-2" : ""}`}
    >
      {/* Columna izquierda: periodo, lugar, logo. */}
      <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
        {job.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={job.logo}
            alt={job.org}
            className="h-14 w-14 shrink-0 border-2 border-foreground object-cover md:h-16 md:w-16"
          />
        )}
        <div className="font-mono text-xs uppercase tracking-widest">
          {job.kind === "study" && (
            <span className="mb-1 block text-accent">{studyLabel[locale]}</span>
          )}
          <span className="block text-foreground">{job.period[locale]}</span>
          {job.where && <span className="mt-1 block text-muted">{job.where[locale]}</span>}
        </div>
      </div>

      {/* Columna derecha: empresa (botón), rol, resumen, despliegue. */}
      <div className="min-w-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          data-cursor={job.kind === "study" ? undefined : "IR"}
          className="flex w-full items-center justify-between gap-4 text-left"
        >
          <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl">
            {job.org}
          </h3>
          <span
            aria-hidden
            className={`shrink-0 font-mono text-2xl leading-none transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">{job.role[locale]}</p>
        <p className="mt-3 max-w-2xl text-foreground/80">{job.summary[locale]}</p>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="fold"
              initial={reduce ? undefined : { height: 0, opacity: 0 }}
              animate={reduce ? undefined : { height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <h4 className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                {whatLabel[locale]}
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85">
                    <span aria-hidden className="mt-1 text-accent">
                      ▪
                    </span>
                    <span className="max-w-2xl">{h[locale]}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                {job.stack.map((s, i) => (
                  <span key={s}>
                    {s}
                    {i < job.stack.length - 1 && <span className="ml-2 text-foreground/30">·</span>}
                  </span>
                ))}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
