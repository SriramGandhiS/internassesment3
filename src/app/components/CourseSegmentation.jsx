"use client";

import Image from "next/image";

const categories = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Degree programs tailored for growth.",
    img: "/assets/seg-1.png",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Industry Specific",
    desc: "Domain-focused training for Healthcare, Finance, and Tech.",
    img: "/assets/seg-2.png",
    color: "from-indigo-600 to-indigo-400"
  },
  {
    title: "Topic Specific",
    desc: "Master specific skills like AI, ML, Design, and Leadership.",
    img: "/assets/seg-3.png",
    color: "from-blue-700 to-indigo-500"
  },
  {
    title: "Level Specific",
    desc: "Training solutions for Entry, Mid, and Senior Leadership.",
    img: "/assets/seg-4.png",
    color: "from-indigo-700 to-blue-500"
  }
];

export default function CourseSegmentation() {
  return (
    <section id="courses" className="py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[48px] font-black text-[#1E293B] mb-4">
            Tailored <span className="text-[#1A73E8]">Course Segmentation</span>
          </h2>
          <p className="text-[18px] text-[#64748B] max-w-[700px] mx-auto">
            Precisely categorized learning paths designed to meet every enterprise need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image */}
              <Image 
                src={cat.img} 
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-[24px] font-bold mb-3 leading-tight">{cat.title}</h3>
                <p className="text-[14px] text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {cat.desc}
                </p>
                
                {/* Visual Accent */}
                <div className="w-12 h-1 bg-white/50 mt-4 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
