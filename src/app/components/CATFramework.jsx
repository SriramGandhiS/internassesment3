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

        <div className="relative max-w-5xl mx-auto py-10 px-4">
          {/* Continuous Smooth S-Curve Path */}
          <div className="absolute top-1/2 left-0 w-full h-[320px] -translate-y-1/2 pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1000 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path 
                d="M166,40 
                   A80,80 0 1,0 166,200
                   C250,200 416,40 500,40
                   A80,80 0 1,1 500,200
                   C584,200 750,40 833,40
                   A80,80 0 1,0 833,200" 
                stroke="#1A73E8" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
              />
              {/* Terminal Dots */}
              <circle cx="166" cy="40" r="6" fill="#1A73E8" />
              <circle cx="500" cy="40" r="6" fill="#1A73E8" />
              <circle cx="833" cy="40" r="6" fill="#1A73E8" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative gap-24 md:gap-0">
            
            {/* Concept */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] z-20 relative">
                {/* Border matching SVG */}
                <div className="absolute inset-0 rounded-full border border-gray-100 -z-10"></div>
                <div className="text-[#1A73E8] mb-2">
                  <Lightbulb size={44} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center max-w-[200px]">
                <h4 className="text-[22px] font-bold text-[#1E293B] mb-2">Concept</h4>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* Application */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] z-20 relative">
                <div className="absolute inset-0 rounded-full border border-gray-100 -z-10"></div>
                <div className="text-[#1A73E8] mb-2">
                  <Settings2 size={44} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center max-w-[200px]">
                <h4 className="text-[22px] font-bold text-[#1E293B] mb-2">Application</h4>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] z-20 relative">
                <div className="absolute inset-0 rounded-full border border-gray-100 -z-10"></div>
                <div className="text-[#1A73E8] mb-2">
                  <Wrench size={44} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center max-w-[200px]">
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
