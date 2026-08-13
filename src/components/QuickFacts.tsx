import Shot from "@/components/Shot";
import Reveal from "@/components/Reveal";

const posters = [
  { src: "/images/hunter-x-hunter.jpg", label: "Hunter x Hunter", note: "la mejor serie que existe, y no acepto debate" },
  { src: "/images/one-piece.jpg", label: "One Piece", note: "el otro shonen que sí aguanta 1000+ episodios" },
];

const facts = [
  { label: "Magallanes", note: "beisbol venezolano, así perdamos siempre" },
  { label: "Valencia, VE", note: "de aquí soy, aquí sigo construyendo" },
];

export default function QuickFacts() {
  return (
    <Reveal>
      <div className="mt-16 grid grid-cols-2 gap-6 sm:max-w-sm">
        {posters.map((poster) => (
          <div key={poster.src} className="min-w-0">
            <Shot src={poster.src} alt={poster.label} className="aspect-[2/3]" />
            <span className="mt-3 block text-sm font-medium">{poster.label}</span>
            <span className="block font-mono text-[11px] text-muted">{poster.note}</span>
          </div>
        ))}
      </div>
      <ul className="mt-8 divide-y divide-foreground/10 border-y border-foreground/10">
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
