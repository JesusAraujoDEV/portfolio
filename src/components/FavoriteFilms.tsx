import Shot from "@/components/Shot";

const films = [
  { src: "/images/about-time.jpg", alt: "About Time" },
  { src: "/images/eternal-sunshine.jpg", alt: "Eternal Sunshine of the Spotless Mind" },
  { src: "/images/scott-pilgrim.jpeg", alt: "Scott Pilgrim vs. the World" },
  { src: "/images/finding-emily.jpg", alt: "Finding Emily" },
];

export default function FavoriteFilms() {
  return (
    <div className="mt-24 border-t border-foreground/10 pt-16">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Top 4 en Letterboxd
      </span>
      <h3 className="mt-3 max-w-lg text-3xl leading-tight md:text-4xl">
        Las que vuelvo a ver aunque ya me sepa los diálogos.
      </h3>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {films.map((film) => (
          <Shot key={film.src} src={film.src} alt={film.alt} className="aspect-[2/3]" />
        ))}
      </div>
      <a
        href="https://letterboxd.com/JesuCritico/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
      >
        Ver perfil completo →
      </a>
    </div>
  );
}
