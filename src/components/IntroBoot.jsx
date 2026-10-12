import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, CaretRight, X } from "@phosphor-icons/react";

export function IntroBoot({ onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = "hello, I'm Lakshya.";

  useEffect(() => {
    // Check if session has already seen intro
    const hasSeenIntro = sessionStorage.getItem("portfolio_intro_seen");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
        setTimeout(() => {
          sessionStorage.setItem("portfolio_intro_seen", "true");
          onComplete();
        }, 800);
      }
    }, 70);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        sessionStorage.setItem("portfolio_intro_seen", "true");
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("portfolio_intro_seen", "true");
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#141413] text-[#FBF9F5] font-mono px-4 select-none"
    >
      <div className="w-full max-w-lg p-6 rounded-xl border border-white/10 bg-[#1A1A19]/90 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-2 flex items-center gap-1 font-mono text-[11px] text-white/60">
              <Terminal size={12} /> boot.session
            </span>
          </div>
          <button
            onClick={handleSkip}
            className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Press Esc to skip"
          >
            Skip <span className="opacity-50 text-[10px]">[Esc]</span>
          </button>
        </div>

        <div className="py-8 font-mono text-base md:text-lg flex items-center min-h-[72px]">
          <span className="text-[#FF4D00] mr-2">
            <CaretRight size={18} weight="bold" />
          </span>
          <span className="text-white tracking-wide">{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-5 bg-[#FF4D00] ml-1.5"
          />
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
          <span>GLA University / Bengaluru</span>
          <span>{isTypingDone ? "loading workspace..." : "initializing"}</span>
        </div>
      </div>
    </motion.div>
  );
}
