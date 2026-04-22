"use client";

/* Tailored Course Segmentation - matching reference site with 4 image cards */

const segments = [
  { 
    title: "Program Specific", 
    items: "Certificate, Executive, Post Graduate Certificate",
    gradient: "from-blue-600 to-blue-800"
  },
  { 
    title: "Industry Specific", 
    items: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    gradient: "from-indigo-600 to-indigo-900"
  },
  { 
    title: "Topic Specific", 
    items: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    gradient: "from-sky-600 to-sky-800"
  },
  { 
    title: "Level Specific", 
    items: "Senior Leadership, Mid Career Professionals, Freshers",
    gradient: "from-violet-600 to-violet-900"
  },
];

export default function CourseSegmentation() {
  return (
    <section id="courses" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          Tailored <span className="text-[#1A73E8]">Course Segmentation</span>
        </h2>
        <p className="text-[15px] text-[#475569] mb-14">
          Explore <span className="text-[#1A73E8]">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {segments.map((seg, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image placeholder with gradient */}
              <div className={`h-[200px] rounded-2xl bg-gradient-to-br ${seg.gradient} mb-4 overflow-hidden relative`}>
                {/* Abstract pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/30 rounded-lg rotate-12" />
                  <div className="absolute bottom-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-xl rotate-45" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-[16px] font-bold text-[#1A73E8] mb-1">{seg.title}</h4>
              <p className="text-[13px] text-[#64748B] leading-relaxed">{seg.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
