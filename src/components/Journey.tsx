"use client";

import React from "react";
import Image from "next/image";
import { TIMELINE_EXPERIENCE } from "@/data/portfolioData";
import { Award, Briefcase, GraduationCap, MapPin, Sparkles, Terminal } from "lucide-react";

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-24 border-b border-[#E2DDD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E2DDD5] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
              04 // TRAJECTORY & PROVENANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Professional Journey & Milestones
            </h2>
          </div>
          <p className="text-sm font-mono text-[#6B6B66] max-w-md">
            Academic rigor at IIIT Kottayam, formal research at IIITDM Kurnool, and rapid hackathon execution.
          </p>
        </div>

        {/* Dual Photographic Feature: sittingpose.jpeg & standingpose.jpeg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Technical Communication (sittingpose.jpeg) */}
          <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#D4CEBF] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B6B66] pb-2 border-b border-[#E2DDD5]">
              <span className="font-semibold text-[#171717]">PLATE 02 // TECHNICAL DISCOURSE</span>
              <span>STAGE & SPRINT CONTEXT</span>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden bg-[#F0ECE1]">
              <Image
                src="/images/sittingpose.jpeg"
                alt="Jyothika speaking at technical presentation"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <p className="text-xs font-mono text-[#6B6B66] leading-relaxed">
              Presenting technical findings, pitching system architectures, and defending scientific trade-offs
              in competitive sprint and seminar settings.
            </p>
          </div>

          {/* Card 2: Ecosystem & Innovation (standingpose.jpeg) */}
          <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#D4CEBF] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B6B66] pb-2 border-b border-[#E2DDD5]">
              <span className="font-semibold text-[#171717]">PLATE 03 // ECOSYSTEM CANDID</span>
              <span>KERALA STARTUP MISSION</span>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden bg-[#F0ECE1]">
              <Image
                src="/images/standingpose.jpeg"
                alt="Jyothika at Kerala Startup Mission professional venue"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <p className="text-xs font-mono text-[#6B6B66] leading-relaxed">
              Real-life counterpart to the signature logo mark: participating in regional innovation ecosystems,
              evaluating real user friction, and exploring technology-driven economic opportunity.
            </p>
          </div>
        </div>

        {/* Editorial Timeline Track */}
        <div className="space-y-6 pt-4">
          <div className="text-xs font-mono text-[#6B6B66] uppercase tracking-wide border-b border-[#E2DDD5] pb-2">
            Chronological Provenance Log
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-32 before:w-0.5 before:bg-[#E2DDD5]">
            {TIMELINE_EXPERIENCE.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group"
              >
                {/* Year Badge */}
                <div className="md:w-32 shrink-0 pt-1 md:text-right pl-10 md:pl-0">
                  <span className="font-mono text-xs font-bold text-[#5B3CC4] block">
                    {item.year}
                  </span>
                  <span className="font-mono text-[10px] text-[#A3A39E] block">
                    {item.location}
                  </span>
                </div>

                {/* Timeline node icon */}
                <div className="absolute left-2.5 md:left-30.5 top-1.5 w-3 h-3 rounded-full bg-[#5B3CC4] border-2 border-[#F7F5F0] z-10" />

                {/* Card Content */}
                <div className="flex-1 bg-white p-6 rounded-sm border border-[#D4CEBF] space-y-3 pl-10 md:pl-6 shadow-xs group-hover:border-[#171717] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#171717]">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-[#5B3CC4] font-medium">
                        {item.organization}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono bg-[#EDE9FE] text-[#5B3CC4] px-2.5 py-0.5 rounded border border-[#DDD6FE]">
                      {item.evidenceBadge}
                    </span>
                  </div>

                  <p className="text-sm text-[#383835] leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="pt-2 text-xs font-mono text-[#6B6B66] space-y-1.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#5B3CC4]">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
