export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="hero-glow absolute inset-0" />
      <div className="grid-pattern absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-800/40 px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            <span className="text-slate-300">Enterprise-ready AI automation platform</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Intelligent automation for{" "}
            <span className="gradient-text">modern enterprises</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Nova AI partners with your team to deploy secure AI agents, orchestrate
            complex workflows, and deliver measurable efficiency across sales,
            operations, and customer experience.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary w-full px-8 py-3.5 text-base sm:w-auto">
              Schedule a Consultation
            </a>
            <a href="#how-it-works" className="btn-secondary w-full px-8 py-3.5 text-base sm:w-auto">
              Explore Our Approach
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-[#1e293b]/90 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-slate-700/50 bg-[#0f172a] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="ml-3 text-xs font-medium text-slate-500">
                Nova AI Operations Console
              </span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="surface-card p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Active agents
                </p>
                <p className="font-display mt-1 text-2xl font-bold text-white">18</p>
                <p className="mt-2 text-xs text-teal-400">All regions healthy</p>
              </div>
              <div className="surface-card p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Workflows executed
                </p>
                <p className="font-display mt-1 text-2xl font-bold text-white">1.2M</p>
                <p className="mt-2 text-xs text-slate-400">Last 30 days</p>
              </div>
              <div className="surface-card p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Cost efficiency
                </p>
                <p className="font-display mt-1 text-2xl font-bold text-white">38%</p>
                <p className="mt-2 text-xs text-slate-400">Avg. ops savings</p>
              </div>
            </div>
            <div className="border-t border-slate-700/50 px-6 py-4">
              <p className="text-xs font-medium text-slate-500">Recent automation events</p>
              <div className="mt-3 space-y-2">
                {[
                  "Contract review agent flagged 12 high-risk clauses",
                  "Finance workflow reconciled 240 transactions",
                  "Support agent resolved 64 inquiries with full audit trail",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-center gap-2 rounded-md border border-slate-700/40 bg-[#0f172a]/80 px-3 py-2 text-xs text-slate-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
