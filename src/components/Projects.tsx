import ProjectCase from "@/components/ProjectCase";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Proyectos
        </span>
        <h2 className="mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight md:text-6xl">
          Cosas que construí y que siguen funcionando.
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
