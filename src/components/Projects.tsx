const projects = [
  {
    year: "2025—",
    name: "Wallets Personal Finance",
    role: "Suite financiera multi-divisa",
    stack: "React · Node.js",
    description:
      "Control multicuenta, analítica en tiempo real y tracking multimoneda para centralizar el flujo de caja personal.",
  },
  {
    year: "2025",
    name: "Mediart",
    role: "Ecosistema multimedia con IA",
    stack: "Node.js · Express · PostgreSQL · Docker",
    description:
      "Orquesta 4 APIs externas (Spotify, TMDB, IGDB, Google Books) y recomendaciones con Gemini/DeepSeek sobre arquitectura N-capas.",
  },
  {
    year: "2024",
    name: "Sistema de Pagos y Gestión Académica",
    role: "Orquesta Sinfónica de Carabobo",
    stack: "Node.js · Express · MySQL",
    description:
      "Inscripciones, cursos, pagos y combos para 100+ estudiantes — recibos PDF y −40% en tiempos de procesamiento.",
  },
  {
    year: "2024",
    name: "FixIt",
    role: "App móvil de servicios técnicos",
    stack: "React Native · Postman",
    description:
      "Equipo de 4 devs: solicitud de servicios por tipo, coordinación directa con técnicos y mapa de solicitudes cercanas.",
  },
  {
    year: "2023",
    name: "Deggs",
    role: "Videojuego — 1er lugar, concurso UJAP",
    stack: "Unity",
    description:
      "Patos radioactivos en modo un jugador y versus. Escape de base militar y capture-the-flag estilo Feather Mode.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 md:py-40">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Proyectos
      </span>
      <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-5xl">
        Algunas cosas que he construido.
      </h2>

      <div className="mt-16 divide-y divide-white/10 border-t border-white/10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group grid grid-cols-1 gap-2 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_1fr] md:items-baseline md:gap-8 md:px-4"
          >
            <span className="font-mono text-xs text-muted">{project.year}</span>
            <div>
              <h3 className="text-xl transition group-hover:text-accent md:text-2xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.role}</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-foreground/80">{project.description}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                {project.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
