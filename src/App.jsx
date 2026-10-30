import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { IntroBoot } from "./components/IntroBoot";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleBootComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setBootComplete(true);
  };

  // Initialize theme from system or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("portfolio_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("portfolio_theme", "light");
      }
      return next;
    });
  };

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141413] dark:bg-[#0E0E10] dark:text-[#F4F4F5] relative transition-colors duration-200">
      {/* Subtle fixed grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Boot typewriter terminal intro — AnimatePresence enables the exit fade */}
      <AnimatePresence>
        {!bootComplete && <IntroBoot onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Page Layout — hidden until boot completes so it doesn't render behind the intro */}
      <div className={`flex flex-col min-h-screen transition-opacity duration-300 ${bootComplete ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>

        <Footer onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      </div>
    </div>
  );
}
