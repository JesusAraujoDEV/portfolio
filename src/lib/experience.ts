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
      es: "Dueño del módulo de pagos del sistema de la escuela de música — mi primer sistema real en producción.",
      en: "Owned the payments module of the music school's system — my first real system in production.",
      de: "Verantwortlich für das Zahlungsmodul des Schulsystems — mein erstes echtes System in Produktion.",
    },
    highlights: [
      {
        es: "Construí el módulo de pagos de punta a punta: CRUD completo con emisor, referencia, método, banco y monto, más filtros de búsqueda.",
        en: "Built the payments module end to end: full CRUD with payer, reference, method, bank and amount, plus search filters.",
        de: "Zahlungsmodul von A bis Z gebaut: vollständiges CRUD mit Zahler, Referenz, Methode, Bank und Betrag, plus Suchfilter.",
      },
      {
        es: "Recibos en PDF generados automáticamente (jsPDF/pdfmake) y acceso protegido con JWT.",
        en: "Auto-generated PDF receipts (jsPDF/pdfmake) and JWT-protected access.",
        de: "Automatisch erzeugte PDF-Quittungen (jsPDF/pdfmake) und JWT-geschützter Zugriff.",
      },
      {
        es: "Parte de un equipo que sacó el sistema a producción para la escuela — sigue en uso años después.",
        en: "Part of a team that shipped the system to production for the school — still in use years later.",
        de: "Teil eines Teams, das das System für die Schule in Produktion brachte — Jahre später noch im Einsatz.",
      },
    ],
    stack: ["Node.js", "Express", "Sequelize", "MySQL", "JWT"],
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
      es: "JEPO — tesis: app que detecta sola situaciones de riesgo y alerta a tus contactos. Defendida con 19/20.",
      en: "JEPO — thesis: an app that detects risk situations on its own and alerts your contacts. Defended with a 19/20.",
      de: "JEPO — Abschlussarbeit: eine App, die Risikosituationen selbst erkennt und Kontakte alarmiert. Verteidigt mit 19/20.",
    },
    highlights: [
      {
        es: "Detección autónoma de caídas e impactos con sensores + IA, monitoreando en segundo plano incluso con la pantalla bloqueada.",
        en: "Autonomous fall & impact detection with sensors + AI, monitoring in the background even with the screen locked.",
        de: "Autonome Sturz- und Aufprallerkennung mit Sensoren + KI, im Hintergrund auch bei gesperrtem Bildschirm.",
      },
      {
        es: "Geolocalización continua y fan-out automático de alertas a contactos de confianza — sin que la persona tenga que hacer nada.",
        en: "Continuous geolocation and automatic alert fan-out to trusted contacts — no action needed from the person at risk.",
        de: "Kontinuierliche Geolokalisierung und automatischer Alarm-Fan-out an Vertrauenskontakte — ganz ohne Zutun der Person.",
      },
      {
        es: "Flujo de pre-alerta con confirmación que recorta los falsos positivos antes de disparar una notificación crítica.",
        en: "A pre-alert confirmation flow that cuts false positives before firing a critical notification.",
        de: "Ein Vor-Alarm-Bestätigungsfluss, der Fehlalarme reduziert, bevor eine kritische Benachrichtigung ausgelöst wird.",
      },
      {
        es: "App móvil en Flutter + API REST en NestJS (JWT + API Key, PostgreSQL), desplegada con Docker. Defendida con 19/20; graduación en octubre 2026.",
        en: "Flutter mobile app + NestJS REST API (JWT + API Key, PostgreSQL), deployed with Docker. Defended with 19/20; graduation October 2026.",
        de: "Flutter-App + NestJS-REST-API (JWT + API Key, PostgreSQL), mit Docker deployed. Verteidigt mit 19/20; Abschluss Oktober 2026.",
      },
    ],
    stack: ["Flutter", "Dart", "NestJS", "PostgreSQL", "Docker"],
  },
];
