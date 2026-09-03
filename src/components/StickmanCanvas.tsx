"use client";

import { useLocale } from "@/components/LocaleProvider";
import PushText from "@/components/PushText";
import { useStickmanDraw } from "@/hooks/useStickmanDraw";

const copy = {
  es: { eyebrow: "Compañía", heading: "Dibuja a tu navegante", blurb: "Hazle un monito. Te acompañará mientras recorres la página — puedes arrastrarlo por donde quieras.", clear: "Limpiar", save: "Guardar", hint: "Dibuja aquí", limit: "Límite de tinta — limpia para seguir" },
  en: { eyebrow: "Company", heading: "Draw your navigator", blurb: "Sketch a little guy. He'll ride along as you scroll — drag him wherever you like.", clear: "Clear", save: "Save", hint: "Draw here", limit: "Ink limit — clear to keep drawing" },
  de: { eyebrow: "Begleiter", heading: "Zeichne deinen Navigator", blurb: "Mal ein Männchen. Es begleitet dich beim Scrollen — zieh es, wohin du willst.", clear: "Löschen", save: "Speichern", hint: "Hier zeichnen", limit: "Tintenlimit — zum Weiterzeichnen löschen" },
} as const;

export default function StickmanCanvas() {
  const { locale } = useLocale();
  const t = copy[locale];
  const { canvasRef, hasStrokes, limitHit, start, move, end, clear, commit } = useStickmanDraw();

  return (
    <section id="navigator" className="band--blood overflow-x-clip px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{t.eyebrow}</span>
        <h2 className="mt-4 max-w-2xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.03em] break-words md:text-7xl">
          <PushText>{t.heading}</PushText>
        </h2>
        <p className="mt-6 max-w-xl text-foreground/80">
          <PushText>{t.blurb}</PushText>
        </p>

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
          {/* Fuera del canvas — un aviso encima tapaba lo ya dibujado ahí abajo. */}
          {limitHit && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0a0a0a]">
              {t.limit}
            </span>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={clear}
              data-cursor={t.clear}
              className="border-2 border-foreground bg-transparent px-5 py-2 font-mono text-xs uppercase tracking-widest transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.clear}
            </button>
            <button
              type="button"
              onClick={commit}
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
