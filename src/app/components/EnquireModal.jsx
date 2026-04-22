"use client";

import { useEffect } from "react";
import LeadForm from "./LeadForm";

export default function EnquireModal({ onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[480px] relative z-10 overflow-hidden animate-fadeInUp">
        {/* Header */}
        <div className="bg-[#1A73E8] p-6 text-white text-center">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-[22px] font-bold">Enquire Now</h2>
          <p className="text-blue-100 text-[13px] mt-1">Ready to transform your enterprise? Get in touch.</p>
        </div>

        {/* Form Body */}
        <div className="p-8">
          <LeadForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
