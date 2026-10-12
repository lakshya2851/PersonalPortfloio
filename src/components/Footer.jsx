import { ArrowUp, Terminal } from "@phosphor-icons/react";
import { personalInfo } from "../data/content";

export function Footer({ onOpenCommandPalette }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#FBF9F5] dark:bg-[#0E0E10] border-t border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#666461] dark:text-[#99989E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#141413] dark:text-[#F4F4F5]">{personalInfo.name}</span>
          <span>/</span>
          <span>Bengaluru, India</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCommandPalette}
            className="hover:text-[#141413] dark:hover:text-[#F4F4F5] transition-colors cursor-pointer flex items-center gap-1"
          >
            <Terminal size={13} />
            <span>Cmd+K</span>
          </button>
          <span>/</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#141413] dark:hover:text-[#F4F4F5] transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
