"use client";

import { useRef } from "react";
import { useT } from "@/components/LocaleProvider";
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
          {t.stack.heading}
        </h2>

        <div
          ref={containerRef}
          className="stack-wall relative mt-16 h-[70vh] max-h-[720px] min-h-[420px] w-full touch-none overflow-hidden border border-foreground/15 bg-paper/40"
        >
          {stackItems.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              onPointerDown={grab(i)}
              data-cursor={t.cursor.go}
              className={`absolute top-0 left-0 flex cursor-grab touch-none flex-col items-center justify-center gap-1 rounded-full border-2 border-foreground/80 bg-background p-2 text-center will-change-transform active:cursor-grabbing ${item.big ? "stack-sticker-big" : "stack-sticker"}`}
              style={{ filter: "drop-shadow(4px 4px 0px var(--foreground))" }}
            >
              {item.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://skillicons.dev/icons?i=${item.icon}`}
                  alt={item.label}
                  draggable={false}
                  className="h-1/2 w-1/2 object-contain"
                />
              ) : (
                <span className="px-1 font-mono text-[9px] leading-tight font-medium uppercase tracking-tight md:text-[10px]">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted md:hidden">{t.stack.dragHint}</p>
      </div>
    </section>
  );
}
