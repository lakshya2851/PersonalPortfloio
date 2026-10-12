import { useState, useEffect, useRef } from "react";
import {
  Terminal as TerminalIcon,
  Play,
  Pause,
  ArrowClockwise,
  CaretRight,
  ShieldCheck,
  FastForward,
} from "@phosphor-icons/react";
import { terminalDemoScript } from "../data/content";

export function TerminalWidget() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [customLines, setCustomLines] = useState([]);
  const outputEndRef = useRef(null);

  // Auto playback of demo steps
  useEffect(() => {
    if (!isPlaying) return;

    if (currentStep < terminalDemoScript.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, terminalDemoScript[currentStep]?.delay || 1500);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep]);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep, customLines]);

  const handleRestart = () => {
    setCurrentStep(0);
    setCustomLines([]);
    setIsPlaying(true);
  };

  const handleNextStep = () => {
    if (currentStep < terminalDemoScript.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleCustomCommand = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const cmd = userInput.trim();
    let reply = "";

    if (cmd === "help") {
      reply = "Available commands: 1 (Open Account), 2 (Login/Test PIN), status, balance, clear, reset";
    } else if (cmd === "status" || cmd === "balance") {
      reply = "ACC-804291 [LOCKED] | Pending admin supervisor review | MySQL pool: healthy";
    } else if (cmd === "clear") {
      setCustomLines([]);
      setUserInput("");
      return;
    } else if (cmd === "reset") {
      handleRestart();
      setUserInput("");
      return;
    } else {
      reply = `Command received: "${cmd}". Replay is locked to demo mode. Type "help" or "reset".`;
    }

    setCustomLines((prev) => [...prev, { cmd, reply }]);
    setUserInput("");
  };

  return (
    <div className="rounded-xl border border-black/15 dark:border-white/10 bg-[#121214] text-[#E4E4E7] font-mono text-xs shadow-2xl overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#1A1A1E] border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-2 flex items-center gap-1.5 text-[11px] text-white/70">
            <TerminalIcon size={13} />
            BankingApp.java [JVM console]
          </span>
        </div>

        {/* Honest Labeling */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#FF4D00]/20 text-[#FF4D00] border border-[#FF4D00]/30 font-medium flex items-center gap-1">
            <ShieldCheck size={12} />
            Demo Replay (Simulated Console)
          </span>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause replay" : "Resume replay"}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            </button>
            <button
              onClick={handleNextStep}
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Next step"
            >
              <FastForward size={13} />
            </button>
            <button
              onClick={handleRestart}
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Restart session"
            >
              <ArrowClockwise size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 md:p-5 max-h-80 overflow-y-auto space-y-3 font-mono leading-relaxed select-text">
        {terminalDemoScript.slice(0, currentStep + 1).map((step, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center text-[#FF4D00] font-medium">
              <span className="text-white/40 mr-1.5">lakshya@glau:~/banking$</span>
              <span>{step.command}</span>
            </div>
            <div className="pl-2 space-y-0.5 text-white/80">
              {step.output.map((line, lineIdx) => {
                const isError = line.includes("AccountLockedException") || line.includes("[SECURITY ALERT]");
                const isWarn = line.includes("[WARN]");
                const isSuccess = line.includes("[SUCCESS]") || line.includes("Granted");

                return (
                  <div
                    key={lineIdx}
                    className={`${
                      isError
                        ? "text-rose-400 font-semibold"
                        : isWarn
                        ? "text-amber-300"
                        : isSuccess
                        ? "text-emerald-400"
                        : "text-white/75"
                    }`}
                  >
                    {line}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Custom interactive lines */}
        {customLines.map((entry, idx) => (
          <div key={`custom-${idx}`} className="space-y-1">
            <div className="flex items-center text-[#FF4D00]">
              <span className="text-white/40 mr-1.5">lakshya@glau:~/banking$</span>
              <span>{entry.cmd}</span>
            </div>
            <div className="pl-2 text-white/80">{entry.reply}</div>
          </div>
        ))}

        <div ref={outputEndRef} />
      </div>

      {/* Interactive Command Input */}
      <form
        onSubmit={handleCustomCommand}
        className="px-4 py-2 bg-[#1A1A1E] border-t border-white/10 flex items-center gap-2"
      >
        <span className="text-[#FF4D00]">
          <CaretRight size={14} weight="bold" />
        </span>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={isPlaying ? "Replay in progress... (type 'help' to inspect)" : "Type 'help', 'status', or 'reset'"}
          className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none text-xs font-mono"
        />
        <span className="text-[10px] text-white/40 font-mono hidden sm:inline">Press Enter</span>
      </form>
    </div>
  );
}
