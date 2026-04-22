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

        {/* Fixed width container to ensure SVG alignment */}
        <div className="relative w-full max-w-[1000px] mx-auto py-10">
          
          {/* SVG Path Layer */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1000 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Node 1 Path (Circle around 166,100) */}
              <path 
                d="M236,100 A70,70 0 1,0 166,170" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round" fill="none"
              />
              {/* Connector 1 to 2 */}
              <path 
                d="M166,170 C250,170 350,30 500,30" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round" fill="none"
              />
              
              {/* Node 2 Path (Circle around 500,100) */}
              <path 
                d="M570,100 A70,70 0 1,0 500,170" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round" fill="none"
              />
              {/* Connector 2 to 3 */}
              <path 
                d="M500,170 C600,170 700,30 834,30" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round" fill="none"
              />

              {/* Node 3 Path (Circle around 834,100) */}
              <path 
                d="M904,100 A70,70 0 1,0 834,170" 
                stroke="#1A73E8" strokeWidth="6" strokeLinecap="round" fill="none"
              />

              {/* Terminal Dots */}
              <circle cx="236" cy="100" r="8" fill="#1A73E8" />
              <circle cx="570" cy="100" r="8" fill="#1A73E8" />
              <circle cx="904" cy="100" r="8" fill="#1A73E8" />
              <circle cx="344" cy="160" r="8" fill="#1A73E8" />
              <circle cx="677" cy="160" r="8" fill="#1A73E8" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start relative gap-24 md:gap-0">
            
            {/* Concept */}
            <div className="flex flex-col items-center w-full md:w-[33.33%]">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="text-[#1A73E8]">
                  <FileText size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center px-4">
                <h4 className="text-[24px] font-extrabold text-[#1E293B] mb-3">Concept</h4>
                <p className="text-[15px] text-[#475569] leading-relaxed font-medium">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* Application */}
            <div className="flex flex-col items-center w-full md:w-[33.33%]">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="text-[#1A73E8]">
                  <Layout size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center px-4">
                <h4 className="text-[24px] font-extrabold text-[#1E293B] mb-3">Application</h4>
                <p className="text-[15px] text-[#475569] leading-relaxed font-medium">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center w-full md:w-[33.33%]">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-xl z-20 relative">
                <div className="text-[#1A73E8]">
                  <Settings size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-12 text-center px-4">
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
