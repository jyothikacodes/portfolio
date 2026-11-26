import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, MapPin, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact — Jyothika A P",
  description:
    "Get in touch with Jyothika A P for AI/ML research internships, software engineering roles, or collaborative projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-4xl mx-auto">
      {/* Editorial Header */}
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block mb-3 font-semibold">
          COMMUNICATION & INQUIRIES
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1A1A18] mb-6">
          Let’s start a conversation.
        </h1>
        <p className="text-base sm:text-lg text-[#555550] leading-relaxed">
          I am actively exploring AI/ML research internships, software engineering opportunities, and collaborative initiatives. Whether you have an open role, a research paper to discuss, or an idea to build, I would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Channels & Status */}
        <div className="md:col-span-5 space-y-8">
          <div className="bg-[#F5F2EB] p-6 rounded-2xl border border-[#E5E1D7]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#858580] block mb-2">
              CURRENT STATUS
            </span>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-[#1A1A18]">
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>
            <p className="text-xs text-[#666660] leading-relaxed">
              Seeking summer/fall research or engineering internships. Open to remote or on-site roles worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#858580] block">
              DIRECT REACH
            </span>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#EAE8E0] hover:border-[#5B3CC4] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F0EDE4] flex items-center justify-center text-[#1A1A18] group-hover:bg-[#5B3CC4] group-hover:text-white transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono text-[#858580] block">Direct Email</span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1A18] truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#EAE8E0] hover:border-[#5B3CC4] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F0EDE4] flex items-center justify-center text-[#1A1A18] group-hover:bg-[#5B3CC4] group-hover:text-white transition-colors shrink-0">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden flex-1">
                <span className="text-[11px] font-mono text-[#858580] block">GitHub Repositories</span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1A18] truncate block">
                  github.com/jyothikacodes
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#858580] group-hover:text-[#5B3CC4]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#EAE8E0] hover:border-[#5B3CC4] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F0EDE4] flex items-center justify-center text-[#1A1A18] group-hover:bg-[#5B3CC4] group-hover:text-white transition-colors shrink-0">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden flex-1">
                <span className="text-[11px] font-mono text-[#858580] block">LinkedIn Profile</span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1A18] truncate block">
                  linkedin.com/in/jyothikapratheep
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#858580] group-hover:text-[#5B3CC4]" />
            </a>
          </div>

          <div className="p-4 rounded-xl border border-[#EAE8E0] text-xs font-mono text-[#777770] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#858580] shrink-0" />
            <span>IIIT Kottayam • Kerala, India (UTC+05:30)</span>
          </div>
        </div>

        {/* Right Column: Thoughtful Mail Composer */}
        <div className="md:col-span-7 bg-[#FAF9F5] p-8 rounded-2xl border border-[#E0DCCE]">
          <h2 className="font-serif text-2xl text-[#1A1A18] mb-2">Send an inquiry</h2>
          <p className="text-sm text-[#666660] mb-6">
            Choose a subject to pre-compose an email directly in your email client.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#777770] block mb-2">
                SELECT INQUIRY TOPIC
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    label: "AI/ML Internship Role",
                    subject: "AI/ML Internship Opportunity for Jyothika",
                    body: "Hi Jyothika,\n\nWe came across your portfolio and would love to speak with you regarding an AI/ML internship role at...",
                  },
                  {
                    label: "Research Collaboration",
                    subject: "Research Collaboration Inquiry",
                    body: "Hi Jyothika,\n\nI read your notes on HIV-ESM2 and quantum circuit tooling in Cirq. I would love to connect regarding...",
                  },
                  {
                    label: "Engineering Opportunity",
                    subject: "Software Engineering Opportunity for Jyothika",
                    body: "Hi Jyothika,\n\nWe are impressed by your full-stack and systems work (Shadow-Walk, RakshakX) and would like to talk about...",
                  },
                  {
                    label: "General Hello / Mentorship",
                    subject: "Hello from Jyothika's Portfolio Visitor",
                    body: "Hi Jyothika,\n\nI really enjoyed reading your portfolio and wanted to reach out regarding...",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      item.subject
                    )}&body=${encodeURIComponent(item.body)}`}
                    className="p-3.5 rounded-xl border border-[#D5D0C2] bg-white hover:border-[#5B3CC4] hover:bg-[#F9F7F2] transition-colors text-left block group"
                  >
                    <span className="text-xs font-semibold text-[#1A1A18] group-hover:text-[#5B3CC4] block mb-1">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#777770] line-clamp-2">
                      Click to pre-fill email template →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE8E0]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#777770] block mb-2">
                WHAT TO EXPECT
              </span>
              <ul className="space-y-2 text-xs text-[#555550]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B3CC4] shrink-0" />
                  <span>I typically respond within 24–48 hours.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B3CC4] shrink-0" />
                  <span>Happy to provide research writeups, code audits, or reference checks.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B3CC4] shrink-0" />
                  <span>Curious and respectful conversations are always welcomed.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1A1A18] text-[#FAF9F5] text-sm font-medium hover:bg-[#333330] transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Open Mail Client ({PERSONAL_INFO.email})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
