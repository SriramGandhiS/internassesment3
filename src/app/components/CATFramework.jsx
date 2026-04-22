"use client";

import { Lightbulb, Database, Settings } from "lucide-react";

export default function CATFramework() {
  return (
    <section id="cat" className="py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#1E293B] mb-4">
            The <span className="text-[#1A73E8]">CAT</span> Framework
          </h2>
          <p className="text-[18px] text-[#475569]">
            Our Proven Approach to <span className="text-[#1A73E8] font-semibold">Learning Excellence</span>
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto py-12">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-[#1A73E8] opacity-20 -translate-y-1/2 hidden md:block"></div>

          <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-12 md:gap-0">
            {/* Concept */}
            <div className="flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full border-2 border-[#1A73E8] bg-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-2 group-hover:scale-110 transition-transform">
                  <Lightbulb size={32} />
                </div>
                <h4 className="text-[16px] font-bold text-[#1E293B]">Concept</h4>
                <p className="text-[11px] text-[#64748B] text-center px-6 mt-2 leading-tight">Foundational knowledge for deep understanding.</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#1A73E8] mt-4"></div>
            </div>

            {/* Application */}
            <div className="flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full border-2 border-[#1A73E8] bg-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-2 group-hover:scale-110 transition-transform">
                  <Database size={32} />
                </div>
                <h4 className="text-[16px] font-bold text-[#1E293B]">Application</h4>
                <p className="text-[11px] text-[#64748B] text-center px-6 mt-2 leading-tight">Practical implementation in real scenarios.</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#1A73E8] mt-4"></div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full border-2 border-[#1A73E8] bg-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1A73E8]"></div>
                <div className="text-[#1A73E8] mb-2 group-hover:scale-110 transition-transform">
                  <Settings size={32} />
                </div>
                <h4 className="text-[16px] font-bold text-[#1E293B]">Tools</h4>
                <p className="text-[11px] text-[#64748B] text-center px-6 mt-2 leading-tight">Resources and techniques for skill mastery.</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#1A73E8] mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
