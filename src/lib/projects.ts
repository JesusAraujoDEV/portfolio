import type { Localized } from "@/lib/i18n";

export type Project = {
  year: string;
  name: string;
  role: Localized;
  description: Localized;
  stack: string;
  images?: string[];
  repos?: { label: Localized; url: string }[];
};

export const projects: Project[] = [
  {
    year: "2025—",
    name: "Platica",
    role: {
      es: "Finanzas personales multi-divisa",
      en: "Multi-currency personal finance",
      de: "Persönliche Finanzen in mehreren Währungen",
    },
    description: {
      es: "La empecé porque llevar mis gastos en bolívares y dólares a la vez en una hoja de cálculo era un dolor de cabeza. Junta todas mis cuentas, convierte automáticamente y me dice en qué se me va la plata cada mes — spoiler: gasolina y curso de alemán.",
      en: "I started it because tracking my expenses in bolívares and dollars at the same time on a spreadsheet was a headache. It brings all my accounts together, converts automatically, and tells me where my money goes every month — spoiler: gas and my German course.",
      de: "Ich habe damit angefangen, weil es ein Albtraum war, meine Ausgaben gleichzeitig in Bolívar und Dollar in einer Tabelle zu verwalten. Es bringt alle meine Konten zusammen, rechnet automatisch um und zeigt mir, wofür mein Geld jeden Monat draufgeht — Spoiler: Benzin und mein Deutschkurs.",
    },
    stack: "React · Node.js · Chart.js",
    images: ["/images/platica.png", "/images/platica-stats.png", "/images/platica-transactions.png"],
    repos: [
      {
        label: { es: "Frontend →", en: "Frontend →", de: "Frontend →" },
        url: "https://github.com/JesusAraujoDEV/wallets-frontend",
      },
      {
        label: { es: "Backend →", en: "Backend →", de: "Backend →" },
        url: "https://github.com/JesusAraujoDEV/wallets-backend",
      },
    ],
  },
  {
    year: "2025",
    name: "Mediart",
    role: {
      es: "Para dejar de scrollear sin decidir qué ver",
      en: "To stop endlessly scrolling without deciding what to watch",
      de: "Damit ich nicht mehr ewig scrolle, ohne mich zu entscheiden",
    },
    description: {
      es: "Un proyecto de universidad que se me fue de las manos: junta películas, música, videojuegos y libros en un solo lugar, y le metí IA (Gemini/DeepSeek) para que recomiende algo cuando de verdad no sé qué hacer con mi tiempo.",
      en: "A university project that got out of hand: it brings movies, music, video games, and books together in one place, and I added AI (Gemini/DeepSeek) to recommend something when I genuinely don't know what to do with my time.",
      de: "Ein Uni-Projekt, das mir ein bisschen entglitten ist: Es bringt Filme, Musik, Videospiele und Bücher an einem Ort zusammen, und ich habe KI (Gemini/DeepSeek) eingebaut, die etwas vorschlägt, wenn ich wirklich nicht weiß, was ich mit meiner Zeit anfangen soll.",
    },
    stack: "Node.js · Express · PostgreSQL · Docker",
    images: ["/images/mediart.png", "/images/mediart-profile.png"],
    repos: [
      {
        label: { es: "Ver repo →", en: "View repo →", de: "Repo ansehen →" },
        url: "https://github.com/JesusAraujoDEV/mediart",
      },
    ],
  },
  {
    year: "2025",
    name: "NexusDoc",
    role: {
      es: "Historias clínicas para un consultorio de gineco-obstetricia",
      en: "Medical records for a gynecology and obstetrics practice",
      de: "Patientenakten für eine gynäkologisch-geburtshilfliche Praxis",
    },
    description: {
      es: "Un consultorio real que llevaba años de expedientes en papel. Migré todo eso a un sistema con historias clínicas, agenda de consultas por Ginecología y Obstetricia (con su propio módulo de ultrasonido) y un dashboard con las estadísticas del consultorio. Ahorita tiene casi 8.000 pacientes registradas y la doctora lo usa a diario.",
      en: "A real medical practice that had years of paper records. I migrated all of that into a system with medical records, an appointment schedule split between Gynecology and Obstetrics (with its own ultrasound module), and a dashboard with the practice's stats. It now has almost 8,000 registered patients and the doctor uses it every day.",
      de: "Eine echte Arztpraxis, die jahrelang Papierakten geführt hatte. Ich habe das alles in ein System mit Patientenakten, einem Terminkalender für Gynäkologie und Geburtshilfe (mit eigenem Ultraschall-Modul) und einem Dashboard mit den Praxisstatistiken migriert. Mittlerweile sind fast 8.000 Patientinnen registriert, und die Ärztin nutzt es täglich.",
    },
    stack: "React · Vite · TanStack Query · Zod · Node.js · Express · PostgreSQL",
    images: ["/images/nexusdoc.png", "/images/nexusdoc-2.png", "/images/nexusdoc-nuevaconsulta.png"],
    repos: [
      {
        label: { es: "Frontend →", en: "Frontend →", de: "Frontend →" },
        url: "https://github.com/JesusAraujoDEV/nexus-doc",
      },
      {
        label: { es: "Backend →", en: "Backend →", de: "Backend →" },
        url: "https://github.com/JesusAraujoDEV/nexus-doc-back",
      },
    ],
  },
  {
    year: "2024",
    name: "Sistema de la Orquesta Sinfónica de Carabobo",
    role: {
      es: "Pagos e inscripciones para 100+ estudiantes",
      en: "Payments and enrollment for 100+ students",
      de: "Zahlungen und Anmeldungen für über 100 Studierende",
    },
    description: {
      es: "Antes esto se llevaba a mano. Armé el sistema de inscripciones, cursos y pagos con recibos en PDF automáticos — bajó el tiempo de procesamiento en un 40% y todavía lo usan.",
      en: "This used to be done by hand. I built the enrollment, course, and payment system with automatic PDF receipts — it cut processing time by 40% and they still use it.",
      de: "Das lief vorher alles per Hand. Ich habe das System für Anmeldungen, Kurse und Zahlungen mit automatischen PDF-Quittungen gebaut — es hat die Bearbeitungszeit um 40 % gesenkt und wird immer noch genutzt.",
    },
    stack: "Node.js · Express · MySQL",
    images: ["/images/orquesta-2.png", "/images/orquesta-login.png"],
  },
  {
    year: "2024",
    name: "Jepo",
    role: {
      es: "Tesis de grado — Sistema de Navegación Peatonal Asistida",
      en: "Degree thesis — Assisted Pedestrian Navigation System",
      de: "Abschlussarbeit — System für unterstützte Fußgängernavigation",
    },
    description: {
      es: "Mi tesis, defendida con 19/20. Una app pensada para la seguridad de la familia: detecta caídas o impactos fuertes con el acelerómetro del teléfono (con un modelo entrenado corriendo en el propio celular), da 5 segundos para cancelar un falso positivo, y si no respondes le avisa a tus contactos de emergencia con tu ubicación. También tiene un mapa familiar donde ves el estado de cada miembro en tiempo real.",
      en: "My thesis, defended with a 19/20. An app built for family safety: it detects falls or hard impacts using the phone's accelerometer (with a trained model running on the device itself), gives you 5 seconds to cancel a false positive, and if you don't respond it alerts your emergency contacts with your location. It also has a family map where you can see everyone's status in real time.",
      de: "Meine Abschlussarbeit, verteidigt mit 19/20. Eine App für die Sicherheit der Familie: Sie erkennt Stürze oder starke Erschütterungen über den Beschleunigungssensor des Handys (mit einem trainierten Modell, das direkt auf dem Gerät läuft), gibt 5 Sekunden Zeit, einen Fehlalarm abzubrechen, und benachrichtigt bei fehlender Reaktion die Notfallkontakte mit dem Standort. Außerdem gibt es eine Familienkarte, auf der man den Status jedes Mitglieds in Echtzeit sieht.",
    },
    stack: "Flutter · NestJS · PostgreSQL · TypeORM · TensorFlow Lite",
    images: [
      "/images/jepo-modulos.png",
      "/images/jepo-login.png",
      "/images/jepo-grafo-familiar.png",
      "/images/jepo-usuario-edit.png",
    ],
    repos: [
      {
        label: {
          es: "Repo (con César Arizaleta) →",
          en: "Repo (with César Arizaleta) →",
          de: "Repo (mit César Arizaleta) →",
        },
        url: "https://github.com/cesardarizaleta/jepo",
      },
    ],
  },
  {
    year: "2023",
    name: "Deggs",
    role: {
      es: "1er lugar, concurso de videojuegos UJAP",
      en: "1st place, UJAP video game contest",
      de: "1. Platz, UJAP-Videospielwettbewerb",
    },
    description: {
      es: "Patos radioactivos escapando de una base militar, o peleando entre ellos en modo versus. Lo hice para el aniversario de la escuela y terminó ganando (es del 2023, hoy lo haría distinto, pero le tengo cariño).",
      en: "Radioactive ducks escaping a military base, or fighting each other in versus mode. I made it for the school's anniversary and it ended up winning (it's from 2023, I'd do it differently today, but I'm fond of it).",
      de: "Radioaktive Enten, die aus einer Militärbasis fliehen, oder im Versus-Modus gegeneinander kämpfen. Ich habe es für das Jubiläum der Fakultät gemacht, und es hat am Ende gewonnen (es ist von 2023, heute würde ich es anders machen, aber ich hab's trotzdem gern).",
    },
    stack: "Unity",
    images: [
      "/images/deggs.png",
      "/images/deggs-gameplay.png",
      "/images/deggs-gameplay-2.png",
      "/images/deggs-gameplay-3.png",
      "/images/deggs-gameplay-4.png",
      "/images/deggs-menu-modo-juego.png",
    ],
    repos: [
      {
        label: { es: "Ver repo →", en: "View repo →", de: "Repo ansehen →" },
        url: "https://github.com/JesusAraujoDEV/goofy-game",
      },
    ],
  },
];
