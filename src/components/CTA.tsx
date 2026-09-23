export default function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-gradient-to-br from-blue-600/15 via-[#1e293b] to-teal-600/10 px-8 py-16 text-center sm:px-16 lg:py-20">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build your AI automation roadmap with Nova Labs
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              Speak with our specialists to identify high-impact use cases and
              launch a secure automation program tailored to your organization.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:hello@novalabs.com" className="btn-primary px-8 py-3.5 text-base">
                Request a Demo
              </a>
              <a href="mailto:hello@novalabs.com" className="btn-secondary px-8 py-3.5 text-base">
                hello@novalabs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
