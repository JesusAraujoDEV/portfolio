"use client";

import type { CSSProperties } from "react";
import { useLightbox } from "@/components/LightboxProvider";
import { useT } from "@/components/LocaleProvider";

export default function Shot({
  src,
  alt,
  className = "",
  caption,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  style?: CSSProperties;
}) {
  const { open } = useLightbox();
  const t = useT();

  return (
    <button
      type="button"
      onClick={() => open(src, alt, caption)}
      aria-label={`${t.cursor.view} ${alt}`}
      data-cursor={t.cursor.view}
      style={style}
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
