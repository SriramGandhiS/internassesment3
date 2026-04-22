"use client";

const edgeCards = [
  { title: "Tailored Solutions", desc: "Programs customized to your organization's goals and challenges." },
  { title: "Innovative Framework", desc: "Proprietary methods for impactful, application-driven results." },
  { title: "Diverse Offerings", desc: "Courses across industries, skill levels, and emerging fields." },
  { title: "Flexible Delivery", desc: "Online and offline options tailored to your needs." },
];

const edgeIcons = [
  { title: "Expert Guidance", desc: "Learn from industry leaders with real-world success.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 21h6M12 3a6 6 0 00-4 10.5V17h8v-3.5A6 6 0 0012 3z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Innovative Framework", desc: "Proprietary methods for impactful results.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Tailored Solutions", desc: "Programs customized to your organization.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Diverse Offerings", desc: "Courses across industries and fields.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Flexible Delivery", desc: "Online and offline tailored to your needs.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
  { title: "Advanced Technology", desc: "State-of-the-art LMS for seamless learning.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3M22 2l-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 12l4-4a5.07 5.07 0 00-7 0l-4 4 7 7 4-4a5.07 5.07 0 000-7z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Proven Impact", desc: "Trusted by leading organizations for ROI.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          The <span className="text-[#1A73E8]">Accredian Edge</span>
        </h2>
        <p className="text-[15px] text-[#475569] mb-14">
          Key Aspects of <span className="text-[#1A73E8]">Our Strategic Training</span>
        </p>

        {/* Top 4 cards in a row - matching reference site */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {edgeCards.map((card, i) => (
            <div key={i} className="text-left px-1">
              <div className="flex items-start gap-2 mb-1">
                <div className="w-[6px] h-[6px] rounded-full bg-[#1A73E8] mt-2 flex-shrink-0" />
                <h4 className="text-[15px] font-bold text-[#1E293B]">{card.title}</h4>
              </div>
              <p className="text-[13px] text-[#64748B] leading-relaxed ml-[14px]">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Icon circles row with dashed connecting line - matching reference */}
        <div className="relative py-8">
          {/* Connecting dashed line behind circles */}
          <div className="absolute top-1/2 left-[8%] right-[8%] h-[2px] -translate-y-[20px]" style={{
            backgroundImage: "repeating-linear-gradient(to right, #CBD5E1, #CBD5E1 8px, transparent 8px, transparent 14px)"
          }}/>

          <div className="flex items-center justify-center gap-4 lg:gap-6 flex-wrap relative z-10">
            {edgeIcons.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center">
                  {/* Double ring icon */}
                  <div className="w-[72px] h-[72px] rounded-full bg-[#E8F0FE] border-2 border-dashed border-[#CBD5E1] flex items-center justify-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#1A73E8] flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                  </div>
                </div>
                {/* Chevron separator (not after last) */}
                {i < edgeIcons.length - 1 && (
                  <span className="text-[#1A73E8] text-[18px] font-bold opacity-40 mx-2 lg:mx-4">›</span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom labels for icons */}
          <div className="grid grid-cols-3 lg:grid-cols-7 gap-4 mt-6 max-w-[1000px] mx-auto">
            {edgeIcons.map((item, i) => (
              <div key={i} className="text-center">
                <h4 className="text-[12px] font-bold text-[#1E293B] leading-tight">{item.title}</h4>
                <p className="text-[10px] text-[#64748B] mt-1 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
