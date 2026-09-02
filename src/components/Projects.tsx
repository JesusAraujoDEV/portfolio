"use client";

import { useRef, useState } from "react";
import ProjectPanel from "@/components/ProjectPanel";
import ProjectModal from "@/components/ProjectModal";
import Reveal from "@/components/Reveal";
import { useLocale, useT } from "@/components/LocaleProvider";
import { projects, type Project } from "@/lib/projects";
import { PROJECT_LAYOUT } from "@/lib/projectLayout";

export default function Projects() {
  const { locale } = useLocale();
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  // order[i] = the project currently occupying PROJECT_LAYOUT[i]. Dropping a
  // panel over another slot swaps the two, so a dragged card "takes over"
  // whatever size that slot has (e.g. drag into a 70% corner, you become the
  // 70% one) and the displaced project reflows into your old slot.
  const [order, setOrder] = useState<Project[]>(projects);
  const [active, setActive] = useState<Project | null>(null);

  const dropOnSlot = (name: string, clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = ((clientX - rect.left) / rect.width) * 100;
    const relY = ((clientY - rect.top) / rect.height) * 100;
    const targetSlot = PROJECT_LAYOUT.findIndex((s) => {
      const top = parseFloat(s.top);
      const left = parseFloat(s.left);
      const w = parseFloat(s.width);
      const h = parseFloat(s.height);
      return relX >= left && relX <= left + w && relY >= top && relY <= top + h;
    });
    if (targetSlot === -1) return;
    setOrder((prev) => {
      const from = prev.findIndex((p) => p.name === name);
      if (from === -1 || from === targetSlot) return prev;
      const next = [...prev];
      [next[from], next[targetSlot]] = [next[targetSlot], next[from]];
      return next;
    });
  };

  return (
    <section id="projects" className="px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{t.projects.eyebrow}</span>
        <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
          {t.projects.heading}
        </h2>
      </Reveal>

      {/* Desktop/tablet: one bounded rectangle, 3 rows of 70/30 tangram slots.
          Drag a panel over another and they swap slots (and sizes) — magnet
          style — instead of free-floating. Bounded to the rectangle via
          dragConstraints, same pattern as the FandomPile "mis gustos" drag. */}
      <div
        ref={containerRef}
        className="relative mt-12 hidden aspect-[16/10] w-full overflow-hidden border-2 border-foreground/80 sm:block lg:aspect-[16/9]"
      >
        {order.map((project, i) => (
          <ProjectPanel
            key={project.name}
            project={project}
            index={i}
            slot={PROJECT_LAYOUT[i % PROJECT_LAYOUT.length]}
            containerRef={containerRef}
            onOpen={() => setActive(project)}
            onDropAt={(x, y) => dropOnSlot(project.name, x, y)}
          />
        ))}
      </div>

      {/* Mobile: dragging tiny 30%-wide cells doesn't work at this width —
          plain stacked cards instead, same content and click-to-open. */}
      <div className="mt-12 flex flex-col gap-4 sm:hidden">
        {projects.map((project, i) => {
          const cover = project.images?.[0];
          return (
            <button
              key={project.name}
              type="button"
              onClick={() => setActive(project)}
              data-cursor={t.cursor.view}
              aria-label={`${t.cursor.view} ${project.name}`}
              className="relative block aspect-[4/3] w-full overflow-hidden border-2 border-foreground/80 bg-paper text-left"
              style={{ boxShadow: "6px 6px 0 0 var(--foreground)" }}
            >
              {cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover} alt={`Captura de ${project.name}`} className="h-full w-full object-cover" />
              )}
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-10">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {String(i + 1).padStart(2, "0")} · {project.year}
                </span>
                <span className="mt-1 block text-lg leading-tight text-white">{project.name}</span>
                <span className="mt-0.5 block truncate text-xs text-white/70">{project.role[locale]}</span>
              </div>
            </button>
          );
        })}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
