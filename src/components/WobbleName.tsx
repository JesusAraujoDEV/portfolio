"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

// Se usa useSyncExternalStore (mismo patrón que NavigatorProvider) para
// leer matchMedia en vez de un setState síncrono dentro de un efecto.
function subscribeCoarsePointer(cb: () => void) {
  const mq = window.matchMedia("(pointer: coarse)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getIsCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

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
  // El efecto ahora está SIEMPRE activo (Jesús lo pidió), sin depender del
  // hover. En móvil late más lento — 90ms sin gesto se siente frenético.
  const isMobile = useSyncExternalStore(subscribeCoarsePointer, getIsCoarsePointer, () => false);
  const active = !reduce;
  const tickMs = isMobile ? 200 : 130;
  // Un LetterState por carácter, aplanado por línea.
  const counts = lines.map((l) => l.length);
  const total = counts.reduce((a, b) => a + b, 0);
  const [states, setStates] = useState<LetterState[]>(() => Array.from({ length: total }, rest));
  const raf = useRef<number>(0);
  const last = useRef(0);

  useEffect(() => {
    if (!active || reduce) return;
    // Cada letra salta a una fuente aleatoria del set y a una
    // micro-rotación/desplazamiento. Solo transform + font-family (barato).
    const tick = (now: number) => {
      if (now - last.current > tickMs) {
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
  }, [active, reduce, total, tickMs]);

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
                  transition: active ? "none" : "transform 220ms cubic-bezier(0.16,1,0.3,1)",
                  // La animación es permanente; el rojo se reserva al hover
                  // para que el nombre no viva siempre en acento.
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
