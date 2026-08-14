"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import PaperPhoto from "@/components/PaperPhoto";
import Shot from "@/components/Shot";

type Item = {
  key: string;
  kind: "shot" | "paper";
  src: string;
  alt: string;
  rotate: number;
  top: string;
  left: string;
  size: string; // tailwind width/height classes
  aspect?: string;
};

const items: Item[] = [
  {
    key: "hxh",
    kind: "shot",
    src: "/images/hunter-x-hunter.jpg",
    alt: "Hunter x Hunter",
    rotate: -6,
    top: "0%",
    left: "2%",
    size: "w-36 sm:w-48 md:w-60 lg:w-64",
    aspect: "aspect-[2/3]",
  },
  {
    key: "one-piece",
    kind: "shot",
    src: "/images/one-piece.jpg",
    alt: "One Piece",
    rotate: 5,
    top: "6%",
    left: "36%",
    size: "w-36 sm:w-48 md:w-60 lg:w-64",
    aspect: "aspect-[2/3]",
  },
  {
    key: "jojos",
    kind: "shot",
    src: "/images/jojos.png",
    alt: "JoJo's Bizarre Adventure",
    rotate: -3,
    top: "2%",
    left: "68%",
    size: "w-32 sm:w-44 md:w-56 lg:w-60",
    aspect: "aspect-[2/3]",
  },
  {
    key: "rdr2",
    kind: "shot",
    src: "/images/red-dead-redemption-2.png",
    alt: "Red Dead Redemption 2",
    rotate: 4,
    top: "42%",
    left: "0%",
    size: "w-40 sm:w-56 md:w-72 lg:w-80",
    aspect: "aspect-[3/4]",
  },
  {
    key: "persona-5",
    kind: "shot",
    src: "/images/persona-5.png",
    alt: "Persona 5",
    rotate: -4,
    top: "46%",
    left: "58%",
    size: "w-36 sm:w-48 md:w-64 lg:w-72",
    aspect: "aspect-[2/3]",
  },
  {
    key: "leon",
    kind: "paper",
    src: "/images/leon-kennedy.png",
    alt: "Leon Kennedy",
    rotate: -8,
    top: "68%",
    left: "26%",
    size: "h-28 w-48 sm:h-36 sm:w-64 md:h-44 md:w-80",
  },
  {
    key: "ethan",
    kind: "paper",
    src: "/images/ethab-winthers.png",
    alt: "Ethan Winters",
    rotate: 7,
    top: "38%",
    left: "82%",
    size: "h-44 w-24 sm:h-56 sm:w-32 md:h-72 md:w-40",
  },
];

export default function FandomPile() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative mt-10 min-h-[560px] w-full overflow-hidden sm:min-h-[680px] md:min-h-[820px]"
    >
      {items.map((item) => (
        <motion.div
          key={item.key}
          drag
          dragMomentum={false}
          dragElastic={0.15}
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.06, zIndex: 40 }}
          initial={{ rotate: item.kind === "shot" ? item.rotate : 0 }}
          className={`absolute cursor-grab touch-none active:cursor-grabbing ${item.size}`}
          style={{ top: item.top, left: item.left }}
        >
          {item.kind === "shot" ? (
            <Shot src={item.src} alt={item.alt} className={item.aspect ?? "aspect-[2/3]"} />
          ) : (
            <PaperPhoto src={item.src} alt={item.alt} rotate={item.rotate} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
