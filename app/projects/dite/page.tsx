import Link from "next/link";

export default function DitePage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#171717]">

      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="text-sm font-semibold">
          ← AMAN PANDEY
        </Link>

        <span className="text-xs uppercase tracking-[0.2em] text-[#888]">
          Case Study 03
        </span>
      </header>


      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-24 md:px-10 md:pt-32">

        <p className="text-xs uppercase tracking-[0.22em] text-[#888]">
          UX / Information Architecture / AI
        </p>

        <h1 className="mt-6 text-7xl font-medium tracking-[-0.07em] md:text-9xl">
          Dite
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-8 text-[#666] md:text-2xl">
          Designing a simpler path from personal goals and food preferences
          to an actionable nutrition plan.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "UX Design",
            "AI",
            "Information Architecture",
            "Product Design",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#CCCAC1] px-4 py-2 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>


        {/* ACTIONS */}
        <div className="mt-12 flex flex-wrap gap-3">

          <a
            href="https://task-diet-app.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#171717] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5"
          >
            View live product ↗
          </a>

          <a
            href="#case-study"
            className="rounded-full border border-[#CCCAC1] px-7 py-3.5 text-sm transition hover:bg-white"
          >
            Explore the case study ↓
          </a>

        </div>

      </section>


      <section
        id="case-study"
        className="border-y border-[#D5D3CA]"
      >

        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:grid-cols-2 md:px-10">

          <div>

            <p className="text-xs uppercase tracking-[0.22em] text-[#888]">
              The challenge
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Turning personal requirements into understandable choices.
            </h2>

          </div>

          <p className="self-end text-lg leading-8 text-[#666]">
            Dite explores how a nutrition product can collect relevant
            user preferences and transform them into recommendations
            without overwhelming the user with information.
          </p>

        </div>

      </section>


      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">

        <p className="text-xs uppercase tracking-[0.22em] text-[#888]">
          Experience structure
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {[
            [
              "01",
              "Understand",
              "Capture the user's goal, preferences, and relevant constraints.",
            ],
            [
              "02",
              "Generate",
              "Translate those inputs into a personalized nutrition plan.",
            ],
            [
              "03",
              "Act",
              "Present recommendations in a form that is easy to follow.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-[#D5D3CA] bg-[#ECEBE4] p-8"
            >

              <span className="text-xs text-[#999]">
                {number}
              </span>

              <h3 className="mt-14 text-2xl font-medium">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-[#666]">
                {text}
              </p>

            </div>
          ))}

        </div>

      </section>


      <section className="bg-[#191A19] text-[#F5F4EF]">

        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">

          <p className="text-xs uppercase tracking-[0.22em] text-[#999]">
            Reflection
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Good personalization should reduce cognitive load,
            not add to it.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A7A6A0]">
            The central design consideration is keeping recommendations
            understandable and actionable while still giving users enough
            control over the inputs that shape their experience.
          </p>

        </div>

      </section>


      <footer className="mx-auto flex max-w-[1200px] justify-between px-6 py-10 text-xs text-[#888] md:px-10">

        <Link href="/">
          ← Back to portfolio
        </Link>

        <span>
          Aman Pandey · 2026
        </span>

      </footer>

    </main>
  );
}