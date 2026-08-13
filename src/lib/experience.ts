export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  logo?: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 — ahora",
    role: "Analista de Aplicaciones",
    org: "Intelix Synergy",
    logo: "/images/intelix.jpeg",
    description:
      "API REST sobre IBM DB2, colas asíncronas, automatización financiera con n8n. Ahora en el equipo del TMS para OLO, una 4PL de Costa Rica — mi parte es Pedidos, OMS y planificación de rutas.",
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Developer",
    org: "Orquesta Sinfónica de Carabobo",
    logo: "/images/orquesta.png",
    description:
      "Sistema de inscripciones y pagos para 100+ estudiantes, con recibos en PDF automáticos. Bajó el tiempo de procesamiento un 40% y todavía lo usan.",
  },
  {
    period: "2022 — 2026",
    role: "Ingeniería de Computación",
    org: "Universidad José Antonio Páez",
    description:
      "Tesis: Sistema de Navegación Peatonal Asistida, defendida con 19/20. Graduación oficial en octubre 2026.",
  },
];
