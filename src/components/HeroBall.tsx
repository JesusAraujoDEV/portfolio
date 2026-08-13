export default function HeroBall() {
  return (
    <div className="relative aspect-square w-full max-w-sm border border-foreground/15 bg-paper shadow-[8px_8px_0px_var(--foreground)]">
      <iframe
        title="Bola de béisbol 3D — por atukeproductions en Sketchfab"
        className="h-full w-full"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/b35454d6bf504f8b99a3d1c705eddb48/embed"
      />
      <span className="absolute -bottom-7 left-0 font-mono text-[10px] uppercase tracking-widest text-muted">
        Magallanes forever ⚾
      </span>
    </div>
  );
}
