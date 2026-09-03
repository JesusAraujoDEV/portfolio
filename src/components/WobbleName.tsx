"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Las 6 fuentes display que pidió Jesús. Anton es la base (fija).
const FONTS = [
  "var(--font-anton), Impact, sans-serif",
  "var(--font-bungee), sans-serif",
  "var(--font-blackops), sans-serif",
  "var(--font-limelight), serif",
  "var(--font-chelsea), cursive",
  "var(--font-shadows), cursive",
];
const BASE = FONTS[0];

type LetterState = { font: string; rot: number; dx: number; dy: number };

function rest(): LetterState {
  return { font: BASE, rot: 0, dx: 0, dy: 0 };
}

export default function WobbleName({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  // Un LetterState por carácter, aplanado por línea.
  const counts = lines.map((l) => l.length);
  const total = counts.reduce((a, b) => a + b, 0);
  const [states, setStates] = useState<LetterState[]>(() => Array.from({ length: total }, rest));
  const raf = useRef<number>(0);
  const last = useRef(0);

  useEffect(() => {
    if (!hover || reduce) return;
    // ~90ms por tick: cada letra salta a una fuente aleatoria del set y a una
    // micro-rotación/desplazamiento. Solo transform + font-family (barato).
    const tick = (now: number) => {
      if (now - last.current > 90) {
        last.current = now;
        setStates((prev) =>
          prev.map(() => ({
            font: FONTS[Math.floor(Math.random() * FONTS.length)],
            rot: (Math.random() - 0.5) * 14,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
          }))
        );
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    // Al soltar el hover, el cleanup detiene el loop y devuelve las letras a
    // reposo vía updater (no es setState síncrono en el cuerpo del effect).
    return () => {
      cancelAnimationFrame(raf.current);
      setStates((prev) => prev.map(rest));
    };
  }, [hover, reduce, total]);

  let idx = -1;
  return (
    <h1
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      data-cursor="✶"
      className="font-display cursor-pointer select-none text-[22vw] uppercase leading-[0.82] tracking-tight md:text-[13vw] lg:text-[12vw]"
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-visible whitespace-nowrap">
          {Array.from(line).map((ch, ci) => {
            idx += 1;
            const s = states[idx] ?? rest();
            return (
              <span
                key={ci}
                className="inline-block will-change-transform"
                style={{
                  fontFamily: s.font,
                  transform: `translate(${s.dx}px, ${s.dy}px) rotate(${s.rot}deg)`,
                  transition: hover ? "none" : "transform 220ms cubic-bezier(0.16,1,0.3,1)",
                  color: hover ? "var(--accent)" : undefined,
                }}
              >
                {ch === " " ? " " : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
