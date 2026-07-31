import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    name: "Discovery and strategy",
    duration: "1–3 days",
    body: "AI agents analyze your requirements and market data to build a precise blueprint.",
  },
  {
    n: "02",
    name: "Architecture and design",
    duration: "3–5 days",
    body: "AI-first system design with UX prototypes and technical planning.",
  },
  {
    n: "03",
    name: "AI sprint build",
    duration: "1–4 weeks",
    body: "Specialists work in parallel at high velocity, with continuous integration from day one.",
  },
  {
    n: "04",
    name: "QA and launch",
    duration: "2–3 days",
    body: "Automated testing validates every component, with zero-downtime deployment.",
  },
  {
    n: "05",
    name: "Iterate and scale",
    duration: "Ongoing",
    body: "AI agents monitor, optimize, and ship improvements, so the system keeps evolving after launch.",
  },
] as const;

/**
 * Static 5-column horizontal stepper with a connecting line and duration
 * chips. Distinct from AAD's clickable pipeline, MDS's vertical rail, and
 * the shared StepApproach component.
 */
export function WfaProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-surface px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div
        className="-top-24 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[420px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(70,76,159,0.10)_0%,transparent_68%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Our process"
          title="How we deliver your AI workflow automation project"
          sub="Our AI engineer orchestrates a team of AI agents across five stages, from blueprint to ongoing scale."
          className="mb-12 max-w-[760px] md:mb-14"
        />

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:block">
          <div className="relative mb-8">
            <div
              className="absolute top-5 right-[10%] left-[10%] h-0.5 bg-linear-to-r from-xo-indigo via-indigo-400 to-tangerine-400"
              aria-hidden
            />
            <ol className="relative m-0 grid list-none grid-cols-5 gap-4 p-0">
              {STEPS.map((step) => (
                <li key={step.n} className="flex flex-col items-center">
                  <span className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-200 bg-white font-bold font-mono text-[12px] text-xo-indigo shadow-sm">
                    {step.n}
                  </span>
                  <span className="mb-2 rounded-full border border-border bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-fg2 uppercase tracking-[0.08em]">
                    {step.duration}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <ol className="m-0 grid list-none grid-cols-5 gap-4 p-0">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="rounded-(--r-lg) border border-border bg-white p-5 shadow-sm"
              >
                <h3 className="mb-2.5 font-sans font-semibold text-[16.5px] text-fg1 leading-snug tracking-[-0.015em]">
                  {step.name}
                </h3>
                <p className="m-0 font-sans text-[13.5px] text-fg2 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: stacked */}
        <ol className="relative m-0 flex list-none flex-col gap-5 p-0 lg:hidden">
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[19px] w-0.5 bg-linear-to-b from-xo-indigo via-indigo-400 to-tangerine-400"
            aria-hidden
          />
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <li
                key={step.n}
                className="relative grid grid-cols-[40px_1fr] items-start gap-4"
              >
                <span
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white font-bold font-mono text-[12px] shadow-sm",
                    isLast
                      ? "border-tangerine-400 text-tangerine-500"
                      : "border-indigo-200 text-xo-indigo",
                  )}
                >
                  {step.n}
                </span>
                <div className="rounded-(--r-lg) border border-border bg-white p-5 shadow-sm">
                  <div className="mb-2 flex flex-wrap items-center gap-2.5">
                    <h3 className="m-0 font-sans font-semibold text-[17px] text-fg1 leading-snug tracking-[-0.015em]">
                      {step.name}
                    </h3>
                    <span className="rounded-full border border-border bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] text-fg2 uppercase tracking-[0.08em]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="m-0 font-sans text-[14px] text-fg2 leading-relaxed">
                    {step.body}
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
