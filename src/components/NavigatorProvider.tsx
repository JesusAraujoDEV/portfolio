"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

const STORAGE_KEY = "navigator-drawing";

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

// --- external store sobre localStorage -----------------------------------
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function emit() {
  listeners.forEach((cb) => cb());
}

function readStore(): Drawing | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Drawing) : null;
  } catch {
    return null;
  }
}

export function NavigatorProvider({ children }: { children: ReactNode }) {
  const drawing = useSyncExternalStore(subscribe, readStore, () => null);
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const [dragging, setDragging] = useState(false);

  const save = useCallback((d: Drawing) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
    } catch {
      // cuota/permiso denegado — no bloquea la UI.
    }
    emit();
  }, []);

  const clear = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // no-op
    }
    emit();
  }, []);

  return (
    <NavigatorContext.Provider
      value={{ drawing, save, clear, ready, pos: { x, y }, dragging, setDragging }}
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
