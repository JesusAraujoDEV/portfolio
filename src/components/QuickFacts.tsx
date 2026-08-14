import Reveal from "@/components/Reveal";

const facts = [
  { label: "Magallanes", note: "beisbol venezolano, así perdamos siempre" },
  { label: "Valencia, VE", note: "de aquí soy, aquí sigo construyendo" },
];

export default function QuickFacts() {
  return (
    <Reveal>
      <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="text-lg font-medium">{fact.label}</span>
            <span className="text-sm text-muted">{fact.note}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
