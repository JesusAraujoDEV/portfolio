import Shot from "@/components/Shot";
import type { Project } from "@/lib/projects";

export default function ProjectCase({ project, index }: { project: Project; index: number }) {
  return (
    <div className="border-t border-foreground/10 py-16 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-muted">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="mt-3 text-3xl leading-tight md:text-5xl">{project.name}</h3>
      <p className="mt-2 text-sm text-muted">{project.role}</p>
      <p className="mt-6 max-w-2xl text-foreground/80">{project.description}</p>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-accent">{project.stack}</p>

      {project.images && (
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {project.images.map((src) => (
            <Shot
              key={src}
              src={src}
              alt={`Captura de ${project.name}`}
              className="h-56 w-80 shrink-0 md:h-72 md:w-[26rem]"
            />
          ))}
        </div>
      )}
    </div>
  );
}
