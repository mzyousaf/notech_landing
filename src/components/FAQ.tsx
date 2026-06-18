"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does implementation take?",
    a: "Most clients go live within 2–4 weeks. Simple automations can be deployed in days, while complex multi-system integrations typically take 4–6 weeks with our guided onboarding.",
  },
  {
    q: "Do I need technical expertise to use Notech?",
    a: "No. Our visual workflow builder lets anyone design automations. For advanced use cases, our engineering team handles custom integrations and AI agent configuration on your behalf.",
  },
  {
    q: "What systems does Notech integrate with?",
    a: "We support 200+ native integrations including Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, SAP, NetSuite, and any system with a REST API.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. Notech is SOC 2 Type II certified with end-to-end encryption, role-based access controls, audit logging, and optional VPC deployment for enterprise clients.",
  },
  {
    q: "How is pricing structured?",
    a: "We offer flexible plans based on automation volume and agent complexity. Book a demo for a tailored quote — most teams see positive ROI within 90 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-white/8 bg-[#0c0c14] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            FAQ
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-white/8 bg-[#12121c]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-semibold">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-white/8 px-6 pb-5 pt-2">
                  <p className="text-sm leading-relaxed text-slate-400">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
