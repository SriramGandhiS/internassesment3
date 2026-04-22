"use client";

import { Lightbulb, Users, Globe, Edit, Target, Rocket, Box } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb size={24} />,
    position: "top"
  },
  {
    id: 2,
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: <Users size={24} />,
    position: "bottom"
  },
  {
    id: 3,
    title: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
    icon: <Globe size={24} />,
    position: "top"
  },
  {
    id: 4,
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    icon: <Edit size={24} />,
    position: "bottom"
  },
  {
    id: 5,
    title: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
    icon: <Target size={24} />,
    position: "top"
  },
  {
    id: 6,
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: <Rocket size={24} />,
    position: "bottom"
  },
  {
    id: 7,
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    icon: <Box size={24} />,
    position: "top"
  }
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-[40px] font-bold text-[#1E293B] mb-4">
            The <span className="text-[#1A73E8]">Accredian Edge</span>
          </h2>
          <p className="text-[18px] text-[#475569]">
            Key Aspects of <span className="text-[#1A73E8] font-semibold">Our Strategic Training</span>
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          {/* Connector Line - Dashed Wave */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 hidden md:block px-12">
            <svg width="100%" height="2" viewBox="0 0 1000 2" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="1000" y2="1" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8"/>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group relative min-h-[400px]">
                
                {/* Top Content Row */}
                <div className={`flex flex-col items-center justify-end h-40 text-center transition-all duration-500 ${step.position === 'bottom' ? 'invisible opacity-0' : 'visible opacity-100'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#1A73E8]"></div>
                    <h4 className="text-[15px] font-bold text-[#1E293B]">{step.title}</h4>
                  </div>
                  <p className="text-[12px] text-[#64748B] max-w-[140px] leading-relaxed mb-6">{step.desc}</p>
                  {/* Curved/Vertical Connector Line */}
                  <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#1A73E8] to-transparent opacity-40"></div>
                </div>

                {/* Central Circle */}
                <div className="my-8 relative">
                  {/* Outer Pulsing Ring */}
                  <div className="absolute -inset-2 rounded-full border border-[#1A73E8] opacity-20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  
                  {/* Main Circle */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#1A73E8] flex items-center justify-center text-[#1A73E8] shadow-[0_8px_30px_rgba(26,115,232,0.15)] z-20 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#1A73E8] group-hover:text-white">
                    {step.icon}
                  </div>

                  {/* Connecting Arrows - hidden on mobile */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-[#CBD5E1] hidden md:block">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Bottom Content Row */}
                <div className={`flex flex-col items-center h-40 text-center transition-all duration-500 ${step.position === 'top' ? 'invisible opacity-0' : 'visible opacity-100'}`}>
                  <div className="w-[1.5px] h-12 bg-gradient-to-t from-[#1A73E8] to-transparent opacity-40 mb-6"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#1A73E8]"></div>
                    <h4 className="text-[15px] font-bold text-[#1E293B]">{step.title}</h4>
                  </div>
                  <p className="text-[12px] text-[#64748B] max-w-[140px] leading-relaxed">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
