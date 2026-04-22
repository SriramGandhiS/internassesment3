"use client";

import LogoLoop from './LogoLoop';

const partnerLogos = [
  { 
    src: "/assets/logos/reliance.png", 
    alt: "Reliance", 
    title: "Reliance" 
  },
  { 
    src: "/assets/logos/ibm.png", 
    alt: "IBM", 
    title: "IBM" 
  },
  { 
    src: "/assets/logos/hcl.png", 
    alt: "HCL", 
    title: "HCL" 
  },
  { 
    src: "/assets/logos/bayer.png", 
    alt: "Bayer", 
    title: "Bayer" 
  },
  { 
    src: "https://logo.clearbit.com/adp.com", 
    alt: "ADP", 
    title: "ADP" 
  }
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
            speed={60}
            direction="left"
            logoHeight={64}
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
