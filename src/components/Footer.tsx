import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E6E4DD] bg-[#FAF9F5] py-14 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#5F5E5A]">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D8D5CB] bg-white">
            <Image
              src="/images/melogo.jpeg"
              alt="Jyothika cartoon stamp"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="font-sans text-xs">
            Crafted by <strong className="font-medium text-[#1A1A18]">Jyothika A P</strong> · IIIT Kottayam, Kerala
          </span>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href="https://github.com/jyothikacodes"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#1A1A18] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jyothikapratheep/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#1A1A18] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#5B3CC4]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:jyothikapratheep@gmail.com"
            className="hover:text-[#1A1A18] transition-colors"
          >
            Email
          </a>
          <Link
            href="/resume"
            className="text-[#5B3CC4] hover:underline font-medium"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
};
