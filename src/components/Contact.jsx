import { useState } from "react";
import {
  EnvelopeSimple,
  Copy,
  Check,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  ArrowUpRight,
} from "@phosphor-icons/react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/content";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FF4D00", "#141413", "#FBF9F5"],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadResume = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all fields before sending.");
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");
    // Simulate swift client-side receipt with mailto bridge
    setTimeout(() => {
      setFormStatus("success");
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF4D00", "#27C93F", "#141413"],
      });
      // Optionally trigger mailto
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct contact info & resume download */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141413] dark:text-[#F4F4F5] font-normal tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#666461] dark:text-[#99989E] leading-relaxed">
                Currently open to full-time software developer opportunities in Bengaluru and remote setups.
              </p>
            </div>

            {/* Email Card with Copy Action */}
            <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] space-y-3">
              <span className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider font-semibold">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm sm:text-base font-medium text-[#141413] dark:text-[#F4F4F5] hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors truncate"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-[#FF4D00] text-xs font-mono transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider font-semibold">
                  Curriculum Vitae
                </span>
                <div className="text-sm font-medium text-[#141413] dark:text-[#F4F4F5] mt-0.5">
                  Lakshya Sharma Resume
                </div>
              </div>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#141413] text-white dark:bg-white dark:text-[#141413] text-xs font-mono font-medium hover:bg-[#FF4D00] dark:hover:bg-[#FF4D00] dark:hover:text-white transition-colors cursor-pointer"
              >
                <DownloadSimple size={14} weight="bold" />
                Download
              </button>
            </div>

            {/* Clearly marked placeholder profile links */}
            <div className="pt-2 space-y-2">
              <span className="font-mono text-xs text-[#888] uppercase tracking-wider">
                External Profiles:
              </span>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono text-[#666461] dark:text-[#99989E] hover:text-[#141413] dark:hover:text-[#F4F4F5] hover:border-[#FF4D00] transition-colors"
                >
                  <GithubLogo size={15} />
                  GitHub
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono text-[#666461] dark:text-[#99989E] hover:text-[#141413] dark:hover:text-[#F4F4F5] hover:border-[#FF4D00] transition-colors"
                >
                  <LinkedinLogo size={15} />
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#151518] shadow-sm">
              <h3 className="font-editorial text-2xl font-semibold text-[#141413] dark:text-[#F4F4F5] mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#666461] dark:text-[#99989E] mb-6">
                Fill in your details below to start a conversation or request code samples.
              </p>

              {formStatus === "success" ? (
                <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-sm space-y-2">
                  <div className="font-semibold flex items-center gap-2">
                    <Check size={18} weight="bold" /> Message prepared.
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">
                    Your default mail client has opened to send your message directly to {personalInfo.email}.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus("idle");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 text-xs font-mono underline hover:text-[#FF4D00] cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === "error" && (
                    <div className="p-3 rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F4F4F5] mb-1.5 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aditi Rao"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-[#FBF9F5] dark:bg-[#0E0E10] text-[#141413] dark:text-[#F4F4F5] text-sm placeholder-[#999] focus:outline-none focus:border-[#FF4D00] dark:focus:border-[#FF4D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F4F4F5] mb-1.5 font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aditi@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-[#FBF9F5] dark:bg-[#0E0E10] text-[#141413] dark:text-[#F4F4F5] text-sm placeholder-[#999] focus:outline-none focus:border-[#FF4D00] dark:focus:border-[#FF4D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F4F4F5] mb-1.5 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discussing engineering opportunities, role requirements, or project feedback..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-[#FBF9F5] dark:bg-[#0E0E10] text-[#141413] dark:text-[#F4F4F5] text-sm placeholder-[#999] focus:outline-none focus:border-[#FF4D00] dark:focus:border-[#FF4D00] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF4D00] text-white text-xs font-mono font-medium hover:bg-[#e04400] transition-colors cursor-pointer shadow-sm"
                  >
                    {formStatus === "sending" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <PaperPlaneTilt size={14} weight="bold" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
