const logos = [
  "Meridian Health",
  "Atlas Capital",
  "Summit Logistics",
  "Harbor Insurance",
  "Northwind Manufacturing",
  "Clearview Retail",
  "Pinnacle Legal",
  "Horizon Energy",
];

export default function LogoMarquee() {
  const items = [...logos, ...logos];

  return (
    <section className="border-y border-slate-700/50 bg-[#0f172a]/80 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Trusted by industry leaders worldwide
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0f172a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0f172a] to-transparent" />
        <div className="animate-marquee flex w-max gap-16 px-8">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-base font-semibold text-slate-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
