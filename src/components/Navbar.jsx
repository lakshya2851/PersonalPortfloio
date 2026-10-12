import { useState } from "react";
import {
  Sun,
  Moon,
  Command,
  List,
  X,
  FileArrowDown,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { personalInfo } from "../data/content";

export function Navbar({ isDark, onToggleTheme, onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full h-16 md:h-18 backdrop-blur-md bg-[#FBF9F5]/90 dark:bg-[#0E0E10]/90 border-b border-black/[0.08] dark:border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#141413] dark:text-[#F4F4F5] group"
        >
          <span className="w-7 h-7 rounded-lg bg-[#141413] dark:bg-white text-white dark:text-[#141413] flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105">
            LS
          </span>
          <span className="font-sans font-medium text-sm hidden sm:inline">Lakshya Sharma</span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden md:inline">Open to Roles</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-[#666461] dark:text-[#99989E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#141413] dark:hover:text-[#F4F4F5] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side utilities: Cmd+K, Theme toggle, Resume, Mobile menu toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono text-[#666461] dark:text-[#99989E] hover:text-[#141413] dark:hover:text-[#F4F4F5] hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer bg-black/[0.02] dark:bg-white/[0.02]"
            title="Open Command Palette (Cmd/Ctrl+K)"
          >
            <Command size={13} weight="bold" />
            <span className="text-[11px] hidden sm:inline">Cmd+K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-black/10 dark:border-white/10 text-[#141413] dark:text-[#F4F4F5] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={15} weight="bold" /> : <Moon size={15} weight="bold" />}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#141413] text-white dark:bg-[#F4F4F5] dark:text-[#141413] text-xs font-medium hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-all cursor-pointer"
          >
            Contact
            <ArrowUpRight size={13} weight="bold" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-black/10 dark:border-white/10 text-[#141413] dark:text-[#F4F4F5] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/10 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#0E0E10] px-6 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#666461] dark:text-[#99989E] hover:text-[#141413] dark:hover:text-[#F4F4F5] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs">
            <span className="font-mono text-[#888]">{personalInfo.location}</span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-[#FF4D00] text-white font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
