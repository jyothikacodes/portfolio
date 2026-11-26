"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Research", href: "/research" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E6E4DD]">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B3CC4] rounded p-1"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#5B3CC4]/20 shadow-xs group-hover:scale-105 transition-transform bg-[#F3EEFF]">
            <Image
              src="/images/melogo.jpeg"
              alt="Jyothika"
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight font-normal text-[#1A1A18] group-hover:text-[#5B3CC4] transition-colors leading-none">
              Jyothika A P
            </span>
            <span className="text-[12px] text-[#5F5E5A] font-sans mt-1">
              CSE at IIIT Kottayam
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-sans text-[#5F5E5A]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 relative ${
                isActive(link.href)
                  ? "text-[#1A1A18] font-medium"
                  : "hover:text-[#1A1A18]"
              }`}
            >
              <span>{link.label}</span>
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5B3CC4] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#D8D5CB] hover:border-[#1A1A18] text-xs font-sans font-medium text-[#1A1A18] hover:bg-white transition-all shadow-2xs"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5F5E5A]" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/resume"
            className="px-3 py-1.5 rounded-full border border-[#D8D5CB] text-xs font-sans font-medium text-[#1A1A18]"
          >
            Resume
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1A18] hover:bg-[#F3F1EA] rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#E6E4DD] px-6 py-5 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-sans py-1 transition-colors ${
                isActive(link.href)
                  ? "text-[#5B3CC4] font-medium"
                  : "text-[#1A1A18] hover:text-[#5B3CC4]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
