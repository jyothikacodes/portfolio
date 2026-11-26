import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FIELD_NOTES, SUPPORTING_RESEARCH } from "@/data/portfolioData";
import { ArrowUpRight, BookOpen, Clock, Tag, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Field Notes — Jyothika A P",
  description:
    "Reflections on computational biology, quantum circuit tooling in Cirq, evaluation integrity, and open-source systems.",
};

export default function ResearchPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Editorial Header */}
      <div className="max-w-2xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block mb-3 font-semibold">
          FIELD NOTES & ESSAYS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1A1A18] mb-6">
          Thinking through computation, biology, and method.
        </h1>
        <p className="text-base sm:text-lg text-[#555550] leading-relaxed">
          Short, technical essays and lab notes written while debugging protein language models,
          exploring quantum circuit representations in Google Cirq, and eliminating data leakage
          from machine learning benchmarks.
        </p>
      </div>

      {/* Field Notes List */}
      <div className="space-y-16 mb-24">
        {FIELD_NOTES.map((note, idx) => (
          <article
            key={note.id}
            id={note.id}
            className="border-t border-[#EAE8E0] pt-10 group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#858580] mb-3">
              <span className="text-[#5B3CC4] font-semibold">{note.category}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {note.readTime}
                </span>
                <span>•</span>
                <span>{note.date}</span>
              </div>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A18] mb-4 group-hover:text-[#5B3CC4] transition-colors leading-snug">
              {note.title}
            </h2>

            <p className="text-base sm:text-lg text-[#333330] leading-relaxed mb-6 font-normal">
              {note.content}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-[#858580] mr-1 flex items-center gap-1">
                <Tag className="w-3 h-3" />
              </span>
              {note.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 bg-[#F0EDE4] text-[#555550] rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Supporting Research & Engineering Section */}
      <div className="border-t-2 border-[#1A1A18] pt-14">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5B3CC4] block mb-2 font-semibold">
            APPLIED SYSTEMS RESEARCH
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#1A1A18] mb-4">
            Domain models & experimental pipelines
          </h2>
          <p className="text-[#555550] text-sm sm:text-base leading-relaxed">
            Research and benchmark prototypes built to evaluate specific computational hypotheses in code evolution and urban hydrodynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUPPORTING_RESEARCH.map((res) => (
            <div
              key={res.id}
              className="bg-[#F4F1EA] rounded-xl p-7 border border-[#E5E2D9] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#5B3CC4] uppercase tracking-wider block mb-2 font-semibold">
                  {res.category}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1A18] mb-3">{res.title}</h3>
                <p className="text-sm text-[#444440] leading-relaxed mb-6">
                  {res.tagline}
                </p>

                <div className="space-y-3 mb-6 border-t border-[#EAE7DE] pt-4">
                  {res.evaluationAndResults.map((r) => (
                    <div key={r.label} className="flex justify-between items-baseline text-xs">
                      <span className="text-[#666660] font-sans">{r.label}</span>
                      <span className="font-mono font-semibold text-[#1A1A18]">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE7DE] flex items-center justify-between">
                <span className="text-xs font-mono text-[#858580]">
                  {res.technologies.slice(0, 3).join(" • ")}
                </span>
                <Link
                  href={`/work#${res.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#5B3CC4] hover:underline"
                >
                  View full spec
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Dialogue */}
      <div className="mt-20 p-8 rounded-xl bg-[#EDE9DE] border border-[#DDD8CB] text-center max-w-xl mx-auto">
        <h3 className="font-serif text-2xl text-[#1A1A18] mb-2">Want to discuss this work?</h3>
        <p className="text-sm text-[#555550] mb-6">
          I am always happy to talk about protein language models, evaluation integrity, or quantum circuit representations.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1A1A18] text-[#FAF9F5] text-sm font-medium rounded-lg hover:bg-[#333330] transition-colors"
        >
          Send a note
        </Link>
      </div>
    </div>
  );
}
