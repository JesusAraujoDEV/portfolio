"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/** Un trazo = lista de puntos en coordenadas CSS del canvas donde se dibujó. */
export type Stroke = { x: number; y: number }[];
/** El navegante guardado: sus trazos vectoriales + el tamaño real del dibujo
 * (bounding box), para poder re-renderizarlo a su tamaño real y recolorearlo
 * en vivo (SVG) en vez de un PNG rasterizado a tamaño fijo. */
export type Drawing = { strokes: Stroke[]; width: number; height: number };

type NavigatorContextValue = {
  drawing: Drawing | null;
  save: (d: Drawing) => void;
  clear: () => void;
  ready: boolean;
  /** Posición en viewport del navegante flotante mientras se arrastra — la
   * consumen los textos que se apartan a su paso (ver PushText). */
  pos: { x: MotionValue<number>; y: MotionValue<number> };
  dragging: boolean;
  setDragging: (v: boolean) => void;
};

const NavigatorContext = createContext<NavigatorContextValue | null>(null);

export function NavigatorProvider({ children }: { children: ReactNode }) {
  // El navegante vive SOLO en memoria: al recargar la página desaparece (lo
  // pidió Jesús). Nada de localStorage — cada sesión empieza sin monito.
  const [drawing, setDrawing] = useState<Drawing | null>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const [dragging, setDragging] = useState(false);

  const save = useCallback((d: Drawing) => setDrawing(d), []);
  const clear = useCallback(() => setDrawing(null), []);

  return (
    <NavigatorContext.Provider
      // ready siempre true: al no depender de localStorage no hay desfase de
      // hidratación (drawing arranca en null tanto en servidor como cliente).
      value={{ drawing, save, clear, ready: true, pos: { x, y }, dragging, setDragging }}
    >
      {children}
    </NavigatorContext.Provider>
  );
}

export function useNavigator() {
  const ctx = useContext(NavigatorContext);
  if (!ctx) throw new Error("useNavigator debe usarse dentro de <NavigatorProvider>");
  return ctx;
}
