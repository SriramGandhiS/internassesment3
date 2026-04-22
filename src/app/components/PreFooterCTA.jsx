"use client";

export default function PreFooterCTA() {
  return (
    <section id="contact-section" className="py-12 bg-[var(--bg-main)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div
          className="rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #1a73e8 0%, #4a90e8 50%, #1a73e8 100%)" }}
        >
          <div className="flex items-center gap-6">
            {/* Headset icon */}
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <div>
              <h3 className="text-[24px] lg:text-[28px] font-bold text-white">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-white/80 text-[15px] mt-1">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>

          <a
            href="mailto:enterprise@accredian.com"
            className="btn-contact flex-shrink-0"
          >
            Contact Us <span className="text-lg">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
