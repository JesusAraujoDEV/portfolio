import PaperPhoto from "@/components/PaperPhoto";
import Reveal from "@/components/Reveal";
import { hasPublicAsset } from "@/lib/assets";

const scrapbook = [
  { src: "images/jesus-dog.png", alt: "Jesús acariciando un perro", caption: "Pausa perruna", rotate: -4 },
  { src: "images/jesus-thesis.png", alt: "Jesús defendiendo su tesis", caption: "Defensa de tesis · 19/20", rotate: 3 },
  { src: "images/jesus-sunflower.png", alt: "Jesús con un girasol", caption: "Modo turista", rotate: -2 },
];

export default function Scrapbook() {
  const photos = scrapbook.filter((p) => hasPublicAsset(p.src));
  if (photos.length === 0) return null;

  return (
    <Reveal className="mt-24 border-t border-foreground/10 pt-16">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Fuera de cámara
      </span>
      <div className="mt-10 flex flex-wrap justify-center gap-10 md:justify-start md:gap-16">
        {photos.map((photo) => (
          <div key={photo.src} className="flex w-40 flex-col items-center gap-3 md:w-48">
            <PaperPhoto src={`/${photo.src}`} alt={photo.alt} rotate={photo.rotate} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {photo.caption}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
