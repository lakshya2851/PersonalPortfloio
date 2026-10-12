import { GitCommit, GitBranch, Calendar, MapPin } from "@phosphor-icons/react";
import { experienceTimeline } from "../data/content";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] dark:text-[#F4F4F5] font-normal tracking-tight">
            Engineering Timeline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#666461] dark:text-[#99989E] max-w-xl">
            A git-log styled chronological record of internships, education, and development milestones.
          </p>
        </div>

        {/* Git-log Style Stream */}
        <div className="relative pl-6 md:pl-8 border-l border-black/15 dark:border-white/15 space-y-12">
          {experienceTimeline.map((item, index) => (
            <div key={item.commitHash} className="relative group">
              {/* Git Commit Node on Timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#141413] dark:bg-white text-white dark:text-[#141413] flex items-center justify-center border-2 border-[#FBF9F5] dark:border-[#0E0E10] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
              </div>

              {/* Commit Header Line */}
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[#FF4D00] font-semibold">
                  commit {item.commitHash}
                </span>
                <span className="text-[#666461] dark:text-[#99989E] flex items-center gap-1">
                  <GitBranch size={13} />
                  origin/main
                </span>
                <span className="text-black/30 dark:text-white/30 hidden sm:inline">•</span>
                <span className="text-[#666461] dark:text-[#99989E] flex items-center gap-1">
                  <Calendar size={13} />
                  {item.period}
                </span>
                <span className="text-black/30 dark:text-white/30 hidden sm:inline">•</span>
                <span className="text-[#666461] dark:text-[#99989E] flex items-center gap-1">
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>

              {/* Commit Message Box */}
              <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] shadow-sm">
                <div className="text-xs font-mono text-[#FF4D00] font-semibold mb-1">
                  {item.commitMessage}
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#141413] dark:text-[#F4F4F5]">
                  {item.role} <span className="font-normal text-[#666461] dark:text-[#99989E]">at {item.company}</span>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#666461] dark:text-[#99989E] leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-[#141413] dark:text-[#F4F4F5]">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF4D00] font-mono mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-5 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-[#666461] dark:text-[#99989E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
