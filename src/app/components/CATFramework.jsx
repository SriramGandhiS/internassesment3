"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    letter: "C",
    title: "Concept",
    description: "Build foundational knowledge through structured learning and expert-led sessions. Understand the core principles that drive professional excellence.",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    letter: "A",
    title: "Application",
    description: "Apply concepts to real-world scenarios with hands-on projects and case studies. Bridge the gap between theory and practical implementation.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
  },
  {
    letter: "T",
    title: "Tools",
    description: "Master industry-standard tools and technologies. Get hands-on experience with resources and techniques used by top professionals.",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
];

export default function CATFramework() {
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
    <section id="cat" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="gradient-text">CAT Framework</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our Proven Approach to Learning Excellence
          </p>
          <p className="mt-2 text-base text-gray-400">
            How We Deliver Results That Matter?
          </p>
        </div>

        {/* CAT Visual */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-1">
            <div className="w-full h-full bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 rounded-full" />
            {/* Arrow heads */}
            <div className="absolute left-1/3 -top-1.5 w-4 h-4 border-t-2 border-r-2 border-indigo-400 rotate-45" />
            <div className="absolute right-[15%] -top-1.5 w-4 h-4 border-t-2 border-r-2 border-purple-400 rotate-45" />
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Large letter circle */}
              <div className="relative inline-block mb-8">
                <div
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                >
                  <span className="text-5xl font-black text-white">
                    {step.letter}
                  </span>
                </div>
                {/* Pulse ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 animate-ping`}
                  style={{ animationDuration: "3s" }}
                />
              </div>

              {/* Content */}
              <div className={`${step.bgColor} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300`}>
                <h3 className={`text-2xl font-bold ${step.textColor} mb-4`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
