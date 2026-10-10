"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Activity,
  Cpu,
  Database,
  ShieldCheck,
  Radio,
  FileCode2,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FLAGSHIP_PROJECTS } from "@/data/portfolioData";

export const FlagshipWork: React.FC = () => {
  const [activeDrugCategory, setActiveDrugCategory] = useState<"ALL" | "PI" | "NRTI" | "NNRTI">("ALL");

  const [activeRouteMode, setActiveRouteMode] = useState<"standard" | "vibrant">("vibrant");

  const hivProject = FLAGSHIP_PROJECTS.find((p) => p.id === "hiv-esm2")!;
  const shadowProject = FLAGSHIP_PROJECTS.find((p) => p.id === "shadow-walk")!;
  const ullaasProject = FLAGSHIP_PROJECTS.find((p) => p.id === "ullaas")!;
  const rakshakProject = FLAGSHIP_PROJECTS.find((p) => p.id === "rakshakx")!;

  return (
    <section id="work" className="py-16 md:py-28 border-b border-[#E2DDD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#E2DDD5] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
              02 // PROOF OF WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#171717] font-normal">
              Flagship Projects
            </h2>
          </div>
          <p className="text-sm font-mono text-[#6B6B66] max-w-lg leading-relaxed">
            Four distinct engineering and research case studies evaluated against actual codebases,
            reproducible benchmarks, and transparent limitations.
          </p>
        </div>

        {/* ============================================================== */}
        {/* FLAGSHIP PROJECT 1: HIV-ESM2-Enhanced */}
        {/* ============================================================== */}
        <article
          id="hiv-esm2"
          className="pt-16 pb-20 border-b border-[#E2DDD5] space-y-10"
        >
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2DDD5] text-xs font-mono text-[#6B6B66]">
            <div className="flex items-center gap-3">
              <span className="bg-[#171717] text-white px-2.5 py-0.5 rounded-xs font-semibold">
                CASE STUDY A
              </span>
              <span className="text-[#5B3CC4] font-semibold">{hivProject.tag}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>DATASET: STANFORD HIVDB</span>
              {hivProject.githubUrl && (
                <a
                  href={hivProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#171717] hover:text-[#5B3CC4] font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-tight">
                {hivProject.title}
              </h3>
              <p className="text-lg text-[#383835] font-light leading-relaxed">
                {hivProject.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#EFECE4] p-4 rounded-sm border border-[#D4CEBF] text-xs font-mono space-y-2">
              <span className="text-[#6B6B66] uppercase block font-semibold">
                Verified Research Role
              </span>
              <p className="text-[#171717] leading-relaxed">
                {hivProject.myContribution}
              </p>
            </div>
          </div>

          {/* Problem vs Why it Matters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-sm border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-mono text-rose-800 uppercase flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Biological Problem
              </span>
              <p className="text-sm text-[#383835] leading-relaxed">
                {hivProject.problem}
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-[#E2DDD5] space-y-3">
              <span className="text-xs font-mono text-emerald-800 uppercase flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Why Computation Matters
              </span>
              <p className="text-sm text-[#383835] leading-relaxed">
                {hivProject.importance}
              </p>
            </div>
          </div>

          {/* Technical Architecture Interactive Dossier */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-sm border border-[#D4CEBF] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2DDD5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5B3CC4] font-semibold">
                <Cpu className="w-4 h-4" />
                <span>FIG 01.1 // END-TO-END COMPUTATIONAL PIPELINE</span>
              </div>
              <span className="text-xs font-mono text-[#6B6B66]">
                ESM-2 (650M) → ATTENTION POOLING → NESTED EVALUATION
              </span>
            </div>

            {/* Pipeline Step Visualizer */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold">01 // SEQUENCE EMBEDDING</span>
                <p className="text-[#383835]">
                  Extracted per-residue 1280-dim vectors from ESM-2 650M representation layers without fine-tuning backbone.
                </p>
              </div>
              <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold">02 // MUTATION ATTENTION</span>
                <p className="text-[#383835]">
                  Learned position embeddings & multi-head attention to upweight rare resistance mutations over wild-type residues.
                </p>
              </div>
              <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold">03 // DUAL CLASSIFIERS</span>
                <p className="text-[#383835]">
                  Trained per-compound XGBoost trees and attention neural heads with Platt probability calibration.
                </p>
              </div>
              <div className="p-4 bg-[#EDE9FE] border border-[#DDD6FE] rounded-xs space-y-2">
                <span className="text-[#5B3CC4] font-bold">04 // NESTED CV RIGOR</span>
                <p className="text-[#171717]">
                  5-fold outer / 3-fold inner nested CV completely eliminating hyperparameter and meta-learner leakage.
                </p>
              </div>
            </div>

            {/* Benchmark Truth: Target Bound vs Unbiased Nested CV */}
            <div className="p-5 rounded-sm bg-[#F0ECE1] border border-[#D4CEBF] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717]">
                <TrendingUp className="w-4 h-4 text-[#5B3CC4]" />
                <span>SCIENTIFIC DISCLOSURE: THE 0.968 TARGET BOUND VS. UNBIASED NESTED SCORE</span>
              </div>
              <p className="text-xs text-[#383835] leading-relaxed">
                Earlier non-nested cross-validation pipelines reported an optimistic bound of{" "}
                <strong className="text-[#171717]">0.968 Mean AUC</strong>. However, standard CV allows
                hyperparameter selection to bleed across folds. Under strict nested cross-validation,
                the pipeline achieves an honest, unbiased baseline of{" "}
                <strong className="text-[#5B3CC4]">~0.9487 Mean AUC</strong> across all 18 drugs on the full
                Stanford cohort (~0.9202 on subset n=250, stacked ensemble ~0.9380). Documenting this difference
                is a cornerstone of research integrity.
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {hivProject.evaluationAndResults.map((res) => (
                <div
                  key={res.label}
                  className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1"
                >
                  <span className="text-[11px] font-mono text-[#6B6B66] uppercase block">
                    {res.label}
                  </span>
                  <span className="font-mono text-lg font-bold text-[#171717] block">
                    {res.value}
                  </span>
                  <span className="text-[10px] text-[#6B6B66] block leading-tight">
                    {res.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {hivProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#F0ECE1] text-[#171717] border border-[#D4CEBF] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* ============================================================== */}
        {/* FLAGSHIP PROJECT 2: Shadow-Walk System */}
        {/* ============================================================== */}
        <article
          id="shadow-walk"
          className="pt-16 pb-20 border-b border-[#E2DDD5] space-y-10"
        >
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2DDD5] text-xs font-mono text-[#6B6B66]">
            <div className="flex items-center gap-3">
              <span className="bg-[#171717] text-white px-2.5 py-0.5 rounded-xs font-semibold">
                CASE STUDY B
              </span>
              <span className="text-[#5B3CC4] font-semibold">{shadowProject.tag}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>STACK: NODE.JS + SOCKET.IO + LEAFLET</span>
              {shadowProject.githubUrl && (
                <a
                  href={shadowProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#171717] hover:text-[#5B3CC4] font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-tight">
                {shadowProject.title}
              </h3>
              <p className="text-lg text-[#383835] font-light leading-relaxed">
                {shadowProject.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#EFECE4] p-4 rounded-sm border border-[#D4CEBF] text-xs font-mono space-y-2">
              <span className="text-[#6B6B66] uppercase block font-semibold">
                Engineering Contribution
              </span>
              <p className="text-[#171717] leading-relaxed">
                {shadowProject.myContribution}
              </p>
            </div>
          </div>

          {/* Interactive Vibrancy Paradigm Simulator */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D4CEBF] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2DDD5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5B3CC4] font-semibold">
                <Radio className="w-4 h-4" />
                <span>INTERACTIVE COMPARISON // ROUTE VIBRANCY VS SHORTEST DISTANCE</span>
              </div>
              <div className="flex gap-2 text-xs font-mono">
                <button
                  onClick={() => setActiveRouteMode("standard")}
                  className={`px-3 py-1 rounded-xs border transition-colors cursor-pointer ${
                    activeRouteMode === "standard"
                      ? "bg-[#171717] text-white border-[#171717]"
                      : "bg-[#EFECE4] text-[#6B6B66] border-[#D4CEBF]"
                  }`}
                >
                  STANDARD ROUTE (SHORTEST)
                </button>
                <button
                  onClick={() => setActiveRouteMode("vibrant")}
                  className={`px-3 py-1 rounded-xs border transition-colors cursor-pointer ${
                    activeRouteMode === "vibrant"
                      ? "bg-[#5B3CC4] text-white border-[#5B3CC4]"
                      : "bg-[#EFECE4] text-[#6B6B66] border-[#D4CEBF]"
                  }`}
                >
                  SHADOW-WALK (VIBRANT)
                </button>
              </div>
            </div>

            {/* Interactive Simulation Display */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 bg-[#171717] text-[#F7F5F0] p-6 rounded-sm font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400">ROUTE TELEMETRY SIMULATION</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      activeRouteMode === "vibrant"
                        ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : "bg-rose-950 text-rose-400 border border-rose-800"
                    }`}
                  >
                    {activeRouteMode === "vibrant" ? "SAFE CORRIDOR ACTIVE" : "CAUTION: LOW VIBRANCY"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-neutral-300">
                    <span>Route Type:</span>
                    <span className="font-semibold text-white">
                      {activeRouteMode === "vibrant"
                        ? "Commercial Arterial Bypass"
                        : "Geometric Shortest Path (Alleys)"}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Distance / Transit:</span>
                    <span>{activeRouteMode === "vibrant" ? "1.42 km (+240m)" : "1.18 km (Shortest)"}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Active 24/7 Storefronts:</span>
                    <span className="text-emerald-400">
                      {activeRouteMode === "vibrant" ? "11 Commercial Establishments" : "1 Storefront (Closed)"}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Street Illumination Index:</span>
                    <span>{activeRouteMode === "vibrant" ? "0.89 / 1.0 (High Lumens)" : "0.22 / 1.0 (Dark/Shadow)"}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Active Hazard Reports:</span>
                    <span>{activeRouteMode === "vibrant" ? "0 Hazards on corridor" : "2 Unlit Alleys flagged"}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 border-t border-neutral-800">
                  {activeRouteMode === "vibrant"
                    ? "✓ Algorithmic decision: Detoured user by 240m to keep route within 150m of active pharmacies, lit transit stops, and pedestrian foot traffic."
                    : "⚠ Standard Dijkstra failure: Route traversed an unlit residential passage with zero commercial activity to save 2 minutes."}
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#5B3CC4] uppercase font-semibold">
                    Core Architectural Elements
                  </span>
                  <ul className="text-xs font-mono text-[#383835] space-y-2">
                    {shadowProject.architectureDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#5B3CC4] font-bold">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-[#F0ECE1] rounded-xs border border-[#D4CEBF] text-xs font-mono text-[#6B6B66]">
                  <strong className="text-[#171717] block mb-1">Emergency SOS Channel</strong>
                  Event-driven `/report-shadow` socket broadcasts GPS coordinates to the city monitor dashboard within 100ms.
                </div>
              </div>
            </div>

            {/* Results Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {shadowProject.evaluationAndResults.map((res) => (
                <div
                  key={res.label}
                  className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1"
                >
                  <span className="text-[11px] font-mono text-[#6B6B66] uppercase block">
                    {res.label}
                  </span>
                  <span className="font-mono text-base font-bold text-[#171717] block">
                    {res.value}
                  </span>
                  <span className="text-[10px] text-[#6B6B66] block leading-tight">
                    {res.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {shadowProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#F0ECE1] text-[#171717] border border-[#D4CEBF] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* ============================================================== */}
        {/* FLAGSHIP PROJECT 3: Ullaas */}
        {/* ============================================================== */}
        <article
          id="ullaas"
          className="pt-16 pb-20 border-b border-[#E2DDD5] space-y-10"
        >
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2DDD5] text-xs font-mono text-[#6B6B66]">
            <div className="flex items-center gap-3">
              <span className="bg-[#171717] text-white px-2.5 py-0.5 rounded-xs font-semibold">
                CASE STUDY C
              </span>
              <span className="text-[#5B3CC4] font-semibold">{ullaasProject.tag}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>FOUNDER-LED SOCIAL IMPACT INITIATIVE</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-tight">
                {ullaasProject.title}
              </h3>
              <p className="text-lg text-[#383835] font-light leading-relaxed">
                {ullaasProject.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#EFECE4] p-4 rounded-sm border border-[#D4CEBF] text-xs font-mono space-y-2">
              <span className="text-[#6B6B66] uppercase block font-semibold">
                Founder & UX Architect
              </span>
              <p className="text-[#171717] leading-relaxed">
                {ullaasProject.myContribution}
              </p>
            </div>
          </div>

          {/* Core Human-Centered Technical Formulation */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D4CEBF] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#5B3CC4] uppercase font-semibold block">
                  The Grassroots Barrier
                </span>
                <p className="text-sm text-[#383835] leading-relaxed">
                  {ullaasProject.problem}
                </p>
                <div className="p-4 bg-[#F7F5F0] border border-[#E2DDD5] rounded-xs text-xs font-mono text-[#6B6B66]">
                  &ldquo;A woman weaving handloom cotton in a village should not need fluent English,
                  complex tax IDs, or desktop spreadsheet skills to sell her work at a fair price.&rdquo;
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono text-emerald-800 uppercase font-semibold block">
                  The Voice-First Interaction Pipeline
                </span>
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3 bg-[#F0ECE1] rounded-xs border border-[#D4CEBF] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#171717] text-white flex items-center justify-center text-[10px] shrink-0">
                      1
                    </span>
                    <span>Audio Prompt: &ldquo;What did you make today?&rdquo; (in Malayalam/Hindi/Tamil)</span>
                  </div>
                  <div className="p-3 bg-[#F0ECE1] rounded-xs border border-[#D4CEBF] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#171717] text-white flex items-center justify-center text-[10px] shrink-0">
                      2
                    </span>
                    <span>Speech-to-Text intent parsing extracts item type, material, and batch size.</span>
                  </div>
                  <div className="p-3 bg-[#F0ECE1] rounded-xs border border-[#D4CEBF] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#171717] text-white flex items-center justify-center text-[10px] shrink-0">
                      3
                    </span>
                    <span>Conversational pricing query suggests benchmark local market range.</span>
                  </div>
                  <div className="p-3 bg-[#EDE9FE] rounded-xs border border-[#DDD6FE] flex items-center gap-3 text-[#5B3CC4] font-medium">
                    <span className="w-6 h-6 rounded-full bg-[#5B3CC4] text-white flex items-center justify-center text-[10px] shrink-0">
                      4
                    </span>
                    <span>Catalog card automatically generated with zero keyboard input.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status & Scope Transparency */}
            <div className="p-4 rounded-sm bg-[#F7F5F0] border border-[#E2DDD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#6B6B66]">
                TRANSPARENCY NOTE: Ullaas is an active founder prototype & human-centered UX design initiative.
                It is not an enterprise deployment with inflated user statistics.
              </span>
              <span className="bg-[#EFECE4] px-2.5 py-1 border border-[#D4CEBF] text-[#171717] shrink-0">
                STATUS: PROTOTYPE & INITIATIVE
              </span>
            </div>

            {/* Technologies */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {ullaasProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#F0ECE1] text-[#171717] border border-[#D4CEBF] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* ============================================================== */}
        {/* FLAGSHIP PROJECT 4: RakshakX */}
        {/* ============================================================== */}
        <article
          id="rakshakx"
          className="pt-16 space-y-10"
        >
          {/* Project Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2DDD5] text-xs font-mono text-[#6B6B66]">
            <div className="flex items-center gap-3">
              <span className="bg-[#171717] text-white px-2.5 py-0.5 rounded-xs font-semibold">
                CASE STUDY D
              </span>
              <span className="text-[#5B3CC4] font-semibold">{rakshakProject.tag}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>HACKATHON: NMIT HACKS 2026 (TEAM INNOVATEX)</span>
              {rakshakProject.githubUrl && (
                <a
                  href={rakshakProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#171717] hover:text-[#5B3CC4] font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-tight">
                {rakshakProject.title}
              </h3>
              <p className="text-lg text-[#383835] font-light leading-relaxed">
                {rakshakProject.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#EFECE4] p-4 rounded-sm border border-[#D4CEBF] text-xs font-mono space-y-2">
              <span className="text-[#6B6B66] uppercase block font-semibold">
                Team Role & Collaboration
              </span>
              <p className="text-[#171717] leading-relaxed">
                {rakshakProject.myContribution}
              </p>
            </div>
          </div>

          {/* Multi-Channel Threat Correlation Architecture Box */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D4CEBF] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2DDD5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5B3CC4] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>FIG 04.1 // MULTI-CHANNEL THREAT CORRELATION (MITRE ATT&CK)</span>
              </div>
              <span className="text-xs font-mono text-[#6B6B66]">
                100% ON-DEVICE ONNX ML // ZERO CLOUD EXFILTRATION
              </span>
            </div>

            {/* Attack Surface Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E2DDD5] bg-[#F7F5F0] text-[#6B6B66]">
                    <th className="py-2.5 px-3">Correlation Strategy</th>
                    <th className="py-2.5 px-3">Attack Kill Chain Pattern</th>
                    <th className="py-2.5 px-3">Time Window</th>
                    <th className="py-2.5 px-3">Risk Escalation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DDD5] text-[#383835]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#171717]">SMS_WEB_URL</td>
                    <td className="py-2.5 px-3">Smishing SMS → Victim visits spoofed domain</td>
                    <td className="py-2.5 px-3">1 Hour</td>
                    <td className="py-2.5 px-3 text-[#5B3CC4] font-bold">+0.25</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#171717]">CALL_SMS_PHONE</td>
                    <td className="py-2.5 px-3">Vishing Call → OTP-harvesting SMS from same number</td>
                    <td className="py-2.5 px-3">15 Minutes</td>
                    <td className="py-2.5 px-3 text-rose-700 font-bold">+0.35 (Critical)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#171717]">PHONE_MULTI_CHANNEL</td>
                    <td className="py-2.5 px-3">Persistent threat actor across Call + SMS + Messaging</td>
                    <td className="py-2.5 px-3">24 Hours</td>
                    <td className="py-2.5 px-3 text-rose-800 font-bold">+0.55 (Severe)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Engineering Decisions Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1.5">
                <span className="font-bold text-[#171717] block">Network Security: No MITM Decryption</span>
                <p className="text-[#6B6B66] leading-relaxed">
                  Purposely avoided installing a custom root CA to decrypt HTTPS. Analyzing local DNS metadata
                  via Android&apos;s VPN API provides robust domain-level protection without breaking cryptographic guarantees.
                </p>
              </div>
              <div className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1.5">
                <span className="font-bold text-[#171717] block">Zero Data Exfiltration</span>
                <p className="text-[#6B6B66] leading-relaxed">
                  Speech recognition (Vosk) and NLP intent classification (DistilBERT/IndicBERT) execute locally
                  via ONNX Runtime, guaranteeing private SMS and audio data never touch external cloud servers.
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {rakshakProject.evaluationAndResults.map((res) => (
                <div
                  key={res.label}
                  className="p-4 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1"
                >
                  <span className="text-[11px] font-mono text-[#6B6B66] uppercase block">
                    {res.label}
                  </span>
                  <span className="font-mono text-base font-bold text-[#171717] block">
                    {res.value}
                  </span>
                  <span className="text-[10px] text-[#6B6B66] block leading-tight">
                    {res.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {rakshakProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-[#F0ECE1] text-[#171717] border border-[#D4CEBF] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
