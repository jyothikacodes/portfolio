"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Briefcase, FileText, ExternalLink, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenRecruiterModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRecruiterModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "01 // PHILOSOPHY", href: "#philosophy" },
    { label: "02 // SELECTED WORK", href: "#work" },
    { label: "03 // FIELD NOTES", href: "#field-notes" },
    { label: "04 // JOURNEY", href: "#journey" },
    { label: "05 // ABOUT", href: "#about" },
    { label: "06 // CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E2DDD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity: melogo.jpeg + Typography */}
        <Link
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B3CC4] rounded p-1"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#5B3CC4]/30 shadow-xs group-hover:scale-105 transition-transform bg-[#EDE9FE]">
            <Image
              src="/images/melogo.jpeg"
              alt="Jyothika cartoon brand mark"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight font-medium text-[#171717] group-hover:text-[#5B3CC4] transition-colors leading-none">
              Jyothika A P
            </span>
            <span className="font-mono text-[10px] text-[#6B6B66] uppercase tracking-wider mt-0.5">
              CSE · IIIT Kottayam
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono tracking-wider text-[#6B6B66]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#5B3CC4] transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B3CC4] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Area: Status Pill & Recruiter Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0ECE1] border border-[#E2DDD5] text-[11px] font-mono text-[#171717]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI/ML & RESEARCH READY</span>
          </div>

          <button
            onClick={onOpenRecruiterModal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#171717] text-[#F7F5F0] text-xs font-mono tracking-wide hover:bg-[#5B3CC4] transition-colors shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B3CC4]"
            aria-label="Open 20-second recruiter dossier"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="font-semibold">FOR RECRUITERS</span>
            <span className="hidden md:inline text-[10px] text-[#A78BFA] border border-[#A78BFA]/30 px-1 rounded">
              KEY: R
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenRecruiterModal}
            className="px-2.5 py-1 rounded bg-[#171717] text-[#F7F5F0] text-[11px] font-mono"
          >
            DOSSIER
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#171717] hover:bg-[#EFECE4] rounded"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F7F5F0] border-b border-[#E2DDD5] px-4 pt-3 pb-5 space-y-3">
          <div className="text-[11px] font-mono text-[#6B6B66] uppercase border-b border-[#E2DDD5] pb-1">
            Section Navigation
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono text-[#171717] hover:text-[#5B3CC4] py-1.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#E2DDD5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded bg-[#5B3CC4] text-white text-xs font-mono font-medium"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>OPEN RECRUITER OVERVIEW (20s)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
