"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"}`}>
      <div className="container-custom flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className="text-[24px] font-bold text-[#1A73E8]">accredian</span>
          <span className="text-[8px] tracking-widest text-[#94A3B8] uppercase -mt-1">credentials that matter</span>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[14px] font-semibold transition-colors ${
                active === link.label ? "text-[#1A73E8]" : "text-[#475569] hover:text-[#1A73E8]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
