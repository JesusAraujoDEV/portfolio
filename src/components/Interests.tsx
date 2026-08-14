import Reveal from "@/components/Reveal";
import QuickFacts from "@/components/QuickFacts";
import NowPlaying from "@/components/NowPlaying";
import FandomPile from "@/components/FandomPile";

export default function Interests() {
  return (
    <section id="gustos" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Mis gustos
          </span>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Lo que veo, juego y escucho cuando cierro la laptop.
          </h2>
          <p className="mt-6 max-w-2xl text-foreground/80">
            Hunter x Hunter y One Piece de base, JoJo&apos;s como el shonen raro
            que también me ganó, Leon Kennedy y Ethan Winters sobreviviendo
            el apocalipsis zombi, Persona 5 robando corazones en Tokio, Red
            Dead Redemption 2 cuando quiero ir despacio, y mis 4 películas
            top de siempre — toca cada pieza para el porqué.{" "}
            <a
              href="https://letterboxd.com/JesuCritico/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
            >
              Ver perfil completo en Letterboxd →
            </a>
          </p>
        </Reveal>

        <div className="mt-16">
          <FandomPile />
        </div>

        <QuickFacts />
        <NowPlaying />
      </div>
    </section>
  );
}
