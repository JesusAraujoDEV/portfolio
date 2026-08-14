"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, type PanInfo } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { fandomItems, type FandomItem } from "@/lib/fandomItems";

// ponytail: no translations.ts entry for this (owned by a parallel agent
// this round) — three short literals inline, same pattern as fandomCaptions.
const dragLabel = { es: "ARRASTRAR", en: "DRAG", de: "ZIEHEN" } as const;
const draggingLabel = { es: "SOLTANDO", en: "DRAGGING", de: "ZIEHT" } as const;

const TOOLTIP_OFFSET = 18;
const EDGE_MARGIN = 8;

export default function FandomPile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  // ponytail: tooltip position tracks the real pointer via its own
  // pointermove listener (mirrors CustomCursor.tsx) instead of riding along
  // with the dragged element's transform — anchoring to the item was last
  // round's bug, this is the fix.
  const tipX = useMotionValue(-200);
  const tipY = useMotionValue(-200);
  const { locale } = useLocale();

  // one clamped placer shared by the drag-start seed and every pointermove —
  // two separate copies of this math was the bug: the seed used to skip
  // clamping entirely, so a drag starting near a screen edge could paint the
  // tooltip off-screen for a frame.
  const placeTooltip = (clientX: number, clientY: number) => {
    const rect = tooltipRef.current?.getBoundingClientRect();
    const w = rect?.width ?? 160;
    const h = rect?.height ?? 40;
    const maxX = Math.max(window.innerWidth - w - EDGE_MARGIN, EDGE_MARGIN);
    const maxY = Math.max(window.innerHeight - h - EDGE_MARGIN, EDGE_MARGIN);
    tipX.set(Math.min(Math.max(clientX + TOOLTIP_OFFSET, EDGE_MARGIN), maxX));
    tipY.set(Math.min(Math.max(clientY + TOOLTIP_OFFSET, EDGE_MARGIN), maxY));
  };

  useEffect(() => {
    if (!draggingKey) return;
    const move = (e: PointerEvent) => placeTooltip(e.clientX, e.clientY);
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggingKey]);

  const draggingItem = fandomItems.find((item) => item.key === draggingKey);

  const startDrag = (item: FandomItem) => (_event: unknown, info: PanInfo) => {
    setDraggingKey(item.key);
    // seed the tooltip at the gesture's start point (clamped, same as every
    // pointermove) so it doesn't flash at its (-200,-200) rest position or
    // render off-screen before the first pointermove lands.
    placeTooltip(info.point.x - window.scrollX, info.point.y - window.scrollY);
  };

  const Poster = ({ item }: { item: FandomItem }) => (
    <div className={`group block overflow-hidden border border-foreground/15 ${item.aspect}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );

  return (
    <>
      {/* Mobile: contained wrapped grid, small drag jitter only — an absolute scatter
          at 375px overflows or becomes unreachable, so mobile gets its own layout. */}
      <div className="flex flex-wrap justify-center gap-3 sm:hidden">
        {fandomItems.map((item) => (
          <motion.div
            key={item.key}
            drag
            dragMomentum={false}
            dragElastic={0.2}
            dragConstraints={{ top: -14, left: -14, right: 14, bottom: 14 }}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ rotate: item.rotate * 0.6 }}
            onDragStart={startDrag(item)}
            onDragEnd={() => setDraggingKey(null)}
            data-cursor={draggingKey === item.key ? draggingLabel[locale] : dragLabel[locale]}
            className="relative w-24 shrink-0 cursor-grab touch-none active:cursor-grabbing"
          >
            <Poster item={item} />
          </motion.div>
        ))}
      </div>

      {/* Desktop/tablet: draggable scattered pile */}
      <div
        ref={containerRef}
        className="relative hidden min-h-[900px] w-full overflow-hidden sm:block sm:min-h-[1060px] md:min-h-[1220px] lg:min-h-[1260px]"
      >
        {fandomItems.map((item) => (
          <motion.div
            key={item.key}
            drag
            dragMomentum={false}
            dragElastic={0.15}
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.06, zIndex: 40 }}
            initial={{ rotate: item.rotate }}
            onDragStart={startDrag(item)}
            onDragEnd={() => setDraggingKey(null)}
            data-cursor={draggingKey === item.key ? draggingLabel[locale] : dragLabel[locale]}
            className={`absolute cursor-grab touch-none active:cursor-grabbing ${item.sizeDesktop}`}
            style={{ top: item.top, left: item.left }}
          >
            <Poster item={item} />
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={tooltipRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[60] w-40 select-none rounded-md border border-foreground/15 bg-background/95 px-2 py-1.5 text-[11px] leading-tight text-foreground shadow-lg backdrop-blur transition-opacity duration-100 ${
          draggingItem ? "opacity-100" : "opacity-0"
        }`}
        style={{ x: tipX, y: tipY }}
      >
        <span aria-hidden>✋ </span>
        {draggingItem?.caption[locale] ?? ""}
      </motion.div>
    </>
  );
}
