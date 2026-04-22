"use client";

import { useEffect, useRef, useState } from "react";

const edges = [
  {
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals.",
    icon: "💡",
  },
  {
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: "👤",
  },
  {
    title: "Innovative Framework",
    desc: "Proprietary methods for effective knowledge transfer.",
    icon: "🌐",
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    icon: "⚙️",
  },
  {
    title: "Diverse Offerings",
    desc: "Courses spanning industries and professional levels.",
    icon: "📊",
  },
  {
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: "🎯",
  },
  {
    title: "Flexible Delivery",
    desc: "Online, offline, or hybrid learning options.",
    icon: "📦",
  },
];

export default function AccredianEdge() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="edge" className="section-padding bg-[var(--bg-main)]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Desktop: Horizontal process line with icons and zigzag labels */}
        <div className="hidden lg:block">
          {/* Icons row with dashed connector and chevrons */}
          <div className="relative flex items-center justify-between px-8">
            {/* Dashed line behind icons */}
            <div className="absolute top-1/2 left-12 right-12 border-t-2 border-dashed border-gray-300 -translate-y-1/2 z-0" />
            
            {edges.map((edge, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                {/* Dashed circle with icon */}
                <div
                  className={`w-[90px] h-[90px] rounded-full border-2 border-dashed border-[var(--primary)] bg-white flex items-center justify-center text-3xl transition-all duration-500 ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-[64px] h-[64px] rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-2xl">
                    {edge.icon}
                  </div>
                </div>
                
                {/* Chevron between icons */}
                {i < edges.length - 1 && (
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-300 text-lg z-20">
                    »
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Labels - alternating above/below */}
          <div className="relative flex justify-between px-8 mt-4">
            {edges.map((edge, i) => {
              const isBelow = i % 2 !== 0;
              return (
                <div
                  key={i}
                  className={`w-[140px] text-center transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  {/* Connector line */}
                  <div className="flex justify-center mb-1">
                    <div className="w-px h-6 bg-[var(--primary)]" />
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)] mt-1.5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-[13px] font-bold text-[var(--text-dark)]">{edge.title}</p>
                      <p className="text-[11px] text-[var(--text-light)] leading-tight mt-0.5">{edge.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-6">
          {edges.map((edge, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)] flex items-center justify-center text-xl text-white flex-shrink-0">
                {edge.icon}
              </div>
              <div>
                <p className="font-bold text-[var(--text-dark)]">{edge.title}</p>
                <p className="text-sm text-[var(--text-body)]">{edge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
