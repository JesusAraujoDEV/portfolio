export type Project = {
  year: string;
  name: string;
  role: string;
  description: string;
  stack: string;
  images?: string[];
  repos?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    year: "2025—",
    name: "Platica",
    role: "Finanzas personales multi-divisa",
    description:
      "La empecé porque llevar mis gastos en bolívares y dólares a la vez en una hoja de cálculo era un dolor de cabeza. Junta todas mis cuentas, convierte automáticamente y me dice en qué se me va la plata cada mes — spoiler: gasolina y curso de alemán.",
    stack: "React · Node.js · Chart.js",
    images: ["/images/platica.png", "/images/platica-stats.png", "/images/platica-transactions.png"],
    repos: [
      { label: "Frontend →", url: "https://github.com/JesusAraujoDEV/wallets-frontend" },
      { label: "Backend →", url: "https://github.com/JesusAraujoDEV/wallets-backend" },
    ],
  },
  {
    year: "2025",
    name: "Mediart",
    role: "Para dejar de scrollear sin decidir qué ver",
    description:
      "Un proyecto de universidad que se me fue de las manos: junta películas, música, videojuegos y libros en un solo lugar, y le metí IA (Gemini/DeepSeek) para que recomiende algo cuando de verdad no sé qué hacer con mi tiempo.",
    stack: "Node.js · Express · PostgreSQL · Docker",
    images: ["/images/mediart.png", "/images/mediart-profile.png"],
    repos: [{ label: "Ver repo →", url: "https://github.com/JesusAraujoDEV/mediart" }],
  },
  {
    year: "2025",
    name: "NexusDoc",
    role: "Historias clínicas para un consultorio de gineco-obstetricia",
    description:
      "Un consultorio real que llevaba años de expedientes en papel. Migré todo eso a un sistema con historias clínicas, agenda de consultas por Ginecología y Obstetricia (con su propio módulo de ultrasonido) y un dashboard con las estadísticas del consultorio. Ahorita tiene casi 8.000 pacientes registradas y la doctora lo usa a diario.",
    stack: "React · Vite · TanStack Query · Zod · Node.js · Express · PostgreSQL",
    images: ["/images/nexusdoc.png", "/images/nexusdoc-2.png", "/images/nexusdoc-nuevaconsulta.png"],
    repos: [
      { label: "Frontend →", url: "https://github.com/JesusAraujoDEV/nexus-doc" },
      { label: "Backend →", url: "https://github.com/JesusAraujoDEV/nexus-doc-back" },
    ],
  },
  {
    year: "2024",
    name: "Sistema de la Orquesta Sinfónica de Carabobo",
    role: "Pagos e inscripciones para 100+ estudiantes",
    description:
      "Antes esto se llevaba a mano. Armé el sistema de inscripciones, cursos y pagos con recibos en PDF automáticos — bajó el tiempo de procesamiento en un 40% y todavía lo usan.",
    stack: "Node.js · Express · MySQL",
    images: ["/images/orquesta-2.png", "/images/orquesta-login.png"],
  },
  {
    year: "2024",
    name: "Jepo",
    role: "Tesis de grado — Sistema de Navegación Peatonal Asistida",
    description:
      "Mi tesis, defendida con 19/20. Una app pensada para la seguridad de la familia: detecta caídas o impactos fuertes con el acelerómetro del teléfono (con un modelo entrenado corriendo en el propio celular), da 5 segundos para cancelar un falso positivo, y si no respondes le avisa a tus contactos de emergencia con tu ubicación. También tiene un mapa familiar donde ves el estado de cada miembro en tiempo real.",
    stack: "Flutter · NestJS · PostgreSQL · TypeORM · TensorFlow Lite",
    images: [
      "/images/jepo-modulos.png",
      "/images/jepo-login.png",
      "/images/jepo-grafo-familiar.png",
      "/images/jepo-usuario-edit.png",
    ],
    repos: [{ label: "Repo (con César Arizaleta) →", url: "https://github.com/cesardarizaleta/jepo" }],
  },
  {
    year: "2023",
    name: "Deggs",
    role: "1er lugar, concurso de videojuegos UJAP",
    description:
      "Patos radioactivos escapando de una base militar, o peleando entre ellos en modo versus. Lo hice para el aniversario de la escuela y terminó ganando (es del 2023, hoy lo haría distinto, pero le tengo cariño).",
    stack: "Unity",
    images: [
      "/images/deggs.png",
      "/images/deggs-gameplay.png",
      "/images/deggs-gameplay-2.png",
      "/images/deggs-gameplay-3.png",
      "/images/deggs-gameplay-4.png",
      "/images/deggs-menu-modo-juego.png",
    ],
    repos: [{ label: "Ver repo →", url: "https://github.com/JesusAraujoDEV/goofy-game" }],
  },
];
