import type { Localized } from "@/lib/i18n";

export type ExperienceItem = {
  period: Localized;
  role: Localized;
  org: string;
  logo?: string;
  description: Localized;
};

export const experience: ExperienceItem[] = [
  {
    period: { es: "2025 — ahora", en: "2025 — now", de: "2025 — jetzt" },
    role: {
      es: "Analista de Aplicaciones",
      en: "Application Analyst",
      de: "Anwendungsanalyst",
    },
    org: "Intelix Synergy",
    logo: "/images/intelix.jpeg",
    description: {
      es: "API REST sobre IBM DB2, colas asíncronas, automatización financiera con n8n. Ahora en el equipo del TMS para OLO, una 4PL de Costa Rica — mi parte es Pedidos, OMS y planificación de rutas.",
      en: "REST API on top of IBM DB2, async queues, financial automation with n8n. Currently on the TMS team for OLO, a 4PL in Costa Rica — my part is Orders, OMS, and route planning.",
      de: "REST-API auf IBM DB2, asynchrone Warteschlangen, Finanzautomatisierung mit n8n. Aktuell im TMS-Team für OLO, einen 4PL-Anbieter aus Costa Rica — mein Bereich sind Bestellungen, OMS und Routenplanung.",
    },
  },
  {
    period: { es: "2024 — 2025", en: "2024 — 2025", de: "2024 — 2025" },
    role: {
      es: "Full-Stack Developer",
      en: "Full-Stack Developer",
      de: "Full-Stack Developer",
    },
    org: "Orquesta Sinfónica de Carabobo",
    logo: "/images/orquesta.png",
    description: {
      es: "Sistema de inscripciones y pagos para 100+ estudiantes, con recibos en PDF automáticos. Bajó el tiempo de procesamiento un 40% y todavía lo usan.",
      en: "Enrollment and payment system for 100+ students, with automatic PDF receipts. It cut processing time by 40% and they still use it.",
      de: "System für Anmeldungen und Zahlungen für über 100 Studierende, mit automatischen PDF-Quittungen. Hat die Bearbeitungszeit um 40 % gesenkt und wird immer noch genutzt.",
    },
  },
  {
    period: { es: "2022 — 2026", en: "2022 — 2026", de: "2022 — 2026" },
    role: {
      es: "Ingeniería de Computación",
      en: "Computer Engineering",
      de: "Informatik-Ingenieurwesen",
    },
    org: "Universidad José Antonio Páez",
    description: {
      es: "Tesis: Sistema de Navegación Peatonal Asistida, defendida con 19/20. Graduación oficial en octubre 2026.",
      en: "Thesis: Assisted Pedestrian Navigation System, defended with a 19/20. Official graduation in October 2026.",
      de: "Abschlussarbeit: System für unterstützte Fußgängernavigation, verteidigt mit 19/20. Offizieller Abschluss im Oktober 2026.",
    },
  },
];
