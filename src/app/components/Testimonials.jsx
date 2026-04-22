"use client";

import { useState } from "react";

/* Testimonials - 2 cards side by side with company logos + quotes, properly spaced */

const testimonials = [
  [
    {
      logo: "ADP",
      logoColor: "#D0271D",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "BAYER",
      logoColor: "#10857F",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
  ],
  [
    {
      logo: "HCL",
      logoColor: "#0066B3",
      text: "The customized Gen-AI programs were exactly what we needed. The flexibility and quality of instructors exceeded our expectations. Highly recommended for any enterprise.",
    },
    {
      logo: "IBM",
      logoColor: "#054ADA",
      text: "We've partnered with Accredian for three years. Their skill gap analysis and tailored roadmaps have been instrumental in our digital transformation journey.",
    },
  ],
];

export default function Testimonials() {
  const [page, setPage] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold text-[#1E293B] mb-2">
          Testimonials from <span className="text-[#1A73E8]">Our Partners</span>
        </h2>
        <p className="text-[15px] text-[#475569] mb-14">
          What <span className="text-[#1A73E8]">Our Clients</span> Are Saying
        </p>

        {/* Cards Grid - 2 side by side */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials[page].map((t, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 lg:p-10 text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow">
              {/* Company Logo */}
              <div className="mb-6">
                <span className="text-[28px] font-black tracking-tight" style={{ color: t.logoColor }}>{t.logo}</span>
              </div>
              {/* Quote */}
              <p className="text-[15px] text-[#475569] leading-relaxed font-medium">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                page === i ? "bg-[#1A73E8] w-8" : "bg-[#CBD5E1]"
              }`}
              aria-label={`Go to testimonial page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
