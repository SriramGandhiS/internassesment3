"use client";

const clients = [
  { name: "Reliance Industries Limited", short: "Reliance" },
  { name: "HCL Technologies", short: "HCL" },
  { name: "IBM", short: "IBM" },
  { name: "CRIF", short: "CRIF" },
  { name: "ADP", short: "ADP" },
  { name: "BAYER", short: "BAYER" },
];

export default function Clients() {
  return (
    <section id="clients" className="section-padding bg-[var(--bg-main)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-2">
          Our Proven <span className="blue-text">Partnerships</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--text-body)] mb-14">
          Successful Collaborations With the <span className="font-semibold blue-text">Industry&apos;s Best</span>
        </p>

        {/* Logos row */}
        <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-16">
          {clients.map((c) => (
            <div
              key={c.short}
              className="group transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
            >
              <span className="text-[20px] lg:text-[24px] font-bold text-gray-500 group-hover:text-[var(--primary)] transition-colors tracking-wide">
                {c.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
