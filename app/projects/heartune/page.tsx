import Link from "next/link";

export default function HeartunePage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#171717]">

      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="text-sm font-semibold">
          ← AMAN PANDEY
        </Link>

        <span className="text-xs uppercase tracking-[0.2em] text-[#888]">
          Case Study 02
        </span>
      </header>

      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-24 md:px-10 md:pt-32">

        <p className="text-xs uppercase tracking-[0.22em] text-[#888]">
          UX / Personalization / Social Discovery
        </p>

        <h1 className="mt-6 text-7xl font-medium tracking-[-0.07em] md:text-9xl">
          Heartune
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-8 text-[#666] md:text-2xl">
          Exploring how music preferences can become a more natural way
          for people to discover meaningful connections.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "UX Design",
            "Personalization",
            "Social Product",
            "Frontend",
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
            href="https://heartunebeta.vercel.app/"
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
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">

          <p className="text-xs uppercase tracking-[0.22em] text-[#888]">
            Interface Principles
          </p>

          <div className="mt-14 grid gap-12 md:grid-cols-3">

            {[
              [
                "01",
                "Make identity visible",
                "Let preferences communicate something about the person instead of treating them as background profile data.",
              ],
              [
                "02",
                "Reduce the blank page",
                "Give users meaningful context so that discovery feels purposeful rather than like browsing an endless list.",
              ],
              [
                "03",
                "Create a reason to talk",
                "Shared interests can act as conversation material, making the transition from discovery to connection more natural.",
              ],
            ].map(([number, title, text]) => (
              <div key={number}>

                <span className="text-4xl font-medium tracking-[-0.04em]">
                  {number}
                </span>

                <h3 className="mt-8 text-2xl font-medium">
                  {title}
                </h3>

                <p className="mt-5 leading-8 text-[#666]">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      <section className="bg-[#191A19] text-[#F5F4EF]">

        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">

          <p className="text-xs uppercase tracking-[0.22em] text-[#999]">
            Reflection
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Designing discovery around something people already care about.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A7A6A0]">
            Heartune is an exploration of personalization and social
            discovery, with the larger design question being how much
            context an interface should provide before asking users to
            connect.
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