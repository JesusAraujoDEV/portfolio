"use client";

import { useEffect, useRef, useState } from "react";
import { useNavigator, type Stroke } from "@/components/NavigatorProvider";
import { cropStrokes } from "@/lib/stickmanBBox";
import { setupDrawCanvas, pointFromEvent } from "@/lib/canvasSetup";

// ponytail: presupuesto de tinta = suma de longitud de segmentos trazados,
// corta el dibujo al llegar al tope (evita rellenar el lienzo de un bloque).
const INK_BUDGET = 6000;

/** Dibujo a mano alzada del navegante: trazos vectoriales, presupuesto de
 * tinta, guardado recortado al bounding box real. */
export function useStickmanDraw() {
  const { save, clear: clearFloating } = useNavigator();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const strokes = useRef<Stroke[]>([]);
  const inkUsed = useRef(0);
  const [hasStrokes, setHasStrokes] = useState(false);
  const [limitHit, setLimitHit] = useState(false);

  useEffect(() => {
    if (canvasRef.current) setupDrawCanvas(canvasRef.current);
  }, []);

  const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (limitHit) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drawingRef.current = true;
    const p = pointFromEvent(e);
    last.current = p;
    strokes.current.push([p]);
  };

  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current || limitHit) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !last.current) return;
    const p = pointFromEvent(e);
    const dist = Math.hypot(p.x - last.current.x, p.y - last.current.y);
    if (inkUsed.current + dist > INK_BUDGET) {
      drawingRef.current = false;
      setLimitHit(true);
      return;
    }
    inkUsed.current += dist;
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
    strokes.current[strokes.current.length - 1]?.push(p);
    if (!hasStrokes) setHasStrokes(true);
  };

  const end = () => {
    drawingRef.current = false;
    last.current = null;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes.current = [];
    inkUsed.current = 0;
    setHasStrokes(false);
    setLimitHit(false);
    // Limpiar el lienzo también retira el navegante flotante ya guardado.
    clearFloating();
  };

  const commit = () => {
    if (!hasStrokes || strokes.current.length === 0) return;
    save(cropStrokes(strokes.current));
  };
  return { canvasRef, hasStrokes, limitHit, start, move, end, clear, commit };
}
