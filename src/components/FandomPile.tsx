"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Shot from "@/components/Shot";
import { useLocale } from "@/components/LocaleProvider";
import { fandomItems } from "@/lib/fandomItems";

// ponytail: emoji badge instead of another caption box — cheapest "picked up"
// feedback that also works on touch (data-cursor pill is pointer:fine only).
// Plain CSS transition, not framer's imperative animate: a two-state opacity
// flip doesn't need a JS animation loop, and it keeps the toggle synchronous
// (verifiable via computed style right after the state change).
function PickupBadge({ show }: { show: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute -top-3 -right-3 z-50 select-none text-2xl drop-shadow transition-all duration-150 ${
        show ? "translate-y-0 scale-100 opacity-100" : "translate-y-1 scale-50 opacity-0"
      }`}
    >
      ✋
    </span>
  );
}

export default function FandomPile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  const { locale } = useLocale();

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
            onDragStart={() => setDraggingKey(item.key)}
            onDragEnd={() => setDraggingKey(null)}
            className="relative w-24 shrink-0 cursor-grab touch-none active:cursor-grabbing"
          >
            <PickupBadge show={draggingKey === item.key} />
            <Shot src={item.src} alt={item.alt} caption={item.caption[locale]} className={item.aspect} />
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
            onDragStart={() => setDraggingKey(item.key)}
            onDragEnd={() => setDraggingKey(null)}
            className={`absolute cursor-grab touch-none active:cursor-grabbing ${item.sizeDesktop}`}
            style={{ top: item.top, left: item.left }}
          >
            <PickupBadge show={draggingKey === item.key} />
            <Shot src={item.src} alt={item.alt} caption={item.caption[locale]} className={item.aspect} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
