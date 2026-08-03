import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    n: "01",
    name: "Developing a compelling strategy",
    body: "We start from your goals and build the account strategy around them, not around a template.",
  },
  {
    n: "02",
    name: "Keyword research",
    body: "We find the high-intent keywords worth bidding on and the ones worth avoiding.",
  },
  {
    n: "03",
    name: "Writing compelling ad copy",
    body: "We write ads that match intent and earn the click from the right searcher.",
  },
  {
    n: "04",
    name: "Campaign setup and targeting",
    body: "We structure campaigns and targeting deliberately, so budget goes where it performs.",
  },
  {
    n: "05",
    name: "Testing and optimizing",
    body: "We test systematically and refine continuously, cutting what doesn't work.",
  },
  {
    n: "06",
    name: "Reporting and analysis",
    body: "We report against revenue and return, so you see what the spend is producing.",
  },
] as const;

export function GoogleAdsProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_80%_20%,rgba(70,76,159,0.28),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Our process"
          title="How does our PPC process work?"
          sub="Through strategic A/B testing on keywords, we continuously refine campaigns to meet your goals."
          onDark
          className="mb-12 max-w-[760px] md:mb-14"
        />

        <div className="hidden xl:block">
          <div className="relative mb-9">
            <div
              className="absolute top-[22px] right-[6%] left-[6%] h-0.5 bg-linear-to-r from-indigo-500 via-indigo-400 to-tangerine-400"
              aria-hidden
            />
            <ol className="relative m-0 grid list-none grid-cols-6 gap-3 p-0">
              {PHASES.map((phase, i) => (
                <li key={phase.n} className="flex justify-center">
                  <span
                    className={cn(
                      "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-navy-950 font-bold font-mono text-[12.5px]",
                      i === PHASES.length - 1
                        ? "border-tangerine-400 text-tangerine-400"
                        : "border-indigo-400 text-indigo-300",
                    )}
                  >
                    {phase.n}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <ol className="m-0 grid list-none grid-cols-6 gap-3 p-0">
            {PHASES.map((phase) => (
              <li
                key={phase.n}
                className="rounded-(--r-lg) border border-white/12 bg-white/4 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <h3 className="mb-2 font-sans font-semibold text-[14.5px] text-white leading-snug tracking-[-0.015em]">
                  {phase.name}
                </h3>
                <p className="m-0 font-sans text-[12.5px] text-slate-400 leading-relaxed">
                  {phase.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="relative m-0 flex list-none flex-col gap-5 p-0 xl:hidden">
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[21px] w-0.5 bg-linear-to-b from-indigo-500 via-indigo-400 to-tangerine-400"
            aria-hidden
          />
          {PHASES.map((phase, i) => {
            const isLast = i === PHASES.length - 1;
            return (
              <li
                key={phase.n}
                className="relative grid grid-cols-[44px_1fr] items-start gap-4"
              >
                <span
                  className={cn(
                    "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-navy-950 font-bold font-mono text-[12.5px]",
                    isLast
                      ? "border-tangerine-400 text-tangerine-400"
                      : "border-indigo-400 text-indigo-300",
                  )}
                >
                  {phase.n}
                </span>
                <div className="rounded-(--r-lg) border border-white/12 bg-white/4 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <h3 className="mb-2 font-sans font-semibold text-[17px] text-white leading-snug tracking-[-0.015em]">
                    {phase.name}
                  </h3>
                  <p className="m-0 font-sans text-[14px] text-slate-400 leading-relaxed">
                    {phase.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
