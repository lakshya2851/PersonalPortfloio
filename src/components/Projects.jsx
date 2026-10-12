import { useState } from "react";
import {
  GithubLogo,
  ArrowUpRight,
  Code,
  CheckCircle,
  LightbulbFilament,
  UserGear,
  Target,
  Sparkle,
} from "@phosphor-icons/react";
import { projects } from "../data/content";
import { TerminalWidget } from "./TerminalWidget";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] dark:text-[#F4F4F5] font-normal tracking-tight">
            Selected Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#666461] dark:text-[#99989E] max-w-xl">
            Mini case studies documenting problem scopes, technical architecture, and implementation takeaways.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] p-6 sm:p-8 md:p-10 shadow-sm transition-all hover:shadow-md"
            >
              {/* Card Top: Number, Category, Title */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#FF4D00]">
                    {project.number}
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#666461] dark:text-[#99989E]">
                      {project.category}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#141413] dark:text-[#F4F4F5] font-semibold tracking-tight mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Action Buttons: GitHub & Live (Placeholders) */}
                <div className="flex items-center gap-2.5 pt-2 md:pt-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/15 dark:border-white/15 text-xs font-mono text-[#141413] dark:text-[#F4F4F5] hover:border-[#FF4D00] hover:text-[#FF4D00] dark:hover:border-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors"
                      title="GitHub Repository (Placeholder)"
                    >
                      <GithubLogo size={14} weight="bold" />
                      GitHub Repo
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141413] text-white dark:bg-white dark:text-[#141413] text-xs font-mono hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-colors"
                      title="Live Deployment (Placeholder)"
                    >
                      Live Demo
                      <ArrowUpRight size={13} weight="bold" />
                    </a>
                  )}
                </div>
              </div>

              {/* Media Preview: Image or Interactive Terminal Widget */}
              <div className="py-6">
                {project.hasTerminalDemo ? (
                  <div className="space-y-2">
                    <TerminalWidget />
                    <p className="text-[11px] font-mono text-[#888] pt-1">
                      Note: Interactive terminal replay running real console banking simulation state.
                    </p>
                  </div>
                ) : project.image ? (
                  <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-[#0E0E10]">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-auto object-cover max-h-[460px] filter saturate-[0.98]"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>

              {/* Case Study Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Problem Statement */}
                <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.015]">
                  <h4 className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-2 font-semibold">
                    <Target size={15} /> Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666461] dark:text-[#99989E] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* What I Built */}
                <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.015]">
                  <h4 className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-2 font-semibold">
                    <CheckCircle size={15} /> What I Built
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666461] dark:text-[#99989E] leading-relaxed">
                    {project.whatIBuilt}
                  </p>
                </div>

                {/* My Role */}
                <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.015]">
                  <h4 className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-2 font-semibold">
                    <UserGear size={15} /> My Role
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666461] dark:text-[#99989E] leading-relaxed">
                    {project.myRole}
                  </p>
                </div>

                {/* What I Learned */}
                <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.015]">
                  <h4 className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-2 font-semibold">
                    <LightbulbFilament size={15} /> What I Learned
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666461] dark:text-[#99989E] leading-relaxed">
                    {project.whatILearned}
                  </p>
                </div>
              </div>

              {/* Metrics (if available, e.g. for Spam Classifier) */}
              {project.metrics && (
                <div className="mt-6 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs font-mono">
                  <div className="text-[#FF4D00] font-semibold mb-2">Model Evaluation Placeholders:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="p-2 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                      Accuracy: <span className="text-[#FF4D00] font-bold">{project.metrics.accuracy}</span>
                    </div>
                    <div className="p-2 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                      Precision: <span className="text-[#FF4D00] font-bold">{project.metrics.precision}</span>
                    </div>
                    <div className="p-2 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                      Recall: <span className="text-[#FF4D00] font-bold">{project.metrics.recall}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#888] mt-2">
                    Metrics kept as placeholders per instructions; insert your benchmark dataset numbers when finalized.
                  </p>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-[#666461] dark:text-[#99989E] mr-1">Stack:</span>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-[#141413] dark:text-[#F4F4F5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
