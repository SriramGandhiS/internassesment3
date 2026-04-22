"use client";

import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    title: "Corporate L&D Teams",
    description: "Equip your workforce with cutting-edge skills to drive business outcomes.",
    icon: "🏢",
  },
  {
    title: "Growing Startups",
    description: "Build high-performing teams from the ground up with expert training.",
    icon: "🚀",
  },
  {
    title: "Enterprise Leadership",
    description: "Develop strategic leaders who can navigate the future of business.",
    icon: "👑",
  },
  {
    title: "Government & PSUs",
    description: "Modernize public sector capabilities through structured skill programs.",
    icon: "🏛️",
  },
];

export default function WhoShouldJoin() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Who Should{" "}
              <span className="gradient-text">Join?</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
              Our enterprise programs are designed for organizations that are
              serious about building high-performing, future-ready teams.
            </p>

            {/* Visual illustration */}
            <div className="relative mt-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  {[
                    { color: "bg-blue-200", h: "h-20" },
                    { color: "bg-indigo-200", h: "h-24" },
                    { color: "bg-purple-200", h: "h-16" },
                    { color: "bg-blue-300", h: "h-28" },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className={`${bar.color} ${bar.h} rounded-xl flex items-end justify-center pb-3 animate-float`}
                      style={{ animationDelay: `${i * 300}ms` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white/50" />
                    </div>
                  ))}
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-gray-700">+40% Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Audience cards */}
          <div className="space-y-4">
            {audiences.map((audience, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 p-6 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-lg hover:border-blue-200 bg-white group ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {audience.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--primary)] transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {audience.description}
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
