"use client";

import Image from "next/image";

const categories = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    img: "/assets/seg-1.png",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    img: "/assets/seg-2.png",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    img: "/assets/seg-3.png",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    img: "/assets/seg-4.png",
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
              <div className="h-[200px] relative w-full">
                <Image 
                  src={cat.img} 
                  alt={cat.title}
                  fill
                  className="object-cover"
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
