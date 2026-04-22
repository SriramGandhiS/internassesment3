"use client";

import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function PreFooterCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#1A73E8] rounded-xl overflow-hidden relative p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full translate-x-1/3 -translate-y-1/2 blur-2xl"></div>
              <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2 blur-xl"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 z-10 text-center lg:text-left">
              {/* Headset Icon */}
              <div className="w-[84px] h-[84px] bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 12h2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div>
                <h2 className="text-[28px] lg:text-[34px] font-extrabold text-white leading-tight mb-2">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-[16px] text-blue-100 font-medium">
                  Get Expert Guidance for Your Team&apos;s Success!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => setShowModal(true)}
              className="z-10 bg-white text-[#1A73E8] px-8 py-3.5 rounded-lg font-bold text-[15px] hover:bg-gray-50 transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
