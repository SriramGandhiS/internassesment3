"use client";

import { Lightbulb, Settings2, Wrench } from "lucide-react";

export default function CATFramework() {
  return (
    <section id="cat" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#1E293B] mb-4">
            The <span className="text-[#1A73E8]">CAT</span> Framework
          </h2>
          <p className="text-[18px] text-[#475569]">
            Our Proven Approach to <span className="text-[#1A73E8] font-semibold">Learning Excellence</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-20 px-4">
          {/* Continuous Wave Path - SVG Background */}
          <div className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path 
                d="M50,100 C150,0 250,200 350,100 C450,0 550,200 650,100 C750,0 850,200 950,100" 
                stroke="#1A73E8" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="opacity-20"
              />
              {/* Actual S-curves around items */}
              <circle cx="166" cy="100" r="100" stroke="#1A73E8" strokeWidth="4" fill="none" strokeDasharray="314 314" strokeDashoffset="157" />
              <circle cx="500" cy="100" r="100" stroke="#1A73E8" strokeWidth="4" fill="none" strokeDasharray="314 314" strokeDashoffset="-157" />
              <circle cx="833" cy="100" r="100" stroke="#1A73E8" strokeWidth="4" fill="none" strokeDasharray="314 314" strokeDashoffset="157" />
            </svg>
          </div>

          {/* Simple CSS-based implementation for better cross-browser S-curve */}
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-16 md:gap-0">
            
            {/* Concept */}
            <div className="flex flex-col items-center relative group">
              <div className="w-48 h-48 rounded-full border-4 border-[#1A73E8] flex flex-col items-center justify-center bg-white shadow-xl group-hover:scale-105 transition-all duration-300 relative">
                {/* Connector Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-4">
                  <Lightbulb size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-[20px] font-bold text-[#1E293B]">Concept</h4>
              </div>
              <div className="mt-8 text-center max-w-[200px]">
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* Application */}
            <div className="flex flex-col items-center relative group">
              <div className="w-48 h-48 rounded-full border-4 border-[#1A73E8] flex flex-col items-center justify-center bg-white shadow-xl group-hover:scale-105 transition-all duration-300 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-4">
                  <Settings2 size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-[20px] font-bold text-[#1E293B]">Application</h4>
              </div>
              <div className="mt-8 text-center max-w-[200px]">
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center relative group">
              <div className="w-48 h-48 rounded-full border-4 border-[#1A73E8] flex flex-col items-center justify-center bg-white shadow-xl group-hover:scale-105 transition-all duration-300 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-4">
                  <Wrench size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-[20px] font-bold text-[#1E293B]">Tools</h4>
              </div>
              <div className="mt-8 text-center max-w-[200px]">
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Resources and techniques for effective skill mastery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
