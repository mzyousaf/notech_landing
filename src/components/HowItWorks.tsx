const steps = [
  {
    step: "01",
    title: "Discover & Map",
    description:
      "We audit your workflows, identify automation opportunities, and define success metrics with your team.",
  },
  {
    step: "02",
    title: "Build & Integrate",
    description:
      "Our engineers configure AI agents, connect your stack, and test automations in a sandbox environment.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description:
      "Deploy to production with monitoring, then continuously refine agents based on real performance data.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-y border-white/8 bg-[#0c0c14] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Process
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to automation in{" "}
              <span className="gradient-text">weeks, not months</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Our proven methodology gets you live fast — with a dedicated success team
              guiding every step of the journey.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 font-display text-sm font-bold text-cyan-400">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12121c] p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500">Notech Workflow Studio</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-300">
                  <span className="text-slate-500">trigger →</span> New lead in HubSpot
                </div>
                <div className="ml-4 rounded-lg bg-violet-500/10 p-3 text-violet-300">
                  <span className="text-slate-500">agent →</span> Enrich & score lead with AI
                </div>
                <div className="ml-8 rounded-lg bg-cyan-500/10 p-3 text-cyan-300">
                  <span className="text-slate-500">action →</span> Route to sales rep + Slack alert
                </div>
                <div className="ml-12 rounded-lg bg-emerald-500/10 p-3 text-emerald-300">
                  <span className="text-slate-500">action →</span> Schedule follow-up email sequence
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-lg border border-white/8 bg-[#0c0c14] px-4 py-3">
                <span className="text-xs text-slate-500">Status</span>
                <span className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Running — 847 tasks today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
