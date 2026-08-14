"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Shot from "@/components/Shot";
import { fandomItems } from "@/lib/fandomItems";

export default function FandomPile() {
  const containerRef = useRef<HTMLDivElement>(null);

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
            className="w-24 shrink-0 cursor-grab touch-none active:cursor-grabbing"
          >
            <Shot src={item.src} alt={item.alt} caption={item.caption} className={item.aspect} />
          </motion.div>
        ))}
      </div>

      {/* Desktop/tablet: draggable scattered pile */}
      <div
        ref={containerRef}
        className="relative hidden min-h-[900px] w-full overflow-hidden sm:block sm:min-h-[820px] md:min-h-[960px] lg:min-h-[1000px]"
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
            className={`absolute cursor-grab touch-none active:cursor-grabbing ${item.sizeDesktop}`}
            style={{ top: item.top, left: item.left }}
          >
            <Shot src={item.src} alt={item.alt} caption={item.caption} className={item.aspect} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
