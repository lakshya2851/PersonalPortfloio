# Lakshya Sharma — Personal Portfolio

An editorial, developer-workspace portfolio built with React, Vite, Tailwind CSS v4, and Motion. Designed specifically for Lakshya Sharma (fresher software developer based in Bengaluru, final-year B.Tech CSE at GLA University).

---

## Creative Concept & Aesthetics

- **Developer Workspace meets Editorial Magazine**: Warm off-white paper background (`#FBF9F5`) in light mode with near-black ink typography and a single International Orange (`#FF4D00`) accent color. Includes a synchronized dark mode (`#0E0E10`).
- **Typography Stack**:
  - Display / Headlines: `Cormorant Garamond` (classic editorial serif)
  - Body & UI: `Geist` (clean grotesk sans)
  - Code, Hashes & Metadata: `JetBrains Mono`
- **Interactive Features**:
  - **Terminal Boot Intro**: Typing sequence (`"hello, I'm Lakshya"`) that smoothly reveals the hero, with an instant `Esc` skip button.
  - **Command Palette (`Cmd+K` / `Ctrl+K`)**: Instant modal navigation to jump between sections, trigger resume downloads, copy email with confetti, or toggle dark mode.
  - **Banking Management System Terminal Widget**: Live interactive browser terminal replaying console Java banking execution (account opening, invalid PIN security lock, admin override).
  - **Git-Log Timeline**: Chronological commit log for the Kodnest Technologies internship, GLA University degree, and independent projects.
  - **Accessible Custom Cursor**: Desktop-only subtle follower with zero layout interference and full `prefers-reduced-motion` compliance.

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn / pnpm

### Installation

```bash
# Clone the repository and navigate into the folder
cd personalportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application runs locally at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## How to Edit Content

All portfolio content is consolidated in a single file:
👉 **[`src/data/content.js`](./src/data/content.js)**

You can update:
1. **Personal Information**: Name, location, degree, CGPA, email address, social URLs, and bio.
2. **Currently Learning**: Update topics in `personalInfo.currentlyLearning`.
3. **Projects**: Modify problem descriptions, technical stack, or mini case study takeaways.
4. **Experience Timeline**: Add or update git commit entries and internship highlights.
5. **Skills & Certifications**: Reorder or add new skills and credentials.

---

## Placeholders to Fill In

Before deploying to production, replace the following clearly marked placeholders in [`src/data/content.js`](./src/data/content.js):

| Placeholder Slot | File Location | Purpose |
| :--- | :--- | :--- |
| `[ADD-YOUR-GITHUB-HANDLE]` | `src/data/content.js` | Your real GitHub profile link |
| `[ADD-YOUR-LINKEDIN-HANDLE]` | `src/data/content.js` | Your real LinkedIn profile link |
| `[ADD-LIVE-URL].vercel.app` | `src/data/content.js` | Live deployment link for TaskTracker |
| `[ADD REAL VALUE]` | `src/data/content.js` | Real accuracy, precision, and recall metrics for the Spam Classifier |

---

## Deploying to Vercel

This repository is a static Single-Page Application (SPA) with zero backend runtime dependencies.

### Option A: Via Vercel Dashboard (Recommended)
1. Push your repository to GitHub.
2. Open [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select this repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## Anti-Slop & Quality Discipline

- **No AI Clichés**: Zero em-dashes (`—`), zero generic purple/blue gradients, zero fake percentage bars on skills, zero startup buzzwords ("passionate", "results-driven", "leveraging").
- **Accessibility & Performance**: Semantic HTML5 tags, keyboard navigation, focus indicators, and `prefers-reduced-motion` support.
