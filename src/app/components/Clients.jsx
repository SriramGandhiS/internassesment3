"use client";

const partnerLogos = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png", 
    alt: "Reliance"
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png", 
    alt: "IBM"
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/HCL_Technologies_logo.svg/1200px-HCL_Technologies_logo.svg.png", 
    alt: "HCL"
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bayer_logo.svg/1200px-Bayer_logo.svg.png", 
    alt: "Bayer"
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/ADP_logo.svg/1200px-ADP_logo.svg.png", 
    alt: "ADP"
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white border-b border-gray-50">
      <div className="container-custom">
        <h2 className="text-[20px] font-bold text-[#64748B] mb-12 text-center uppercase tracking-[0.2em]">
          Our Proven <span className="text-[#1A73E8]">Partnerships</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
          {partnerLogos.map((logo, i) => (
            <img 
              key={i}
              src={logo.src} 
              alt={logo.alt}
              className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
