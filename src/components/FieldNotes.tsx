"use client";

import React, { useState } from "react";
import { FIELD_NOTES, FieldNote } from "@/data/portfolioData";
import { BookOpen, Tag, Calendar, Clock, ChevronRight, Atom, Dna, ShieldCheck, GitPullRequest } from "lucide-react";

export const FieldNotes: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<FieldNote>(FIELD_NOTES[0]);

  const getCategoryIcon = (category: FieldNote["category"]) => {
    switch (category) {
      case "QUANTUM COMPUTING":
        return <Atom className="w-4 h-4 text-[#5B3CC4]" />;
      case "COMPUTATIONAL BIOLOGY":
        return <Dna className="w-4 h-4 text-emerald-700" />;
      case "METHODOLOGICAL RIGOR":
        return <ShieldCheck className="w-4 h-4 text-amber-700" />;
      case "OPEN SOURCE":
        return <GitPullRequest className="w-4 h-4 text-blue-700" />;
    }
  };

  return (
    <section id="field-notes" className="py-16 md:py-24 border-b border-[#E2DDD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E2DDD5] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3CC4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#5B3CC4]" />
              03 // FIELD NOTES & EXPLORATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal">
              Field Notes / Currently Exploring
            </h2>
          </div>
          <p className="text-sm font-mono text-[#6B6B66] max-w-md">
            Technical journal entries on emerging questions: quantum circuit abstractions in Cirq,
            biological sequence representations, and data leakage lessons.
          </p>
        </div>

        {/* 2-Column Notebook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Index of Entries (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-[#6B6B66] uppercase mb-1">
              Select an entry from the field log:
            </div>

            {FIELD_NOTES.map((note) => {
              const isSelected = note.id === selectedNote.id;
              return (
                <button
                  key={note.id}
                  onClick={() => setSelectedNote(note)}
                  className={`w-full text-left p-4 rounded-sm border transition-all cursor-pointer relative ${
                    isSelected
                      ? "bg-white border-[#171717] shadow-sm translate-x-1"
                      : "bg-[#EFECE4]/60 border-[#E2DDD5] hover:bg-[#EFECE4] text-[#383835]"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6B6B66] pb-1.5">
                    <span className="flex items-center gap-1.5 font-semibold text-[#171717]">
                      {getCategoryIcon(note.category)}
                      <span>{note.category}</span>
                    </span>
                    <span>{note.date}</span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#171717] leading-snug">
                    {note.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#6B6B66] font-mono line-clamp-2">
                    {note.excerpt}
                  </p>

                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5B3CC4] rounded-l-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Full Selected Entry (7 cols) */}
          <div className="lg:col-span-7">
            <article className="bg-white p-6 sm:p-8 rounded-sm border border-[#D4CEBF] shadow-xs space-y-6">
              {/* Entry Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2DDD5] text-xs font-mono text-[#6B6B66]">
                <div className="flex items-center gap-2">
                  <span className="bg-[#171717] text-white px-2 py-0.5 rounded-xs font-bold">
                    LOG ENTRY
                  </span>
                  <span className="text-[#5B3CC4] font-semibold">{selectedNote.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedNote.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedNote.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] leading-snug">
                  {selectedNote.title}
                </h3>
                <div className="text-sm md:text-base text-[#383835] leading-relaxed space-y-4 font-light">
                  <p>{selectedNote.content}</p>
                </div>
              </div>

              {/* Quantum Transparency Note if Cirq Note Selected */}
              {selectedNote.id === "note-cirq" && (
                <div className="p-4 bg-[#F0ECE1] rounded-xs border border-[#D4CEBF] text-xs font-mono text-[#383835] space-y-1">
                  <strong className="text-[#171717] block">Scientific Transparency:</strong>
                  <span>
                    I am actively learning quantum circuit algorithms and exploring issues in Google Cirq
                    (branch: <code className="text-[#5B3CC4] bg-white px-1 py-0.5 rounded">fix-8404-parameterized-diagonal-diagram</code>).
                    I frame this as active curiosity and software engineering in emerging computing—not a claim to being an established quantum physicist.
                  </span>
                </div>
              )}

              {/* Tags */}
              <div className="pt-4 border-t border-[#E2DDD5] flex flex-wrap gap-2 text-xs font-mono">
                {selectedNote.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#F7F5F0] text-[#6B6B66] border border-[#E2DDD5] rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
