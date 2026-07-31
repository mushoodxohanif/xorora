import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    name: "Studying the problem",
    body: "We start by studying your product needs and business challenges, documenting requirements and your vision to connect data and value.",
  },
  {
    n: "02",
    name: "Exploratory data analysis",
    body: "We review your data infrastructure and explore datasets to find anomalies, missing values, dependencies, and patterns.",
  },
  {
    n: "03",
    name: "Data preparation",
    body: "Before modeling, we prepare data by cleansing it and transforming it into a unified format.",
  },
  {
    n: "04",
    name: "Data modeling and evaluation",
    body: "Our data scientists train multiple models, then choose the best on accuracy, simplicity, and performance.",
  },
  {
    n: "05",
    name: "Designing the solution",
    body: "Whether a BI product, an ML algorithm, or a data management solution, we engineer, integrate, and test it as you adopt the new capabilities.",
  },
  {
    n: "06",
    name: "Support and maintenance",
    body: "We help you release new features, add tools and data sources, and integrate the product further into your workflow over time.",
  },
] as const;

/**
 * Six-stage data-pipeline rail: a continuous vertical line with numbered
 * nodes and cards alternating sides on desktop, stacked on mobile.
 * Intentionally distinct from StepApproach and the AAD phase pipeline.
 */
export function MdsProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-surface px-8 py-[clamp(72px,9vw,118px)]"
    >
      <div
        className="-top-24 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[420px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(70,76,159,0.10)_0%,transparent_68%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1080px]">
        <SectionHead
          label="Our approach"
          title="Our approach to machine learning and data science projects"
          sub="Six connected stages that take a project from business problem to a supported production solution."
          className="mb-12 max-w-[760px] md:mb-16"
        />

        <ol className="relative m-0 flex list-none flex-col gap-8 p-0 md:gap-10">
          {/* Pipeline rail */}
          <div
            className="md:-translate-x-1/2 pointer-events-none absolute top-2 bottom-2 left-[22px] w-0.5 bg-linear-to-b from-xo-indigo via-indigo-400 to-tangerine-400 md:left-1/2"
            aria-hidden
          />

          {STEPS.map((step, i) => {
            const onLeft = i % 2 === 0;
            const isLast = i === STEPS.length - 1;
            return (
              <li
                key={step.n}
                className="relative grid grid-cols-[44px_1fr] items-start gap-4 md:grid-cols-[1fr_72px_1fr] md:gap-0"
              >
                {/* Node */}
                <span
                  className={cn(
                    "relative z-10 flex h-11 w-11 items-center justify-center justify-self-start rounded-full border-2 bg-white font-bold font-mono text-[12.5px] shadow-sm md:col-start-2 md:justify-self-center",
                    isLast
                      ? "border-tangerine-400 text-tangerine-500"
                      : "border-indigo-200 text-xo-indigo",
                  )}
                >
                  {step.n}
                </span>

                {/* Card */}
                <div
                  className={cn(
                    "group relative rounded-(--r-lg) border border-border bg-white p-[clamp(20px,2.4vw,28px)] shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md md:row-start-1",
                    onLeft
                      ? "md:col-start-1 md:mr-1"
                      : "md:col-start-3 md:ml-1",
                  )}
                >
                  {/* Connector from card to rail (desktop) */}
                  <span
                    className={cn(
                      "pointer-events-none absolute top-[30px] hidden h-0.5 w-[38px] bg-indigo-200 md:block",
                      onLeft ? "-right-[38px]" : "-left-[38px]",
                    )}
                    aria-hidden
                  />
                  <p className="mb-1.5 font-mono text-[11px] text-fg3 uppercase tracking-[0.14em]">
                    Stage {step.n} / 06
                  </p>
                  <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1 leading-snug tracking-[-0.015em]">
                    {step.name}
                  </h3>
                  <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
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
