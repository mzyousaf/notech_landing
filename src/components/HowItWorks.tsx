const steps = [
  {
    step: "01",
    title: "Assess & Prioritize",
    description:
      "We map high-value processes, quantify impact, and define a phased automation roadmap aligned to business KPIs.",
  },
  {
    step: "02",
    title: "Design & Validate",
    description:
      "Solution architects configure agents, integrations, and guardrails — then validate outcomes in controlled pilots.",
  },
  {
    step: "03",
    title: "Deploy & Scale",
    description:
      "Production rollout includes monitoring, training, and ongoing optimization to expand automation safely across teams.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-y border-slate-700/50 bg-[#0f172a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="section-label">Methodology</span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Structured delivery with{" "}
              <span className="gradient-text">measurable outcomes</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Our engagement model reduces implementation risk and ensures every
              automation initiative ties back to operational and financial goals.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600/10 font-display text-sm font-bold text-blue-300">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-[#1e293b] p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-2 border-b border-slate-700/50 pb-4">
                <span className="text-xs font-medium text-slate-500">Nova Labs Workflow Designer</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="rounded-md border border-slate-700/50 bg-[#0f172a] p-3 text-blue-300">
                  <span className="text-slate-500">trigger →</span> New enterprise inquiry received
                </div>
                <div className="ml-4 rounded-md border border-slate-700/50 bg-[#0f172a] p-3 text-teal-300">
                  <span className="text-slate-500">agent →</span> Classify intent and enrich account data
                </div>
                <div className="ml-8 rounded-md border border-slate-700/50 bg-[#0f172a] p-3 text-slate-300">
                  <span className="text-slate-500">action →</span> Assign owner and notify account team
                </div>
                <div className="ml-12 rounded-md border border-slate-700/50 bg-[#0f172a] p-3 text-slate-300">
                  <span className="text-slate-500">action →</span> Log activity to CRM with compliance metadata
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-md border border-slate-700/50 bg-[#0f172a] px-4 py-3">
                <span className="text-xs text-slate-500">Pipeline status</span>
                <span className="text-xs font-medium text-teal-400">Production — SLA 99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
