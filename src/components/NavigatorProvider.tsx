"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "navigator-drawing";

type NavigatorContextValue = {
  /** dataURL PNG del stickman dibujado, o null si no hay ninguno. */
  drawing: string | null;
  /** Guarda un nuevo navegante (persistido en localStorage). */
  save: (dataUrl: string) => void;
  /** Borra el navegante actual para volver a dibujar. */
  clear: () => void;
  /** true una vez hidratado en cliente, para evitar parpadeo. */
  ready: boolean;
};

const NavigatorContext = createContext<NavigatorContextValue | null>(null);

// --- external store sobre localStorage -----------------------------------
// useSyncExternalStore es el hook pensado justo para leer de un sistema
// externo (localStorage) sin caer en el anti-patrón de setState-en-effect.
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  // otras pestañas escribiendo el mismo key también refrescan.
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function emit() {
  listeners.forEach((cb) => cb());
}

function readStore(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function NavigatorProvider({ children }: { children: ReactNode }) {
  // getServerSnapshot devuelve null: en SSR/primera hidratación no hay dibujo.
  const drawing = useSyncExternalStore(subscribe, readStore, () => null);
  // Una vez montado en cliente, el snapshot del servidor deja de usarse; lo
  // detectamos comparando con el snapshot cliente en un segundo store simple.
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const save = useCallback((dataUrl: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
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
    <NavigatorContext.Provider value={{ drawing, save, clear, ready }}>
      {children}
    </NavigatorContext.Provider>
  );
}

export function useNavigator() {
  const ctx = useContext(NavigatorContext);
  if (!ctx) throw new Error("useNavigator debe usarse dentro de <NavigatorProvider>");
  return ctx;
}
