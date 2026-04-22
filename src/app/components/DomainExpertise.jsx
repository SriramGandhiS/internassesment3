"use client";

/* Domain Expertise - Clean grid of cards with icons */

const domains = [
  { title: "Product & Innovation Hub", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><path d="M9 21h6M12 3a6 6 0 00-4 10.5V17h8v-3.5A6 6 0 0012 3z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Gen-AI Mastery", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Leadership Elevation", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Tech & Data Insights", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Operations Excellence", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Digital Enterprise", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Fintech Innovation Lab", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

export default function DomainExpertise() {
  return (
    <section id="domain" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          Our <span className="text-[#1A73E8]">Domain Expertise</span>
        </h2>
        <p className="text-[15px] text-[#475569] mb-14">
          <span className="text-[#1A73E8]">Specialized Programs</span> Designed to Fuel Innovation
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[960px] mx-auto">
          {domains.map((domain, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col items-center hover:shadow-lg hover:border-[#1A73E8]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">{domain.icon}</div>
              <h4 className="text-[14px] font-bold text-[#1E293B] leading-tight">{domain.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
