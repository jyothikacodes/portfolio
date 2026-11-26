import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, HeartPulse, Sparkles, Dna, Atom } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <div className="pt-24 sm:pt-28">
      <div>
        {/* Hero Section */}
        <section className="pt-12 pb-20 md:pt-20 md:pb-28 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EEFF] border border-[#E9D5FF] text-xs font-sans text-[#5B3CC4]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI/ML Research &amp; Systems</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[#1A1A18] font-normal">
                I build for <br />
                <span className="italic text-[#5B3CC4]">what matters.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#4A4944] font-light leading-relaxed max-w-xl">
                I&apos;m Jyothika, a Computer Science student at IIIT Kottayam. I explore where
                computation has somewhere meaningful to go—from predicting HIV drug resistance
                using protein models to vibrancy-aware pedestrian navigation and on-device privacy.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#5F5E5A]">
                {[
                  "Protein Language Models",
                  "On-Device Security",
                  "Inclusive Commerce",
                  "Quantum Tooling (Cirq)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white border border-[#E6E4DD]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A18] text-[#FAF9F5] text-sm font-medium hover:bg-[#5B3CC4] transition-colors shadow-xs group"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A1A18] border border-[#D8D5CB] text-sm font-medium hover:border-[#1A1A18] transition-colors"
                >
                  <span>About My Journey</span>
                </Link>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-6 text-xs text-[#5F5E5A]">
                <a
                  href="https://github.com/jyothikacodes"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#1A1A18] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github/jyothikacodes</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jyothikapratheep/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#1A1A18] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#5B3CC4]" />
                  <span>linkedin/jyothikapratheep</span>
                </a>
              </div>
            </div>

            {/* Right: Real Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden bg-[#F3F1EA] shadow-md border border-[#E6E4DD]">
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src="/images/sittingstraight.jpeg"
                      alt="Jyothika A P"
                      fill
                      priority
                      sizes="(max-width: 768px) 85vw, 380px"
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#E6E4DD] flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#1A1A18]">Jyothika A P</p>
                      <p className="text-xs text-[#5F5E5A]">IIIT Kottayam · Kerala, India</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="Active student & researcher" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Highlights */}
        <section className="py-20 bg-white border-y border-[#E6E4DD]">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#5B3CC4] block mb-2">
                  Featured Projects
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] font-normal">
                  Work that tackles real friction
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#5B3CC4] hover:underline"
              >
                <span>View all 6 projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Clean Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: HIV-ESM2 */}
              <div className="p-7 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex flex-col justify-between hover:border-[#5B3CC4] transition-all hover:shadow-xs group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#5B3CC4] bg-[#F3EEFF] px-2.5 py-1 rounded-full">
                      Healthcare AI
                    </span>
                    <HeartPulse className="w-4 h-4 text-[#5B3CC4]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A18] group-hover:text-[#5B3CC4] transition-colors">
                    HIV-ESM2
                  </h3>
                  <p className="text-sm text-[#4A4944] leading-relaxed">
                    Predicting antiretroviral drug resistance across 18 therapies using ESM-2 650M protein language models with rare-mutation attention and unbiased nested cross-validation (~0.9487 AUC).
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E6E4DD] mt-6 flex items-center justify-between text-xs">
                  <span className="text-[#5F5E5A]">PyTorch · ESM-2 · SHAP</span>
                  <a
                    href="https://github.com/jyothikacodes/HIV-ESM2-Enhanced"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#1A1A18] hover:text-[#5B3CC4]"
                  >
                    <span>Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 2: Shadow-Walk */}
              <div className="p-7 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex flex-col justify-between hover:border-[#5B3CC4] transition-all hover:shadow-xs group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      Mobility &amp; Safety
                    </span>
                    <Shield className="w-4 h-4 text-amber-700" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A18] group-hover:text-[#5B3CC4] transition-colors">
                    Shadow-Walk
                  </h3>
                  <p className="text-sm text-[#4A4944] leading-relaxed">
                    A navigation system that prioritizes street vibrancy—open 24/7 stores, lighting telemetry, and foot traffic—routing pedestrians around pitch-black alleyways.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E6E4DD] mt-6 flex items-center justify-between text-xs">
                  <span className="text-[#5F5E5A]">Node.js · Sockets · GIS</span>
                  <a
                    href="https://github.com/jyothikacodes/shadow-walk-system"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#1A1A18] hover:text-[#5B3CC4]"
                  >
                    <span>Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 3: RakshakX */}
              <div className="p-7 rounded-2xl bg-[#FAF9F5] border border-[#E6E4DD] flex flex-col justify-between hover:border-[#5B3CC4] transition-all hover:shadow-xs group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      Cybersecurity
                    </span>
                    <Sparkles className="w-4 h-4 text-blue-700" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A18] group-hover:text-[#5B3CC4] transition-colors">
                    RakshakX
                  </h3>
                  <p className="text-sm text-[#4A4944] leading-relaxed">
                    On-device Android threat defense correlating multi-stage phishing attacks across SMS, voice, and web via MITRE ATT&CK patterns—with 100% on-device ML and zero cloud exfiltration.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E6E4DD] mt-6 flex items-center justify-between text-xs">
                  <span className="text-[#5F5E5A]">ONNX · Android VPN · NLP</span>
                  <a
                    href="https://github.com/a6hinandh/RakshakX"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#1A1A18] hover:text-[#5B3CC4]"
                  >
                    <span>Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Short Perspective & Writing Teaser */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5B3CC4] block">
                Research &amp; Field Notes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] font-normal leading-snug">
                Thinking out loud about systems and biology
              </h2>
              <p className="text-sm text-[#4A4944] leading-relaxed">
                I keep brief, honest notes as I explore emerging spaces—from quantum circuit representations in Google Cirq to the mathematical differences between language and protein sequences.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#5B3CC4] hover:underline pt-2"
              >
                <span>Read all field notes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:col-span-7 space-y-4">
              {/* Note 1 */}
              <Link
                href="/research"
                className="block p-6 rounded-xl bg-white border border-[#E6E4DD] hover:border-[#5B3CC4] transition-all group"
              >
                <div className="flex items-center justify-between text-xs text-[#5F5E5A] mb-2 font-mono">
                  <span className="flex items-center gap-1.5 text-[#5B3CC4]">
                    <Atom className="w-3.5 h-3.5" />
                    Quantum Tooling
                  </span>
                  <span>Cirq Issue #8404</span>
                </div>
                <h3 className="font-serif text-xl text-[#1A1A18] group-hover:text-[#5B3CC4] transition-colors mb-1">
                  Navigating Circuit Diagrams in Google Cirq: Parameterized Diagonal Gates
                </h3>
                <p className="text-xs text-[#5F5E5A] leading-relaxed line-clamp-2">
                  Notes from exploring the Cirq codebase on why symbolic parameters in diagonal unitary matrices break text drawers, and how to represent them cleanly.
                </p>
              </Link>

              {/* Note 2 */}
              <Link
                href="/research"
                className="block p-6 rounded-xl bg-white border border-[#E6E4DD] hover:border-[#5B3CC4] transition-all group"
              >
                <div className="flex items-center justify-between text-xs text-[#5F5E5A] mb-2 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <Dna className="w-3.5 h-3.5" />
                    Computational Biology
                  </span>
                  <span>ESM-2 Embeddings</span>
                </div>
                <h3 className="font-serif text-xl text-[#1A1A18] group-hover:text-[#5B3CC4] transition-colors mb-1">
                  Why Biological Sequences Are Not Sentences
                </h3>
                <p className="text-xs text-[#5F5E5A] leading-relaxed line-clamp-2">
                  A single amino acid mutation at residue 184 can alter binding affinity completely. Standard NLP pooling averages out this signal; biology demands mutation-aware attention.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Clean Call to Action */}
        <section className="py-20 bg-[#F3F1EA] border-t border-[#E6E4DD]">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] font-normal">
              Have a problem worth building for?
            </h2>
            <p className="text-base text-[#4A4944] max-w-xl mx-auto leading-relaxed">
              I&apos;m always excited to discuss AI/ML research internships, full-stack systems challenges, or collaborative ideas. My inbox is always open.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="mailto:jyothikapratheep@gmail.com"
                className="px-6 py-3 rounded-full bg-[#1A1A18] text-[#FAF9F5] text-sm font-medium hover:bg-[#5B3CC4] transition-colors shadow-xs"
              >
                Get in Touch
              </a>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-white text-[#1A1A18] border border-[#D8D5CB] text-sm font-medium hover:border-[#1A1A18] transition-colors"
              >
                Read About Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
