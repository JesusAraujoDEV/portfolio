"use client";

import { useLightbox } from "@/components/LightboxProvider";

export default function Shot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open(src, alt)}
      aria-label={`Ver ${alt} en grande`}
      className={`group block overflow-hidden border border-foreground/15 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </button>
  );
}
