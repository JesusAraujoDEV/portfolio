"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "@/components/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const row = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function QuickFacts() {
  const t = useT();
  const facts = [
    { label: "Magallanes", note: t.quickFacts.magallanesNote },
    { label: "Valencia, VE", note: t.quickFacts.valenciaNote },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["center center", "end start"] });
  const exitOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const exitX = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.div ref={ref} style={{ opacity: exitOpacity, x: exitX }} className="will-change-transform">
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="divide-y divide-foreground/10 border-y border-foreground/10"
      >
        {facts.map((fact) => (
          <motion.li
            key={fact.label}
            variants={row}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="text-lg font-medium">{fact.label}</span>
            <span className="text-sm text-muted">{fact.note}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
