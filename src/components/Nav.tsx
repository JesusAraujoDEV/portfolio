import LocalClock from "@/components/LocalClock";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-foreground/10 bg-background/80 px-6 py-5 backdrop-blur-sm md:px-12">
      <a href="#top" className="font-mono text-sm tracking-wider">
        JA<span className="text-accent">.</span>
      </a>
      <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-foreground/70 md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-foreground">
            {link.label}
          </a>
        ))}
      </nav>
      <LocalClock />
    </header>
  );
}
