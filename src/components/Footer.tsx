import NovaLogo from "@/components/NovaLogo";

const footerLinks = {
  Platform: ["AI Agents", "Integrations", "Security", "Analytics"],
  Company: ["About Nova AI", "Careers", "Insights", "Partners"],
  Resources: ["Documentation", "Implementation Guide", "Case Studies", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-[#0a1628] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#">
              <NovaLogo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Nova AI delivers enterprise-grade intelligent automation — helping
              organizations operate faster, safer, and with greater clarity.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-300">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 transition hover:text-slate-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-700/50 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Nova AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">Enterprise AI automation, delivered with precision.</p>
        </div>
      </div>
    </footer>
  );
}
