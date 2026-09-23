const testimonials = [
  {
    quote:
      "Nova Labs helped us standardize complex approval workflows across regions. We saw immediate gains in speed and audit readiness.",
    author: "James Whitfield",
    role: "Chief Operating Officer, Atlas Capital",
    avatar: "JW",
  },
  {
    quote:
      "Their team understood our compliance requirements from day one. The platform gave us confidence to scale automation responsibly.",
    author: "Dr. Priya Nair",
    role: "Director of Digital Operations, Meridian Health",
    avatar: "PN",
  },
  {
    quote:
      "We reduced manual handoffs in client delivery by more than half. Nova Labs became a strategic partner, not just a software vendor.",
    author: "Daniel Ortiz",
    role: "Managing Partner, Pinnacle Legal Group",
    avatar: "DO",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Client outcomes</span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proven results across enterprise teams
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="surface-card flex flex-col p-8">
              <svg className="h-7 w-7 text-blue-500/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-700/50 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.author}</p>
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
