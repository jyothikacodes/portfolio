"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Terminal, Sparkles, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171717] text-[#F7F5F0] py-14 border-t border-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          {/* Brand Signature with melogo.jpeg */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#5B3CC4] bg-[#2A2A2A]">
              <Image
                src="/images/melogo.jpeg"
                alt="Jyothika cartoon signature stamp"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <span className="font-serif text-xl tracking-tight text-white block">
                Jyothika A P
              </span>
              <span className="text-[11px] font-mono text-[#A78BFA] block">
                DESIGNED &amp; BUILT BY JYOTHIKA · IIIT KOTTAYAM
              </span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Technical Provenance Note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="space-y-1">
            <p className="text-neutral-300">
              EDITORIAL MAGAZINE × ENGINEER&apos;S FIELD NOTEBOOK × RESEARCH LAB
            </p>
            <p className="text-[11px] text-neutral-500">
              NEXT.JS 16 · REACT 19 · TYPESCRIPT · TAILWIND CSS 4 · ZERO LOREM IPSUM · 100% VERIFIED EVIDENCE
            </p>
          </div>

          <div className="text-[11px] text-neutral-500">
            &copy; 2026 Jyothika A P. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
