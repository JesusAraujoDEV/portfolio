"use client";

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

  // `ready` solo pasa a true tras leer localStorage en cliente, así que
  // también sirve como guarda de hidratación (nada se renderiza en SSR).
  if (!ready || !drawing) return null;

  const { width, height } = clampSize(drawing.width, drawing.height);

  const redo = () => {
    clear();
    document.getElementById("navigator")?.scrollIntoView({ behavior: "smooth" });
  };

  const onDrag = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    pos.x.set(info.point.x);
    pos.y.set(info.point.y);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.12}
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
      className="group fixed bottom-8 right-8 z-[900] hidden touch-none md:block"
      style={{ width, height }}
    >
      {/* Vectorial (no PNG): recolorea en vivo con --blood al tono elegido
          por cambiar_color.ps1, y su tamaño es el del dibujo real (arriba). */}
      <svg viewBox={`0 0 ${drawing.width} ${drawing.height}`} className="h-full w-full overflow-visible">
        <g style={{ filter: "drop-shadow(3px 3px 0 var(--foreground))" }}>
          {drawing.strokes.map((s, i) => (
            <polyline
              key={i}
              points={s.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="var(--blood)"
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
