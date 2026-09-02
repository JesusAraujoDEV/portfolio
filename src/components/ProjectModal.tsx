"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Shot from "@/components/Shot";
import { useLocale, useT } from "@/components/LocaleProvider";
import type { Project } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { locale } = useLocale();
  const t = useT();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm md:p-8"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "10px 10px 0 0 var(--foreground)" }}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto border-2 border-foreground/80 bg-paper p-6 md:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.close}
              className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
            >
              {t.projects.close} ✕
            </button>

            <div className="grid gap-10 md:grid-cols-[1fr_220px]">
              <div className="min-w-0">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {project.year} · {project.role[locale]}
                </span>
                <h3 className="mt-2 text-3xl leading-[0.95] tracking-tight md:text-4xl">{project.name}</h3>
                <p className="mt-5 max-w-xl text-foreground/80">{project.description[locale]}</p>

                {project.images && project.images.length > 0 && (
                  <div className="mt-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {t.projects.gallery}
                    </span>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      {project.images.map((src) => (
                        <Shot
                          key={src}
                          src={src}
                          alt={`Captura de ${project.name}`}
                          className="aspect-square border-foreground/30"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6 border-t border-foreground/15 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                <dl className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
                  <div>
                    <dt className="text-muted">{t.projects.yearLabel}</dt>
                    <dd className="mt-1 text-foreground">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">{t.projects.roleLabel}</dt>
                    <dd className="mt-1 text-foreground normal-case tracking-normal">{project.role[locale]}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">{t.projects.stackLabel}</dt>
                    <dd className="mt-1 text-accent normal-case tracking-normal">{project.stack}</dd>
                  </div>
                </dl>

                {(project.liveUrl || project.repos) && (
                  <div className="flex flex-col gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor={t.cursor.viewLive}
                        className="border border-foreground/40 px-3 py-2 text-center font-mono text-xs uppercase tracking-widest transition hover:border-accent hover:text-accent"
                      >
                        {t.projects.liveSite}
                      </a>
                    )}
                    {project.repos?.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor={t.cursor.viewRepo}
                        className="border border-foreground/40 px-3 py-2 text-center font-mono text-xs uppercase tracking-widest transition hover:border-accent hover:text-accent"
                      >
                        {repo.label[locale]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
