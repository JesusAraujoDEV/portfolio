export default function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-[60vh] -left-40 h-[30rem] w-[30rem] rounded-full bg-foreground/[0.06] blur-[120px]" />
      <div className="grain absolute inset-0 opacity-[0.05]" />
    </div>
  );
}
