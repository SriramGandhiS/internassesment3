"use client";

import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          Our Proven <span className="text-[#1A73E8]">Partnerships</span>
        </h2>
        <p className="text-[15px] text-[#475569] mb-12">
          Successful Collaborations With the <span className="text-[#1A73E8]">Industry&apos;s Best</span>
        </p>

        {/* Partner logos row - using actual logos */}
        <div className="flex items-center justify-center gap-10 lg:gap-16 flex-wrap">
          {/* Reliance */}
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#00529C" strokeWidth="3"/>
              <path d="M35 35 L50 30 L65 35 L65 65 L50 70 L35 65 Z" fill="#00529C" opacity="0.8"/>
            </svg>
            <span className="text-[13px] font-bold text-[#1E293B] mt-1">Reliance</span>
            <span className="text-[9px] text-[#94A3B8]">Industries Limited</span>
          </div>

          {/* HCL */}
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[36px] font-extrabold text-[#0066B3] tracking-tight leading-none">HCL</span>
          </div>

          {/* IBM */}
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[36px] font-extrabold text-[#054ADA] tracking-tight leading-none" style={{fontFamily: "'Inter', sans-serif", letterSpacing: "-1px"}}>IBM</span>
          </div>

          {/* CRIF */}
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[32px] font-extrabold tracking-tight leading-none" style={{color: "#E30613"}}>CRIF</span>
            <span className="text-[8px] text-[#94A3B8] mt-0.5">together to the next level</span>
          </div>

          {/* ADP */}
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[36px] font-extrabold tracking-tight leading-none" style={{color: "#D0271D"}}>ADP</span>
          </div>

          {/* Bayer */}
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-[56px] h-[56px] rounded-full border-2 border-[#10857F] flex items-center justify-center">
              <span className="text-[14px] font-extrabold text-[#10857F] leading-none">BAYER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
