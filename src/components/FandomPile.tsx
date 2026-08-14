"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Shot from "@/components/Shot";
import { useLocale } from "@/components/LocaleProvider";
import { fandomItems } from "@/lib/fandomItems";

// ponytail: caption bubble anchored to the dragged element (absolute child of
// the transformed motion.div) rather than cursor-tracked — it rides along for
// free with the drag transform, no extra rAF/position math needed.
function DragCaption({ show, text }: { show: boolean; text: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-40 -translate-x-1/2 select-none rounded-md border border-foreground/15 bg-background/95 px-2 py-1.5 text-[11px] leading-tight text-foreground shadow-lg backdrop-blur transition-opacity duration-150 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <span aria-hidden>✋ </span>
      {text}
    </div>
  );
}

export default function FandomPile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  // Framer Motion doesn't suppress the native click that follows a drag's
  // pointerup on the same element — without this, dropping an item re-opens
  // the lightbox. onDragStart marks the gesture; the capture-phase click
  // handler swallows exactly the one spurious click, then clears the flag.
  const justDraggedRef = useRef(false);
  const { locale } = useLocale();

  const swallowDragClick = (e: React.MouseEvent) => {
    if (justDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      justDraggedRef.current = false;
    }
  };

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
            onDragStart={() => {
              justDraggedRef.current = true;
              setDraggingKey(item.key);
            }}
            onDragEnd={() => setDraggingKey(null)}
            onClickCapture={swallowDragClick}
            className="relative w-24 shrink-0 cursor-grab touch-none active:cursor-grabbing"
          >
            <DragCaption show={draggingKey === item.key} text={item.caption[locale]} />
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
            onDragStart={() => {
              justDraggedRef.current = true;
              setDraggingKey(item.key);
            }}
            onDragEnd={() => setDraggingKey(null)}
            onClickCapture={swallowDragClick}
            className={`absolute cursor-grab touch-none active:cursor-grabbing ${item.sizeDesktop}`}
            style={{ top: item.top, left: item.left }}
          >
            <DragCaption show={draggingKey === item.key} text={item.caption[locale]} />
            <Shot src={item.src} alt={item.alt} caption={item.caption[locale]} className={item.aspect} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
