"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: "🔍",
  },
  {
    number: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: "📋",
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: "📊",
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="section-padding bg-[var(--bg-main)]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-2">
          How We <span className="blue-text">Deliver Results</span> That Matter?
        </h2>
        <p className="text-center text-[16px] text-[var(--text-body)] mb-14">
          A Structured Three-Step Approach to <span className="blue-text font-semibold">Skill Development</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dashed connector line - desktop only */}
          <div className="hidden md:block absolute top-[48px] left-[20%] right-[20%] border-t-2 border-dashed border-gray-300" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Number circle */}
              <div className="flex justify-center mb-6">
                <div className="w-[60px] h-[60px] rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-[24px] font-bold shadow-md z-10 relative">
                  {step.number}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-[17px] font-bold text-[var(--text-dark)] mb-3">{step.title}</h3>
                <p className="text-[13px] text-[var(--text-body)] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
