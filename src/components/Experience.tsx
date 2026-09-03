"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import PushText from "@/components/PushText";
import JobRow from "@/components/JobRow";
import { useT } from "@/components/LocaleProvider";
import { experience } from "@/lib/experience";

export default function Experience() {
  const t = useT();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  // Todas las experiencias se muestran expandidas siempre (Jesús lo pidió).
  // El hover solo resalta la fila enfocada atenuando las demás — no colapsa.
  const [hovered, setHovered] = useState<number | null>(null);

  // La sección deriva hacia arriba y se desvanece al salir por el tope —
  // misma técnica que AboutStage, acotada a esta sección.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const exitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      style={reduce ? undefined : { y: exitY, opacity: exitOpacity }}
      className="band--blood overflow-x-clip px-6 py-28 will-change-transform md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.experience.eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.03em] break-words md:text-7xl">
              <PushText>{t.experience.heading}</PushText>
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t.experience.stages(experience.length)}
          </span>
        </Reveal>

        <div
          className="mt-16 border-t-2 border-foreground/25"
          onMouseLeave={() => setHovered(null)}
        >
          {experience.map((job, i) => (
            <JobRow
              key={job.org}
              job={job}
              dimmed={hovered !== null && hovered !== i}
              onHover={(h) => setHovered(h ? i : null)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
