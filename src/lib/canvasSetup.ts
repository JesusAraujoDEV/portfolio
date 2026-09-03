/** Prepara un <canvas> de dibujo a resolución de dispositivo (DPR) con el
 * trazo estilizado en el rojo/rosa "blood" actual. */
export function setupDrawCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 4;
  // Trazo negro fijo mientras se dibuja — el navegante ya guardado es el que
  // cambia de color según lo que tenga detrás (ver FloatingNavigator).
  ctx.strokeStyle = "#0a0a0a";
}

export function pointFromEvent(e: React.PointerEvent<HTMLCanvasElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}
