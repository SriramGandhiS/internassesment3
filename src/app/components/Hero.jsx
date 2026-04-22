"use client";

import Image from "next/image";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="home" className="pt-[112px] bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-[40px] lg:text-[56px] font-black text-[#1E293B] leading-tight mb-6">
                Next-Gen <span className="text-[#1A73E8]">Expertise</span> For Your Enterprise
              </h1>
              <p className="text-[18px] text-[#475569] mb-8">
                Cultivate high-performance teams through expert-led strategic learning solutions tailored for your business.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#1A73E8] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#1557B0] transition-all shadow-lg"
              >
                Enquire Now
              </button>
            </div>
            <div className="flex-1 w-full">
              <Image 
                src="/assets/hero-banner.png" 
                alt="Hero banner" 
                width={600} 
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
