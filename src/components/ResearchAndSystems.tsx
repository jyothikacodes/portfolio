"use client";

import React, { useState } from "react";
import { SUPPORTING_RESEARCH } from "@/data/portfolioData";
import { GitBranch, Waves, Satellite, CheckCircle, ArrowRight, ShieldCheck, FileCheck } from "lucide-react";

export const ResearchAndSystems: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"janus" | "veli">("janus");

  const janus = SUPPORTING_RESEARCH.find((r) => r.id === "janus")!;
  const veli = SUPPORTING_RESEARCH.find((r) => r.id === "veli-flow")!;

  return (
    <section className="py-16 md:py-24 border-b border-[#E2DDD5] bg-[#EFECE4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E2DDD5] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
              02.5 // SYSTEMS & BENCHMARKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Applied Research & Algorithmic Engines
            </h2>
          </div>
          <p className="text-sm font-mono text-[#6B6B66] max-w-md">
            Rigorous algorithmic experiments: from software evolution in Code RAG to estuarine hydrodynamics.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E2DDD5] gap-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab("janus")}
            className={`pb-3 px-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "janus"
                ? "border-[#5B3CC4] text-[#5B3CC4]"
                : "border-transparent text-[#6B6B66] hover:text-[#171717]"
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>JANUS // REPOSITORY-SCALE CODE RAG (V3)</span>
          </button>
          <button
            onClick={() => setActiveTab("veli")}
            className={`pb-3 px-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "veli"
                ? "border-[#5B3CC4] text-[#5B3CC4]"
                : "border-transparent text-[#6B6B66] hover:text-[#171717]"
            }`}
          >
            <Waves className="w-4 h-4" />
            <span>VELI-FLOW // ESTUARINE TIDAL ENGINE</span>
          </button>
        </div>

        {/* JANUS View */}
        {activeTab === "janus" && (
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D4CEBF] space-y-8 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2DDD5]">
              <div>
                <span className="text-xs font-mono text-[#5B3CC4] uppercase font-bold block">
                  {janus.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-1">
                  {janus.title}
                </h3>
              </div>
              <span className="text-xs font-mono bg-[#EDE9FE] text-[#5B3CC4] px-3 py-1 rounded border border-[#DDD6FE]">
                CORPUS: 15,387 COMMITS / 9 REPOSITORIES
              </span>
            </div>

            <p className="text-sm text-[#383835] leading-relaxed max-w-3xl">
              {janus.problem}
            </p>

            {/* My Contribution Highlight Box */}
            <div className="p-5 bg-[#F7F5F0] rounded-sm border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-mono text-[#171717] uppercase font-bold flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#5B3CC4]" />
                My Contribution: V3 Repository-Scale Retrieval & Un-Leaked Evaluation
              </span>
              <p className="text-xs font-mono text-[#383835] leading-relaxed">
                {janus.myContribution}
              </p>
            </div>

            {/* Benchmarks Matrix */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#6B6B66] uppercase font-semibold block">
                Frozen Human-Audited Evaluation Results (k=5 Primary Reference)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {janus.evaluationAndResults.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1"
                  >
                    <span className="text-[11px] font-mono text-[#6B6B66] uppercase block">
                      {metric.label}
                    </span>
                    <span className="font-mono text-xl font-bold text-[#5B3CC4] block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-[#6B6B66] block">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
              {janus.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#F0ECE1] text-[#171717] border border-[#D4CEBF] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* VELI-FLOW View */}
        {activeTab === "veli" && (
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D4CEBF] space-y-8 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2DDD5]">
              <div>
                <span className="text-xs font-mono text-[#5B3CC4] uppercase font-bold block">
                  {veli.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-1">
                  {veli.title}
                </h3>
              </div>
              <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-3 py-1 rounded border border-emerald-200">
                17 / 17 ACCEPTANCE TESTS PASSING
              </span>
            </div>

            <p className="text-sm text-[#383835] leading-relaxed max-w-3xl">
              {veli.problem}
            </p>

            {/* Architecture Formulation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold block">01 // TIDAL HARMONICS</span>
                <p className="text-[#383835]">
                  Calculates real-time tidal height h(t) using published CSIR-NIO constituents (M2, S2, K1, O1) for Cochin Port.
                </p>
              </div>
              <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold block">02 // CANAL BOTTLENECKS</span>
                <p className="text-[#383835]">
                  Incorporates documented flood hotspots from Kerala Govt&apos;s Operation Breakthrough (Mullassery & Perandoor Canals).
                </p>
              </div>
              <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold block">03 // DYNAMIC DIVERSION</span>
                <p className="text-[#383835]">
                  Applies high Dijkstra edge penalties to inundated transit choke points, automatically rerouting to the Park Avenue ridge.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {veli.evaluationAndResults.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1"
                >
                  <span className="text-[11px] font-mono text-[#6B6B66] uppercase block">
                    {metric.label}
                  </span>
                  <span className="font-mono text-xl font-bold text-emerald-700 block">
                    {metric.value}
                  </span>
                  <span className="text-[10px] text-[#6B6B66] block">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
              {veli.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#F0ECE1] text-[#171717] border border-[#D4CEBF] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
