"use client";

/* Who Should Join - Dark blue background with cards, matching reference site */

const audiences = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
  }
];

export default function WhoShouldJoin() {
  return (
    <section id="audiences" className="py-20 bg-[#1B2A4A]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <p className="text-[13px] text-blue-300 font-semibold uppercase tracking-wider mb-2">Who Should Join?</p>
          <h2 className="text-[32px] lg:text-[40px] font-extrabold text-white leading-tight">
            Strategic Skill Enhancement
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, i) => (
            <div key={i} className="text-left">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                {aud.icon}
              </div>
              <h4 className="text-[16px] font-bold text-white mb-2">{aud.title}</h4>
              <p className="text-[13px] text-blue-200/70 leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
