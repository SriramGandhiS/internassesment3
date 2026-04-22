"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "VP of Engineering",
    company: "Reliance Jio",
    text: "Accredian's corporate training transformed our team's data capabilities. The CAT framework ensured practical application from day one. We saw a 40% improvement in project delivery.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Head of L&D",
    company: "HCL Technologies",
    text: "The customized Gen-AI programs were exactly what we needed. The flexibility and quality of instructors exceeded our expectations. Highly recommended for any enterprise.",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "CTO",
    company: "IBM India",
    text: "We've partnered with Accredian for three years. Their skill gap analysis and tailored roadmaps have been instrumental in our digital transformation journey.",
    initials: "AP",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section id="testimonials" className="section-padding bg-[var(--bg-main)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[32px] lg:text-[38px] font-bold text-[var(--text-dark)] mb-2">
          Testimonials from Our <span className="blue-text">Partners</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--text-body)] mb-14">
          Hear what our partners say about working with Accredian
        </p>

        <div className="max-w-[700px] mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-100 shadow-sm text-center" key={active}>
            <div className="animate-fadeIn">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xl font-bold mx-auto mb-5">
                {testimonials[active].initials}
              </div>
              {/* Quote */}
              <p className="text-[15px] text-[var(--text-body)] leading-relaxed italic mb-6">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              {/* Name */}
              <p className="font-bold text-[var(--text-dark)]">{testimonials[active].name}</p>
              <p className="text-[13px] text-[var(--text-light)]">
                {testimonials[active].role}, {testimonials[active].company}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  active === i ? "bg-[var(--primary)] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
