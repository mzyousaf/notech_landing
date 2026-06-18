const stats = [
  { value: "10M+", label: "Tasks automated monthly" },
  { value: "340+", label: "Enterprise clients" },
  { value: "99.7%", label: "Platform uptime" },
  { value: "4.2×", label: "Average ROI in year one" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/8 bg-gradient-to-b from-[#0c0c14] to-[#050508] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="gradient-text">{stat.value}</span>
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
