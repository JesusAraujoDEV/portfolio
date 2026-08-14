"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Drives the "About exits as you scroll past it" effect: once the section's
// bottom starts crossing the viewport top, the photo drifts left+fades and
// the copy drifts right+fades — opposite directions so the section reads as
// pulling apart rather than just sliding off. Transform/opacity only.
export default function AboutStage({ photo, copy }: { photo: ReactNode; copy: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["center center", "end start"] });

  const photoX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const copyX = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={sectionRef}
      className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-20 lg:grid-cols-[420px_1fr]"
    >
      <motion.div
        style={{ x: photoX, opacity: photoOpacity }}
        className="mx-auto w-64 min-w-0 self-start will-change-transform sm:w-80 md:mx-0 md:w-full"
      >
        {photo}
      </motion.div>
      <motion.div style={{ x: copyX, opacity: copyOpacity }} className="min-w-0 will-change-transform">
        {copy}
      </motion.div>
    </div>
  );
}
