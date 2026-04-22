"use client";

import { FileText, Layout, Settings } from "lucide-react";

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

        <div className="relative max-w-6xl mx-auto py-10 px-4">
          {/* Continuous Complex Wave Path */}
          <div className="absolute top-1/2 left-0 w-full h-[320px] -translate-y-1/2 pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1000 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {/* Node 1 Path */}
              <path 
                d="M210,50 A90,90 0 1,0 210,210" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round"
              />
              <path 
                d="M210,210 C250,210 300,50 500,50" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round"
              />
              
              {/* Node 2 Path */}
              <path 
                d="M544,50 A90,90 0 1,0 544,210" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round"
              />
              <path 
                d="M544,210 C584,210 634,50 833,50" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round"
              />

              {/* Node 3 Path */}
              <path 
                d="M877,50 A90,90 0 1,0 877,210" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round"
              />

              {/* Terminal Dots */}
              <circle cx="210" cy="50" r="8" fill="#1A73E8" />
              <circle cx="544" cy="50" r="8" fill="#1A73E8" />
              <circle cx="877" cy="50" r="8" fill="#1A73E8" />
              <circle cx="344" cy="180" r="8" fill="#1A73E8" />
              <circle cx="677" cy="180" r="8" fill="#1A73E8" />
              <circle cx="1000" cy="180" r="8" fill="#1A73E8" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative gap-24 md:gap-0">
            
            {/* Concept */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="text-[#1A73E8] mb-2">
                  <FileText size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center max-w-[220px]">
                <h4 className="text-[24px] font-extrabold text-[#1E293B] mb-3">Concept</h4>
                <p className="text-[15px] text-[#475569] leading-relaxed font-medium">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* Application */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="text-[#1A73E8] mb-2">
                  <Layout size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center max-w-[220px]">
                <h4 className="text-[24px] font-extrabold text-[#1E293B] mb-3">Application</h4>
                <p className="text-[15px] text-[#475569] leading-relaxed font-medium">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="text-[#1A73E8] mb-2">
                  <Settings size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center max-w-[220px]">
                <h4 className="text-[24px] font-extrabold text-[#1E293B] mb-3">Tools</h4>
                <p className="text-[15px] text-[#475569] leading-relaxed font-medium">
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
