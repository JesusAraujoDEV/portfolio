"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useLocale, useT } from "@/components/LocaleProvider";
import { experience } from "@/lib/experience";

const EASE = [0.16, 1, 0.3, 1] as const;
const timelineItem = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Experience() {
  const { locale } = useLocale();
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  // Whole section drifts up and fades as it exits the top of the viewport —
  // same technique as AboutStage, scoped to this section only.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const exitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      style={{ y: exitY, opacity: exitOpacity }}
      className="band--blood overflow-x-clip px-6 py-28 will-change-transform md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.experience.eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
              {t.experience.heading}
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t.experience.stages(experience.length)}
          </span>
        </Reveal>

        <div className="relative mt-16 pl-8">
          <div className="absolute top-2 bottom-2 left-2 w-px bg-foreground/15" />
          {experience.map((item, i) => (
            <motion.div
              key={item.org}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={timelineItem}
              className={`relative grid gap-2 md:grid-cols-[220px_1fr] md:gap-10 ${i > 0 ? "mt-14" : ""}`}
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3">
                {item.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt={item.org}
                    className="h-14 w-14 shrink-0 rounded-full border border-foreground/15 object-cover md:h-16 md:w-16"
                  />
                )}
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {item.period[locale]}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl leading-tight md:text-3xl">{item.role[locale]}</h3>
                <p className="text-sm text-muted">{item.org}</p>
                <p className="mt-3 max-w-2xl text-foreground/80">{item.description[locale]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
