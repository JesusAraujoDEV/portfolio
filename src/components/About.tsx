import AssetImage from "@/components/AssetImage";
import PaperPhoto from "@/components/PaperPhoto";
import AboutCopy from "@/components/AboutCopy";
import { hasPublicAsset } from "@/lib/assets";

export default function About() {
  const hasProfileCutout = hasPublicAsset("images/profile.png");

  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-20 lg:grid-cols-[420px_1fr]">
          <div className="mx-auto w-64 self-start sm:w-80 md:mx-0 md:w-full min-w-0">
            {hasProfileCutout ? (
              <PaperPhoto
                src="/images/profile.png"
                alt="Jesús Araujo"
                rotate={-2}
                className="aspect-[3/4] w-full"
              />
            ) : (
              <div className="relative aspect-[3/4] w-full -rotate-2">
                <AssetImage
                  src="images/profile.jpg"
                  alt="Jesús Araujo"
                  label="Foto pendiente — public/images/profile.jpg"
                />
              </div>
            )}
          </div>

          <AboutCopy />
        </div>
      </div>
    </section>
  );
}
