import type { Localized } from "@/lib/i18n";

export type ExperienceItem = {
  period: Localized;
  role: Localized;
  org: string;
  where?: Localized;
  logo?: string;
  kind?: "work" | "study";
  /** Una línea de resumen, visible sin desplegar. */
  summary: Localized;
  /** Logros concretos, breves y con impacto — se despliegan al abrir. */
  highlights: Localized[];
  /** Tecnologías de esta etapa. */
  stack: string[];
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
    where: { es: "Remoto · Costa Rica", en: "Remote · Costa Rica", de: "Remote · Costa Rica" },
    logo: "/images/intelix.jpeg",
    kind: "work",
    summary: {
      es: "Backend serverless en AWS, automatización financiera y logística para clientes de Costa Rica y Venezuela.",
      en: "Serverless AWS backends, plus financial and logistics automation for clients in Costa Rica and Venezuela.",
      de: "Serverless-Backends auf AWS, Finanz- und Logistikautomatisierung für Kunden in Costa Rica und Venezuela.",
    },
    highlights: [
      {
        es: "Módulo de Pedidos y OMS del TMS de OLO (4PL de Costa Rica): las órdenes ahora se priorizan por fecha de ruta en vez de por orden de llegada.",
        en: "Orders & OMS module for OLO's TMS (a Costa Rican 4PL): orders now prioritize by route date instead of arrival order.",
        de: "Bestell- und OMS-Modul für OLOs TMS (4PL aus Costa Rica): Bestellungen werden nach Routendatum statt nach Ankunft priorisiert.",
      },
      {
        es: "Automatización de monitoreo cripto con n8n: rastrea depósitos USDT/BSC-USD en 3 redes cada minuto para 3 empresas, 100% sin intervención manual.",
        en: "Crypto-monitoring automation with n8n: tracks USDT/BSC-USD deposits across 3 chains every minute for 3 companies, 100% hands-off.",
        de: "Krypto-Monitoring mit n8n: erfasst USDT/BSC-USD-Einzahlungen über 3 Chains jede Minute für 3 Firmen, 100 % ohne manuelle Eingriffe.",
      },
      {
        es: "Monitor del Lago de Datos: motor de reglas que corre cada 15 min y avisa de inconsistencias entre ecosistemas antes de que se propaguen.",
        en: "Data-Lake Monitor: a rules engine running every 15 min that flags cross-system inconsistencies before they spread.",
        de: "Data-Lake-Monitor: eine Regel-Engine, die alle 15 Min läuft und systemübergreifende Inkonsistenzen früh meldet.",
      },
      {
        es: "GO RAMP: tablero de KPIs de citas y descargas (tiempo por proceso, puntualidad, nivel de servicio) para medir dónde se pierde tiempo.",
        en: "GO RAMP: appointment & unloading KPI dashboard (time per stage, punctuality, service level) to pinpoint where time is lost.",
        de: "GO RAMP: KPI-Dashboard für Termine und Entladung (Zeit pro Phase, Pünktlichkeit, Service-Level), um Zeitverluste zu orten.",
      },
    ],
    stack: ["Python", "AWS Lambda", "React", "IBM DB2", "PostgreSQL", "n8n"],
  },
  {
    period: { es: "2024 — 2025", en: "2024 — 2025", de: "2024 — 2025" },
    role: {
      es: "Full-Stack Developer",
      en: "Full-Stack Developer",
      de: "Full-Stack Developer",
    },
    org: "Orquesta Sinfónica de Carabobo",
    where: { es: "Valencia, Venezuela", en: "Valencia, Venezuela", de: "Valencia, Venezuela" },
    logo: "/images/orquesta.png",
    kind: "work",
    summary: {
      es: "Sistema de inscripciones y pagos para la escuela de música, en uso hasta hoy.",
      en: "Enrollment and payment system for the music school, still in use today.",
      de: "Anmelde- und Zahlungssystem für die Musikschule, bis heute im Einsatz.",
    },
    highlights: [
      {
        es: "Inscripciones y pagos para 100+ estudiantes, con recibos en PDF generados automáticamente.",
        en: "Enrollment and payments for 100+ students, with auto-generated PDF receipts.",
        de: "Anmeldungen und Zahlungen für über 100 Studierende, mit automatisch erzeugten PDF-Quittungen.",
      },
      {
        es: "El tiempo de procesamiento bajó un 40% — y el sistema sigue en producción.",
        en: "Processing time dropped 40% — and the system is still in production.",
        de: "Die Bearbeitungszeit sank um 40 % — das System ist weiterhin produktiv.",
      },
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    period: { es: "2022 — 2026", en: "2022 — 2026", de: "2022 — 2026" },
    role: {
      es: "Ingeniería de Computación",
      en: "Computer Engineering",
      de: "Informatik-Ingenieurwesen",
    },
    org: "Universidad José Antonio Páez",
    where: { es: "Valencia, Venezuela", en: "Valencia, Venezuela", de: "Valencia, Venezuela" },
    logo: "/images/ujap-logo.png",
    kind: "study",
    summary: {
      es: "Tesis de navegación peatonal asistida, defendida con 19/20.",
      en: "Assisted pedestrian navigation thesis, defended with a 19/20.",
      de: "Abschlussarbeit zur unterstützten Fußgängernavigation, verteidigt mit 19/20.",
    },
    highlights: [
      {
        es: "Sistema de Navegación Peatonal Asistida — 19/20 en la defensa.",
        en: "Assisted Pedestrian Navigation System — 19/20 at the defense.",
        de: "System für unterstützte Fußgängernavigation — 19/20 bei der Verteidigung.",
      },
      {
        es: "Graduación oficial en octubre 2026.",
        en: "Official graduation in October 2026.",
        de: "Offizieller Abschluss im Oktober 2026.",
      },
    ],
    stack: ["Python", "TensorFlow", "Flutter"],
  },
];
