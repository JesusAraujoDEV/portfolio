import PaperPhoto from "@/components/PaperPhoto";

const songs = ["drivers license", "good 4 u", "vampire", "deja vu", "obsessed"];

export default function NowPlaying() {
  return (
    <div className="mt-24 grid gap-8 border-t border-foreground/10 pt-16 md:grid-cols-[280px_1fr] md:items-center md:gap-16">
      <div className="mx-auto w-48 md:mx-0 md:w-full">
        <PaperPhoto src="/images/olivia-rodrigo.png" alt="Olivia Rodrigo" rotate={-4} />
      </div>
      <div>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Now playing
        </span>
        <h3 className="mt-3 text-3xl leading-tight md:text-4xl">Olivia Rodrigo</h3>
        <p className="mt-3 max-w-md text-foreground/80">
          Si abres mi Spotify a cualquier hora, hay buenas chances de que esté
          sonando algo de ella. No es una fase.
        </p>
        <div className="mt-6 overflow-hidden border-y border-foreground/10 py-2">
          <p className="animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest text-accent">
            {songs.concat(songs).map((song, i) => (
              <span key={i} className="mx-4">
                ♪ {song}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
