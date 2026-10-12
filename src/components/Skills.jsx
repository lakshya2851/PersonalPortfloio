import { Code, Database, HardDrives, Desktop, Wrench } from "@phosphor-icons/react";
import { skillsData } from "../data/content";

const iconMap = {
  Languages: <Code size={18} weight="bold" />,
  Backend: <HardDrives size={18} weight="bold" />,
  Frontend: <Desktop size={18} weight="bold" />,
  Databases: <Database size={18} weight="bold" />,
  "Tools & Workflow": <Wrench size={18} weight="bold" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] dark:text-[#F4F4F5] font-normal tracking-tight">
            Technical Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#666461] dark:text-[#99989E] max-w-xl">
            Core technologies and tools applied across academic coursework, internship projects, and application builds.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] shadow-sm hover:border-[#FF4D00]/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 pb-4 border-b border-black/[0.08] dark:border-white/[0.08] text-[#FF4D00]">
                {iconMap[category.title] || <Code size={18} />}
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#141413] dark:text-[#F4F4F5]">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tag Pills (No fake percentage bars) */}
              <div className="pt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono border border-black/10 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#1A1A1E] text-[#141413] dark:text-[#F4F4F5] hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
