import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    n: "01",
    name: "Onboarding and data collection",
    body: "We meet the team, walk you through the process, and collect access to your site, Google Business Profile, and Analytics to understand your needs.",
  },
  {
    n: "02",
    name: "Comprehensive audit and analysis",
    body: "We audit your site for optimization opportunities, run a local market analysis, and do keyword and content-gap research to build a content plan.",
  },
  {
    n: "03",
    name: "Strategy development and planning",
    body: "We develop a local SEO strategy covering on-page optimization, local listings, and content, and set milestones and KPIs to measure success.",
  },
  {
    n: "04",
    name: "Implementation and optimization",
    body: "We implement the strategy, optimizing your site, creating local content, and managing listings, then continuously tune it to your goals and market.",
  },
  {
    n: "05",
    name: "Reporting and communication",
    body: "We share regular reports on progress, performance, and insights, and keep communication open through regular meetings and updates.",
  },
  {
    n: "06",
    name: "Review and continuous improvement",
    body: "We review performance against the goals and KPIs set at the start, and keep finding opportunities to improve.",
  },
] as const;

export function LocalSeoProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy-950 px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_80%_20%,rgba(70,76,159,0.28),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Our process"
          title="Our local SEO marketing process"
          sub="We follow a defined process to understand your business's local needs and build a strategy tailored to your goals."
          onDark
          className="mb-12 max-w-[760px] md:mb-14"
        />

        {/* Desktop: horizontal timeline */}
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

        {/* Tablet / mobile: vertical timeline */}
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
