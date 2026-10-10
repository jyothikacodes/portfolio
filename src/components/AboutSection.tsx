"use client";

import React from "react";
import Image from "next/image";
import { Compass, Dna, Code2, Sparkles, HeartHandshake, Shield } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#E2DDD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E2DDD5] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
              05 // HUMAN PERSPECTIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              About Jyothika
            </h2>
          </div>
          <p className="text-sm font-mono text-[#6B6B66] max-w-md">
            Behind the algorithms: the questions, instincts, and grounding that shape my work.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#383835] text-base sm:text-lg leading-relaxed font-light">
            <p>
              I am a Computer Science and Engineering student at{" "}
              <strong className="font-semibold text-[#171717]">IIIT Kottayam</strong> in Kerala.
              I work at the boundary where rigorous computational models meet human consequences—from
              antiretroviral resistance prediction to on-device scam interception and inclusive commerce.
            </p>

            <div className="p-6 bg-white border border-[#D4CEBF] rounded-sm space-y-3 font-normal text-base shadow-xs">
              <span className="text-xs font-mono text-[#5B3CC4] uppercase tracking-wider flex items-center gap-2 font-semibold">
                <Dna className="w-4 h-4" />
                The Dual Curiosity: Biology × Computing
              </span>
              <p className="italic text-[#171717] font-serif text-lg leading-snug">
                &ldquo;For a long time, people treated biology and computer science as two opposing disciplines:
                one organic, wet, and chaotic; the other discrete, mathematical, and synthetic.
                To me, they have always felt like two dialects of the exact same phenomenon: information.&rdquo;
              </p>
              <p className="text-xs font-mono text-[#6B6B66]">
                This perspective directly inspired my work on HIV-ESM2-Enhanced, treating viral mutations not as arbitrary
                tabular features, but as structured syntactic shifts within high-dimensional evolutionary manifolds.
              </p>
            </div>

            <p>
              I don&apos;t build technology for the sake of abstract complexity. What excites me most is
              <strong className="font-semibold text-[#171717]"> agency</strong>:
              giving a regional woman weaver a voice interface so she can price her craft independently (Ullaas);
              giving a student walking home at midnight a route backed by open shops and active streetlights (Shadow-Walk);
              or protecting senior citizens from predatory multi-channel financial fraud without sacrificing their personal privacy (RakshakX).
            </p>

            <p className="text-sm font-mono text-[#6B6B66] border-l-2 border-[#5B3CC4] pl-4 py-1">
              My engineering standard is simple: build verified systems, evaluate with un-leaked benchmarks,
              and never hide behind inflated claims or vanity metrics.
            </p>
          </div>

          {/* Right Column: Grounded Values & Cartoon Signature Mark (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-sm border border-[#D4CEBF] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2DDD5]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#5B3CC4]/30 bg-[#EDE9FE]">
                  <Image
                    src="/images/melogo.jpeg"
                    alt="Jyothika cartoon brandmark"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <span className="font-serif text-lg text-[#171717] block font-medium">
                    Operating Principles
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6B66] uppercase">
                    Field Guide & Methodology
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1">
                  <span className="font-bold text-[#171717] flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#5B3CC4]" />
                    01 // SCIENTIFIC TRUTHFULNESS
                  </span>
                  <p className="text-[#6B6B66]">
                    Report the un-leaked score (nested CV ~0.9487 AUC) even when a leaky non-nested protocol
                    yielded 0.968. Credibility precedes cosmetic vanity.
                  </p>
                </div>

                <div className="p-3 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1">
                  <span className="font-bold text-[#171717] flex items-center gap-2">
                    <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                    02 // AUTHENTIC EMPOWERMENT
                  </span>
                  <p className="text-[#6B6B66]">
                    Women&apos;s empowerment is not a pastel marketing aesthetic. It is removing real friction—speech
                    interfaces for non-English speakers, personal navigation for late-night safety.
                  </p>
                </div>

                <div className="p-3 bg-[#F7F5F0] rounded-xs border border-[#E2DDD5] space-y-1">
                  <span className="font-bold text-[#171717] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                    03 // HUMILITY IN EXPLORATION
                  </span>
                  <p className="text-[#6B6B66]">
                    Actively learning quantum circuits (Cirq) and bioinformatics. Clearly distinguishing ongoing
                    investigation from claimed mastery.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Fact Stamp */}
            <div className="p-4 bg-[#EDE9FE] border border-[#DDD6FE] rounded-sm text-xs font-mono text-[#5B3CC4] flex items-center justify-between">
              <span>LOCATION: KERALA, INDIA</span>
              <span>LANGUAGE: ENGLISH, MALAYALAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
