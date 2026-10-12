import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MagnifyingGlass,
  ArrowRight,
  Sun,
  Moon,
  Copy,
  DownloadSimple,
  FolderOpen,
  GithubLogo,
  LinkedinLogo,
  Check,
} from "@phosphor-icons/react";
import confetti from "canvas-confetti";
import { personalInfo, projects } from "../data/content";

export function CommandPalette({ isOpen, onClose, isDark, onToggleTheme }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const navigationItems = [
    { id: "hero", label: "Jump to Top", group: "Navigation", action: () => scrollToSection("hero") },
    { id: "about", label: "About Lakshya", group: "Navigation", action: () => scrollToSection("about") },
    { id: "projects", label: "Selected Projects", group: "Navigation", action: () => scrollToSection("projects") },
    { id: "experience", label: "Experience & Timeline", group: "Navigation", action: () => scrollToSection("experience") },
    { id: "skills", label: "Technical Skills", group: "Navigation", action: () => scrollToSection("skills") },
    { id: "certifications", label: "Certifications", group: "Navigation", action: () => scrollToSection("certifications") },
    { id: "contact", label: "Contact & Resume", group: "Navigation", action: () => scrollToSection("contact") },
  ];

  const projectItems = projects.map((p) => ({
    id: p.id,
    label: `${p.number} ${p.title} (${p.category})`,
    group: "Projects",
    action: () => scrollToSection(p.id),
  }));

  const actionItems = [
    {
      id: "copy-email",
      label: `Copy Email (${personalInfo.email})`,
      group: "Actions",
      icon: copied ? <Check size={16} className="text-[#FF4D00]" /> : <Copy size={16} />,
      action: () => handleCopyEmail(),
    },
    {
      id: "download-resume",
      label: "Download Resume",
      group: "Actions",
      icon: <DownloadSimple size={16} />,
      action: () => handleDownloadResume(),
    },
    {
      id: "toggle-theme",
      label: `Switch to ${isDark ? "Light" : "Dark"} Mode`,
      group: "Actions",
      icon: isDark ? <Sun size={16} /> : <Moon size={16} />,
      action: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile [Placeholder]",
      group: "External Links",
      icon: <GithubLogo size={16} />,
      action: () => window.open(personalInfo.socials.github, "_blank"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile [Placeholder]",
      group: "External Links",
      icon: <LinkedinLogo size={16} />,
      action: () => window.open(personalInfo.socials.linkedin, "_blank"),
    },
  ];

  const allItems = [...navigationItems, ...projectItems, ...actionItems];

  const filteredItems = query.trim() === ""
    ? allItems
    : allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.group.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const scrollToSection = (id) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FF4D00", "#141413", "#FBF9F5"],
    });
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000);
  };

  const handleDownloadResume = () => {
    onClose();
    // Generate a clean text/markdown resume download or link
    const element = document.createElement("a");
    const resumeText = `# ${personalInfo.name}
${personalInfo.role} | ${personalInfo.location}
Email: ${personalInfo.email}
Education: ${personalInfo.education.degree}, ${personalInfo.education.institution} (Graduating 2026, CGPA ${personalInfo.education.cgpa})

SKILLS:
- Languages: Java, JavaScript, SQL, HTML, CSS
- Backend: Node.js, Express.js, REST APIs, Unit Testing Basics
- Frontend: React, Responsive Web Design
- Databases: MySQL, MongoDB
- Tools: Git, GitHub

EXPERIENCE:
- Software Development Intern at Kodnest Technologies, Bengaluru (Jan 2025 - Mar 2025)
  Worked on Java logic, MySQL schema updates, and manual testing cycles.

PROJECTS:
1. TaskTracker: React, Node.js, Express.js, MongoDB
2. Banking Management System: Java, JDBC, MySQL, OOP
3. Spam Message Classifier: Python, scikit-learn, TF-IDF, Naive Bayes

CERTIFICATIONS:
- AWS Certified
- Web Development (Coding Blocks, Mathura)
- SQL Basic (HackerRank)
- Ethics in Engineering Practice (IIT Kharagpur)
`;
    const file = new Blob([resumeText], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "Lakshya_Sharma_Resume.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-xl rounded-xl border border-black/10 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#161619] shadow-2xl overflow-hidden font-sans z-10"
        >
          {/* Search bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-black/10 dark:border-white/10 gap-3">
            <MagnifyingGlass size={18} className="text-[#666461] dark:text-[#99989E]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or jump to section..."
              className="w-full bg-transparent text-sm text-[#141413] dark:text-[#F4F4F5] placeholder-[#888] focus:outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="text-[11px] font-mono px-1.5 py-0.5 rounded border border-black/10 dark:border-white/10 text-[#666] dark:text-[#aaa]"
            >
              ESC
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="p-6 text-center text-xs text-[#888]">No matching commands found.</div>
            ) : (
              filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#141413] text-white dark:bg-white/10 dark:text-white"
                        : "text-[#141413] dark:text-[#F4F4F5] hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon ? (
                        <span>{item.icon}</span>
                      ) : (
                        <ArrowRight size={14} className={isSelected ? "text-[#FF4D00]" : "opacity-40"} />
                      )}
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-50 uppercase tracking-wider">{item.group}</span>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 border-t border-black/10 dark:border-white/10 text-[11px] font-mono text-[#888] flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
            <span>Navigate: [Up/Down] - Select: [Enter]</span>
            <span className="text-[#FF4D00]">Lakshya Sharma</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
