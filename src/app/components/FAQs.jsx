"use client";

import { useState } from "react";
import EnquireModal from "./EnquireModal";

const faqCategories = [
  {
    category: "About the Delivery",
    questions: [
      {
        q: "What domain specializations are available?",
        a: "We offer programs across Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations Excellence, Digital Enterprise, and Fintech. Each domain is carefully curated to address specific industry needs and professional growth areas.",
      },
      {
        q: "How are the training programs structured?",
        a: "Our programs follow the proprietary CAT Framework — Concept, Application, and Tools. Each module builds upon the previous one, ensuring a comprehensive learning experience from foundational knowledge to practical implementation.",
      },
      {
        q: "Can programs be customized for our organization?",
        a: "Absolutely! We specialize in tailoring programs to your organization's specific needs. Our team works closely with your L&D department to design curriculum that aligns with your business objectives and workforce skilling requirements.",
      },
      {
        q: "What formats are available for program delivery?",
        a: "We offer flexible delivery options including fully online sessions, in-person workshops, and hybrid models. Programs can be conducted during work hours or on weekends based on your team's preference.",
      },
      {
        q: "What is the typical program duration?",
        a: "Program duration varies from 6 weeks to 16 weeks depending on the course and level. Intensive bootcamps are also available for shorter timeframes. We customize the schedule to minimize disruption to your operations.",
      },
    ],
  },
  {
    category: "Miscellaneous",
    questions: [
      {
        q: "Do participants receive certifications?",
        a: "Yes, all participants who successfully complete the program receive industry-recognized certifications from Accredian, co-certified with our academic and industry partners.",
      },
      {
        q: "How do you measure program effectiveness?",
        a: "We use a robust analytics framework with pre and post assessments, project evaluations, and organizational impact metrics. Detailed progress reports are shared with stakeholders throughout the program.",
      },
      {
        q: "What kind of support is available during the program?",
        a: "Participants get access to dedicated mentors, 24/7 learning support, peer discussion forums, hands-on labs, and additional resources through our LMS platform.",
      },
      {
        q: "What is the minimum batch size?",
        a: "We typically work with batches of 15-50 professionals for optimal learning outcomes. However, we can accommodate larger groups by creating multiple parallel cohorts.",
      },
    ],
  },
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
            {/* Category sidebar */}
            <div className="flex lg:flex-col gap-3">
              {faqCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveCategory(i);
                    setOpenQuestion(0);
                  }}
                  className={`text-left px-5 py-4 rounded-xl font-medium transition-all duration-300 text-sm ${
                    activeCategory === i
                      ? "bg-[var(--primary)] text-white shadow-lg shadow-blue-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Questions accordion */}
            <div className="space-y-3">
              {faqCategories[activeCategory].questions.map((faq, i) => (
                <div
                  key={`${activeCategory}-${i}`}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    openQuestion === i
                      ? "border-blue-200 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenQuestion(openQuestion === i ? -1 : i)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-sm pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        openQuestion === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openQuestion === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="pt-6 text-center">
                <p className="text-gray-500 mb-4">
                  Still have questions? We&apos;d love to help!
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
