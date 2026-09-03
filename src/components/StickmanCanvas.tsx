"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { useNavigator } from "@/components/NavigatorProvider";

// Literales inline localizados (mismo patrón que FandomPile), para no expandir
// los 3 bloques de translations.ts por este feature.
const copy = {
  es: { eyebrow: "Compañía", heading: "Dibuja a tu navegante", blurb: "Hazle un monito. Te acompañará mientras recorres la página — puedes arrastrarlo por donde quieras.", clear: "Limpiar", save: "Guardar", hint: "Dibuja aquí" },
  en: { eyebrow: "Company", heading: "Draw your navigator", blurb: "Sketch a little guy. He'll ride along as you scroll — drag him wherever you like.", clear: "Clear", save: "Save", hint: "Draw here" },
  de: { eyebrow: "Begleiter", heading: "Zeichne deinen Navigator", blurb: "Mal ein Männchen. Es begleitet dich beim Scrollen — zieh es, wohin du willst.", clear: "Löschen", save: "Speichern", hint: "Hier zeichnen" },
} as const;

export default function StickmanCanvas() {
  const { locale } = useLocale();
  const t = copy[locale];
  const { save } = useNavigator();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [hasStrokes, setHasStrokes] = useState(false);

  // El canvas se dibuja a resolución de dispositivo (DPR) para que el trazo no
  // salga borroso, pero se maneja en coordenadas CSS.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
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
    ctx.strokeStyle = "#0a0a0a";
  }, []);

  const pointFromEvent = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    last.current = pointFromEvent(e);
  };

  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !last.current) return;
    const p = pointFromEvent(e);
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
    if (!hasStrokes) setHasStrokes(true);
  };

  const end = () => {
    drawing.current = false;
    last.current = null;
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasStrokes(false);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasStrokes) return;
    save(canvas.toDataURL("image/png"));
  };

  return (
    <section id="navigator" className="band--blood overflow-x-clip px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{t.eyebrow}</span>
        <h2 className="mt-4 max-w-2xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.03em] break-words md:text-7xl">
          {t.heading}
        </h2>
        <p className="mt-6 max-w-xl text-foreground/80">{t.blurb}</p>

        <div className="mt-10 flex flex-col gap-4">
          <div className="relative w-full max-w-xl">
            <canvas
              ref={canvasRef}
              onPointerDown={start}
              onPointerMove={move}
              onPointerUp={end}
              onPointerLeave={end}
              data-cursor="✏"
              className="aspect-[4/3] w-full touch-none border-4 border-foreground bg-[#f2f0eb]"
              style={{ boxShadow: "8px 8px 0 0 var(--foreground)" }}
            />
            {!hasStrokes && (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-sm uppercase tracking-widest text-[#0a0a0a]/30">
                {t.hint}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClear}
              data-cursor={t.clear}
              className="border-2 border-foreground bg-transparent px-5 py-2 font-mono text-xs uppercase tracking-widest transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.clear}
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!hasStrokes}
              data-cursor={t.save}
              className="border-2 border-foreground bg-foreground px-5 py-2 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t.save}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
