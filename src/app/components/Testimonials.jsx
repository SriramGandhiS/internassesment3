"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "VP of Engineering, Reliance Jio",
    text: "Accredian's corporate training program transformed our team's data science capabilities. The CAT framework ensured real-world application from day one. We saw a 40% improvement in project delivery times.",
    rating: 5,
    initials: "RK",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Priya Sharma",
    role: "Head of L&D, HCL Technologies",
    text: "The customized Gen-AI programs were exactly what our organization needed. The flexibility in delivery and the quality of instructors exceeded our expectations. Highly recommended!",
    rating: 5,
    initials: "PS",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Amit Patel",
    role: "CTO, IBM India",
    text: "We've partnered with Accredian for three consecutive years. Their skill gap analysis and tailored roadmaps have been instrumental in our digital transformation journey. Outstanding results!",
    rating: 5,
    initials: "AP",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Sneha Reddy",
    role: "Director of Operations, Wipro",
    text: "The Leadership Elevation program helped our mid-level managers develop strategic thinking and people management skills. The ROI was visible within quarters. Truly exceptional training.",
    rating: 5,
    initials: "SR",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Vikram Singh",
    role: "SVP, Infosys BPO",
    text: "Accredian's Operations Excellence training reduced our process inefficiencies by 35%. The hands-on approach and real case studies made it incredibly impactful for our teams.",
    rating: 5,
    initials: "VS",
    color: "from-amber-500 to-amber-700",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoplay]);

  const goTo = (index) => {
    setActive(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goNext = () => goTo((active + 1) % testimonials.length);
  const goPrev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Hear From the Teams We&apos;ve Empowered
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:shadow-xl transition-all z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:shadow-xl transition-all z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-8xl text-blue-50 font-serif leading-none select-none">
              &ldquo;
            </div>

            <div
              key={active}
              className="animate-fadeIn"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === i
                    ? "bg-[var(--primary)] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
