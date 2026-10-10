"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Briefcase,
  FileText,
  Mail,
  CheckCircle2,
  ExternalLink,
  Download,
  Copy,
  Check,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, FLAGSHIP_PROJECTS, VERIFIED_SKILLS } from "@/data/portfolioData";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.key === "r" || e.key === "R") && !isOpen) {
        // Only trigger if not focused on an input/textarea
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== "input" && activeTag !== "textarea") {
          e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
    >
      <div
        className="relative w-full max-w-4xl bg-[#F7F5F0] border-2 border-[#171717] rounded-sm shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#171717] text-[#F7F5F0] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#5B3CC4] flex items-center justify-center text-[#A78BFA]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 id="recruiter-modal-title" className="font-mono text-sm uppercase tracking-wider font-semibold text-white">
                RECRUITER DOSSIER // 20-SECOND CANDIDATE OVERVIEW
              </h2>
              <span className="text-[11px] font-mono text-[#A78BFA] block">
                Target: AI/ML Internships · Research Fellowships · Software Engineering Roles
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
            aria-label="Close recruiter overview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto font-sans text-[#171717]">
          {/* Top Profile Summary Strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white p-5 rounded-sm border border-[#D4CEBF]">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171717]">
                  {PERSONAL_INFO.name}
                </h3>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 border border-emerald-200 rounded">
                  AVAILABLE 2026/2027
                </span>
              </div>
              <p className="text-sm text-[#383835] leading-relaxed">
                Computer Science and Engineering student at{" "}
                <strong className="text-[#171717]">{PERSONAL_INFO.institution}</strong>.
                Specializing in AI/ML research (protein language models, nested cross-validation),
                on-device cybersecurity (MITRE ATT&CK, ONNX), and full-stack systems engineering.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-[#6B6B66]">
                <span>DEGREE: B.Tech CSE (2023–2027)</span>
                <span>•</span>
                <span>LOCATION: Kerala, India (Remote / Relocation Ready)</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="md:col-span-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#5B3CC4] hover:bg-[#4C30A8] text-white rounded-xs text-xs font-mono font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL CANDIDATE</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#EFECE4] hover:bg-[#ECE7DC] text-[#171717] border border-[#D4CEBF] rounded-xs text-xs font-mono transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#6B6B66]" />}
                <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
              </button>

              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-[#EFECE4] hover:bg-[#ECE7DC] text-[#171717] border border-[#D4CEBF] rounded-xs text-xs font-mono"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-[#EFECE4] hover:bg-[#ECE7DC] text-[#171717] border border-[#D4CEBF] rounded-xs text-xs font-mono"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Top 4 Strongest Projects (Summary Cards) */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B66] block font-semibold">
              Top 4 Verified Flagship Projects
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {FLAGSHIP_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 bg-white rounded-sm border border-[#D4CEBF] space-y-2 hover:border-[#5B3CC4] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#171717] text-sm font-serif">
                      {proj.title}
                    </span>
                    <span className="text-[10px] text-[#5B3CC4] bg-[#EDE9FE] px-2 py-0.5 rounded">
                      {proj.category.split("/")[0]}
                    </span>
                  </div>
                  <p className="text-[#383835] text-[11px] leading-relaxed line-clamp-2">
                    {proj.tagline}
                  </p>
                  <div className="pt-1 flex items-center justify-between border-t border-[#E2DDD5] text-[10px] text-[#6B6B66]">
                    <span>{proj.evaluationAndResults[0]?.value || "Verified"}</span>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#5B3CC4] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>CODE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix (Categorized, Honest, Zero Fake Progress Bars) */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B66] block font-semibold">
              Verified Technical Competencies
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-white rounded-sm border border-[#D4CEBF] space-y-2">
                <span className="text-[#5B3CC4] font-bold block pb-1 border-b border-[#E2DDD5]">
                  AI / ML & RESEARCH
                </span>
                <ul className="space-y-1.5 text-[#383835]">
                  {VERIFIED_SKILLS.aiAndResearch.map((skill) => (
                    <li key={skill} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-white rounded-sm border border-[#D4CEBF] space-y-2">
                <span className="text-[#5B3CC4] font-bold block pb-1 border-b border-[#E2DDD5]">
                  SYSTEMS & ENGINEERING
                </span>
                <ul className="space-y-1.5 text-[#383835]">
                  {VERIFIED_SKILLS.engineeringAndSystems.map((skill) => (
                    <li key={skill} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-white rounded-sm border border-[#D4CEBF] space-y-2">
                <span className="text-[#5B3CC4] font-bold block pb-1 border-b border-[#E2DDD5]">
                  EMERGING & SPECIALIZED
                </span>
                <ul className="space-y-1.5 text-[#383835]">
                  {VERIFIED_SKILLS.emergingAndFoundations.map((skill) => (
                    <li key={skill} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Verified Achievements & Experience */}
          <div className="p-4 bg-white rounded-sm border border-[#D4CEBF] space-y-2 text-xs font-mono">
            <span className="text-[#6B6B66] uppercase block font-semibold">
              Verified Experience & Honors
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#383835]">
              <div className="p-2.5 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5]">
                <strong className="text-[#171717] block">Research Internship // IIITDM Kurnool</strong>
                <span>Algorithmic formulations & academic experimentation.</span>
              </div>
              <div className="p-2.5 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5]">
                <strong className="text-[#171717] block">NMIT HACKS 2026 // Team InnovateX</strong>
                <span>Lead AI developer for RakshakX on-device endpoint protection.</span>
              </div>
              <div className="p-2.5 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5]">
                <strong className="text-[#171717] block">Make Her Hack // CITTIC, CUSAT</strong>
                <span>Created VELI-FLOW estuarine hydrodynamic scenario risk engine.</span>
              </div>
              <div className="p-2.5 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5]">
                <strong className="text-[#171717] block">GSSoC 2026 Contributor</strong>
                <span>Open-source software developer & code contributor.</span>
              </div>
            </div>
          </div>

          {/* Resume PDF Action Notice */}
          <div className="p-4 bg-[#EDE9FE] border border-[#DDD6FE] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="font-bold text-[#5B3CC4] block">Resume Document (PDF)</span>
              <span className="text-[#383835]">
                Direct download asset available at <code className="bg-white/80 px-1 py-0.5 rounded">/resume.pdf</code>.
              </span>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5B3CC4] text-white rounded-xs hover:bg-[#4C30A8] transition-colors self-start sm:self-auto font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#EFECE4] px-6 py-3 border-t border-[#D4CEBF] flex items-center justify-between text-[11px] font-mono text-[#6B6B66]">
          <span>PRESS ESC TO CLOSE OVERLAY</span>
          <button
            onClick={onClose}
            className="text-[#171717] hover:text-[#5B3CC4] font-semibold cursor-pointer"
          >
            DISMISS DOSSIER [✕]
          </button>
        </div>
      </div>
    </div>
  );
};
