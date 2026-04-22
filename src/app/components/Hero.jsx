"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const checks = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

  return (
    <section id="home" className="pt-[64px]" style={{ background: "linear-gradient(180deg, #f0f4f8 0%, #e8eef6 100%)" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`space-y-6 ${visible ? "animate-slideInLeft" : "opacity-0"}`}>
            <h1 className="text-[40px] lg:text-[52px] font-bold leading-[1.15] text-[var(--text-dark)]">
              Next-Gen <span className="blue-text">Expertise</span>
              <br />
              For Your <span className="blue-text">Enterprise</span>
            </h1>
            <p className="text-lg text-[var(--text-body)] max-w-md">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="space-y-2.5 pt-1">
              {checks.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--green-check)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[15px] font-medium text-[var(--text-dark)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button
                className="btn-enquire text-base px-8 py-3.5"
                onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right - Professional image area */}
          <div className={`relative ${visible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white" style={{ aspectRatio: "4/3" }}>
              {/* Simulated professional photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-end justify-center">
                {/* Two professionals */}
                <div className="flex items-end gap-8 pb-0">
                  {/* Person 1 - Man */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber-200 to-amber-300 mb-1" />
                    <div className="w-2 h-3 bg-amber-200" />
                    <div className="w-24 h-40 bg-gradient-to-b from-blue-800 to-blue-900 rounded-t-sm relative">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-4 bg-blue-200 rounded-sm" />
                    </div>
                  </div>
                  {/* Laptop in middle */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-20 bg-gray-800 rounded-t-md flex items-center justify-center border-2 border-gray-700">
                      <div className="w-24 h-14 bg-blue-400 rounded-sm flex items-center justify-center">
                        <div className="space-y-1 w-16">
                          <div className="h-1 bg-white/60 rounded" />
                          <div className="h-1 bg-white/40 rounded w-3/4" />
                          <div className="h-1 bg-white/50 rounded w-1/2" />
                        </div>
                      </div>
                    </div>
                    <div className="w-36 h-1.5 bg-gray-600 rounded-b-md" />
                  </div>
                  {/* Person 2 - Woman */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber-200 to-amber-300 mb-1 relative">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-14 h-6 bg-gray-900 rounded-t-full" />
                    </div>
                    <div className="w-2 h-3 bg-amber-200" />
                    <div className="w-24 h-36 bg-gradient-to-b from-sky-500 to-sky-600 rounded-t-sm" />
                  </div>
                </div>
              </div>
              {/* Overlay elements */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg px-3 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-gray-700">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
