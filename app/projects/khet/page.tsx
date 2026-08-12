import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khet — AI-Assisted Farming Companion · Aman Pandey",
  description:
    "A Hindi-first, mobile-first UX concept for helping farmers understand crop problems and take practical next steps.",
};

const figmaUrl =
  "https://www.figma.com/proto/xQLbCkXZ0YLogqhShNu5bV/Khet-%E2%80%94-UX-UI-Design---Prototype?node-id=2-85&t=GBEzaAAAitq2Djg8-1";
const liveUrl = "https://khet-marg.vercel.app/";
const githubUrl = "https://github.com/Aman037/khet-marg";

const flowSteps = [
  { n: "01", title: "Welcome", text: "A calm, language-first welcome screen with no login required." },
  { n: "02", title: "Home", text: "Card-based entry points: identify a problem, view today's tasks, check weather." },
  { n: "03", title: "Crop Problem", text: "Choose what kind of issue the farmer is seeing in the field." },
  { n: "04", title: "Crop Selection", text: "Pick the specific crop to narrow the diagnosis context." },
  { n: "05", title: "Photo / Voice Input", text: "Capture a photo or describe the problem by voice in Hindi." },
  { n: "06", title: "AI Result", text: "A plain-language explanation of the likely issue and its cause." },
  { n: "07", title: "Next Steps", text: "A short, ordered list of practical actions to take next." },
  { n: "08", title: "Save Observation", text: "Store the observation to 'My Crop' for later reference." },
  { n: "09", title: "My Crop", text: "A saved history of observations and recommended actions." },
];

const iaSections = [
  { label: "Home", text: "Primary entry — identify a problem, today's tasks, weather, irrigation." },
  { label: "My Crop", text: "Saved observations and recommended next steps, organized by crop." },
  { label: "Help", text: "Plain-language guidance on how to use the app and interpret results." },
  { label: "Settings", text: "Language, accessibility controls — contrast, motion, text size." },
];

const designSystem = [
  { label: "Typography", text: "Devanagari-friendly sans for Hindi, large readable sizes, generous line height." },
  { label: "Color", text: "Warm agrarian palette — earth, leaf, sky — with strong contrast for outdoor readability." },
  { label: "Buttons", text: "Large touch targets, clear primary action, high-contrast states, icon + label." },
  { label: "Cards", text: "Rounded, bordered containers for each task and result — scannable, not dense." },
  { label: "Inputs", text: "Photo capture and voice input as first-class citizens, text as a fallback." },
  { label: "Navigation", text: "A simple bottom bar with four destinations — Home, My Crop, Help, Settings." },
  { label: "Status / Alerts", text: "Clear severity cues using text and icon, never color alone." },
  { label: "Spacing", text: "8px-based rhythm, generous padding around touch targets." },
  { label: "Radius", text: "Consistent rounded corners across cards, buttons, and inputs." },
  { label: "Icons", text: "Familiar, labeled icons — never decorative-only — paired with text." },
  { label: "Accessibility states", text: "Visible focus rings, high-contrast mode, reduced-motion path." },
];

const screens = [
  { label: "Welcome", text: "Hindi-first welcome with a single clear call to begin." },
  { label: "Home", text: "Card-based home with problem identification, tasks, and weather." },
  { label: "Crop Problem", text: "Choose the kind of issue seen in the field." },
  { label: "Crop Selection", text: "Select the specific crop to narrow context." },
  { label: "Photo Input", text: "Capture a photo of the affected crop." },
  { label: "Voice Input", text: "Describe the problem by voice in Hindi." },
  { label: "AI Result", text: "Plain-language explanation of the likely issue." },
  { label: "Next Steps", text: "Ordered, practical actions to take next." },
  { label: "My Crop", text: "Saved observations and recommended actions." },
];

const accessibility = [
  { title: "Hindi / English", text: "Language switching throughout, with Hindi as the default and Devanagari set carefully for readability." },
  { title: "Large touch targets", text: "Buttons and cards sized for use in field conditions, not desktop precision." },
  { title: "High contrast", text: "A high-contrast mode for outdoor readability; text and icons carry meaning, never color alone." },
  { title: "Reduced motion", text: "A reduced-motion path that removes non-essential animation while keeping functional feedback." },
  { title: "Clear labels", text: "Every icon is paired with a text label so meaning does not depend on visual recognition." },
  { title: "Keyboard & screen reader", text: "Semantic structure, visible focus states, and labeled controls for assistive technology." },
  { title: "Simple hierarchy", text: "One primary action per screen, progressive disclosure for anything secondary." },
];

const techStack = [
  "React 19",
  "TypeScript",
  "TanStack Router & Start",
  "Vite",
  "Tailwind CSS v4",
  "Radix UI / shadcn",
  "TanStack Query",
  "react-hook-form",
  "zod",
  "lucide-react",
];

export default function KhetPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#171717]">
      {/* NAV */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-[-0.02em]">
          ← AMAN PANDEY
        </Link>
        <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
          Case Study 04
        </span>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#888]">
          AI-Assisted Farming Companion · Hindi-first · Mobile-first
        </p>

        <h1 className="mt-6 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
          Khet
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F5E59] md:text-2xl">
          A Hindi-first, mobile-first UX concept for helping farmers
          understand crop problems and take practical next steps.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "UX Design",
            "UI Design",
            "Information Architecture",
            "Accessibility",
            "Hindi-first",
            "Mobile-first",
            "AI-assisted",
            "Frontend Implementation",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#CCCAC1] px-4 py-2 text-xs text-[#555]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#171717] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5"
          >
            Live Demo ↗
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#CCCAC1] px-7 py-3.5 text-sm transition hover:bg-white"
          >
            GitHub ↗
          </a>
          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#CCCAC1] px-7 py-3.5 text-sm transition hover:bg-white"
          >
            Figma Prototype ↗
          </a>
        </div>
      </section>

      {/* HERO VISUAL — phone mockup with live site */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[30px] border border-[#D5D3CA] bg-[#E8E6DE] p-6 md:min-h-[640px] md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
            <div className="order-2 md:order-1">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8A8983]">
                Live product
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                A working prototype, not just screens.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[#666]">
                The interface was implemented as a working web application
                you can interact with directly — including Hindi-first
                copy, photo and voice input flows, and saved observations.
              </p>
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#171717] px-6 py-3 text-sm text-white transition hover:-translate-y-0.5"
              >
                Open the live app ↗
              </a>
            </div>

            {/* Phone frame */}
            <div className="order-1 mx-auto md:order-2">
              <div className="relative h-[560px] w-[280px] overflow-hidden rounded-[40px] border-[10px] border-[#1c1c1c] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1c1c1c]" />
                <iframe
                  src={liveUrl}
                  title="Khet live app"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-3">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8A8983]">
                Figma prototype
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                Designed end-to-end in Figma.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[#666]">
                The full UX flow — welcome, home, problem identification,
                photo and voice input, AI result, next steps, and saved
                observations — was designed as an interactive prototype.
              </p>
              <a
                href={figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-[#CCCAC1] px-6 py-3 text-sm transition hover:bg-white"
              >
                View interactive Figma prototype ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT META */}
      <section className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-4 md:px-10">
        <Meta title="Role" value="UX/UI Design + Frontend Development" />
        <Meta title="Focus" value="Hindi-first · Accessibility · AI-assisted" />
        <Meta title="Platform" value="Mobile-first Web App" />
        <Meta title="Year" value="2026" />
      </section>

      {/* OVERVIEW */}
      <section className="border-y border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#888]">
              Overview
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Useful farming information, made simple.
            </h2>
          </div>
          <p className="self-end text-lg leading-8 text-[#666]">
            Khet is a Hindi-first, mobile-first AI-assisted farming
            companion. It helps farmers understand common crop problems,
            capture what they see through photo or voice, receive an
            AI-assisted explanation in plain language, and follow
            practical next steps — without an account, and without
            information overload.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="mx-auto max-w-[1000px] px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <span className="text-xs font-medium text-[#999]">01</span>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              The problem
            </h2>
            <div className="mt-8 space-y-6">
              {[
                "Agricultural information can be difficult to access and interpret, especially when it is dense, technical, or written for experts.",
                "Many farmers prefer local-language interaction; a product that assumes English-first excludes the people it aims to help.",
                "Diagnosis workflows can quickly become overwhelming — long forms, deep menus, and too many options increase cognitive load.",
                "Users need actionable guidance rather than information overload: a clear next step matters more than an exhaustive article.",
              ].map((t, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a9a9a]" />
                  <p className="text-lg leading-8 text-[#666]">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UX APPROACH */}
      <section className="border-y border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div>
              <span className="text-xs font-medium text-[#999]">02</span>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                UX approach
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
                The design is built around how someone in a field would
                actually use a phone — one-handed, in Hindi, with limited
                patience for menus. Every decision favors a single clear
                action over flexibility.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Hindi-first interaction", "Hindi is the default language, not a translation added afterward. Copy is conversational, not formal."],
                  ["Task-based information architecture", "Four destinations — Home, My Crop, Help, Settings — each tied to a clear task, not a category."],
                  ["Large touch targets", "Cards and buttons sized for field use, with generous padding and spacing between actions."],
                  ["Clear hierarchy", "One primary action per screen. Secondary actions are revealed progressively, not all at once."],
                  ["Progressive disclosure", "Details appear only when they help a decision. The first screen never asks for more than one thing."],
                  ["Simple card-based navigation", "Each entry point is a card with an icon and a label — scannable, not a wall of text."],
                  ["Accessibility-first", "High contrast, reduced motion, visible focus, and labels on every icon from the start."],
                  ["Mobile-first design", "Designed for a phone held in one hand. Desktop is a bonus, not the starting point."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-[#D5D3CA] bg-[#F5F4EF] p-6"
                  >
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#666]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USER FLOW */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <span className="text-xs font-medium text-[#999]">03</span>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              User flow
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
              The core experience moves from a no-login welcome through
              problem identification, photo or voice input, an AI-assisted
              result, and a saved observation.
            </p>

            {/* Flow visualization */}
            <div className="mt-12 flex flex-col gap-3">
              {flowSteps.map((s, i) => (
                <div key={s.n} className="flex items-stretch gap-3">
                  <div className="flex w-12 shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D5D3CA] bg-[#F5F4EF] text-sm font-medium">
                      {s.n}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="my-1 w-px flex-1 bg-[#D5D3CA]" />
                    )}
                  </div>
                  <div className="flex-1 rounded-2xl border border-[#D5D3CA] bg-[#F5F4EF] p-5">
                    <h3 className="text-base font-medium">{s.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#666]">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION ARCHITECTURE */}
      <section className="border-y border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div>
              <span className="text-xs font-medium text-[#999]">04</span>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                Information architecture
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
                The app is organized around four destinations, each tied to
                a clear task rather than a content category.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {iaSections.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-[#D5D3CA] bg-[#F5F4EF] p-6"
                  >
                    <span className="text-xs text-[#999]">0{i + 1}</span>
                    <h3 className="mt-3 text-xl font-medium">{s.label}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#666]">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <span className="text-xs font-medium text-[#999]">05</span>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Design system
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
              A consistent, agrarian visual language — warm, readable, and
              built for outdoor use and low digital literacy.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {designSystem.map((d) => (
                <div
                  key={d.label}
                  className="rounded-3xl border border-[#D5D3CA] bg-[#F5F4EF] p-6"
                >
                  <h3 className="text-lg font-medium">{d.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#666]">{d.text}</p>
                </div>
              ))}
            </div>

            {/* Color palette */}
            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
                Palette
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  ["#3b4a3a", "Leaf"],
                  ["#7a8c5a", "Sage"],
                  ["#c7b58d", "Wheat"],
                  ["#e8e6de", "Sand"],
                  ["#1c1c1c", "Ink"],
                  ["#f5f4ef", "Paper"],
                ].map(([color, name]) => (
                  <div
                    key={name}
                    className="overflow-hidden rounded-2xl border border-[#D5D3CA]"
                  >
                    <div className="h-20 w-full" style={{ backgroundColor: color }} />
                    <div className="bg-[#F5F4EF] px-3 py-2">
                      <p className="text-xs font-medium">{name}</p>
                      <p className="text-[10px] text-[#999]">{color}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI SCREENS */}
      <section className="border-y border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div>
              <span className="text-xs font-medium text-[#999]">06</span>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                UI screens
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
                The interface is organized as a simple, card-based flow.
                Each screen asks for one thing at a time.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {screens.map((s, i) => (
                  <div
                    key={s.label}
                    className="overflow-hidden rounded-3xl border border-[#D5D3CA] bg-[#F5F4EF]"
                  >
                    {/* Mini phone preview */}
                    <div className="flex items-center justify-center bg-[#E8E6DE] px-6 py-8">
                      <div className="relative h-44 w-24 overflow-hidden rounded-2xl border-[5px] border-[#1c1c1c] bg-[#f5f4ef]">
                        <div className="absolute left-1/2 top-1 h-1.5 w-8 -translate-x-1/2 rounded-full bg-[#1c1c1c]" />
                        <div className="flex h-full flex-col items-center justify-center gap-1.5 px-2 pt-3">
                          <div className="h-2 w-10 rounded-full bg-[#3b4a3a]/30" />
                          <div className="h-8 w-16 rounded-md bg-[#3b4a3a]/15" />
                          <div className="h-2 w-12 rounded-full bg-[#c7b58d]/40" />
                          <div className="h-6 w-14 rounded-md bg-[#7a8c5a]/25" />
                          <div className="h-2 w-10 rounded-full bg-[#9a9a9a]/30" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-[#999]">0{i + 1}</span>
                      <h3 className="mt-2 text-base font-medium">{s.label}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#666]">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Figma CTA */}
              <div className="mt-12 rounded-3xl border border-[#D5D3CA] bg-[#F5F4EF] p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
                  Interactive prototype
                </p>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  View the interactive Figma prototype.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#666]">
                  The full flow — welcome through saved observations — is
                  explorable as an interactive Figma prototype.
                </p>
                <a
                  href={figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[#171717] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5"
                >
                  View interactive Figma prototype ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <span className="text-xs font-medium text-[#999]">07</span>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Accessibility
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
              Accessibility is a primary design constraint for this
              product, not a checklist applied at the end. These
              considerations shaped the information architecture, color
              system, and interaction model from the first screen.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {accessibility.map((a) => (
                <div
                  key={a.title}
                  className="rounded-3xl border border-[#D5D3CA] bg-[#ECEBE4] p-6"
                >
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#666]">{a.text}</p>
                </div>
              ))}
            </div>

            {/* Research integrity note */}
            <div className="mt-12 rounded-3xl border border-[#D5D3CA] bg-[#F5F4EF] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888]">
                Design considerations, not validated research
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#666]">
                The accessibility decisions above are design considerations
                based on established inclusive-design principles, not the
                result of field testing with farmers. A future iteration
                would include usability testing with real users across
                digital-literacy levels to validate whether the flow
                remains understandable in real-world conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="border-y border-[#D5D3CA] bg-[#191A19] text-[#F5F4EF]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div>
              <span className="text-xs font-medium text-[#858d89]">08</span>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                Implementation
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A7A6A0]">
                The interface was implemented as a working web application
                using the actual stack from the repository — not a mockup.
                The live demo is fully interactive.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-[#c9ccc9]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-7 py-3.5 text-sm text-[#171717] transition hover:-translate-y-0.5"
                >
                  Live Demo ↗
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-7 py-3.5 text-sm transition hover:bg-white/5"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="mx-auto max-w-[1000px] px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <span className="text-xs font-medium text-[#999]">09</span>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Outcome
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
              Khet demonstrates end-to-end product thinking — from user
              flow and information architecture to a working, accessible
              frontend.
            </p>

            <div className="mt-10 space-y-5">
              {[
                ["UX thinking", "A task-based flow that reduces cognitive load and asks for one thing at a time."],
                ["UI design", "A consistent, agrarian visual system built for outdoor readability and low digital literacy."],
                ["Figma workflow", "An interactive prototype covering the full flow, not just key screens."],
                ["Responsive design", "Mobile-first layout that adapts cleanly to tablet and desktop."],
                ["Accessibility", "Hindi-first, high contrast, reduced motion, labeled icons, and visible focus from the start."],
                ["AI-assisted product thinking", "AI used to explain and guide, not to overwhelm — a clear next step over an exhaustive answer."],
                ["Frontend implementation", "A working web app in React, TypeScript, and Tailwind — not just a mockup."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-t border-[#D5D3CA] pt-5"
                >
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#666]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="border-t border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            Links
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#171717] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5"
            >
              Live Demo ↗
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#CCCAC1] px-7 py-3.5 text-sm transition hover:bg-white"
            >
              GitHub ↗
            </a>
            <a
              href={figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#CCCAC1] px-7 py-3.5 text-sm transition hover:bg-white"
            >
              Figma Prototype ↗
            </a>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            Back to portfolio
          </p>
          <Link
            href="/#work"
            className="group mt-5 flex items-end justify-between"
          >
            <div>
              <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-8xl">
                All projects
              </h2>
              <p className="mt-3 text-lg text-[#666]">
                FitBuddy · Heartune · Dite · Khet
              </p>
            </div>
            <span className="text-4xl transition-transform group-hover:translate-x-2">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function Meta({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-t border-[#D5D3CA] pt-4">
      <p className="text-xs uppercase tracking-[0.18em] text-[#999]">{title}</p>
      <p className="mt-3 text-sm text-[#444]">{value}</p>
    </div>
  );
}
