export type StackItem = { label: string; icon?: string; big?: boolean };

// Real stack, pulled from src/lib/projects.ts and src/lib/experience.ts —
// skillicons.dev id where one exists, a text sticker otherwise. AWS/Lambda/
// Amplify get `big: true` per Jesús's ask to feature them prominently (the
// OLO TMS project runs a Python/Lambda serverless backend provisioned with
// SAM/CloudFormation, plus Amplify).
export const stackItems: StackItem[] = [
  { label: "TypeScript", icon: "ts", big: true },
  { label: "Node.js", icon: "nodejs", big: true },
  { label: "React", icon: "react", big: true },
  { label: "Next.js", icon: "nextjs", big: true },
  { label: "AWS", icon: "aws", big: true },
  { label: "AWS Lambda", big: true },
  { label: "AWS Amplify", big: true },
  { label: "Express", icon: "express" },
  { label: "NestJS", icon: "nestjs" },
  { label: ".NET", icon: "dotnet" },
  { label: "C#", icon: "cs" },
  { label: "PostgreSQL", icon: "postgres" },
  { label: "MySQL", icon: "mysql" },
  { label: "IBM DB2" },
  { label: "Docker", icon: "docker" },
  { label: "Flutter", icon: "flutter" },
  { label: "TensorFlow", icon: "tensorflow" },
  { label: "TypeORM" },
  { label: "Tailwind", icon: "tailwind" },
  { label: "Framer Motion" },
  { label: "Vite", icon: "vite" },
  { label: "TanStack Query" },
  { label: "Zod" },
  { label: "Chart.js" },
  { label: "Python", icon: "py" },
  { label: "n8n" },
  { label: "Unity", icon: "unity" },
];
