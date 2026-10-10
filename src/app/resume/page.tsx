import React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Mail, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO, FLAGSHIP_PROJECTS, VERIFIED_SKILLS, TIMELINE_EXPERIENCE } from "@/data/portfolioData";

export const metadata = {
  title: "Recruiter Dossier — Jyothika A P",
  description: "Official professional curriculum vitae & recruiter dossier for Jyothika A P (IIIT Kottayam).",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#171717] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation back */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD5]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6B6B66] hover:text-[#5B3CC4] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
          <span className="text-xs font-mono bg-[#EFECE4] px-2.5 py-1 border border-[#D4CEBF] text-[#171717]">
            DOC ID: DOSSIER-JYOTHIKA-2026
          </span>
        </div>

        {/* Dossier Document Container */}
        <div className="bg-white p-8 sm:p-12 rounded-sm border border-[#D4CEBF] shadow-xs space-y-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-[#E2DDD5]">
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[#5B3CC4] font-medium">
                {PERSONAL_INFO.degree} · {PERSONAL_INFO.institution}
              </p>
              <p className="text-xs font-mono text-[#6B6B66]">
                {PERSONAL_INFO.location} · Available for AI/ML &amp; Research Internships (2026/2027)
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs font-mono sm:text-right">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#171717] hover:text-[#5B3CC4] font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#6B6B66] hover:text-[#171717]"
              >
                github.com/jyothikacodes
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#6B6B66] hover:text-[#171717]"
              >
                linkedin.com/in/jyothikapratheep
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] font-bold border-b border-[#E2DDD5] pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start text-xs font-mono">
              <div>
                <strong className="text-sm text-[#171717] block font-sans">
                  Indian Institute of Information Technology (IIIT) Kottayam
                </strong>
                <span className="text-[#383835]">Bachelor of Technology in Computer Science and Engineering</span>
              </div>
              <span className="text-[#6B6B66]">2023 – 2027</span>
            </div>
          </div>

          {/* Core Technical Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] font-bold border-b border-[#E2DDD5] pb-1">
              KEY VERIFIED PROJECTS
            </h2>
            <div className="space-y-6">
              {FLAGSHIP_PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-center font-mono">
                    <strong className="text-sm text-[#171717] font-sans font-semibold">
                      {proj.title} <span className="text-xs font-mono text-[#5B3CC4] font-normal">({proj.category})</span>
                    </strong>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#5B3CC4] hover:underline inline-flex items-center gap-1 font-mono"
                      >
                        Code <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-[#383835] leading-relaxed">
                    {proj.tagline}
                  </p>
                  <p className="text-[#6B6B66] font-mono text-[11px]">
                    <strong className="text-[#171717]">Key Result:</strong> {proj.evaluationAndResults[0]?.value} — {proj.evaluationAndResults[0]?.detail}
                  </p>
                  <p className="text-[#6B6B66] font-mono text-[11px]">
                    <strong className="text-[#171717]">Technologies:</strong> {proj.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Hackathons */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] font-bold border-b border-[#E2DDD5] pb-1">
              EXPERIENCE &amp; RESEARCH APPOINTMENTS
            </h2>
            <div className="space-y-4 text-xs font-mono">
              {TIMELINE_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-sm text-[#171717] font-sans font-semibold">
                      {exp.role} — <span className="text-[#5B3CC4] font-mono text-xs">{exp.organization}</span>
                    </strong>
                    <span className="text-[#6B6B66]">{exp.year}</span>
                  </div>
                  <p className="text-[#383835] font-sans text-xs">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] font-bold border-b border-[#E2DDD5] pb-1">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <strong className="text-[#171717] block mb-1">AI / ML &amp; RESEARCH:</strong>
                <p className="text-[#383835]">{VERIFIED_SKILLS.aiAndResearch.join(", ")}</p>
              </div>
              <div>
                <strong className="text-[#171717] block mb-1">SYSTEMS &amp; WEB:</strong>
                <p className="text-[#383835]">{VERIFIED_SKILLS.engineeringAndSystems.join(", ")}</p>
              </div>
              <div>
                <strong className="text-[#171717] block mb-1">EMERGING &amp; SPECIALIZED:</strong>
                <p className="text-[#383835]">{VERIFIED_SKILLS.emergingAndFoundations.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#E2DDD5] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-[#6B6B66]">
              To add your compiled resume PDF, place your file at <code className="bg-[#EFECE4] px-1 py-0.5 rounded">public/resume.pdf</code>.
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Request%20-%20Jyothika%20A%20P`}
              className="px-4 py-2 bg-[#5B3CC4] text-white rounded-xs font-semibold hover:bg-[#4C30A8] transition-colors"
            >
              REQUEST INTERVIEW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
