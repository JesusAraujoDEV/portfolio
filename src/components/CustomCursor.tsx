"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 500, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 500, mass: 0.4 });
  const labelX = useTransform(springX, (v) => v + 26);
  const labelY = useTransform(springY, (v) => v - 34);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none");
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") ?? null);
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
        className="pointer-events-none fixed top-0 left-0 z-[999] hidden h-8 w-8 rounded-full bg-white mix-blend-difference md:block"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[999] hidden whitespace-nowrap rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper md:block"
        style={{ x: labelX, y: labelY }}
        animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.div>
    </>
  );
}
