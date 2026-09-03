"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { useNavigator } from "@/components/NavigatorProvider";

const label = {
  es: { drag: "ARRASTRAR", redo: "Rehacer navegante" },
  en: { drag: "DRAG", redo: "Redo navigator" },
  de: { drag: "ZIEHEN", redo: "Navigator neu" },
} as const;

export default function FloatingNavigator() {
  const { drawing, clear, ready } = useNavigator();
  const { locale } = useLocale();
  const l = label[locale];

  // `ready` solo pasa a true tras leer localStorage en cliente, así que
  // también sirve como guarda de hidratación (nada se renderiza en SSR).
  if (!ready || !drawing) return null;

  const redo = () => {
    clear();
    document.getElementById("navigator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.12}
      whileDrag={{ scale: 1.08 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      data-cursor={l.drag}
      className="group fixed bottom-8 right-8 z-[900] hidden cursor-grab touch-none active:cursor-grabbing md:block"
      style={{ width: 96, height: 96 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={drawing}
        alt="Tu navegante"
        draggable={false}
        className="h-full w-full select-none object-contain"
        style={{ filter: "drop-shadow(4px 4px 0 var(--accent))" }}
      />
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
