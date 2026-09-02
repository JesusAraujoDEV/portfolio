"use client";

import { useEffect, useRef, type RefObject } from "react";
import { Wall, type Body } from "@/lib/wallPhysics";
import type { StackItem } from "@/lib/stackItems";

export type Hold = { i: number; lastX: number; lastY: number; lastT: number };

// Drives the StackWall physics sim: rAF loop, ResizeObserver, mouse-repel +
// drag tracking, imperative transform-only painting (no per-frame React state).
export function useStackWall(
  containerRef: RefObject<HTMLDivElement | null>,
  nodeRefs: RefObject<(HTMLDivElement | null)[]>,
  items: StackItem[]
) {
  const wallRef = useRef<Wall | null>(null);
  const holdRef = useRef<Hold | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const wall = new Wall(items.map((s) => (s.big ? (isDesktop ? 112 : 76) : isDesktop ? 84 : 58)));
    wallRef.current = wall;
    const paint = () =>
      wall.bodies.forEach((b: Body, i: number) => {
        const el = nodeRefs.current[i];
        if (el) el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`;
      });
    const ro = new ResizeObserver((e) => wall.resize(e[0].contentRect.width, e[0].contentRect.height));
    ro.observe(container);
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      wall.step(dt);
      paint();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      wall.mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top, on: true };
      const hold = holdRef.current;
      if (!hold) return;
      const body = wall.bodies[hold.i];
      body.x = wall.mouse.x;
      body.y = wall.mouse.y;
      const now = performance.now();
      const dt = Math.max(1, now - hold.lastT) / 1000;
      body.vx = (wall.mouse.x - hold.lastX) / dt;
      body.vy = (wall.mouse.y - hold.lastY) / dt;
      Object.assign(hold, { lastX: wall.mouse.x, lastY: wall.mouse.y, lastT: now });
    };
    const onLeave = () => (wall.mouse.on = false);
    const endHold = () => {
      if (holdRef.current) wall.bodies[holdRef.current.i].held = false;
      holdRef.current = null;
    };
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerup", endHold);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerup", endHold);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { wallRef, holdRef };
}
