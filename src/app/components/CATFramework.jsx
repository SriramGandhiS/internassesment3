"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: "💡",
  },
  {
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
    icon: "⚙️",
  },
  {
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
    icon: "🔧",
  },
];

export default function CATFramework() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cat" className="section-padding bg-[var(--bg-main)]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-2">
          The <span className="blue-text">CAT Framework</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--text-body)] mb-16">
          Our Proven Approach to <span className="blue-text">Learning Excellence</span>
        </p>

        {/* CAT S-curve visual */}
        <div className="relative max-w-[900px] mx-auto">
          {/* SVG flowing S-curve connecting the 3 circles */}
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block"
            viewBox="0 0 900 400"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 150 200 C 250 50, 350 50, 450 200 C 550 350, 650 350, 750 200"
              stroke="#1a73e8"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Small dots on the path */}
            <circle cx="150" cy="200" r="6" fill="#1a73e8" />
            <circle cx="300" cy="105" r="5" fill="#1a73e8" />
            <circle cx="450" cy="200" r="6" fill="#1a73e8" />
            <circle cx="600" cy="295" r="5" fill="#1a73e8" />
            <circle cx="750" cy="200" r="6" fill="#1a73e8" />
          </svg>

          {/* 3 Circles */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Large circle */}
                <div className="w-[200px] h-[200px] rounded-full border-[3px] border-[var(--primary)] flex flex-col items-center justify-center bg-white relative">
                  {/* Icon */}
                  <span className="text-4xl mb-2 opacity-60">{step.icon}</span>
                  <h3 className="text-[20px] font-bold text-[var(--text-dark)]">{step.title}</h3>
                  <p className="text-[12px] text-[var(--text-body)] px-6 mt-1 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
