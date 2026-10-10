"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { FlagshipWork } from "@/components/FlagshipWork";
import { ResearchAndSystems } from "@/components/ResearchAndSystems";
import { FieldNotes } from "@/components/FieldNotes";
import { Journey } from "@/components/Journey";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { RecruiterModal } from "@/components/RecruiterModal";

export default function Home() {
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Hotkey 'R' opens the recruiter dossier
      if (
        (e.key === "r" || e.key === "R") &&
        !isRecruiterModalOpen &&
        document.activeElement?.tagName.toLowerCase() !== "input" &&
        document.activeElement?.tagName.toLowerCase() !== "textarea"
      ) {
        setIsRecruiterModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRecruiterModalOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717]">
      {/* Sticky Top Header */}
      <Header onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)} />

      {/* Main Editorial Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)} />

        {/* 01 // Core Philosophy: The Four Coordinates */}
        <Philosophy />

        {/* 02 // Flagship Work: HIV-ESM2, Shadow-Walk, Ullaas, RakshakX */}
        <FlagshipWork />

        {/* 02.5 // Applied Research & Algorithmic Engines: JANUS, VELI-FLOW */}
        <ResearchAndSystems />

        {/* 03 // Field Notes & Explorations: Quantum Cirq, Bio-NLP, Methodology */}
        <FieldNotes />

        {/* 04 // Journey & Timeline with Real Photographs */}
        <Journey />

        {/* 05 // About Jyothika: Biology x Computing Nexus */}
        <AboutSection />

        {/* 06 // Contact & Dialogue */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Dossier Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  );
}
