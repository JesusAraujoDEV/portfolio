"use client";

import type { RefObject } from "react";
import { motion, type PanInfo } from "framer-motion";
import { useLocale, useT } from "@/components/LocaleProvider";
import type { Project } from "@/lib/projects";

// Hard-offset "sticker" chrome shared with Shot/ProjectGallery elsewhere on
// the site, reused here for the tangram panels instead of a plain card.
const PANEL_SHADOW = { boxShadow: "6px 6px 0 0 var(--foreground)" };

export default function ProjectPanel({
  project,
  index,
  slot,
  containerRef,
  onOpen,
  onDropAt,
}: {
  project: Project;
  index: number;
  slot: { top: string; left: string; width: string; height: string };
  containerRef: RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onDropAt: (clientX: number, clientY: number) => void;
}) {
  const { locale } = useLocale();
  const t = useT();
  const cover = project.images?.[0];

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // info.point is page-relative (includes scroll), getBoundingClientRect
    // is viewport-relative — same conversion FandomPile uses for its tooltip.
    onDropAt(info.point.x - window.scrollX, info.point.y - window.scrollY);
  };

  return (
    <motion.div
      layout
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={containerRef}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.03, zIndex: 30, boxShadow: "10px 10px 0 0 var(--foreground)" }}
      transition={{ layout: { type: "spring", stiffness: 400, damping: 32 } }}
      className="absolute box-border cursor-grab touch-none p-1.5 active:cursor-grabbing md:p-2"
      style={slot}
    >
      <button
        type="button"
        onClick={onOpen}
        data-cursor={t.cursor.view}
        aria-label={`${t.cursor.view} ${project.name}`}
        className="relative block h-full w-full overflow-hidden border-2 border-foreground/80 bg-paper text-left"
        style={PANEL_SHADOW}
      >
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={`Captura de ${project.name}`}
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-bold text-white/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        {/* Fixed dark scrim so the name reads white regardless of light/dark theme. */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-10 md:p-4 md:pt-12">
          <span className="block font-mono text-[10px] uppercase tracking-widest text-white/70">
            {String(index + 1).padStart(2, "0")} · {project.year}
          </span>
          <span className="mt-1 block text-lg leading-tight text-white md:text-xl">{project.name}</span>
          <span className="mt-0.5 hidden truncate text-xs text-white/70 sm:block">{project.role[locale]}</span>
        </div>
      </button>
    </motion.div>
  );
}
