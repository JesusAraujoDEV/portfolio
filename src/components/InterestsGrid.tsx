import PaperPhoto from "@/components/PaperPhoto";
import { hasPublicAsset } from "@/lib/assets";

const textInterests = [
  { emoji: "🐜", label: "Hunter x Hunter", detail: "Mi serie favorita, sin discusión." },
  { emoji: "🏴‍☠️", label: "One Piece", detail: "El otro shonen que no falla nunca." },
  { emoji: "🇻🇪", label: "Valencia, Venezuela", detail: "Donde nací y sigo construyendo." },
];

const oliviaSongs = ["drivers license", "good 4 u", "vampire", "deja vu", "obsessed"];

export default function InterestsGrid() {
  const hasLeon = hasPublicAsset("images/leon-kennedy.png");
  const hasEthan = hasPublicAsset("images/ethab-winthers.png");
  const hasOlivia = hasPublicAsset("images/olivia-rodrigo.png");

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {textInterests.map((interest) => (
        <div
          key={interest.label}
          className="group border border-foreground/10 p-4 transition hover:border-accent/60 hover:bg-foreground/[0.03]"
        >
          <span className="text-2xl">{interest.emoji}</span>
          <p className="mt-3 text-sm font-medium">{interest.label}</p>
          <p className="mt-1 text-xs text-muted">{interest.detail}</p>
        </div>
      ))}

      <div className="relative col-span-2 overflow-hidden border border-foreground/10 p-4 transition hover:border-accent/60 sm:col-span-3">
        <div className="flex items-center gap-4">
          {hasOlivia && (
            <div className="relative h-20 w-16 shrink-0">
              <PaperPhoto src="/images/olivia-rodrigo.png" alt="Olivia Rodrigo" rotate={-4} />
            </div>
          )}
          <div>
            <p className="text-sm font-medium">🎤 Olivia Rodrigo</p>
            <p className="mt-1 text-xs text-muted">Casi siempre sonando de fondo.</p>
          </div>
        </div>
        <div className="mt-3 overflow-hidden border-t border-foreground/10 pt-2">
          <p className="animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-accent">
            {oliviaSongs.concat(oliviaSongs).map((song, i) => (
              <span key={i} className="mx-4">
                ♪ {song}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="col-span-2 border border-foreground/10 p-4 transition hover:border-accent/60 sm:col-span-3">
        <p className="text-sm font-medium">🧟 Resident Evil</p>
        <p className="mt-1 text-xs text-muted">Leon Kennedy y Ethan Winters, mis favoritos.</p>
        {(hasLeon || hasEthan) && (
          <div className="mt-4 flex items-end gap-6">
            {hasLeon && (
              <div className="relative h-32 w-24 shrink-0">
                <PaperPhoto src="/images/leon-kennedy.png" alt="Leon Kennedy" rotate={-3} />
              </div>
            )}
            {hasEthan && (
              <div className="relative h-32 w-20 shrink-0">
                <PaperPhoto src="/images/ethab-winthers.png" alt="Ethan Winters" rotate={3} />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="col-span-2 border border-foreground/10 p-4 transition hover:border-accent/60 sm:col-span-3">
        <span className="text-2xl">⚾</span>
        <p className="mt-3 text-sm font-medium">Navegantes del Magallanes</p>
        <p className="mt-1 text-xs text-muted">Beisbol venezolano, sin excusas.</p>
      </div>
    </div>
  );
}
