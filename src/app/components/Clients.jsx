"use client";

const clients = [
  { name: "Reliance Industries", abbr: "RIL" },
  { name: "HCL Technologies", abbr: "HCL" },
  { name: "IBM", abbr: "IBM" },
  { name: "CRIF", abbr: "CRIF" },
  { name: "ADP", abbr: "ADP" },
  { name: "BAYER", abbr: "BAYER" },
  { name: "Wipro", abbr: "WIPRO" },
  { name: "Infosys", abbr: "INFOSYS" },
];

function ClientLogo({ client }) {
  const colors = {
    RIL: "from-blue-600 to-blue-800",
    HCL: "from-blue-500 to-cyan-500",
    IBM: "from-blue-700 to-blue-900",
    CRIF: "from-red-500 to-red-700",
    ADP: "from-red-600 to-red-800",
    BAYER: "from-green-500 to-teal-600",
    WIPRO: "from-purple-500 to-purple-700",
    INFOSYS: "from-blue-500 to-indigo-600",
  };

  return (
    <div className="flex-shrink-0 w-44 h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center px-6 group hover:shadow-md hover:border-blue-100 transition-all duration-300 mx-3">
      <div
        className={`text-xl font-bold bg-gradient-to-r ${
          colors[client.abbr] || "from-gray-500 to-gray-700"
        } bg-clip-text text-transparent group-hover:scale-105 transition-transform`}
      >
        {client.abbr}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Proven{" "}
            <span className="gradient-text">Partnerships</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Successful Collaborations With the Industry&apos;s Best
          </p>
        </div>

        {/* Scrolling Logo Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <ClientLogo key={`${client.abbr}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
