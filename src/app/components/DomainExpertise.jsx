"use client";

import { useState } from "react";

const domains = [
  {
    tab: "Product & Innovation Hub",
    icon: "🚀",
    courses: [
      { title: "Product Management Masterclass", duration: "12 weeks", level: "Advanced" },
      { title: "Design Thinking Workshop", duration: "8 weeks", level: "Intermediate" },
      { title: "Innovation Strategy", duration: "6 weeks", level: "Advanced" },
    ],
  },
  {
    tab: "Gen-AI Mastery",
    icon: "🤖",
    courses: [
      { title: "Generative AI for Business", duration: "10 weeks", level: "Intermediate" },
      { title: "LLM Applications & Prompt Engineering", duration: "8 weeks", level: "Advanced" },
      { title: "AI Strategy for Leaders", duration: "6 weeks", level: "Executive" },
    ],
  },
  {
    tab: "Leadership Elevation",
    icon: "👔",
    courses: [
      { title: "Executive Leadership Program", duration: "16 weeks", level: "Executive" },
      { title: "Strategic Management", duration: "12 weeks", level: "Advanced" },
      { title: "People Management Excellence", duration: "8 weeks", level: "Intermediate" },
    ],
  },
  {
    tab: "Tech & Data Insights",
    icon: "📊",
    courses: [
      { title: "Data Science & Analytics", duration: "14 weeks", level: "Advanced" },
      { title: "Machine Learning Engineering", duration: "12 weeks", level: "Advanced" },
      { title: "Cloud Architecture", duration: "10 weeks", level: "Intermediate" },
    ],
  },
  {
    tab: "Operations Excellence",
    icon: "⚙️",
    courses: [
      { title: "Six Sigma Black Belt", duration: "12 weeks", level: "Advanced" },
      { title: "Supply Chain Optimization", duration: "10 weeks", level: "Intermediate" },
      { title: "Project Management Professional", duration: "8 weeks", level: "Intermediate" },
    ],
  },
  {
    tab: "Digital Enterprise",
    icon: "🌐",
    courses: [
      { title: "Digital Transformation Strategy", duration: "10 weeks", level: "Executive" },
      { title: "Full-Stack Development", duration: "16 weeks", level: "Intermediate" },
      { title: "Cybersecurity Fundamentals", duration: "8 weeks", level: "Intermediate" },
    ],
  },
  {
    tab: "Fintech Innovation Lab",
    icon: "💰",
    courses: [
      { title: "Fintech Product Development", duration: "12 weeks", level: "Advanced" },
      { title: "Blockchain & DeFi", duration: "10 weeks", level: "Advanced" },
      { title: "Risk Analytics", duration: "8 weeks", level: "Intermediate" },
    ],
  },
];

const levelColors = {
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
  Executive: "bg-amber-100 text-amber-700",
};

export default function DomainExpertise() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="gradient-text">Domain Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {domains.map((domain, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-[var(--primary)] text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-[var(--primary)]"
              }`}
            >
              <span className="mr-1.5">{domain.icon}</span>
              {domain.tab}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn" key={activeTab}>
          {domains[activeTab].courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              style={{ animation: `fadeInUp 0.4s ease-out ${i * 100}ms both` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                  {domains[activeTab].icon}
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    levelColors[course.level]
                  }`}
                >
                  {course.level}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                {course.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </div>
              <button className="mt-4 text-sm font-semibold text-[var(--primary)] group-hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
