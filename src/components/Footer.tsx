"use client";

import Reveal from "@/components/Reveal";
import { useT } from "@/components/LocaleProvider";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jesusaraujodev/" },
  { label: "Letterboxd", href: "https://letterboxd.com/JesuCritico/" },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/gmcxo67nwrjpi5g9iecw55wiy",
  },
  { label: "GitHub", href: "https://github.com/JesusAraujoDEV" },
  { label: "Email", href: "mailto:jesusaraujodev@gmail.com" },
];

export default function Footer() {
  const t = useT();

  return (
    <footer id="contact" className="border-t border-foreground/10 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.footer.eyebrow}
            </span>
            <h2 className="mt-4 max-w-lg text-4xl leading-[0.95] tracking-tight break-words md:text-5xl">
              {t.footer.heading}
            </h2>
            <a
              href="mailto:jesusaraujodev@gmail.com"
              data-cursor={t.cursor.write}
              className="mt-4 inline-block text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
            >
              jesusaraujodev@gmail.com
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <p className="mt-16 font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} Jesús Araujo — Valencia, Venezuela.
        </p>
      </div>
    </footer>
  );
}
