"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useNavigator } from "@/components/NavigatorProvider";

const RADIUS = 150;
const STRENGTH = 28;

/** Envuelve un heading en spans por letra que se apartan del navegante
 * flotante mientras lo arrastras cerca, y vuelven solas a su sitio (CSS
 * transition) al soltarlo o alejarlo. Solo transform, gateado por
 * prefers-reduced-motion, y el loop de posición corre nada más mientras se
 * arrastra — no hay rAF corriendo en reposo.
 *
 * Las letras de cada PALABRA van dentro de un span inline-block sin
 * envolver (whitespace-nowrap) — si cada letra fuera su propia caja suelta,
 * el navegador puede meter un salto de línea entre dos letras de la misma
 * palabra (la vuelve "rompible" al perder su continuidad de texto), que es
 * justo el bug que partía "recién" y "pasado" a la mitad. */
export default function PushText({ children, className }: { children: string; className?: string }) {
  const reduce = useReducedMotion();
  const { pos, dragging } = useNavigator();
  const letters = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (reduce) return;
    if (!dragging) {
      letters.current.forEach((el) => el && (el.style.transform = ""));
      return;
    }
    let raf = 0;
    const tick = () => {
      const sx = pos.x.get();
      const sy = pos.y.get();
      letters.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = r.left + r.width / 2 - sx;
        const dy = r.top + r.height / 2 - sy;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS && dist > 0.01) {
          const power = (1 - dist / RADIUS) * STRENGTH;
          el.style.transform = `translate(${(dx / dist) * power}px, ${(dy / dist) * power}px)`;
        } else {
          el.style.transform = "";
        }
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dragging, reduce, pos]);

  if (reduce) return <span className={className}>{children}</span>;

  const words = children.split(" ");
  return (
    <span className={className}>
      {words.map((word, wi) => {
        const offset = words.slice(0, wi).reduce((n, w) => n + w.length, 0);
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((ch, ci) => {
              const i = offset + ci;
              return (
                <span
                  key={i}
                  ref={(el) => {
                    letters.current[i] = el;
                  }}
                  className="inline-block transition-transform duration-300 ease-out"
                >
                  {ch}
                </span>
              );
            })}
            {wi < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </span>
  );
}
