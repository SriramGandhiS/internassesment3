"use client";

/* CAT Framework - 3 connected circles matching reference exactly */

export default function CATFramework() {
  return (
    <section id="cat" className="py-20 bg-[#EFF3FB]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          The <span className="text-[#1A73E8]">CAT</span> Framework
        </h2>
        <p className="text-[15px] text-[#475569] mb-16">
          Our Proven Approach to <span className="text-[#1A73E8]">Learning Excellence</span>
        </p>

        {/* 3 circles connected by lines */}
        <div className="flex items-center justify-center gap-6 lg:gap-12 flex-wrap max-w-[800px] mx-auto">
          {/* Line connector SVG behind circles - desktop only */}
          <div className="hidden lg:block absolute w-[560px] h-[2px]" style={{
            backgroundImage: "linear-gradient(to right, #1A73E8, #1A73E8)",
            top: "50%",
          }}/>
          
          {/* Concept */}
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[160px] rounded-full border-2 border-[#1A73E8] bg-white flex flex-col items-center justify-center shadow-sm relative">
              {/* Dot on top */}
              <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1A73E8]" />
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5">
                <path d="M9 21h6M12 3a6 6 0 00-4 10.5V17h8v-3.5A6 6 0 0012 3z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="text-[15px] font-extrabold text-[#1E293B] mt-2">Concept</h4>
              <p className="text-[10px] text-[#64748B] mt-1 px-4 text-center leading-tight">Foundational knowledge for deep subject understanding.</p>
            </div>
            {/* Bottom dot */}
            <div className="w-3 h-3 rounded-full bg-[#1A73E8] mt-2" />
          </div>

          {/* Application */}
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[160px] rounded-full border-2 border-[#1A73E8] bg-white flex flex-col items-center justify-center shadow-sm relative">
              <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1A73E8]" />
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="text-[15px] font-extrabold text-[#1E293B] mt-2">Application</h4>
              <p className="text-[10px] text-[#64748B] mt-1 px-4 text-center leading-tight">Practical implementation through real-world scenarios.</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#1A73E8] mt-2" />
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[160px] rounded-full border-2 border-[#1A73E8] bg-white flex flex-col items-center justify-center shadow-sm relative">
              <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1A73E8]" />
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="text-[15px] font-extrabold text-[#1E293B] mt-2">Tools</h4>
              <p className="text-[10px] text-[#64748B] mt-1 px-4 text-center leading-tight">Resources and techniques for effective skill mastery.</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#1A73E8] mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
