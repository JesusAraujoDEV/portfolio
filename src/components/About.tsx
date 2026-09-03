import AssetImage from "@/components/AssetImage";
import PaperPhoto from "@/components/PaperPhoto";
import AboutCopy from "@/components/AboutCopy";
import AboutStage from "@/components/AboutStage";
import { hasPublicAsset } from "@/lib/assets";

export default function About() {
  const hasProfileCutout = hasPublicAsset("images/profile.png");

  const rawPhoto = hasProfileCutout ? (
    <PaperPhoto src="/images/profile.png" alt="Jesús Araujo" rotate={-2} className="aspect-[3/4] w-full" />
  ) : (
    <div className="relative aspect-[3/4] w-full -rotate-2">
      <AssetImage
        src="images/profile.jpg"
        alt="Jesús Araujo"
        label="Foto pendiente — public/images/profile.jpg"
      />
    </div>
  );

  // Marco: fondo del tono "blood" elegido (cambiar_color.ps1) + líneas negras
  // — un passe-partout que vuelve intencional el recorte de la foto en vez
  // de dejar su halo blanco flotando suelto sobre el fondo negro de la banda.
  const photo = (
    <div
      className="border-4 border-[#0a0a0a] p-3"
      style={{ background: "var(--blood)", boxShadow: "8px 8px 0 0 #0a0a0a" }}
    >
      {rawPhoto}
    </div>
  );

  return (
    <section id="about" className="band--ink overflow-x-clip px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <AboutStage photo={photo} copy={<AboutCopy />} />
      </div>
    </section>
  );
}
