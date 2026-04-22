"use client";

import LogoLoop from './LogoLoop';

const partnerLogos = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png", 
    alt: "Reliance", 
    title: "Reliance" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png", 
    alt: "IBM", 
    title: "IBM" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/HCL_Technologies_logo.svg/1200px-HCL_Technologies_logo.svg.png", 
    alt: "HCL", 
    title: "HCL" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bayer_logo.svg/1200px-Bayer_logo.svg.png", 
    alt: "Bayer", 
    title: "Bayer" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/ADP_logo.svg/1200px-ADP_logo.svg.png", 
    alt: "ADP", 
    title: "ADP" 
  },
  { 
    src: "https://logos-world.net/wp-content/uploads/2023/02/CRIF-Logo.png", 
    alt: "CRIF", 
    title: "CRIF" 
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white border-b border-gray-50">
      <div className="container-custom">
        <h2 className="text-[20px] font-bold text-[#64748B] mb-12 text-center uppercase tracking-[0.2em]">
          Our Proven <span className="text-[#1A73E8]">Partnerships</span>
        </h2>

        <div className="py-4">
          <LogoLoop
            logos={partnerLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={100}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Partner logos"
          />
        </div>
      </div>
    </section>
  );
}
