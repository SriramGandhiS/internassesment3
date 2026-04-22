"use client";

import LogoLoop from './LogoLoop';
import { RelianceLogo, IBMLogo, HCLLogo, BayerLogo } from './LogoSvgs';

const partnerLogos = [
  { 
    node: <RelianceLogo />, 
    title: "Reliance" 
  },
  { 
    node: <IBMLogo />, 
    title: "IBM" 
  },
  { 
    node: <HCLLogo />, 
    title: "HCL" 
  },
  { 
    node: <BayerLogo />, 
    title: "Bayer" 
  },
  { 
    node: <div className="text-4xl font-black text-red-600">ADP</div>, 
    title: "ADP" 
  },
  { 
    node: <div className="text-4xl font-black text-blue-900">CRIF</div>, 
    title: "CRIF" 
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
