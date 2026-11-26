import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Shield, HeartPulse, Sparkles, GitBranch, Waves } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FLAGSHIP_PROJECTS, SUPPORTING_RESEARCH } from "@/data/portfolioData";

export const metadata = {
  title: "Selected Work — Jyothika A P",
  description: "Detailed case studies and engineering projects built by Jyothika A P across healthcare AI, security, and systems.",
};

export default function WorkPage() {
  const allProjects = [
    ...FLAGSHIP_PROJECTS,
    ...SUPPORTING_RESEARCH,
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 space-y-16">
      {/* Page Intro */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-wider text-[#5B3CC4] block font-semibold">
          PORTFOLIO & PROOF OF WORK
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A18] font-normal tracking-tight">
          Selected Work
        </h1>
        <p className="text-base sm:text-lg text-[#4A4944] font-light leading-relaxed">
          A curated collection of research pipelines, full-stack systems, and product prototypes.
          Each project is grounded in verified code, honest evaluation metrics, and real-world friction.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-12">
        {allProjects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6E4DD] hover:border-[#D8D5CB] transition-all space-y-6 shadow-2xs"
          >
            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-mono text-[#5B3CC4] bg-[#F3EEFF] px-3 py-1 rounded-full font-medium">
                {project.category}
              </span>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#5F5E5A] hover:text-[#1A1A18] transition-colors font-sans"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5F5E5A]" />
                </a>
              )}
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18]">
                {project.title}
              </h2>
              <p className="text-base text-[#4A4944] font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm text-[#4A4944] leading-relaxed">
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#1A1A18] font-medium">
                  The Problem
                </h3>
                <p>{project.problem}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#1A1A18] font-medium">
                  The Technical Approach
                </h3>
                <p>{project.hypothesisOrApproach}</p>
              </div>
            </div>

            {/* Highlight Metrics */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {project.evaluationAndResults.slice(0, 3).map((res) => (
                <div key={res.label} className="space-y-0.5">
                  <span className="text-[#5F5E5A] block">{res.label}</span>
                  <span className="font-mono font-bold text-sm text-[#1A1A18] block">
                    {res.value}
                  </span>
                  <span className="text-[11px] text-[#5F5E5A] block leading-tight">
                    {res.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Tech Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E6E4DD] text-xs">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#5F5E5A] border border-[#E6E4DD]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-xs text-[#5B3CC4] hover:underline"
                >
                  <span>Read Code &amp; Docs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
