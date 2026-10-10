"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E2DDD5] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
            06 // INITIATE DIALOGUE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-tight">
            Have a problem <br />
            <span className="italic text-[#5B3CC4]">worth building for?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#383835] font-light leading-relaxed">
            Whether you are scouting for an AI/ML research internship, discussing computational biology,
            collaborating on privacy-preserving security systems, or building tools that expand human agency—my
            inbox is open.
          </p>
        </div>

        {/* Contact Interaction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-4">
          {/* Email Action Card (7 cols) */}
          <div className="md:col-span-7 bg-[#F7F5F0] p-6 sm:p-8 rounded-sm border border-[#D4CEBF] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#6B6B66] uppercase tracking-wide block">
                Primary Communication Channel
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-[#171717] break-all">
                {PERSONAL_INFO.email}
              </div>
              <p className="text-xs font-mono text-[#6B6B66]">
                Typical response time: within 24 hours for academic & internship inquiries.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20-%20Jyothika%20A%20P`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#171717] hover:bg-[#5B3CC4] text-[#F7F5F0] text-xs font-mono tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#A78BFA]" />
                <span>WRITE AN EMAIL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-[#EFECE4] text-[#171717] border border-[#D4CEBF] text-xs font-mono rounded-sm transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#6B6B66]" />}
                <span>{copied ? "COPIED ADDRESS" : "COPY TO CLIPBOARD"}</span>
              </button>
            </div>
          </div>

          {/* Social Channels & Profiles (5 cols) */}
          <div className="md:col-span-5 bg-[#F7F5F0] p-6 sm:p-8 rounded-sm border border-[#D4CEBF] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#6B6B66] uppercase tracking-wide block">
                Verified Public Profiles
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-[#E2DDD5] rounded-xs hover:border-[#5B3CC4] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#171717]" />
                    <span className="font-semibold text-[#171717]">GitHub</span>
                  </div>
                  <span className="text-[#6B6B66] group-hover:text-[#5B3CC4] flex items-center gap-1">
                    jyothikacodes <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-[#E2DDD5] rounded-xs hover:border-[#5B3CC4] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#5B3CC4]" />
                    <span className="font-semibold text-[#171717]">LinkedIn</span>
                  </div>
                  <span className="text-[#6B6B66] group-hover:text-[#5B3CC4] flex items-center gap-1">
                    jyothikapratheep <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#6B6B66] border-t border-[#E2DDD5] pt-3">
              <span>LOCATION: KERALA, INDIA · IIIT KOTTAYAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
