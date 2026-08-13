import Reveal from "@/components/Reveal";
import { experience } from "@/lib/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Experiencia
            </span>
            <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Por dónde he pasado.
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {experience.length} etapas · 2022—2026
          </span>
        </Reveal>

        <div className="relative mt-16 pl-8">
          <div className="absolute top-2 bottom-2 left-2 w-px bg-foreground/15" />
          {experience.map((item, i) => (
            <Reveal
              key={item.org}
              className={`relative grid gap-2 md:grid-cols-[220px_1fr] md:gap-10 ${i > 0 ? "mt-14" : ""}`}
            >
              <span className="absolute top-1.5 left-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent" />
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3">
                {item.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt={item.org}
                    className="h-8 w-8 shrink-0 rounded-full border border-foreground/15 object-cover"
                  />
                )}
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {item.period}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl leading-tight md:text-3xl">{item.role}</h3>
                <p className="text-sm text-muted">{item.org}</p>
                <p className="mt-3 max-w-2xl text-foreground/80">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
