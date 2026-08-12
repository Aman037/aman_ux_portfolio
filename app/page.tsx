import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    n: "01",
    title: "FitBuddy",
    type: "UX / UI / ACCESSIBILITY",
    sub: "AI Fitness Coach",
    desc: "Real-time pose detection, conversational AI, voice interaction, and accessible fitness feedback in one product.",
    live: "https://ai-fit-buddy.vercel.app/",
    case: "/projects/fitbuddy",
    bg: "from-cyan-50 via-stone-50 to-orange-50",
    accent: "#09a9d8",
  },
  {
    n: "02",
    title: "Heartune",
    type: "UX / PERSONALIZATION / SOCIAL DISCOVERY",
    sub: "Music-based Discovery",
    desc: "A music-driven discovery experience exploring how shared musical identity can create more meaningful connections.",
    live: "https://heartunebeta.vercel.app/",
    case: "/projects/heartune",
    bg: "from-[#171022] via-[#28152f] to-[#091423]",
    accent: "#d75bff",
    dark: true,
  },
  {
    n: "03",
    title: "Dite",
    type: "UX / INFORMATION ARCHITECTURE / AI",
    sub: "AI Diet Planner",
    desc: "An AI-powered nutrition experience turning goals and food preferences into structured, actionable recommendations.",
    live: "https://task-diet-app.onrender.com/",
    case: "/projects/dite",
    bg: "from-[#e5eee6] via-[#f5efe7] to-[#e8dfd3]",
    accent: "#5c8d70",
  },
  {
    n: "04",
    title: "Khet",
    type: "UX / UI / HINDI-FIRST / ACCESSIBILITY",
    sub: "AI-Assisted Farming Companion",
    desc: "A Hindi-first, mobile-first UX concept helping farmers understand crop problems and take practical next steps — with photo, voice, and AI-assisted guidance.",
    live: "https://khet-marg.vercel.app/",
    case: "/projects/khet",
    bg: "from-[#eef0e8] via-[#e4e8d8] to-[#d8dcc8]",
    accent: "#3b4a3a",
  },
];

const certs = [
  ["Python and Data Science — IBM", "https://courses.cognitiveclass.ai/certificates/4abfd31ed86142569fa53b7537f08ab9"],
  ["Cloud Computing — IBM", "https://www.credly.com/go/x6dM1Bg9"],
  ["Data Science Tools — IBM", "https://www.credly.com/go/TD0c6T2Z"],
  ["OCI 2025 AI Foundations Associate — Oracle", "https://drive.google.com/file/d/1nFOpucNsHAYPmWoVaB1pzRmbKmUYIlOh/view?usp=sharing"],
];

function BrowserChrome({ label, children, dark = false }: { label: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`relative h-full overflow-hidden rounded-[28px] border ${dark ? "border-white/15 bg-[#17151d]" : "border-black/10 bg-white/60"} shadow-[0_25px_80px_rgba(0,0,0,0.12)]`}>
      <div className={`flex h-11 items-center gap-2 border-b px-4 ${dark ? "border-white/10" : "border-black/10"}`}>
        <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-black/15"}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-black/15"}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-black/15"}`} />
        <span className={`ml-3 text-[10px] uppercase tracking-[.2em] ${dark ? "text-white/45" : "text-black/40"}`}>{label}</span>
      </div>
      {children}
    </div>
  );
}

function HeartunePreview() {
  return (
    <BrowserChrome label="heartune.app" dark>
      <div className="relative h-[390px] overflow-hidden bg-[#090b16] md:h-[470px]">
        <Image
          src="/heartune-preview.png"
          alt="Heartune product preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a13]/55 via-transparent to-transparent" />
      </div>
    </BrowserChrome>
  );
}

function KhetPreview() {
  return (
    <BrowserChrome label="khet-marg.vercel.app">
      <div className="relative flex h-[390px] items-center justify-center overflow-hidden bg-[#eef0e8] md:h-[470px]">
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#c7b58d]/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#7a8c5a]/30 blur-3xl" />

        {/* Phone mockup */}
        <div className="relative h-[360px] w-[180px] overflow-hidden rounded-[28px] border-[8px] border-[#1c1c1c] bg-[#f5f4ef] shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:h-[420px]">
          <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[#1c1c1c]" />
          <div className="flex h-full flex-col px-3 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#3b4a3a]">खेत</span>
              <span className="text-[7px] uppercase tracking-[.15em] text-[#999]">हिंदी</span>
            </div>
            <p className="mt-3 text-[11px] font-medium leading-tight text-[#1c1c1c]">फसल की समस्या पहचानें</p>
            <p className="mt-1 text-[7px] leading-3 text-[#777]">Understand crop problems, take next steps.</p>

            <div className="mt-3 space-y-2">
              <div className="rounded-lg border border-[#d5d3ca] bg-white p-2">
                <p className="text-[8px] font-medium text-[#3b4a3a]">फसल समस्या</p>
                <p className="text-[6px] text-[#999]">Identify a problem</p>
              </div>
              <div className="rounded-lg border border-[#d5d3ca] bg-white p-2">
                <p className="text-[8px] font-medium text-[#3b4a3a]">आज के काम</p>
                <p className="text-[6px] text-[#999]">Today&apos;s tasks</p>
              </div>
              <div className="rounded-lg border border-[#d5d3ca] bg-white p-2">
                <p className="text-[8px] font-medium text-[#3b4a3a]">मौसम</p>
                <p className="text-[6px] text-[#999]">Weather</p>
              </div>
            </div>

            <div className="mt-auto mb-2 flex justify-around border-t border-[#d5d3ca] pt-2">
              <span className="text-[7px] font-medium text-[#3b4a3a]">होम</span>
              <span className="text-[7px] text-[#999]">मेरी फसल</span>
              <span className="text-[7px] text-[#999]">सहायता</span>
              <span className="text-[7px] text-[#999]">सेटिंग</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function DitePreview() {
  return (
    <BrowserChrome label="dite.app">
      <div className="relative h-[390px] overflow-hidden bg-[#f4f1e9] p-6 md:h-[470px] md:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b9d3bd]/70 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#e8cdb6]/55 blur-3xl" />

        <div className="relative h-full rounded-[22px] border border-[#d9d7ce] bg-[#fbfaf6]/90 p-5 shadow-sm md:p-7">
          <div className="flex items-center justify-between border-b border-[#e1dfd6] pb-4">
            <div>
              <p className="text-[9px] uppercase tracking-[.22em] text-[#7c857e]">Dite</p>
              <p className="mt-1 text-sm font-medium text-[#242624]">Your nutrition plan</p>
            </div>
            <span className="rounded-full bg-[#e7eee6] px-3 py-1 text-[9px] text-[#55725c]">Personalized</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#dedcd3] bg-white/80 p-4">
              <p className="text-[9px] uppercase tracking-[.18em] text-[#8b918c]">Goal</p>
              <p className="mt-2 text-lg font-medium text-[#252825]">Healthy gain</p>
              <p className="mt-1 text-[10px] text-[#7a817b]">Calorie-aware planning</p>
            </div>
            <div className="rounded-2xl border border-[#dedcd3] bg-white/80 p-4">
              <p className="text-[9px] uppercase tracking-[.18em] text-[#8b918c]">Preference</p>
              <p className="mt-2 text-lg font-medium text-[#252825]">Flexible</p>
              <p className="mt-1 text-[10px] text-[#7a817b]">Food choices considered</p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-[#dedcd3] bg-[#edf3eb] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[#334338]">Today&apos;s plan</p>
              <span className="text-[9px] text-[#6e7e72]">3 meals · 2 snacks</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Breakfast", "Oats + fruit"],
                ["Lunch", "Paneer bowl"],
                ["Dinner", "Dal + rice"],
              ].map(([meal, food]) => (
                <div key={meal} className="rounded-xl bg-white/75 p-3">
                  <p className="text-[8px] uppercase tracking-[.14em] text-[#89938c]">{meal}</p>
                  <p className="mt-2 text-[10px] font-medium text-[#343934]">{food}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#dfe5dc]">
            <div className="h-full w-[74%] rounded-full bg-[#6f9b79]" />
          </div>
          <p className="mt-2 text-[9px] text-[#7c847e]">Recommendations organized around your inputs.</p>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f0efe9] text-[#171717]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f0efe9]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-[1500px] items-center justify-between px-6 md:px-10">
          <Link href="#top" className="text-sm font-bold">AMAN PANDEY</Link>
          <nav className="hidden gap-8 text-sm text-[#596067] md:flex">
            <Link href="#work">Work</Link>
            <Link href="#approach">Approach</Link>
            <Link href="#about">About</Link>
            <Link href="#credentials">Credentials</Link>
          </nav>
          <a href="mailto:amanpandey0369@gmail.com" className="rounded-full border border-black/15 px-5 py-2 text-sm hover:bg-black hover:text-white">Get in touch</a>
        </div>
      </header>

      <section id="top" className="relative min-h-[900px] border-b border-black/10 px-6 pt-32 md:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[#cfe6e4] blur-3xl opacity-70" />
          <div className="absolute right-[-180px] top-16 h-[620px] w-[620px] rounded-full bg-[#ead7cf] blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-[35%] h-[400px] w-[400px] rounded-full bg-[#e5ddca] blur-3xl opacity-50" />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] items-end gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="pb-10">
            <p className="mb-8 text-xs uppercase tracking-[.3em] text-[#64727b]">UX/UI Designer · Frontend Engineer · AI Products</p>
            <h1 className="text-[clamp(4.6rem,9.5vw,10rem)] font-medium leading-[.82] tracking-[-.075em]">
              Designing<br />experiences<br /><span className="text-[#8c8e8e]">for people.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#52616b] md:text-xl">
              I design clear, accessible digital experiences by connecting user needs, interaction design, prototyping, and frontend implementation — with a particular interest in AI-powered products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-[#171717] px-7 py-4 text-sm text-white">Explore my work ↓</a>
              <a href="/Aman_Pandey_Resume.pdf" download className="rounded-full border border-black/20 bg-white/40 px-7 py-4 text-sm">Download resume ↗</a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[450px] pb-5">
            <div className="rounded-[38px] border border-white/80 bg-white/45 p-3 shadow-2xl shadow-black/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px]">
                <Image src="/aman.jpeg" alt="Aman Pandey" fill priority className="object-cover object-[52%_34%]" sizes="450px" />
              </div>
              <div className="flex justify-between px-3 py-4 text-xs uppercase tracking-[.18em] text-[#68757c]">
                <span>Designer + Builder</span><span>India · 2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-[1500px] grid-cols-2 border-t border-black/10 pt-5 text-sm text-[#68757c] md:grid-cols-4">
          <span>01 — Product thinking</span><span>02 — Interaction design</span><span>03 — Frontend craft</span><span className="text-right">04 — Applied AI</span>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1500px] px-6 py-28 md:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div><p className="text-xs uppercase tracking-[.25em] text-[#75818a]">Selected work</p><h2 className="mt-4 text-5xl font-medium tracking-[-.055em] md:text-7xl">Projects with a purpose.</h2></div>
          <p className="max-w-md text-base leading-7 text-[#65717a]">A selection across AI, accessibility, personalization, and information architecture — built as real products, not just screens.</p>
        </div>

        <div className="mt-12 space-y-7">
          {projects.map((p, i) => (
            <article key={p.title} className={`group overflow-hidden rounded-[34px] border border-black/10 bg-gradient-to-br ${p.bg} ${p.dark ? "text-white" : ""}`}>
              <div className="grid min-h-[540px] lg:grid-cols-[.8fr_1.2fr]">
                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                  <div className="flex justify-between text-xs uppercase tracking-[.22em] opacity-60"><span>{p.n}</span><span>{i === 0 ? "Featured" : ""}</span></div>
                  <div>
                    <p className="text-xs uppercase tracking-[.23em] opacity-60">{p.type}</p>
                    <h3 className="mt-5 text-6xl font-medium tracking-[-.065em] md:text-8xl">{p.title}</h3>
                    <p className="mt-3 text-xl opacity-75">{p.sub}</p>
                    <p className="mt-7 max-w-xl text-base leading-7 opacity-70">{p.desc}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href={p.case} className={`rounded-full px-6 py-3 text-sm ${p.dark ? "bg-white text-black" : "bg-[#171717] text-white"}`}>View case study ↗</Link>
                      <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full border border-current/20 px-6 py-3 text-sm">Live product ↗</a>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[380px] border-t border-black/10 lg:border-l lg:border-t-0">
                  {i === 0 ? (
                    <div className="absolute inset-5 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:inset-8">
                      <div className="flex h-10 items-center gap-2 border-b border-black/10 px-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-black/15" /><span className="h-2.5 w-2.5 rounded-full bg-black/15" /><span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                        <span className="ml-3 text-[10px] uppercase tracking-[.2em] text-black/40">fitbuddy.app</span>
                      </div>
                      <iframe src={p.live} title="FitBuddy AI Fitness Trainer" className="h-[440px] w-full border-0 md:h-[590px]" loading="lazy" />
                    </div>
                  ) : i === 1 ? (
                    <div className="absolute inset-5 md:inset-8"><HeartunePreview /></div>
                  ) : i === 2 ? (
                    <div className="absolute inset-5 md:inset-8"><DitePreview /></div>
                  ) : (
                    <div className="absolute inset-5 md:inset-8"><KhetPreview /></div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-white/10 bg-[#191a19] px-6 py-28 text-[#f0efe9] md:px-10">
        <div className="mx-auto max-w-[1500px]"><p className="text-xs uppercase tracking-[.25em] text-[#9ca39f]">Approach</p><div className="mt-10 grid gap-14 lg:grid-cols-2"><h2 className="text-5xl font-medium tracking-[-.055em] md:text-7xl">I like the space where design decisions meet working software.</h2><div className="grid gap-9 sm:grid-cols-2">{["Understand","Structure","Prototype","Build"].map((x,i)=><div key={x} className="border-t border-white/15 pt-5"><span className="text-xs text-[#858d89]">0{i+1}</span><h3 className="mt-7 text-2xl">{x}</h3><p className="mt-3 leading-7 text-[#a9afac]">{["Start with the user, problem, and constraints.","Turn complexity into clear flows and hierarchy.","Explore, test, and refine the interaction.","Carry the design into responsive frontend code."][i]}</p></div>)}</div></div></div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1500px] gap-14 px-6 py-28 md:px-10 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="text-xs uppercase tracking-[.25em] text-[#75818a]">About</p><h2 className="mt-5 text-5xl font-medium tracking-[-.055em] md:text-7xl">A designer who can also ship it.</h2></div>
        <div className="grid gap-10 md:grid-cols-2"><div><p className="text-lg leading-8 text-[#56636c]">I&apos;m Aman Pandey, a Computer Science graduate interested in building simple, human-centered products at the intersection of design, frontend engineering, and AI.</p><p className="mt-6 text-lg leading-8 text-[#56636c]">My work spans interface design, UX research, responsive development, computer vision, recommendation systems, and conversational AI.</p></div><div className="rounded-[28px] border border-black/10 bg-white/45 p-7"><p className="text-xs uppercase tracking-[.2em] text-[#75818a]">Experience</p><div className="mt-8 space-y-7"><div><b>IBM · Full Stack Development Intern</b><p className="mt-1 text-sm text-[#69747b]">Sept 2023 — Nov 2023</p></div><div><b>IBM · Data Science Intern</b><p className="mt-1 text-sm text-[#69747b]">Oct 2024 — Dec 2024</p></div><div><b>B.Tech · Computer Science & Engineering</b><p className="mt-1 text-sm text-[#69747b]">2022 — 2026 · Lucknow</p></div></div></div></div>
      </section>

      <section id="credentials" className="border-t border-black/10 bg-[#dedfd9] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1500px]"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[.25em] text-[#69747b]">Credentials</p><h2 className="mt-4 text-5xl font-medium tracking-[-.05em] md:text-7xl">Selected certifications.</h2></div><a href="/Aman_Pandey_Resume.pdf" download className="w-fit rounded-full bg-[#171717] px-6 py-3 text-sm text-white">Download full resume ↓</a></div><div className="mt-12 grid gap-3 md:grid-cols-2">{certs.map(([t,h],i)=><a key={t} href={h} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#f0efe9] p-6 hover:-translate-y-1 hover:bg-white"><div><span className="text-xs text-[#8a9290]">0{i+1}</span><h3 className="mt-3 text-lg">{t}</h3></div><span>↗</span></a>)}</div></div>
      </section>

      <section id="contact" className="bg-[#171717] px-6 py-28 text-[#f0efe9] md:px-10">
        <div className="mx-auto max-w-[1500px]"><p className="text-xs uppercase tracking-[.25em] text-[#969b98]">Contact</p><div className="mt-7 flex flex-col justify-between gap-12 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-6xl font-medium tracking-[-.065em] md:text-8xl">Let&apos;s make something useful.</h2><div className="flex flex-col gap-3 text-sm text-[#b7bbb8]"><a href="mailto:amanpandey0369@gmail.com">amanpandey0369@gmail.com ↗</a><a href="https://www.linkedin.com/in/aman-pandey-aa6020253/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Aman037" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://gitlab.com/amanpandey3690" target="_blank" rel="noreferrer">GitLab ↗</a></div></div><div className="mt-24 flex justify-between border-t border-white/10 pt-6 text-xs text-[#858b88]"><span>AMAN PANDEY</span><span>© 2026</span></div></div>
      </section>
    </main>
  );
}
