import LocalClock from "@/components/LocalClock";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#gustos", label: "Mis gustos" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between gap-4 border-b border-foreground/10 bg-background/80 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5 md:px-12">
      <a href="#top" className="shrink-0 font-mono text-sm tracking-wider">
        JA<span className="text-accent">.</span>
      </a>
      <nav className="flex flex-wrap justify-end gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-foreground/70 sm:gap-x-6 sm:text-xs sm:tracking-widest">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-cursor="IR"
            className="transition hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <LocalClock />
    </header>
  );
}
