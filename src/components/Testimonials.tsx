const testimonials = [
  {
    quote:
      "Notech cut our onboarding time from two weeks to two days. The AI agents handle everything from document collection to system provisioning.",
    author: "Sarah Chen",
    role: "VP of Operations, ScaleFlow",
    avatar: "SC",
  },
  {
    quote:
      "We evaluated five automation platforms. Notech was the only one that could handle our complex ERP integrations out of the box.",
    author: "Marcus Webb",
    role: "CTO, Orbit Finance",
    avatar: "MW",
  },
  {
    quote:
      "Our support team went from drowning in tickets to focusing on high-value customer relationships. ROI was visible within the first month.",
    author: "Elena Rodriguez",
    role: "Head of CX, Pulse Labs",
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Testimonials
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by teams who ship fast
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="flex flex-col rounded-2xl border border-white/8 bg-[#12121c] p-8"
            >
              <svg className="h-8 w-8 text-indigo-500/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.author}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
