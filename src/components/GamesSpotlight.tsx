import PaperPhoto from "@/components/PaperPhoto";
import Shot from "@/components/Shot";
import Reveal from "@/components/Reveal";

export default function GamesSpotlight() {
  return (
    <Reveal className="mt-24 border-t border-foreground/10 pt-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="min-w-0">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Cuando no estoy programando
          </span>
          <h3 className="mt-3 text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Resident Evil y Persona 5, los que sí termino.
          </h3>
          <p className="mt-3 max-w-md text-foreground/80">
            Leon Kennedy es mi favorito de siempre — carisma y sarcasmo en
            medio del apocalipsis zombi. Ethan Winters le sigue de cerca,
            sobreviviendo RE7 y RE8 a puro golpe de suerte. Y cuando quiero
            algo distinto, vuelvo a Persona 5 a robar corazones en Tokio.
          </p>
        </div>
        <div className="flex flex-wrap items-end justify-center gap-6 md:justify-end md:gap-10">
          {/* Leon's crop is a wide, short bust portrait — sized by height so he
              reads at the same visual scale as Ethan's tall full-body shot. */}
          <div className="h-24 w-40 md:h-36 md:w-56">
            <PaperPhoto src="/images/leon-kennedy.png" alt="Leon Kennedy" rotate={-3} />
          </div>
          <div className="h-40 w-20 md:h-56 md:w-28">
            <PaperPhoto src="/images/ethab-winthers.png" alt="Ethan Winters" rotate={3} />
          </div>
          <Shot
            src="/images/persona-5.jpg"
            alt="Persona 5"
            className="aspect-[2/3] w-32 md:w-40"
          />
        </div>
      </div>
    </Reveal>
  );
}
