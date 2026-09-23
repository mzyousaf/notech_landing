const solutions = [
  {
    tag: "Financial Services",
    title: "Compliance & document intelligence",
    description:
      "Automate KYC reviews, policy checks, and regulatory reporting with full traceability.",
    metric: "65% faster review cycles",
  },
  {
    tag: "Healthcare",
    title: "Clinical operations automation",
    description:
      "Streamline intake, prior authorization, and care coordination while maintaining data privacy standards.",
    metric: "42% reduction in admin load",
  },
  {
    tag: "Professional Services",
    title: "Client delivery acceleration",
    description:
      "Generate proposals, summarize research, and orchestrate project workflows across teams.",
    metric: "2.8× proposal turnaround",
  },
  {
    tag: "Technology",
    title: "Revenue & support operations",
    description:
      "Qualify inbound demand, deflect repetitive support, and sync product usage signals to GTM systems.",
    metric: "55% tier-1 ticket automation",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Industries</span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI automation tailored to your sector
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Nova Labs adapts to industry-specific requirements — from compliance
            constraints to customer experience expectations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((item) => (
            <div key={item.title} className="surface-card p-8 transition hover:border-blue-500/25">
              <span className="inline-block rounded-md bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-300">
                {item.tag}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              <p className="mt-6 text-sm font-semibold text-teal-400">{item.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
