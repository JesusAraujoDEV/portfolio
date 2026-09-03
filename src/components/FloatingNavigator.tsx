"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { useNavigator } from "@/components/NavigatorProvider";
import { clampSize } from "@/lib/clampSize";

const label = {
  es: { drag: "ARRASTRAR", redo: "Rehacer navegante" },
  en: { drag: "DRAG", redo: "Redo navigator" },
  de: { drag: "ZIEHEN", redo: "Navigator neu" },
} as const;

export default function FloatingNavigator() {
  const { drawing, clear, ready, pos, setDragging } = useNavigator();
  const { locale } = useLocale();
  const l = label[locale];
  const reduce = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  // Contraste: negro sobre banda rosa/roja, rosa sobre banda negra — se
  // recalcula con lo que hay debajo del navegante (drag y scroll lo mueven
  // sin remontar el componente).
  const [overInk, setOverInk] = useState(false);

  const sampleBand = () => {
    const r = boxRef.current?.getBoundingClientRect();
    if (!r) return;
    const el = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    setOverInk(!!el?.closest(".band--ink"));
  };

  useEffect(() => {
    if (!drawing) return;
    sampleBand();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sampleBand);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!drawing]);

  // `ready` solo pasa a true tras leer localStorage en cliente, así que
  // también sirve como guarda de hidratación (nada se renderiza en SSR).
  if (!ready || !drawing) return null;

  const { width, height } = clampSize(drawing.width, drawing.height);

  const redo = () => {
    clear();
    document.getElementById("navigator")?.scrollIntoView({ behavior: "smooth" });
  };

  // info.point viene en coordenadas de página (incluye scroll). El navegante
  // es `fixed` (espacio de viewport) y el efecto "push" de los títulos compara
  // contra getBoundingClientRect (también viewport), así que convertimos
  // restando el scroll. Sin esto, arrastrar mientras se scrollea desincroniza
  // la posición reportada y el monito "se iba" de la pantalla.
  const onDrag = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Preferimos la posición real del puntero del evento cuando existe
    // (viewport-space nativo); si no, caemos al point de página menos scroll.
    const native = e as PointerEvent;
    const vx = typeof native.clientX === "number" ? native.clientX : info.point.x - window.scrollX;
    const vy = typeof native.clientY === "number" ? native.clientY : info.point.y - window.scrollY;
    pos.x.set(vx);
    pos.y.set(vy);
    sampleBand();
  };

  return (
    <motion.div
      ref={boxRef}
      drag
      dragMomentum={false}
      dragElastic={0.12}
      dragConstraints={{ left: -window.innerWidth + 120, right: 24, top: -window.innerHeight + 160, bottom: 24 }}
      whileDrag={{ scale: 1.08 }}
      onDragStart={() => setDragging(true)}
      onDrag={onDrag}
      onDragEnd={() => setDragging(false)}
      initial={{ opacity: 0, scale: 0.6 }}
      // Rebote de entrada: además de aparecer, "bota" un par de veces — la
      // misma seña visual de "esto se agarra" que trae el cursor-diamante,
      // reforzada justo en el momento en que el navegante nace agarrable.
      animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [0.6, 1.25, 0.85, 1.08, 1] }}
      transition={reduce ? { duration: 0.2 } : { duration: 0.7, times: [0, 0.35, 0.6, 0.8, 1], ease: [0.34, 1.56, 0.64, 1] }}
      data-cursor={l.drag}
      data-grab="true"
      className="group fixed bottom-8 right-8 z-[900] touch-none"
      style={{ width, height }}
    >
      {/* Vectorial (no PNG): tamaño real del dibujo (arriba), y color que
          cambia según lo que tenga detrás — rosa sobre negro, negro sobre
          rosa/rojo — para que siempre se lea. */}
      <svg viewBox={`0 0 ${drawing.width} ${drawing.height}`} className="h-full w-full overflow-visible">
        <g style={{ filter: "drop-shadow(3px 3px 0 var(--foreground))" }}>
          {drawing.strokes.map((s, i) => (
            <polyline
              key={i}
              points={s.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke={overInk ? "var(--blood)" : "#0a0a0a"}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>
      <button
        type="button"
        onClick={redo}
        aria-label={l.redo}
        title={l.redo}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center border-2 border-foreground bg-background font-mono text-xs leading-none text-foreground opacity-0 transition-opacity group-hover:opacity-100"
      >
        ↺
      </button>
    </motion.div>
  );
}
