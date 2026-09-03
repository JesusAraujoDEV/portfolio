"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import PushText from "@/components/PushText";
import { useT } from "@/components/LocaleProvider";
import { socialIcons, type SocialIconKey } from "@/lib/socialIcons";

const EASE = [0.16, 1, 0.3, 1] as const;
const navContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};
const navItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const links: { label: string; href: string; icon: SocialIconKey }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jesusaraujodev/", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/jesulovescereal", icon: "instagram" },
  { label: "Letterboxd", href: "https://letterboxd.com/JesuCritico/", icon: "letterboxd" },
  { label: "Spotify", href: "https://open.spotify.com/user/gmcxo67nwrjpi5g9iecw55wiy", icon: "spotify" },
  { label: "GitHub", href: "https://github.com/JesusAraujoDEV", icon: "github" },
  { label: "Email", href: "mailto:jesusaraujodev@gmail.com", icon: "gmail" },
];

export default function Footer() {
  const t = useT();

  return (
    <footer id="contact" className="band--blood border-t-4 border-foreground px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.footer.eyebrow}
            </span>
            <h2 className="mt-4 max-w-lg text-4xl leading-[0.95] tracking-tight break-words md:text-5xl">
              <PushText>{t.footer.heading}</PushText>
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
                className="flex items-center gap-1.5 transition hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
                  <path d={socialIcons[link.icon]} />
                </svg>
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
