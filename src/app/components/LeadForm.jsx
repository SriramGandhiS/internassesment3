"use client";

import { useState } from "react";

export default function LeadForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "Gen-AI Mastery",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        if (onSuccess) setTimeout(onSuccess, 2000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[20px] font-bold text-[#1E293B] mb-2">Thank You!</h3>
        <p className="text-[#64748B]">Our team will get in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">Full Name*</label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all outline-none text-[14px]"
        />
      </div>
      <div>
        <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">Work Email*</label>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all outline-none text-[14px]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all outline-none text-[14px]"
          />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91..."
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all outline-none text-[14px]"
          />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">Area of Interest</label>
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all outline-none text-[14px] bg-white"
        >
          <option>Gen-AI Mastery</option>
          <option>Product & Innovation</option>
          <option>Leadership Elevation</option>
          <option>Tech & Data Insights</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3.5 rounded-lg font-bold text-[15px] transition-all shadow-md ${
          loading ? "bg-gray-400" : "bg-[#1A73E8] text-white hover:bg-[#1557B0]"
        }`}
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
      {status === "error" && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>}
    </form>
  );
}
