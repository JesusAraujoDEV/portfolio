"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useT } from "@/components/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;
const navContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};
const navItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

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

          <motion.nav
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={navContainer}
            className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                variants={navItem}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </Reveal>

        <p className="mt-16 font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} Jesús Araujo — Valencia, Venezuela.
        </p>
      </div>
    </footer>
  );
}
