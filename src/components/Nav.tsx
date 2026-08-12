import LocalClock from "@/components/LocalClock";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 mix-blend-difference md:px-12">
      <a href="#top" className="font-mono text-sm tracking-wider text-white">
        JA<span className="text-accent">.</span>
      </a>
      <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-white/80 md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>
      <LocalClock />
    </header>
  );
}
