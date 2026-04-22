"use client";

import LogoLoop from './LogoLoop';

const partnerLogos = [
  { 
    src: "https://logo.clearbit.com/reliance.com", 
    alt: "Reliance", 
    title: "Reliance" 
  },
  { 
    src: "https://logo.clearbit.com/ibm.com", 
    alt: "IBM", 
    title: "IBM" 
  },
  { 
    src: "https://logo.clearbit.com/hcltech.com", 
    alt: "HCL", 
    title: "HCL" 
  },
  { 
    src: "https://logo.clearbit.com/bayer.com", 
    alt: "Bayer", 
    title: "Bayer" 
  },
  { 
    src: "https://logo.clearbit.com/adp.com", 
    alt: "ADP", 
    title: "ADP" 
  },
  { 
    src: "https://logo.clearbit.com/crif.com", 
    alt: "CRIF", 
    title: "CRIF" 
  },
  { 
    src: "https://logo.clearbit.com/google.com", 
    alt: "Google", 
    title: "Google" 
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
            speed={60}
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
