import { User, GraduationCap, Briefcase, MapPin } from "@phosphor-icons/react";
import { personalInfo } from "../data/content";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#141413] dark:text-[#F4F4F5] font-normal tracking-tight">
            About Me
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#666461] dark:text-[#99989E] leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick facts grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D00] mb-1">
                <GraduationCap size={16} /> Education
              </div>
              <div className="text-sm font-medium text-[#141413] dark:text-[#F4F4F5]">GLA University</div>
              <div className="text-xs text-[#666461] dark:text-[#99989E]">B.Tech CSE (CGPA 7.12)</div>
            </div>

            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D00] mb-1">
                <Briefcase size={16} /> Internship
              </div>
              <div className="text-sm font-medium text-[#141413] dark:text-[#F4F4F5]">Kodnest Technologies</div>
              <div className="text-xs text-[#666461] dark:text-[#99989E]">Software Dev Intern (2025)</div>
            </div>

            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D00] mb-1">
                <MapPin size={16} /> Location
              </div>
              <div className="text-sm font-medium text-[#141413] dark:text-[#F4F4F5]">Bengaluru, India</div>
              <div className="text-xs text-[#666461] dark:text-[#99989E]">Available for On-site & Hybrid</div>
            </div>

            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D00] mb-1">
                <User size={16} /> Objective
              </div>
              <div className="text-sm font-medium text-[#141413] dark:text-[#F4F4F5]">Software Engineer</div>
              <div className="text-xs text-[#666461] dark:text-[#99989E]">Java or Full-Stack Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
