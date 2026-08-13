import PaperPhoto from "@/components/PaperPhoto";

export default function GamesSpotlight() {
  return (
    <div className="mt-24 border-t border-foreground/10 pt-16">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Cuando no estoy programando
      </span>
      <h3 className="mt-3 max-w-lg text-3xl leading-tight md:text-4xl">
        Resident Evil, de punta a punta. Leon y Ethan cargando el peso.
      </h3>
      <p className="mt-3 max-w-md text-foreground/80">
        Leon Kennedy es mi favorito de siempre — carisma y sarcasmo en medio
        del apocalipsis zombi. Ethan Winters le sigue de cerca, sobreviviendo
        RE7 y RE8 a puro golpe de suerte.
      </p>
      <div className="mt-10 flex items-end justify-center gap-10 md:justify-start md:gap-16">
        <div className="w-40 md:w-56">
          <PaperPhoto src="/images/leon-kennedy.png" alt="Leon Kennedy" rotate={-3} />
        </div>
        <div className="w-32 md:w-44">
          <PaperPhoto src="/images/ethab-winthers.png" alt="Ethan Winters" rotate={3} />
        </div>
      </div>
    </div>
  );
}
