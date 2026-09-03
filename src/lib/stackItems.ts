// `icon`  -> id de skillicons.dev (https://skillicons.dev/icons?i=<icon>)
// `img`   -> ruta local en /public para logos que skillicons no tiene
export type StackItem = { label: string; icon?: string; img?: string; big?: boolean };

// Real stack, pulled from src/lib/projects.ts and src/lib/experience.ts —
// skillicons.dev id where one exists, un logo local en /images si no. AWS/
// Lambda/Amplify van `big: true` para destacarlos (el proyecto OLO TMS corre
// un backend serverless Python/Lambda provisionado con SAM/CloudFormation,
// más Amplify).
export const stackItems: StackItem[] = [
  { label: "TypeScript", icon: "ts", big: true },
  { label: "Node.js", icon: "nodejs", big: true },
  { label: "React", icon: "react", big: true },
  { label: "Next.js", icon: "nextjs", big: true },
  { label: "AWS", icon: "aws", big: true },
  { label: "AWS Lambda", img: "/images/lambda.webp", big: true },
  { label: "AWS Amplify", img: "/images/aws_amplify.jpeg", big: true },
  { label: "Express", icon: "express" },
  { label: "NestJS", icon: "nestjs" },
  { label: ".NET", icon: "dotnet" },
  { label: "C#", icon: "cs" },
  { label: "PostgreSQL", icon: "postgres" },
  { label: "MySQL", icon: "mysql" },
  { label: "IBM DB2", img: "/images/ibm_db2.webp" },
  { label: "Docker", icon: "docker" },
  { label: "Flutter", icon: "flutter" },
  { label: "TensorFlow", icon: "tensorflow" },
  { label: "TypeORM", icon: "typeorm" },
  { label: "Tailwind", icon: "tailwind" },
  { label: "Vite", icon: "vite" },
  { label: "Python", icon: "py" },
  { label: "n8n", img: "/images/n8n.png" },
  { label: "Unity", icon: "unity" },
];
