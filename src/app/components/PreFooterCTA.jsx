"use client";

import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function PreFooterCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20"
            style={{
              background: "linear-gradient(135deg, #1a73e8 0%, #1557b0 50%, #0d47a1 100%)",
            }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your{" "}
                <span className="text-blue-200">Workforce?</span>
              </h2>
              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Partner with Accredian Enterprise to build a future-ready team.
                Get started with a customized learning roadmap today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white text-[var(--primary)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Get in Touch
                </button>
                <a
                  href="#how-it-works"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </>
  );
}
