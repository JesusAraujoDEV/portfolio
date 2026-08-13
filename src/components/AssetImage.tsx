import Image from "next/image";
import { hasPublicAsset } from "@/lib/assets";

export default function AssetImage({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  if (!hasPublicAsset(src)) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center border border-dashed border-foreground/20 bg-foreground/[0.03] p-6 text-center font-mono text-xs uppercase tracking-widest text-muted ${className ?? ""}`}
      >
        {label}
      </div>
    );
  }

  return (
    <Image
      src={`/${src}`}
      alt={alt}
      fill
      className={`object-cover ${className ?? ""}`}
    />
  );
}
