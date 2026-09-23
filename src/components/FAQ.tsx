"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the typical implementation timeline?",
    a: "Most enterprise programs launch initial automations within 3–5 weeks. Larger, multi-system rollouts are delivered in phased milestones over 8–12 weeks.",
  },
  {
    q: "Do we need an in-house AI team to use Nova AI?",
    a: "No. Nova AI provides solution design, integration, and managed rollout support. Your teams participate in workflow validation and adoption, not low-level engineering.",
  },
  {
    q: "Which systems can Nova AI connect to?",
    a: "We integrate with major CRM, ERP, HRIS, collaboration, and data platforms — plus custom APIs. Common examples include Salesforce, Microsoft 365, SAP, ServiceNow, and Snowflake.",
  },
  {
    q: "How does Nova AI handle security and governance?",
    a: "We support role-based access, encryption, detailed audit logs, policy guardrails for agents, and deployment models designed for regulated environments.",
  },
  {
    q: "How is Nova AI priced?",
    a: "Pricing is based on scope, automation volume, and support level. We provide a tailored proposal after an initial discovery session.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-slate-700/50 bg-[#0f172a] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">FAQ</span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="surface-card overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-semibold text-white">{faq.q}</span>
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
                <div className="border-t border-slate-700/50 px-6 pb-5 pt-2">
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
