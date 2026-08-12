import AssetImage from "@/components/AssetImage";

const interests = [
  {
    emoji: "🐜",
    label: "Hunter x Hunter",
    detail: "Mi serie favorita, sin discusión.",
  },
  {
    emoji: "🏴‍☠️",
    label: "One Piece",
    detail: "El otro shonen que no falla nunca.",
  },
  {
    emoji: "🎤",
    label: "Olivia Rodrigo",
    detail: "Casi siempre sonando de fondo.",
  },
  {
    emoji: "⚾",
    label: "Navegantes del Magallanes",
    detail: "Beisbol venezolano, sin excusas.",
  },
  {
    emoji: "🧟",
    label: "Resident Evil",
    detail: "Leon Kennedy y Ethan Winters, mis favoritos.",
  },
  {
    emoji: "🇻🇪",
    label: "Valencia, Venezuela",
    detail: "Donde nací y sigo construyendo.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div className="relative aspect-[3/4] w-full max-w-sm">
          <AssetImage
            src="images/profile.jpg"
            alt="Jesús Araujo"
            label="Foto pendiente — public/images/profile.jpg"
            className="grayscale"
          />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Sobre mí
          </span>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-5xl">
            Ingeniero de Computación, dev de profesión, fan de series y
            videojuegos de tiempo completo.
          </h2>
          <p className="mt-6 max-w-xl text-foreground/80">
            Soy Jesús Araujo, 21 años, de Valencia (Venezuela). Trabajo como
            Analista de Aplicaciones en Intelix Synergy construyendo un
            Transportation Management System, y antes desarrollé sistemas de
            gestión para la Orquesta Sinfónica de Carabobo. Recién defendí mi
            tesis de Ingeniería de Computación en la UJAP. Fuera del código,
            mi tiempo se reparte entre anime, cine y videojuegos.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="group border border-white/10 p-4 transition hover:border-accent/60 hover:bg-white/[0.03]"
              >
                <span className="text-2xl">{interest.emoji}</span>
                <p className="mt-3 text-sm font-medium">{interest.label}</p>
                <p className="mt-1 text-xs text-muted">{interest.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Top 4 · Letterboxd
            </span>
            <div className="relative mt-3 aspect-[16/9] w-full">
              <AssetImage
                src="images/letterboxd-top4.jpg"
                alt="Top 4 de películas en Letterboxd de Jesús Araujo"
                label="Imagen pendiente — public/images/letterboxd-top4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
