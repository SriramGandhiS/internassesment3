"use client";

import { useEffect, useRef, useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const checkItems = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance",
  ];

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="relative min-h-screen flex items-center pt-[72px] overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8faff 0%, var(--hero-bg) 50%, #eef2ff 100%)" }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-700 ${
                visible ? "animate-slideInLeft" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                  Next-Gen{" "}
                  <span className="gradient-text">Expertise</span>
                  <br />
                  For Your{" "}
                  <span className="gradient-text">Enterprise</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-lg">
                  Cultivate high-performance teams through expert learning.
                </p>
              </div>

              {/* Checkmarks */}
              <div className="space-y-3">
                {checkItems.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      visible
                        ? `animate-fadeInUp`
                        : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(i + 2) * 150}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className={`transition-all duration-500 ${
                  visible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: "700ms" }}
              >
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary text-lg px-10 py-4 animate-pulse-glow"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`relative transition-all duration-700 ${
                visible ? "animate-slideInRight" : "opacity-0"
              }`}
            >
              <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  {/* Professional Illustration */}
                  <div className="relative w-full h-full flex items-center justify-center p-8">
                    <div className="flex items-end gap-6">
                      {/* Person 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-2" />
                        <div className="w-28 h-36 bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-lg" />
                      </div>
                      {/* Laptop */}
                      <div className="flex flex-col items-center -mb-2">
                        <div className="w-40 h-24 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                          <div className="space-y-1.5">
                            <div className="w-24 h-2 bg-blue-200 rounded" />
                            <div className="w-20 h-2 bg-blue-100 rounded" />
                            <div className="w-16 h-2 bg-blue-200 rounded" />
                            <div className="w-12 h-2 bg-green-200 rounded" />
                          </div>
                        </div>
                        <div className="w-44 h-2 bg-gray-300 rounded-b-lg" />
                      </div>
                      {/* Person 2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 mb-2" />
                        <div className="w-28 h-32 bg-gradient-to-b from-indigo-400 to-purple-600 rounded-t-lg" />
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float">
                      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="absolute bottom-12 left-8 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                      <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
