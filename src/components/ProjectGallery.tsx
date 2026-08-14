"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Shot from "@/components/Shot";

const EASE = [0.16, 1, 0.3, 1] as const;

// Alternating rotate/offset per gallery slot so the small (<=3) layout still
// reads as deliberately arranged paper cutouts rather than a uniform grid.
const TILE_STYLE = [
  { rotate: -2, y: 0 },
  { rotate: 1.5, y: 18 },
  { rotate: -1, y: -6 },
];

export default function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startY: number; scrollLeft: number; active: boolean; moved: boolean }>({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    active: false,
    moved: false,
  });

  if (images.length === 0) return null;

  const isScrollable = images.length > 3;

  // ponytail: 5px is real click/tap jitter tolerance, not a drag signal —
  // a tighter x-only threshold was misclassifying ordinary taps as drags.
  const DRAG_THRESHOLD = 5;

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { startX: e.clientX, startY: e.clientY, scrollLeft: track.scrollLeft, active: true, moved: false };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;
    if (Math.hypot(dx, dy) > DRAG_THRESHOLD) drag.current.moved = true;
    track.scrollLeft = drag.current.scrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    drag.current.active = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
  };

  // ponytail: suppress the Shot lightbox click only when a real drag happened
  const onTrackClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) e.stopPropagation();
  };

  if (!isScrollable) {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:gap-x-6"
      >
        {images.map((src, i) => {
          const tile = TILE_STYLE[i % TILE_STYLE.length];
          return (
            <motion.div
              key={src}
              variants={{
                hidden: { opacity: 0, y: 24, rotate: 0 },
                show: { opacity: 1, y: tile.y, rotate: tile.rotate, transition: { duration: 0.6, ease: EASE } },
              }}
              className="transition-transform duration-300 will-change-transform hover:!rotate-0 hover:scale-[1.04]"
            >
              <Shot
                src={src}
                alt={`Captura de ${name}`}
                className="aspect-[4/3] w-full border-2 border-foreground/80"
                style={{ filter: "drop-shadow(5px 5px 0px var(--foreground))" }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mt-10"
    >
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onTrackClickCapture}
        className="gallery-track flex cursor-grab gap-4 overflow-x-auto pb-5 active:cursor-grabbing md:gap-6"
        style={{ touchAction: "pan-x" }}
      >
        {images.map((src) => (
          <Shot
            key={src}
            src={src}
            alt={`Captura de ${name}`}
            className="aspect-[4/3] w-[70vw] shrink-0 border-2 border-foreground/80 sm:w-[45vw] md:w-[32vw] lg:w-[26vw]"
            style={{ filter: "drop-shadow(5px 5px 0px var(--foreground))" }}
          />
        ))}
      </div>
    </motion.div>
  );
}
