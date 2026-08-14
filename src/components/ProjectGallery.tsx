"use client";

import { motion } from "framer-motion";
import Shot from "@/components/Shot";

const EASE = [0.16, 1, 0.3, 1] as const;

// Alternating rotate/offset per gallery slot so the mosaic reads as
// deliberately arranged paper cutouts rather than a uniform grid.
const TILE_STYLE = [
  { rotate: -2, y: 0 },
  { rotate: 1.5, y: 18 },
  { rotate: -1, y: -6 },
  { rotate: 2, y: 10 },
  { rotate: -1.5, y: -2 },
  { rotate: 1, y: 14 },
];

export default function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  if (images.length === 0) return null;

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
