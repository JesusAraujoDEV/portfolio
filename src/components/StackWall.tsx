"use client";

import { useRef } from "react";
import { useLocale, useT } from "@/components/LocaleProvider";
import PushText from "@/components/PushText";
import { stackItems, type StackGroup } from "@/lib/stackItems";
import { useStackWall } from "@/hooks/useStackWall";

// Orden y nombre de cada categoría para la lista bajo el muro (estilo César).
const GROUP_ORDER: StackGroup[] = ["lang", "frontend", "backend", "data", "cloud", "mobile", "other"];
const GROUP_LABEL: Record<StackGroup, { es: string; en: string; de: string }> = {
  lang: { es: "Lenguajes", en: "Languages", de: "Sprachen" },
  frontend: { es: "Frontend", en: "Frontend", de: "Frontend" },
  backend: { es: "Backend", en: "Backend", de: "Backend" },
  data: { es: "Datos", en: "Data", de: "Daten" },
  cloud: { es: "Cloud / DevOps", en: "Cloud / DevOps", de: "Cloud / DevOps" },
  mobile: { es: "Móvil", en: "Mobile", de: "Mobil" },
  other: { es: "Otros", en: "Other", de: "Andere" },
};

export default function StackWall() {
  const t = useT();
  const { locale } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { wallRef, holdRef } = useStackWall(containerRef, nodeRefs, stackItems);

  const grab = (i: number) => (e: React.PointerEvent) => {
    const wall = wallRef.current;
    const container = containerRef.current;
    if (!wall || !container) return;
    const rect = container.getBoundingClientRect();
    wall.bodies[i].held = true;
    holdRef.current = { i, lastX: e.clientX - rect.left, lastY: e.clientY - rect.top, lastT: performance.now() };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  return (
    <section id="stack" className="band--ink overflow-x-clip px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{t.stack.eyebrow}</span>
        <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
          <PushText>{t.stack.heading}</PushText>
        </h2>

        <div
          ref={containerRef}
          className="stack-wall dots relative mt-16 h-[70vh] max-h-[720px] min-h-[420px] w-full touch-none overflow-hidden border-2 border-foreground"
          style={{ backgroundColor: "var(--blood)" }}
        >
          {stackItems.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              onPointerDown={grab(i)}
              data-cursor={t.cursor.go}
              data-grab="true"
              className={`group absolute top-0 left-0 flex touch-none items-center justify-center overflow-hidden border-2 border-[#0a0a0a] bg-[#f2f0eb] p-2 text-center will-change-transform ${item.big ? "stack-sticker-big" : "stack-sticker"}`}
              style={{ boxShadow: "6px 6px 0 0 #0a0a0a" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img ?? `https://skillicons.dev/icons?i=${item.icon}`}
                alt={item.label}
                draggable={false}
                className="h-3/5 w-3/5 object-contain"
              />
              {/* Barra de nombre estilo César: una franja amarilla que se
                  desliza desde abajo al pasar el cursor, con el nombre en
                  display bold — no un tooltip flotante pequeño. */}
              <figcaption
                className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-[var(--highlight)] px-1.5 py-1 font-display text-[11px] font-bold uppercase leading-none tracking-tight text-[#16130f] transition-transform duration-200 ease-out group-hover:translate-y-0 md:text-sm"
              >
                {item.label}
              </figcaption>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted md:hidden">{t.stack.dragHint}</p>

        {/* La caja ordenada por tipo — como la lista .kit de César. El muro es
            juego; esto es la lectura rápida y escaneable de qué manejo. */}
        <dl className="mt-20 border-t-2 border-foreground/40">
          {GROUP_ORDER.map((group) => {
            const items = stackItems.filter((s) => s.group === group);
            if (items.length === 0) return null;
            return (
              <div
                key={group}
                className="grid grid-cols-1 gap-1 border-b border-foreground/15 py-5 transition-[padding] duration-200 ease-out hover:pl-3 md:grid-cols-[200px_1fr] md:gap-8"
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {GROUP_LABEL[group][locale]}
                </dt>
                <dd className="m-0 font-display text-lg font-bold uppercase leading-snug tracking-tight md:text-2xl">
                  {items.map((s) => s.label).join(" · ")}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
