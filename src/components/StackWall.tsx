"use client";

import { useRef } from "react";
import { useT } from "@/components/LocaleProvider";
import PushText from "@/components/PushText";
import { stackItems } from "@/lib/stackItems";
import { useStackWall } from "@/hooks/useStackWall";

export default function StackWall() {
  const t = useT();
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
              className={`group absolute top-0 left-0 flex touch-none items-center justify-center border-2 border-[#0a0a0a] bg-[#f2f0eb] p-2 text-center will-change-transform ${item.big ? "stack-sticker-big" : "stack-sticker"}`}
              style={{ boxShadow: "6px 6px 0 0 #0a0a0a" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img ?? `https://skillicons.dev/icons?i=${item.icon}`}
                alt={item.label}
                draggable={false}
                className="h-3/5 w-3/5 object-contain"
              />
              {/* Nombre revelado al pasar el cursor — como los stickers del
                  stack de César, cada tool "tiene nombre" sin saturar la pared. */}
              <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 bg-foreground px-1.5 py-0.5 font-mono text-[9px] whitespace-nowrap text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted md:hidden">{t.stack.dragHint}</p>
      </div>
    </section>
  );
}
