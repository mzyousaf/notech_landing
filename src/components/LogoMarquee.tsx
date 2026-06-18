const logos = [
  "Acme Corp",
  "Vertex AI",
  "Nova Systems",
  "Pulse Labs",
  "Orbit Finance",
  "ScaleFlow",
  "DataForge",
  "CloudPeak",
];

export default function LogoMarquee() {
  const items = [...logos, ...logos];

  return (
    <section className="border-y border-white/8 bg-[#0c0c14]/50 py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-slate-500">
        Trusted by forward-thinking teams
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0c0c14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0c0c14] to-transparent" />
        <div className="animate-marquee flex w-max gap-16 px-8">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-slate-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
