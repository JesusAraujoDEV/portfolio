import AssetImage from "@/components/AssetImage";
import PaperPhoto from "@/components/PaperPhoto";
import Reveal from "@/components/Reveal";
import { hasPublicAsset } from "@/lib/assets";

export default function About() {
  const hasProfileCutout = hasPublicAsset("images/profile.png");

  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-20 lg:grid-cols-[420px_1fr]">
          <div className="mx-auto w-64 sm:w-80 md:mx-0 md:w-full min-w-0">
            {hasProfileCutout ? (
              <PaperPhoto src="/images/profile.png" alt="Jesús Araujo" rotate={-2} />
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

          <Reveal className="min-w-0">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Sobre mí
            </span>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[0.95] tracking-tight md:text-6xl">
              21 años, ingeniero recién graduado, todavía sin dormir bien.
            </h2>
            <p className="mt-6 max-w-2xl text-foreground/80">
              Nací y crecí en Valencia. Ahorita en Intelix Synergy metido en un
              sistema de logística para una empresa de Costa Rica, y hace poco
              defendí mi tesis en la UJAP con 19/20 — el resultado de varias
              noches sin dormir que valieron la pena. Antes de eso armé el
              sistema de pagos de la Orquesta Sinfónica de Carabobo, que sigue
              corriendo. Cuando cierro la laptop, casi siempre hay una serie,
              una peli o un control en la mano.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
