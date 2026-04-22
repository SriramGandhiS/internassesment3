"use client";

import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          
          {/* Top Row: Logo & Socials (Left) - Enquire Now (Right) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-10 border-b border-[#E2E8F0] gap-8">
            {/* Left: Logo and Socials */}
            <div>
              <a href="#home" className="flex flex-col mb-4">
                <span className="text-[28px] font-bold text-[#1A73E8] leading-none tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>accredian</span>
                <span className="text-[10px] tracking-[0.15em] text-[#64748B] uppercase mt-[2px]">credentials that matter</span>
              </a>
              <div className="flex items-center gap-4 text-[#475569]">
                {/* FB */}
                <a href="#" className="hover:text-[#1A73E8] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
                {/* LinkedIn */}
                <a href="#" className="hover:text-[#1A73E8] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                {/* Twitter / X */}
                <a href="#" className="hover:text-[#1A73E8] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
                {/* Instagram */}
                <a href="#" className="hover:text-[#1A73E8] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                {/* YouTube */}
                <a href="#" className="hover:text-[#1A73E8] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48l6.5 3.27-6.5 3.27z"/></svg></a>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col md:items-end text-left md:text-right">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#1A73E8] text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-[#1557B0] transition-colors shadow-sm mb-2"
              >
                Enquire Now
              </button>
              <p className="text-[13px] text-[#475569]">Speak with our Advisor</p>
            </div>
          </div>

          {/* Middle Row: Links & Contact */}
          <div className="grid md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-[#E2E8F0]">
            {/* Column 1: Accredian */}
            <div>
              <h4 className="text-[16px] font-extrabold text-[#1E293B] mb-5">Accredian</h4>
              <ul className="space-y-4">
                {["About", "Blog", "Why Accredian"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-[#475569] hover:text-[#1A73E8] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Contact Us */}
            <div>
              <h4 className="text-[16px] font-extrabold text-[#1E293B] mb-5">Contact Us</h4>
              <div className="flex flex-col gap-1 text-[15px] text-[#475569] mb-4">
                <span>Email us: <a href="mailto:enterprise@accredian.com" className="text-[#1A73E8] hover:underline">enterprise@accredian.com</a></span>
              </div>
              <div className="flex flex-col gap-1 text-[15px] text-[#475569]">
                <span>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,</span>
                <span>Gurugram, Haryana</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="text-center">
            <p className="text-[14px] text-[#475569]">
              © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
