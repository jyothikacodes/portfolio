"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenRecruiterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterModal }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E2DDD5] overflow-hidden">
      {/* Editorial field background grid lines */}
      <div className="absolute inset-0 editorial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Field Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2DDD5] mb-8 md:mb-12 text-xs font-mono text-[#6B6B66]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#5B3CC4]" />
            <span className="font-semibold text-[#171717]">PORTFOLIO DOSSIER // VOL. 2026</span>
            <span className="hidden sm:inline text-[#A3A39E]">|</span>
            <span className="hidden sm:inline">LOC: {PERSONAL_INFO.coordinates} (KERALA, IN)</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="bg-[#EFECE4] px-2 py-0.5 border border-[#D4CEBF] text-[#171717]">
              ACADEMIA: IIIT KOTTAYAM
            </span>
            <span className="hidden md:inline text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
              STATUS: RESEARCH & INTERNSHIPS
            </span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Narrative, and Exploration Triggers (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#EDE9FE] border border-[#DDD6FE] text-xs font-mono text-[#5B3CC4]">
              <Terminal className="w-3.5 h-3.5" />
              <span>FIELD PERSPECTIVE // COMPUTATIONAL INVESTIGATION</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.95] tracking-tight text-[#171717] font-normal">
                I build for <br />
                <span className="italic font-normal text-[#5B3CC4] relative inline-block">
                  what matters.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-[#A78BFA] opacity-70"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.5C50 2 150 2 198 5.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#383835] font-light leading-relaxed max-w-2xl pt-2">
              I explore how computation can help solve meaningful problems—from{" "}
              <strong className="font-medium text-[#171717]">healthcare deep learning</strong> and{" "}
              <strong className="font-medium text-[#171717]">on-device security</strong> to{" "}
              <strong className="font-medium text-[#171717]">women&apos;s economic opportunity</strong> and{" "}
              <strong className="font-medium text-[#171717]">open-source quantum tooling</strong>.
            </p>

            {/* Micro Technical Tag Strip */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {[
                "AI / ML RESEARCH",
                "PROTEIN LANGUAGE MODELS",
                "ON-DEVICE CYBERSECURITY",
                "QUANTUM EXPLORATION (CIRQ)",
                "HUMAN-CENTERED UX",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-[#EFECE4] border border-[#D4CEBF] text-[#383835] rounded-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#171717] text-[#F7F5F0] text-sm font-mono tracking-wide rounded-sm hover:bg-[#5B3CC4] transition-colors group cursor-pointer shadow-xs"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 text-[#A78BFA] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenRecruiterModal}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#EFECE4] hover:bg-[#ECE7DC] text-[#171717] border border-[#D4CEBF] text-sm font-mono tracking-wide rounded-sm transition-colors cursor-pointer"
              >
                <span>RECRUITER DOSSIER</span>
                <span className="text-[11px] text-[#5B3CC4] font-semibold border border-[#5B3CC4]/30 px-1.5 py-0.5 bg-white/70 rounded">
                  20s VIEW
                </span>
              </button>
            </div>

            {/* Quick Link Channels */}
            <div className="pt-2 flex items-center gap-6 text-xs font-mono text-[#6B6B66]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github/jyothikacodes</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin/jyothikapratheep</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>jyothikapratheep@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Photograph Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Decorative paper offset border */}
              <div className="absolute -inset-3 rounded-sm border border-[#D4CEBF] bg-[#EFECE4]/60 -rotate-1 transform transition-transform group-hover:rotate-0" />
              
              {/* Main photograph card */}
              <div className="relative bg-[#FFFFFF] p-3 sm:p-4 border border-[#D4CEBF] shadow-sm rounded-sm">
                {/* Photo Header Annotation */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E2DDD5] text-[10px] font-mono text-[#6B6B66]">
                  <span className="flex items-center gap-1.5 font-semibold text-[#171717]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                    PLATE 01 // PRINCIPAL PORTRAIT
                  </span>
                  <span>720 × 1279 // AUTHENTIC ASSET</span>
                </div>

                {/* Primary Photo: sittingstraight.jpeg */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs bg-[#F0ECE1]">
                  <Image
                    src="/images/sittingstraight.jpeg"
                    alt="Jyothika A P - Primary Portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Corner stamp */}
                  <div className="absolute bottom-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-[#F7F5F0] text-[10px] font-mono px-2.5 py-1 rounded-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>JYOTHIKA A P · IIIT KOTTAYAM</span>
                  </div>
                </div>

                {/* Photo Caption Note */}
                <div className="pt-3 flex items-start justify-between gap-2 text-xs font-mono text-[#6B6B66]">
                  <p className="text-[11px] leading-relaxed">
                    &ldquo;Computation is only as meaningful as the reality it helps clarify or improve.&rdquo;
                  </p>
                  <span className="text-[10px] text-[#A3A39E] shrink-0">EST. 2026</span>
                </div>
              </div>

              {/* Floating field stamp sticker */}
              <div className="absolute -bottom-4 -left-4 bg-[#EDE9FE] border border-[#DDD6FE] text-[#5B3CC4] px-3 py-1.5 shadow-xs rounded-xs font-mono text-[10px] flex items-center gap-1.5 hidden sm:flex">
                <Sparkles className="w-3 h-3 text-[#5B3CC4]" />
                <span>EVIDENCE-BASED ENGINEERING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
