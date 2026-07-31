import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    n: "01",
    name: "Diagnostic",
    body: "We run regular, in-depth site audits, so your website stands up to the demands of modern search.",
  },
  {
    n: "02",
    name: "Prioritization",
    body: "We rank issues by impact, so the work that moves pipeline happens first, not last.",
  },
  {
    n: "03",
    name: "Recommendation",
    body: "We translate findings into clear, revenue-tied recommendations your team can act on.",
  },
  {
    n: "04",
    name: "Implementation",
    body: "We don't set and forget. New issues get spotted, prioritized, and resolved before they threaten results.",
  },
  {
    n: "05",
    name: "Results",
    body: "We report against pipeline and revenue, so you see what the work is actually producing.",
  },
] as const;

export function SeoProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_80%_20%,rgba(70,76,159,0.28),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Our process"
          title="A technical SEO process focused on the bottom line"
          sub="Auditing, analyzing, and optimizing. We address the most pressing technical SEO issues first. Like investing, the more we put in upfront, the more your results compound."
          onDark
          className="mb-12 max-w-[760px] md:mb-14"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-9">
            <div
              className="absolute top-[22px] right-[10%] left-[10%] h-0.5 bg-linear-to-r from-indigo-500 via-indigo-400 to-tangerine-400"
              aria-hidden
            />
            <ol className="relative m-0 grid list-none grid-cols-5 gap-5 p-0">
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
          <ol className="m-0 grid list-none grid-cols-5 gap-5 p-0">
            {PHASES.map((phase) => (
              <li
                key={phase.n}
                className="rounded-(--r-lg) border border-white/12 bg-white/4 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <h3 className="mb-2.5 font-sans font-semibold text-[16.5px] text-white leading-snug tracking-[-0.015em]">
                  {phase.name}
                </h3>
                <p className="m-0 font-sans text-[13.5px] text-slate-400 leading-relaxed">
                  {phase.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="relative m-0 flex list-none flex-col gap-5 p-0 lg:hidden">
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
