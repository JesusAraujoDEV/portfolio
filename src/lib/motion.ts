// Central motion tokens — filosofía Emil Kowalski: rápido, transform/opacity,
// easing con carácter (nada de linear), y siempre gateado por reduced-motion
// en el punto de uso.

export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.18,
  base: 0.32,
  entrance: 0.42,
} as const;

export const LAYOUT_SPRING = { type: "spring", stiffness: 400, damping: 32 } as const;

// Entrada estándar: fade + translate-Y corto.
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.entrance, ease: EASE } },
};

export function staggerContainer(stagger = 0.08, delay = 0.1) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

export const staggerItem = fadeUp;
