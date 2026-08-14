"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Shot from "@/components/Shot";
import ProjectGallery from "@/components/ProjectGallery";
import { useLocale, useT } from "@/components/LocaleProvider";
import type { Project } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as const;
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function ProjectCase({ project, index }: { project: Project; index: number }) {
  const { locale } = useLocale();
  const t = useT();
  const cover = project.images?.[0];
  const gallery = project.images?.slice(1) ?? [];
  const reversed = index % 2 === 1;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  // Subtle parallax drift + scale on the cover as it crosses the viewport —
  // transform-only so it stays cheap on mobile.
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <div ref={sectionRef} className="border-t border-foreground/10 py-16 first:border-t-0 first:pt-0 md:py-24">
      <div
        className={`grid gap-8 md:grid-cols-2 md:items-center md:gap-16 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
        >
          <motion.div variants={textVariants} className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-muted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{project.year}</span>
          </motion.div>
          <motion.h3 variants={textVariants} className="mt-3 text-4xl leading-[0.95] tracking-tight md:text-6xl">
            {project.name}
          </motion.h3>
          <motion.p variants={textVariants} className="mt-3 text-sm text-muted">
            {project.role[locale]}
          </motion.p>
          <motion.p variants={textVariants} className="mt-6 max-w-md text-foreground/80">
            {project.description[locale]}
          </motion.p>
          <motion.p variants={textVariants} className="mt-4 font-mono text-xs uppercase tracking-wider text-accent">
            {project.stack}
          </motion.p>

          {(project.liveUrl || (project.repos && project.repos.length > 0)) && (
            <motion.div variants={textVariants} className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor={t.cursor.viewLive}
                  className="font-mono text-xs uppercase tracking-widest text-muted underline decoration-muted/40 underline-offset-4 transition hover:text-accent hover:decoration-accent"
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
                  className="font-mono text-xs uppercase tracking-widest text-muted underline decoration-muted/40 underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  {repo.label[locale]}
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(4% 4% 4% 4%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative aspect-[4/3] w-full overflow-hidden border border-foreground/15 bg-paper"
        >
          {cover ? (
            <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 h-full w-full will-change-transform">
              <Shot src={cover} alt={`Captura de ${project.name}`} className="h-full w-full" />
            </motion.div>
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[9rem] font-bold text-foreground/[0.06] md:text-[11rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </motion.div>
      </div>

      <ProjectGallery images={gallery} name={project.name} />
    </div>
  );
}
