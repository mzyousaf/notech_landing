const solutions = [
  {
    tag: "Sales & Marketing",
    title: "Lead enrichment & outreach",
    description: "Auto-qualify leads, personalize outreach, and sync CRM data across your funnel.",
    metric: "3.2× faster pipeline",
  },
  {
    tag: "Operations",
    title: "Document processing",
    description: "Extract, classify, and route invoices, contracts, and forms with 99%+ accuracy.",
    metric: "80% less manual entry",
  },
  {
    tag: "Customer Success",
    title: "Support automation",
    description: "Resolve tier-1 tickets, escalate intelligently, and maintain full conversation context.",
    metric: "60% ticket deflection",
  },
  {
    tag: "Finance",
    title: "Reconciliation & reporting",
    description: "Automate month-end close tasks, expense approvals, and cross-system reconciliation.",
    metric: "12 hrs saved / week",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Solutions
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for every team in your org
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether you&apos;re scaling sales or streamlining finance, Notech adapts to
            your workflows — not the other way around.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#12121c] p-8 transition hover:border-indigo-500/30"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/5 transition group-hover:bg-indigo-500/10" />
              <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                {item.tag}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              <p className="mt-6 font-display text-sm font-bold text-cyan-400">{item.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
