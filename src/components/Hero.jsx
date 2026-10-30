import { motion } from "motion/react";
import { ArrowDownRight, Terminal, Sparkle, ArrowRight } from "@phosphor-icons/react";
import { personalInfo } from "../data/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] pt-12 md:pt-16 pb-16 flex flex-col justify-center border-b border-black/[0.08] dark:border-white/[0.08] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Asymmetric Split Layout: Left Text Column / Right Editorial Image & Workspace Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* 1. Status / Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF4D00] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                Bengaluru, India
              </span>
              <span className="text-black/20 dark:text-white/20 font-mono text-xs">/</span>
              <span className="font-mono text-xs text-[#666461] dark:text-[#99989E]">
                GLA University &apos;26
              </span>
            </div>

            {/* 2. Headline (max 2 lines desktop) */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#141413] dark:text-[#F4F4F5]">
              Software Developer crafting robust backend logic & clean web systems.
            </h1>

            {/* 3. Subtext (strictly <= 20 words) */}
            <p className="text-base sm:text-lg text-[#666461] dark:text-[#99989E] leading-relaxed max-w-xl font-normal">
              CSE Graduate (2026) based in Bengaluru, focusing on Java enterprise patterns and React full-stack applications.
            </p>

            {/* 4. CTAs (1 primary + 1 secondary) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#141413] text-white dark:bg-[#F4F4F5] dark:text-[#141413] text-xs sm:text-sm font-medium hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-all cursor-pointer shadow-sm"
              >
                Explore Projects
                <ArrowDownRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 text-xs sm:text-sm font-medium text-[#141413] dark:text-[#F4F4F5] hover:border-[#FF4D00] hover:text-[#FF4D00] dark:hover:border-[#FF4D00] dark:hover:text-[#FF4D00] transition-all cursor-pointer"
              >
                Get in Touch
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Currently Learning Live Strip */}
            <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#666461] dark:text-[#99989E]">
                <span className="text-[#FF4D00] flex items-center gap-1 font-medium">
                  <Terminal size={14} /> Currently exploring:
                </span>
                {personalInfo.currentlyLearning.map((item, idx) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]"
                  >
                    {item}
                    {idx < personalInfo.currentlyLearning.length - 1 && (
                      <span className="opacity-30">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 5 cols (Editorial Photography & Workspace Artifact) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#161619] shadow-xl">
              <img
                src="/images/workspace.jpg"
                alt="Lakshya Sharma developer workspace with engineering diagram and terminal"
                className="w-full h-auto object-cover aspect-[4/3] filter saturate-[0.95]"
                loading="eager"
              />
              <div className="p-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#141413] dark:text-[#F4F4F5] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Kodnest Intern Alumni
                </span>
                <span className="text-[#666461] dark:text-[#99989E]">Java & MySQL Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
