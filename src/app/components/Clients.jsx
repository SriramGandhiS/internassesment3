"use client";

import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden border-b border-gray-50">
      <div className="container-custom">
        <h2 className="text-[20px] font-bold text-[#64748B] mb-12 text-center uppercase tracking-[0.2em]">
          Our Proven <span className="text-[#1A73E8]">Partnerships</span>
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center px-10">
              <Image 
                src="/assets/partners.png" 
                alt="Partner Logos" 
                width={800} 
                height={100}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
