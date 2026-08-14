"use client";

import { useRef, type RefObject } from "react";
import { motion, useDragControls, type PanInfo } from "framer-motion";
import type { FandomItem } from "@/lib/fandomItems";

// px of pointer travel before we commit to "this gesture is a page scroll"
// vs "this gesture is a horizontal/diagonal drag of the item".
const DIRECTION_THRESHOLD = 8;

type Props = {
  item: FandomItem;
  containerRef: RefObject<HTMLDivElement | null>;
  cursorLabel: string;
  onDragStart: (event: unknown, info: PanInfo) => void;
  onDragEnd: () => void;
};

// Drag is engaged manually (dragListener=false) instead of on every
// pointerdown, so we can inspect the gesture's own direction first.
// touch-action stays "pan-y" so a predominantly-vertical touch is handled
// natively by the browser as a page scroll and never reaches us; a
// predominantly-horizontal/diagonal one is caught here and handed to
// Framer's drag controls. Root cause of the old "can't scroll over the
// pile" bug: `drag` alone forces touch-action:none, which blocks native
// scrolling outright regardless of gesture direction.
export default function FandomMobileItem({ item, containerRef, cursorLabel, onDragStart, onDragEnd }: Props) {
  const dragControls = useDragControls();
  const startPoint = useRef<{ x: number; y: number } | null>(null);
  const decided = useRef<"pending" | "vertical" | "horizontal">("pending");

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "touch") {
      // mouse/pen: no scroll-vs-drag ambiguity, engage immediately.
      dragControls.start(e);
      return;
    }
    startPoint.current = { x: e.clientX, y: e.clientY };
    decided.current = "pending";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (decided.current !== "pending" || !startPoint.current) return;
    const dx = e.clientX - startPoint.current.x;
    const dy = e.clientY - startPoint.current.y;
    if (Math.abs(dx) < DIRECTION_THRESHOLD && Math.abs(dy) < DIRECTION_THRESHOLD) return;
    if (Math.abs(dy) > Math.abs(dx)) {
      decided.current = "vertical"; // let the native scroll (already in progress) own it
    } else {
      decided.current = "horizontal";
      dragControls.start(e);
    }
  };

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0.15}
      dragConstraints={containerRef}
      whileDrag={{ scale: 1.08, zIndex: 40 }}
      initial={{ rotate: item.rotate * 0.6 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      data-cursor={cursorLabel}
      className="relative w-24 shrink-0 cursor-grab touch-pan-y active:cursor-grabbing"
    >
      <div className={`group block overflow-hidden border border-foreground/15 ${item.aspect}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
}
