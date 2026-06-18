export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="hero-glow absolute inset-0" />
      <div className="grid-pattern absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-slate-300">Now accepting enterprise clients for Q2 2026</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            AI automation that{" "}
            <span className="gradient-text">works while you sleep</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Notech deploys intelligent agents to automate your workflows, integrate
            your stack, and deliver measurable ROI — so your team can focus on what
            matters most.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:shadow-indigo-500/50 sm:w-auto"
            >
              Start Automating
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-white/30 hover:text-white sm:w-auto"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-violet-500/20 to-cyan-400/30 blur-3xl animate-pulse-glow" />
          <div className="animate-float relative overflow-hidden rounded-2xl border border-white/10 bg-[#12121c]/90 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500">Notech Command Center</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/8 bg-[#0c0c14] p-4">
                <p className="text-xs text-slate-500">Active Agents</p>
                <p className="font-display mt-1 text-2xl font-bold text-cyan-400">24</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>
              </div>
              <div className="rounded-xl border border-white/8 bg-[#0c0c14] p-4">
                <p className="text-xs text-slate-500">Tasks Completed</p>
                <p className="font-display mt-1 text-2xl font-bold text-emerald-400">847K</p>
                <p className="mt-2 text-xs text-emerald-400/80">↑ 23% this month</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-[#0c0c14] p-4">
                <p className="text-xs text-slate-500">Time Saved</p>
                <p className="font-display mt-1 text-2xl font-bold text-violet-400">1,240h</p>
                <p className="mt-2 text-xs text-slate-500">Equivalent to 31 FTE weeks</p>
              </div>
            </div>
            <div className="border-t border-white/8 px-6 py-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Live agent activity</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  All systems operational
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  "Lead enrichment agent processed 142 records",
                  "Invoice parser routed 38 documents to AP",
                  "Support bot resolved 91 tier-1 tickets",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-center gap-2 rounded-lg bg-white/3 px-3 py-2 text-xs text-slate-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
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
