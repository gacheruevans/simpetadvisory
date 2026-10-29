"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do we get started with an initial advisory engagement?",
    answer: "Every client relationship begins with a targeted 30-minute discovery conversation. We assess your business goals, operational friction, or training needs before proposing a concrete scope of work with transparent milestones and fees.",
  },
  {
    question: "Can corporate financial literacy programs be tailored for our organization?",
    answer: "Yes, absolutely. We evaluate your workforce demographic, financial challenges, and organizational objectives beforehand. Modules range from basic budgeting and debt management to executive financial literacy for non-financial managers.",
  },
  {
    question: "What does your KRA statutory tax advisory cover?",
    answer: "We support businesses with end-to-end statutory compliance under Kenyan tax laws. This includes monthly VAT, PAYE, NSSF, NHIF/SHIF, and NITA filings, annual Corporate Income Tax computations, KRA iTax reconciliations, and tax health checks.",
  },
  {
    question: "As an Authorized Zoho Partner, how do you handle accounting migrations?",
    answer: "Our certified consultants review your current chart of accounts, clean and validate historical ledgers from Excel or legacy accounting software, set up customized invoicing and tax rules, and provide intensive staff training followed by go-live support.",
  },
  {
    question: "Are keynote empowerment talks suitable for retreats and conferences?",
    answer: "Yes. Led by Catherine Mwangi, our talks are crafted to inspire resilience, financial confidence, purposeful leadership, and actionable personal growth for corporate offsites, annual general meetings, and community gatherings.",
  },
  {
    question: "How are consultancy fees structured?",
    answer: "We believe in transparent, value-aligned pricing. Engagements are structured as either project-based milestones (such as an ERP implementation or audit review) or predictable monthly retainers (such as bookkeeping and statutory filings).",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#12243A]">
            Clear Answers for Confident Decisions
          </h2>
          <p className="text-md sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our consultancy engagements, delivery methodology, and training programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white transition-all duration-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#12243A] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-teal-50 text-teal-700" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-md leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
