import { Certificate, CheckCircle, ShieldCheck } from "@phosphor-icons/react";
import { certifications } from "../data/content";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] dark:text-[#F4F4F5] font-normal tracking-tight">
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#666461] dark:text-[#99989E] max-w-xl">
            Verified credentials in cloud fundamentals, full-stack web development, SQL query optimization, and engineering ethics.
          </p>
        </div>

        {/* 2x2 Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] shadow-sm hover:border-[#FF4D00]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FF4D00] font-medium flex items-center gap-1.5">
                    <Certificate size={15} />
                    {cert.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle size={12} weight="fill" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#141413] dark:text-[#F4F4F5] mt-4 tracking-tight">
                  {cert.title}
                </h3>
                <div className="font-mono text-xs text-[#666461] dark:text-[#99989E] mt-1">
                  Issued by: <span className="text-[#141413] dark:text-[#F4F4F5] font-medium">{cert.issuer}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#666461] dark:text-[#99989E] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#888]">
                <span>Verified Credential</span>
                <span className="text-[#FF4D00]">Lakshya Sharma</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
