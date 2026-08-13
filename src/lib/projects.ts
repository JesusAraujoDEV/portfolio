export type Project = {
  year: string;
  name: string;
  role: string;
  description: string;
  stack: string;
  images?: string[];
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
  },
  {
    year: "2025",
    name: "Mediart",
    role: "Para dejar de scrollear sin decidir qué ver",
    description:
      "Un proyecto de universidad que se me fue de las manos: junta películas, música, videojuegos y libros en un solo lugar, y le metí IA (Gemini/DeepSeek) para que recomiende algo cuando de verdad no sé qué hacer con mi tiempo.",
    stack: "Node.js · Express · PostgreSQL · Docker",
    images: ["/images/mediart.png", "/images/mediart-profile.png"],
  },
  {
    year: "2024",
    name: "Sistema de la Orquesta Sinfónica de Carabobo",
    role: "Pagos e inscripciones para 100+ estudiantes",
    description:
      "Antes esto se llevaba a mano. Armé el sistema de inscripciones, cursos y pagos con recibos en PDF automáticos — bajó el tiempo de procesamiento en un 40% y todavía lo usan.",
    stack: "Node.js · Express · MySQL",
  },
  {
    year: "2024",
    name: "FixIt",
    role: "App de servicios técnicos, Valencia",
    description:
      "Con 3 compañeros más: una app donde pides un servicio técnico y el técnico más cercano te ve en el mapa y te contacta directo. Mi parte fue la coordinación entre solicitudes y técnicos.",
    stack: "React Native · Postman",
  },
  {
    year: "2023",
    name: "Deggs",
    role: "1er lugar, concurso de videojuegos UJAP",
    description:
      "Patos radioactivos escapando de una base militar, o peleando entre ellos en modo versus. Lo hice para el aniversario de la escuela y terminó ganando.",
    stack: "Unity",
  },
];
