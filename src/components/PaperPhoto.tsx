"use client";

import { useLightbox } from "@/components/LightboxProvider";

export default function PaperPhoto({
  src,
  alt,
  rotate = -3,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  rotate?: number;
  className?: string;
  caption?: string;
}) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open(src, alt, caption)}
      aria-label={`Ver ${alt} en grande`}
      data-cursor="VER"
      className={`block h-full w-full text-left transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        style={{
          transform: `rotate(${rotate}deg)`,
          filter: "drop-shadow(6px 6px 0px var(--foreground))",
        }}
      />
    </button>
  );
}
