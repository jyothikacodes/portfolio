import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PERSONAL_INFO, TIMELINE_EXPERIENCE, VERIFIED_SKILLS } from "@/data/portfolioData";
import { ArrowUpRight, GraduationCap, Building2, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About — Jyothika A P",
  description:
    "Computer Science student at IIIT Kottayam exploring AI/ML, computational biology, on-device security, and technology for human agency.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Intro Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block mb-3 font-semibold">
          BIOGRAPHY & BACKGROUND
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] mb-6 leading-tight">
          Building systems where computation has somewhere useful to go.
        </h1>
        <p className="text-lg sm:text-xl text-[#444440] leading-relaxed font-normal">
          I am Jyothika A P—a Computer Science and Engineering student at IIIT Kottayam, researcher, and builder.
          I explore how computation can solve meaningful real-world problems, from biological sequence models to privacy-preserving security and women’s economic opportunity.
        </p>
      </div>

      {/* Grid: Photo 1 + Personal Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 border-t border-[#EAE8E0] pt-12">
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE8DF] border border-[#DDD8CB] shadow-sm">
            <Image
              src="/images/sittingpose.jpeg"
              alt="Jyothika A P in discussion"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <p className="text-xs font-mono text-[#777770] text-center pt-1">
            Technical symposium discourse & presentation • Kerala, India
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6 text-[#333330] leading-relaxed text-base sm:text-lg">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A18]">
            The intersection of biology, software, and human consequence
          </h2>
          <p>
            I grew up captivated by how complex systems behave: how a single nucleotide mutation can redefine an organism’s survival under drug pressure, and how an algorithmic graph can either guide someone safely through a city or leave them vulnerable.
          </p>
          <p>
            At IIIT Kottayam, I channeled this curiosity into deep learning and systems engineering. Rather than treating machine learning as an opaque benchmark competition, I focus on the underlying physics and truth of the problem. That led to my work on <strong className="text-[#1A1A18] font-semibold">HIV-ESM2-Enhanced</strong>, using protein language representations to evaluate viral drug resistance across 18 antiretrovirals with strict nested cross-validation.
          </p>
          <p>
            I care deeply about <em className="italic">evaluation integrity</em>. In research, vanity metrics are easy to publish; real engineering demands eliminating data leakage and reporting the unbiased score every time.
          </p>
        </div>
      </div>

      {/* Grid: Photo 2 + Philosophy of Agency */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-t border-[#EAE8E0] pt-12">
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-[#333330] leading-relaxed text-base sm:text-lg">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block font-semibold">
            MY CORE PHILOSOPHY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A18]">
            I build for what matters.
          </h2>
          <p>
            Technology is the medium; human agency, safety, and understanding are the reason. I am interested in technology not simply because it is technically exciting, but because it can help people navigate, understand, access, and achieve things that matter.
          </p>
          <p>
            This belief led to <strong className="text-[#1A1A18] font-semibold">Ullaas</strong>, a voice-first multilingual commerce interface designed to remove digital literacy barriers for regional women artisans. It shaped <strong className="text-[#1A1A18] font-semibold">Shadow-Walk</strong>, which redefines pedestrian routing around street vitality and lighting rather than distance alone. And it drove <strong className="text-[#1A1A18] font-semibold">RakshakX</strong>, an on-device Android fraud interception agent built with team InnovateX that protects users against multi-channel scam kill chains with zero cloud data exfiltration.
          </p>
          <div className="pt-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5B3CC4] hover:underline"
            >
              Explore all verified projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE8DF] border border-[#DDD8CB] shadow-sm">
            <Image
              src="/images/standingpose.jpeg"
              alt="Jyothika at Kerala Startup Mission"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="text-xs font-mono text-[#777770] text-center pt-1">
            At Kerala Startup Mission (KSUM) • Innovation and grassroots technology
          </p>
        </div>
      </div>

      {/* Experience & Milestones Timeline */}
      <div className="border-t border-[#EAE8E0] pt-14 mb-24">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block mb-2 font-semibold">
            ACADEMIC & PROFESSIONAL JOURNEY
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#1A1A18] mb-4">
            Education, research & leadership
          </h2>
          <p className="text-[#555550] text-sm sm:text-base">
            Verified milestones across university coursework, research labs, hackathons, and open source.
          </p>
        </div>

        <div className="space-y-12">
          {TIMELINE_EXPERIENCE.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-[#EAE8E0] pb-10"
            >
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#858580] block mb-1">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl text-[#1A1A18] font-medium">
                  {item.role}
                </h3>
                <p className="text-sm text-[#5B3CC4] font-medium mb-1">
                  {item.organization}
                </p>
                <p className="text-xs text-[#777770] flex items-center gap-1 font-mono">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </p>
                <span className="inline-block mt-3 text-[11px] font-mono px-2 py-0.5 rounded bg-[#EFECE3] text-[#555550]">
                  {item.evidenceBadge}
                </span>
              </div>

              <div className="md:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#444440] leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#555550] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B3CC4] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Skills Grid */}
      <div className="border-t border-[#EAE8E0] pt-14 mb-20">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block mb-2 font-semibold">
            TECHNICAL REPERTOIRE
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#1A1A18] mb-4">
            Tools, frameworks & engineering domains
          </h2>
          <p className="text-[#555550] text-sm sm:text-base">
            Verified across public codebases, research repositories, and production test suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F5F2EB] p-6 rounded-xl border border-[#E5E1D7]">
            <h3 className="font-serif text-lg text-[#1A1A18] mb-4 font-medium">
              AI, ML & Bioinformatics
            </h3>
            <ul className="space-y-2 text-xs font-mono text-[#444440]">
              {VERIFIED_SKILLS.aiAndResearch.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F5F2EB] p-6 rounded-xl border border-[#E5E1D7]">
            <h3 className="font-serif text-lg text-[#1A1A18] mb-4 font-medium">
              Systems & Web Engineering
            </h3>
            <ul className="space-y-2 text-xs font-mono text-[#444440]">
              {VERIFIED_SKILLS.engineeringAndSystems.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F5F2EB] p-6 rounded-xl border border-[#E5E1D7]">
            <h3 className="font-serif text-lg text-[#1A1A18] mb-4 font-medium">
              Emerging & Security
            </h3>
            <ul className="space-y-2 text-xs font-mono text-[#444440]">
              {VERIFIED_SKILLS.emergingAndFoundations.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B3CC4]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Connect Banner */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#1A1A18] text-[#FAF9F5] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl mb-2">Let’s build something together.</h3>
          <p className="text-sm text-[#A0A09A]">
            Currently open for AI/ML research internships and software engineering opportunities.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/resume"
            className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded-lg border border-[#444] text-[#DDD] hover:border-[#FFF] hover:text-[#FFF] transition-colors"
          >
            Recruiter Dossier
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded-lg bg-[#5B3CC4] text-white hover:bg-[#6D4CD4] transition-colors font-semibold"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
