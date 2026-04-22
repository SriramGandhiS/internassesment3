"use client";

import { useState } from "react";

const faqCategories = [
  {
    name: "About the Course",
    questions: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian offers a wide range of corporate training programs spanning Data Science & AI, Product Management, Leadership, Digital Transformation, Gen-AI, Operations Excellence, and Fintech. Each program is customized to align with your organizational goals.",
      },
      {
        q: "What domain specializations are available?",
        a: "We provide specializations across 7 domains: Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
      },
      {
        q: "Are programs customizable for specific teams?",
        a: "Absolutely! We work closely with your L&D team to tailor programs to your specific industry, team composition, and business objectives. Custom curriculum design is one of our core strengths.",
      },
    ],
  },
  {
    name: "About the Delivery",
    questions: [
      {
        q: "How are the training programs structured?",
        a: "Our programs follow the proprietary CAT Framework — Concept, Application, and Tools. Each module builds progressively from foundational knowledge to hands-on application with industry tools.",
      },
      {
        q: "What formats are available for program delivery?",
        a: "We offer flexible delivery through online live sessions, in-person workshops, and hybrid models. Programs can be scheduled during work hours or weekends based on your team's preference.",
      },
      {
        q: "What is the typical program duration?",
        a: "Program duration ranges from 6 weeks to 16 weeks depending on the domain and depth. Intensive bootcamp formats are also available for shorter timeframes.",
      },
    ],
  },
  {
    name: "Miscellaneous",
    questions: [
      {
        q: "Do participants receive certifications?",
        a: "Yes, all participants who successfully complete the program receive industry-recognized certifications co-certified with our academic partners.",
      },
      {
        q: "How do you measure program effectiveness?",
        a: "We use a comprehensive analytics framework including pre/post assessments, project evaluations, and organizational impact metrics. Detailed reports are shared with stakeholders.",
      },
      {
        q: "What kind of support is available during the program?",
        a: "Participants receive dedicated mentor access, 24/7 learning support, peer discussion forums, hands-on labs, and extensive resources through our LMS platform.",
      },
    ],
  },
];

export default function FAQs() {
  const [activeCat, setActiveCat] = useState(0);
  const [openQ, setOpenQ] = useState(0);

  return (
    <section id="faqs" className="section-padding bg-[var(--bg-main)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-12">
          Frequently Asked <span className="blue-text">Questions</span>
        </h2>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8 max-w-[900px] mx-auto">
          {/* Category tabs - vertical on desktop */}
          <div className="flex lg:flex-col gap-2">
            {faqCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => { setActiveCat(i); setOpenQ(0); }}
                className={`text-left px-4 py-3 rounded-lg text-[14px] font-medium transition-all ${
                  activeCat === i
                    ? "bg-[var(--primary)] text-white"
                    : "bg-white text-gray-600 border border-gray-100 hover:border-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {faqCategories[activeCat].questions.map((faq, i) => (
              <div
                key={`${activeCat}-${i}`}
                className={`bg-white rounded-lg border overflow-hidden transition-all ${
                  openQ === i ? "border-blue-200" : "border-gray-100"
                }`}
              >
                <button
                  onClick={() => setOpenQ(openQ === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-[14px] font-semibold text-[var(--text-dark)] pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openQ === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openQ === i ? "max-h-[300px]" : "max-h-0"}`}>
                  <div className="px-5 pb-4 text-[13px] text-[var(--text-body)] leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
