// `icon`  -> id de skillicons.dev (https://skillicons.dev/icons?i=<icon>)
// `img`   -> ruta local en /public para logos que skillicons no tiene
// `group` -> categoría para la lista ordenada bajo el muro (estilo César)
export type StackGroup = "lang" | "frontend" | "backend" | "data" | "cloud" | "mobile" | "other";
export type StackItem = { label: string; icon?: string; img?: string; big?: boolean; group: StackGroup };

// Real stack, pulled from src/lib/projects.ts, src/lib/experience.ts y el
// catálogo de GitHub. skillicons.dev id donde existe, un logo local si no.
// AWS/Lambda/Amplify van `big: true` para destacarlos (el proyecto OLO TMS
// corre un backend serverless Python/Lambda provisionado con SAM/
// CloudFormation, más Amplify).
export const stackItems: StackItem[] = [
  { label: "TypeScript", icon: "ts", big: true, group: "lang" },
  { label: "Node.js", icon: "nodejs", big: true, group: "backend" },
  { label: "React", icon: "react", big: true, group: "frontend" },
  { label: "Next.js", icon: "nextjs", big: true, group: "frontend" },
  { label: "AWS", icon: "aws", big: true, group: "cloud" },
  { label: "AWS Lambda", img: "/images/lambda.webp", big: true, group: "cloud" },
  { label: "AWS Amplify", img: "/images/aws_amplify.jpeg", big: true, group: "cloud" },
  { label: "Express", icon: "express", group: "backend" },
  { label: "NestJS", icon: "nestjs", group: "backend" },
  { label: ".NET", icon: "dotnet", group: "backend" },
  { label: "C#", icon: "cs", group: "lang" },
  { label: "Java", icon: "java", group: "lang" },
  { label: "Python", icon: "py", group: "lang" },
  { label: "PostgreSQL", icon: "postgres", group: "data" },
  { label: "MySQL", icon: "mysql", group: "data" },
  { label: "IBM DB2", img: "/images/ibm_db2.webp", group: "data" },
  { label: "Prisma", icon: "prisma", group: "data" },
  { label: "TypeORM", img: "/images/type_orm.png", group: "data" },
  { label: "Vue", img: "/images/vue.png", group: "frontend" },
  { label: "Angular", img: "/images/angular.webp", group: "frontend" },
  { label: "Tailwind", icon: "tailwind", group: "frontend" },
  { label: "Vite", icon: "vite", group: "frontend" },
  { label: "React Native", img: "/images/react_native.png", group: "mobile" },
  { label: "Expo", img: "/images/expo.svg", group: "mobile" },
  { label: "Flutter", icon: "flutter", group: "mobile" },
  { label: "Dart", img: "/images/dart_icon.jpeg", group: "mobile" },
  { label: "Docker", icon: "docker", group: "cloud" },
  { label: "n8n", img: "/images/n8n.png", group: "other" },
  { label: "TensorFlow", icon: "tensorflow", group: "other" },
  { label: "Unity", icon: "unity", group: "other" },
];
