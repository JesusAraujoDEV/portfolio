"use client";

import Reveal from "@/components/Reveal";
import { useLocale, useT } from "@/components/LocaleProvider";
import { experience } from "@/lib/experience";

export default function Experience() {
  const { locale } = useLocale();
  const t = useT();

  return (
    <section id="experience" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.experience.eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
              {t.experience.heading}
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t.experience.stages(experience.length)}
          </span>
        </Reveal>

        <div className="relative mt-16 pl-8">
          <div className="absolute top-2 bottom-2 left-2 w-px bg-foreground/15" />
          {experience.map((item, i) => (
            <Reveal
              key={item.org}
              className={`relative grid gap-2 md:grid-cols-[220px_1fr] md:gap-10 ${i > 0 ? "mt-14" : ""}`}
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3">
                {item.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt={item.org}
                    className="h-14 w-14 shrink-0 rounded-full border border-foreground/15 object-cover md:h-16 md:w-16"
                  />
                )}
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {item.period[locale]}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl leading-tight md:text-3xl">{item.role[locale]}</h3>
                <p className="text-sm text-muted">{item.org}</p>
                <p className="mt-3 max-w-2xl text-foreground/80">{item.description[locale]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
