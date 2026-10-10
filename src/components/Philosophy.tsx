"use client";

import React, { useState } from "react";
import { IMPACT_PILLARS } from "@/data/portfolioData";
import { ArrowUpRight, Compass, Shield, HeartPulse, Sparkles, Key } from "lucide-react";

export const Philosophy: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("health");

  const activePillar =
    IMPACT_PILLARS.find((p) => p.id === selectedPillarId) || IMPACT_PILLARS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "health":
        return <HeartPulse className="w-5 h-5" />;
      case "safety":
        return <Shield className="w-5 h-5" />;
      case "opportunity":
        return <Sparkles className="w-5 h-5" />;
      case "access":
        return <Key className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="philosophy" className="py-16 md:py-24 border-b border-[#E2DDD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
              01 // CORE ORIENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Why I Build: Four Coordinates
            </h2>
          </div>
          <p className="text-sm font-mono text-[#6B6B66] max-w-md">
            &ldquo;Technology is the medium, people are the reason. I examine problems where computation has somewhere meaningful to go.&rdquo;
          </p>
        </div>

        {/* Interactive Editorial Selector Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          {/* Left Column: Interactive Pillar Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-[#6B6B66] uppercase mb-1">
              Select an impact dimension to inspect technical rationale:
            </div>

            {IMPACT_PILLARS.map((pillar, idx) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-sm border transition-all cursor-pointer relative ${
                    isSelected
                      ? "bg-white border-[#171717] shadow-sm translate-x-1"
                      : "bg-[#EFECE4]/60 border-[#E2DDD5] hover:bg-[#EFECE4] text-[#383835]"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded-xs ${
                          isSelected
                            ? "bg-[#171717] text-white"
                            : "bg-[#E2DDD5] text-[#6B6B66]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-[#171717]">
                        {pillar.title}
                      </span>
                    </div>
                    <div className="text-[#5B3CC4]">{getIcon(pillar.id)}</div>
                  </div>

                  <p className="mt-2 text-xs font-mono text-[#6B6B66] line-clamp-1">
                    {pillar.tagline}
                  </p>

                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5B3CC4] rounded-l-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Editorial Dossier for the active pillar (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-sm border border-[#D4CEBF] shadow-xs relative">
              {/* Card Meta Stamp */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD5] text-xs font-mono text-[#6B6B66]">
                <span className="flex items-center gap-2 text-[#5B3CC4] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#5B3CC4]" />
                  DIMENSION: {activePillar.title}
                </span>
                <span className="bg-[#F0ECE1] px-2 py-0.5 rounded text-[#171717]">
                  PROVENANCE: VERIFIED WORK
                </span>
              </div>

              {/* Inquiry Question */}
              <div className="pt-6 space-y-3">
                <span className="text-xs font-mono text-[#6B6B66] uppercase tracking-wide">
                  The Computational Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] leading-snug">
                  &ldquo;{activePillar.question}&rdquo;
                </h3>
              </div>

              {/* Summary Narrative */}
              <p className="pt-4 text-base text-[#383835] leading-relaxed">
                {activePillar.summary}
              </p>

              {/* Verification Metric Badge */}
              <div className="mt-6 p-4 rounded-sm bg-[#F7F5F0] border border-[#E2DDD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#6B6B66] uppercase block">
                    Observed Metric / Paradigm
                  </span>
                  <span className="font-mono text-lg font-bold text-[#171717]">
                    {activePillar.metric}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#5B3CC4] bg-[#EDE9FE] px-2.5 py-1 rounded border border-[#DDD6FE] self-start sm:self-auto">
                  {activePillar.metricLabel}
                </span>
              </div>

              {/* Connected Flagship Case Study Jump Link */}
              <div className="mt-6 pt-6 border-t border-[#E2DDD5] flex items-center justify-between">
                <span className="text-xs font-mono text-[#6B6B66]">
                  CONNECTED CASE STUDY:
                </span>
                <a
                  href={`#${activePillar.projectRef}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#5B3CC4] hover:text-[#171717] transition-colors group"
                >
                  <span>INSPECT {activePillar.projectRef.toUpperCase()} DEEP-DIVE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
