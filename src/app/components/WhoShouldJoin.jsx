"use client";

import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: "💻",
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: "📋",
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: "🚀",
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: "👑",
  },
];

export default function WhoShouldJoin() {
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
    <section className="section-padding bg-[var(--bg-main)]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-2">
          Who Should <span className="blue-text">Join?</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--text-body)] mb-14">
          Strategic Skill Enhancement
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - illustration */}
          <div className={`transition-all duration-700 ${visible ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 aspect-square flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-[280px]">
                {audiences.map((a, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                    <span className="text-3xl">{a.icon}</span>
                    <p className="text-[11px] font-medium text-gray-600 mt-2">{a.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - cards */}
          <div className="space-y-4">
            {audiences.map((a, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {a.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[var(--text-dark)]">{a.title}</h3>
                  <p className="text-[14px] text-[var(--text-body)] mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
