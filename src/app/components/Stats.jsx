"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const end = parseInt(value);
    const duration = 2000;
    const inc = end / (duration / 16);
    let start = 0;
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[36px] lg:text-[42px] font-extrabold text-[#1E293B] mb-2">
          Our <span className="text-[#1A73E8]">Track Record</span>
        </h2>
        <p className="text-[16px] text-[#475569] mb-14">
          The Numbers Behind <span className="text-[#1A73E8]">Our Success</span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-[900px] mx-auto">
          {[
            { num: "10", suffix: "K+", label: "Professionals Trained For Exceptional Career Success" },
            { num: "200", suffix: "+", label: "Sessions Delivered With Unmatched Learning Excellence" },
            { num: "5", suffix: "K+", label: "Active Learners Engaged In Dynamic Courses" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Blue pill number */}
              <div className="bg-[#E8F0FE] rounded-full px-8 py-3 mb-5">
                <span className="text-[36px] font-extrabold text-[#1A73E8]">
                  <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                </span>
              </div>
              <p className="text-[14px] text-[#475569] leading-relaxed font-medium max-w-[220px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
