import Shot from "@/components/Shot";
import Reveal from "@/components/Reveal";
import type { Project } from "@/lib/projects";

export default function ProjectCase({ project, index }: { project: Project; index: number }) {
  const cover = project.images?.[0];
  const gallery = project.images?.slice(1) ?? [];
  const reversed = index % 2 === 1;

  return (
    <Reveal className="border-t border-foreground/10 py-16 first:border-t-0 first:pt-0 md:py-24">
      <div
        className={`grid gap-8 md:grid-cols-2 md:items-center md:gap-16 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
      >
        <div>
          <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-muted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 text-4xl leading-[0.95] tracking-tight md:text-6xl">{project.name}</h3>
          <p className="mt-3 text-sm text-muted">{project.role}</p>
          <p className="mt-6 max-w-md text-foreground/80">{project.description}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-accent">{project.stack}</p>
          {project.repos && project.repos.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {project.repos.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="VER REPO"
                  className="font-mono text-xs uppercase tracking-widest text-muted underline decoration-muted/40 underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  {repo.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden border border-foreground/15 bg-paper">
          {cover ? (
            <Shot src={cover} alt={`Captura de ${project.name}`} className="absolute inset-0 h-full w-full" />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[9rem] font-bold text-foreground/[0.06] md:text-[11rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      </div>

      {gallery.length > 0 && (
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {gallery.map((src) => (
            <Shot
              key={src}
              src={src}
              alt={`Captura de ${project.name}`}
              className="h-40 w-60 shrink-0 md:h-48 md:w-72"
            />
          ))}
        </div>
      )}
    </Reveal>
  );
}
