"use client";

import ProjectCase from "@/components/ProjectCase";
import Reveal from "@/components/Reveal";
import { useT } from "@/components/LocaleProvider";
import { projects } from "@/lib/projects";

export default function Projects() {
  const t = useT();

  return (
    <section id="projects" className="px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          {t.projects.eyebrow}
        </span>
        <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight break-words md:text-6xl">
          {t.projects.heading}
        </h2>
      </Reveal>

      <div className="mt-8">
        {projects.map((project, index) => (
          <ProjectCase key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
