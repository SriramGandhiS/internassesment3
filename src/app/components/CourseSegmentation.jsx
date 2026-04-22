"use client";

import Image from "next/image";

const categories = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  }
];

export default function CourseSegmentation() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#1E293B] mb-4">
            Tailored <span className="text-[#1A73E8]">Course Segmentation</span>
          </h2>
          <p className="text-[18px] text-[#475569]">
            Explore <span className="text-[#1A73E8] font-semibold">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Top Half */}
              <div className="h-[200px] relative w-full overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Text Bottom Half */}
              <div className="p-8 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-[20px] font-bold text-[#1A73E8] mb-3">{cat.title}</h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
