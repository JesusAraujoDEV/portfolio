export default function PaperPhoto({
  src,
  alt,
  rotate = -3,
  className = "",
}: {
  src: string;
  alt: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`block h-full w-full object-contain transition-transform duration-300 hover:scale-[1.03] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(6px 6px 0px var(--foreground))",
      }}
    />
  );
}
