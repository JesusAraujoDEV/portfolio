import type { Stroke } from "@/components/NavigatorProvider";

/** Recorta un set de trazos a su bounding box real (+padding) para que el
 * navegante guardado quede al tamaño que de verdad se dibujó. */
export function cropStrokes(strokes: Stroke[], pad = 6) {
  const points = strokes.flat();
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  const maxY = Math.max(...points.map((p) => p.y));
  const width = Math.max(maxX - minX + pad * 2, 1);
  const height = Math.max(maxY - minY + pad * 2, 1);
  const shifted = strokes.map((s) => s.map((p) => ({ x: p.x - minX + pad, y: p.y - minY + pad })));
  return { strokes: shifted, width, height };
}
