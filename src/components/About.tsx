import AssetImage from "@/components/AssetImage";
import PaperPhoto from "@/components/PaperPhoto";
import AboutCopy from "@/components/AboutCopy";
import AboutStage from "@/components/AboutStage";
import { hasPublicAsset } from "@/lib/assets";

export default function About() {
  const hasProfileCutout = hasPublicAsset("images/profile.png");

  const photo = hasProfileCutout ? (
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

  return (
    <section id="about" className="overflow-x-clip px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <AboutStage photo={photo} copy={<AboutCopy />} />
      </div>
    </section>
  );
}
