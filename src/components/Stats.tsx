const stats = [
  { value: "15M+", label: "Automated actions per month" },
  { value: "280+", label: "Global enterprise deployments" },
  { value: "99.9%", label: "Service availability SLA" },
  { value: "3.6×", label: "Average productivity gain" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-slate-700/50 bg-[#0f172a] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
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
