"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const photos = [
  { src: "/images/jesus-dog.png", alt: "Jesús acariciando un perro", rotate: -4 },
  { src: "/images/jesus-thesis.png", alt: "Jesús defendiendo su tesis", rotate: 3 },
  { src: "/images/jesus-sunflower.png", alt: "Jesús con un girasol", rotate: -2 },
];

export default function PaperCycler({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), 2200);
    return () => clearInterval(id);
  }, []);

  const photo = photos[index];

  return (
    <div className={`relative h-16 w-16 shrink-0 sm:h-20 sm:w-20 md:h-24 md:w-24 ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          initial={{ opacity: 0, y: -20, rotate: photo.rotate * 2.5, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, rotate: photo.rotate, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ filter: "drop-shadow(4px 4px 0px var(--foreground))" }}
        />
      </AnimatePresence>
    </div>
  );
}
