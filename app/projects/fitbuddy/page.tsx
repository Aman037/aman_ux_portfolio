import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "The Challenge",
    text: "How might we make real-time fitness feedback easier to understand and act on while a user is actively exercising?",
  },
  {
    number: "02",
    title: "Understanding the Experience",
    text: "FitBuddy brings together camera-based posture detection, visual feedback and conversational assistance. The interface therefore needs to communicate information quickly without pulling the user's attention away from the exercise itself.",
  },
  {
    number: "03",
    title: "Interaction Flow",
    text: "The core experience moves from choosing an exercise, starting the camera, detecting posture, receiving feedback, correcting the movement and completing the exercise.",
  },
  {
    number: "04",
    title: "Design Decisions",
    text: "The interface prioritizes clear hierarchy, immediate feedback, simple interaction states and minimal interaction during exercise.",
  },
  {
    number: "05",
    title: "Accessibility",
    text: "Hands-free voice feedback provides an additional interaction channel while clear visual states help users understand what is happening without relying on a single sensory cue.",
  },
];

export default function FitBuddyPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#171717]">
      {/* NAV */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.02em]"
        >
          ← AMAN PANDEY
        </Link>

        <span className="text-xs uppercase tracking-[0.18em] text-[#999]">
          Case Study 01
        </span>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#888]">
          AI Fitness Coach · UX/UI · Accessibility
        </p>

        <h1 className="mt-6 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
          FitBuddy
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F5E59] md:text-2xl">
          Designing a hands-free fitness coaching experience around
          real-time posture feedback, conversational assistance and
          accessible interaction.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "UX Design",
            "UI Design",
            "Accessibility",
            "Computer Vision",
            "Interaction Design",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#CCCAC1] px-4 py-2 text-xs text-[#555]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* HERO VISUAL */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-[#D5D3CA] bg-[#E8E6DE] p-6 md:min-h-[700px] md:p-12">
          <div className="absolute left-[6%] right-[6%] top-[8%] overflow-hidden rounded-[20px] border border-[#C9C7BE] bg-[#F8F7F2] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <div className="flex h-11 items-center gap-2 border-b border-[#DDDAD1] px-5">
              <span className="h-2 w-2 rounded-full bg-[#C8C6BD]" />
              <span className="h-2 w-2 rounded-full bg-[#C8C6BD]" />
              <span className="h-2 w-2 rounded-full bg-[#C8C6BD]" />
            </div>

            <div className="grid min-h-[350px] grid-cols-12 gap-4 p-5 md:min-h-[500px] md:p-8">
              <div className="col-span-3 rounded-2xl bg-[#E3E1D9]" />

              <div className="col-span-9 space-y-4">
                <div className="h-16 rounded-2xl bg-[#E5E3DB]" />

                <div className="grid flex-1 grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#DDDCD4]" />
                  <div className="rounded-2xl bg-[#ECEAE3]" />
                </div>
              </div>
            </div>
          </div>

          <p className="absolute bottom-7 left-7 text-xs uppercase tracking-[0.18em] text-[#8A8983]">
            FitBuddy · Product Interface
          </p>
        </div>
      </section>

      {/* PROJECT META */}
      <section className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-4 md:px-10">
        <Meta title="Role" value="UX/UI Design + Development" />
        <Meta title="Focus" value="Accessibility + Interaction" />
        <Meta title="Platform" value="Web Application" />
        <Meta title="Year" value="2026" />
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-[1000px] px-6 pb-32 md:px-10">
        {sections.map((section) => (
          <section
            key={section.number}
            className="border-t border-[#D5D3CA] py-14 md:py-20"
          >
            <div className="grid gap-8 md:grid-cols-[180px_1fr]">
              <div>
                <span className="text-xs font-medium text-[#999]">
                  {section.number}
                </span>
              </div>

              <div>
                <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                  {section.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
                  {section.text}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* RESEARCH INTEGRITY */}
        <section className="border-t border-[#D5D3CA] py-14 md:py-20">
          <div className="rounded-3xl bg-[#ECEBE4] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#888]">
              Next Research Step
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
              Validate the experience with real users.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#666]">
              A future iteration would include structured usability
              testing with people across different levels of fitness
              experience and digital familiarity. This would help
              validate whether feedback is understandable during
              active exercise and whether the interaction remains
              accessible in real-world conditions.
            </p>
          </div>
        </section>

        {/* FIGMA CTA */}
        <section className="border-t border-[#D5D3CA] py-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            Prototype
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">
            Explore the interface.
          </h2>

          <p className="mt-5 max-w-xl text-[#666]">
            The interactive prototype and detailed interface exploration
            will live in the accompanying Figma project.
          </p>

          {/* Add your real Figma URL here later */}
          <div className="mt-8">
            <span className="inline-flex rounded-full border border-[#CCCAC1] px-6 py-3 text-sm text-[#888]">
              Figma prototype coming next
            </span>
          </div>
        </section>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-[#D5D3CA] bg-[#ECEBE4]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            Next project
          </p>

          <Link
            href="/projects/heartune"
            className="group mt-5 flex items-end justify-between"
          >
            <div>
              <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-8xl">
                Heartune
              </h2>

              <p className="mt-3 text-lg text-[#666]">
                Music-based Discovery
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

function Meta({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-t border-[#D5D3CA] pt-4">
      <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
        {title}
      </p>

      <p className="mt-3 text-sm text-[#444]">
        {value}
      </p>
    </div>
  );
}