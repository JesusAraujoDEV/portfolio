const facts = [
  { label: "Hunter x Hunter", note: "la mejor serie que existe, y no acepto debate" },
  { label: "One Piece", note: "el otro shonen que sí aguanta 1000+ episodios" },
  { label: "Magallanes", note: "beisbol venezolano, así perdamos siempre" },
  { label: "Valencia, VE", note: "de aquí soy, aquí sigo construyendo" },
];

export default function QuickFacts() {
  return (
    <ul className="mt-16 divide-y divide-foreground/10 border-y border-foreground/10">
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
  );
}
