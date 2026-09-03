"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 1200, mass: 0.15 });
  const springY = useSpring(y, { damping: 28, stiffness: 1200, mass: 0.15 });
  const labelX = useTransform(springX, (v) => v + 26);
  const labelY = useTransform(springY, (v) => v - 34);
  const [label, setLabel] = useState<string | null>(null);
  // Elementos agarrables (data-grab) mutan la forma del dot mismo — círculo
  // a diamante recto — para que "esto se arrastra" se lea en el cursor sin
  // depender solo del texto del pill.
  const [grab, setGrab] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none");
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") ?? null);
      setGrab(!!(e.target as HTMLElement)?.closest?.("[data-grab]"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-8 w-8 bg-white mix-blend-difference md:block"
        style={{ x: springX, y: springY }}
        animate={{ borderRadius: grab ? "20%" : "50%", rotate: grab ? 45 : 0, scale: grab ? 1.25 : 1 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden whitespace-nowrap rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper md:block"
        style={{ x: labelX, y: labelY }}
        animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.div>
    </>
  );
}
