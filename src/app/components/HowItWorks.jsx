"use client";

/* How It Works - 3 cards with blue left border, number badge, icon */

const steps = [
  {
    num: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    num: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="8" width="8" height="2" rx="1" stroke="white" strokeWidth="1.5"/></svg>
  },
  {
    num: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          How We <span className="text-[#1A73E8]">Deliver Results</span> That Matter?
        </h2>
        <p className="text-[15px] text-[#475569] mb-14">
          A Structured Three-Step Approach to <span className="text-[#1A73E8]">Skill Development</span>
        </p>

        <div className="grid lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#1A73E8] p-8 text-center relative shadow-sm hover:shadow-md transition-all">
              {/* Number badge top-left */}
              <div className="absolute top-5 left-5 w-7 h-7 rounded-md bg-[#1A73E8] text-white flex items-center justify-center text-[12px] font-bold">
                {step.num}
              </div>
              
              {/* Icon circle */}
              <div className="w-[60px] h-[60px] rounded-full bg-[#1A73E8] flex items-center justify-center mx-auto mb-4 mt-2">
                {step.icon}
              </div>
              
              <h4 className="text-[15px] font-extrabold text-[#1E293B] mb-2">{step.title}</h4>
              <p className="text-[13px] text-[#64748B] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
