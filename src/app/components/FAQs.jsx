"use client";

import { useState } from "react";
import EnquireModal from "./EnquireModal";

/* FAQs - Left sidebar tabs + Right accordion, matching reference exactly */

const categories = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqData = {
  "About the Course": [
    { q: "What types of corporate training programs does Accredian offer?", a: "Accredian offers a comprehensive range of corporate training programs including Gen-AI Mastery, Product Management, Leadership Development, Data Science, and Digital Transformation courses tailored for enterprise teams." },
    { q: "What domain specializations are available?", a: "We offer specializations across Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations Excellence, Digital Enterprise, and Fintech Innovation domains." },
  ],
  "About the Delivery": [
    { q: "How are the training programs delivered?", a: "Programs are delivered through a flexible blend of online and offline modes, including live instructor-led sessions, self-paced modules, and hands-on workshops tailored to your organization's schedule." },
    { q: "Can programs be customized for our organization?", a: "Absolutely. Every program begins with a thorough skill gap analysis, after which we create a customized training roadmap that aligns with your specific organizational goals and challenges." },
  ],
  "Miscellaneous": [
    { q: "How do you measure training ROI?", a: "We use a comprehensive assessment framework that tracks skill improvement, project delivery metrics, and business impact indicators to provide measurable ROI on your training investment." },
    { q: "Can we partner with Accredian for ongoing training?", a: "Yes, we offer long-term enterprise partnerships with dedicated account management, continuous skill assessment, and evolving training roadmaps to support your team's growth journey." },
  ],
};

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState("About the Course");
  const [openQ, setOpenQ] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-center text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-14">
            Frequently Asked <span className="text-[#1A73E8]">Questions</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar Tabs */}
            <div className="flex flex-row lg:flex-col gap-3 lg:w-[260px] flex-shrink-0 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenQ(null); }}
                  className={`text-left px-6 py-4 rounded-xl text-[14px] font-bold transition-all border ${
                    activeCategory === cat
                      ? "bg-white text-[#1A73E8] border-[#1A73E8] shadow-sm"
                      : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#1A73E8]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Accordion */}
            <div className="flex-1">
              {faqData[activeCategory].map((faq, i) => (
                <div key={i} className="border border-[#E2E8F0] rounded-xl mb-4 bg-white overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenQ(openQ === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/50 transition-colors"
                  >
                    <span className={`text-[15px] pr-4 ${openQ === i ? "font-bold text-[#1A73E8]" : "font-semibold text-[#1E293B]"}`}>
                      {faq.q}
                    </span>
                    <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openQ === i ? "rotate-180 text-[#1A73E8]" : "text-[#94A3B8]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openQ === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="p-5 pt-0 text-[14px] text-[#64748B] leading-relaxed border-t border-transparent">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquire Now Button - centered below FAQ */}
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-[#1A73E8] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#1557B0] transition-all shadow-md"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
