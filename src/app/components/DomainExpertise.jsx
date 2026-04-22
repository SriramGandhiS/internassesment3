"use client";

import { useState } from "react";

const domains = [
  {
    tab: "Product & Innovation Hub",
    icon: "🚀",
    courses: ["Product Management", "Design Thinking", "Innovation Strategy"],
  },
  {
    tab: "Gen-AI Mastery",
    icon: "🤖",
    courses: ["Gen-AI for Business", "LLM & Prompt Engineering", "AI Strategy"],
  },
  {
    tab: "Leadership Elevation",
    icon: "👔",
    courses: ["Executive Leadership", "Strategic Management", "People Management"],
  },
  {
    tab: "Tech & Data Insights",
    icon: "📊",
    courses: ["Data Science & Analytics", "Machine Learning", "Cloud Architecture"],
  },
  {
    tab: "Operations Excellence",
    icon: "⚙️",
    courses: ["Six Sigma Black Belt", "Supply Chain", "Project Management"],
  },
  {
    tab: "Digital Enterprise",
    icon: "🌐",
    courses: ["Digital Transformation", "Full-Stack Development", "Cybersecurity"],
  },
  {
    tab: "Fintech Innovation Lab",
    icon: "💰",
    courses: ["Fintech Products", "Blockchain & DeFi", "Risk Analytics"],
  },
];

export default function DomainExpertise() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-[var(--bg-main)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-2">
          Our <span className="blue-text">Domain Expertise</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--text-body)] mb-2">
          Tailored <span className="blue-text font-semibold">Course Segmentation</span>
        </p>
        <p className="text-center text-[14px] text-[var(--text-light)] mb-12">
          Explore <span className="blue-text">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {domains.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium border transition-all duration-200 ${
                activeTab === i
                  ? "bg-white border-[var(--primary)] text-[var(--primary)] shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              <span>{d.icon}</span>
              {d.tab}
            </button>
          ))}
        </div>

        {/* Course list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" key={activeTab}>
          {domains[activeTab].courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              style={{ animation: `fadeInUp 0.4s ease-out ${i * 80}ms both` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-xl mb-4">
                {domains[activeTab].icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-2">{course}</h3>
              <p className="text-[13px] text-[var(--text-light)]">
                Expert-led program designed for professionals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
