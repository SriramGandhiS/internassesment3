"use client";

import { Lightbulb, Settings2, Wrench } from "lucide-react";

export default function CATFramework() {
  return (
    <section id="cat" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[40px] font-bold text-[#1E293B] mb-4">
            The <span className="text-[#1A73E8]">CAT</span> Framework
          </h2>
          <p className="text-[18px] text-[#475569]">
            Our Proven Approach to <span className="text-[#1A73E8] font-semibold">Learning Excellence</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto py-20 px-4">
          {/* Continuous Bold S-Curve Path */}
          <div className="absolute top-[120px] left-0 w-full h-[200px] pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path 
                d="M166,100 C166,0 333,0 500,100 C666,200 833,200 833,100" 
                stroke="#1A73E8" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="opacity-100"
              />
              {/* Circular segments to complete the "S" around the icons */}
              <circle cx="166" cy="100" r="80" stroke="#1A73E8" strokeWidth="4" fill="none" strokeDasharray="251 251" strokeDashoffset="125" transform="rotate(180 166 100)" />
              <circle cx="500" cy="100" r="80" stroke="#1A73E8" strokeWidth="4" fill="none" strokeDasharray="251 251" strokeDashoffset="125" />
              <circle cx="833" cy="100" r="80" stroke="#1A73E8" strokeWidth="4" fill="none" strokeDasharray="251 251" strokeDashoffset="125" transform="rotate(180 833 100)" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start relative gap-20 md:gap-0">
            
            {/* Concept */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-44 h-44 rounded-full border-4 border-[#1A73E8] flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                {/* Dot marker */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-3">
                  <Lightbulb size={48} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-10 text-center max-w-[200px]">
                <h4 className="text-[22px] font-bold text-[#1E293B] mb-2">Concept</h4>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* Application */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-44 h-44 rounded-full border-4 border-[#1A73E8] flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-3">
                  <Settings2 size={48} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-10 text-center max-w-[200px]">
                <h4 className="text-[22px] font-bold text-[#1E293B] mb-2">Application</h4>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-44 h-44 rounded-full border-4 border-[#1A73E8] flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-3">
                  <Wrench size={48} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-10 text-center max-w-[200px]">
                <h4 className="text-[22px] font-bold text-[#1E293B] mb-2">Tools</h4>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
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
