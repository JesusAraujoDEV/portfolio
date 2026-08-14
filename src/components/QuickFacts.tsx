"use client";

import Reveal from "@/components/Reveal";
import { useT } from "@/components/LocaleProvider";

export default function QuickFacts() {
  const t = useT();
  const facts = [
    { label: "Magallanes", note: t.quickFacts.magallanesNote },
    { label: "Valencia, VE", note: t.quickFacts.valenciaNote },
  ];

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
