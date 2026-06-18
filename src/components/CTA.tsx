export default function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-[#12121c] to-cyan-400/10 px-8 py-16 text-center sm:px-16 lg:py-24">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to automate your future?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              Join 340+ companies using Notech to eliminate busywork and scale
              operations with intelligent AI automation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@notech.ai"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
              >
                Book a Free Demo
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:hello@notech.ai"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-white/30 hover:text-white"
              >
                hello@notech.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
