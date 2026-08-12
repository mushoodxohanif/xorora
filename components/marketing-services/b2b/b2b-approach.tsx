import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STEPS = [
  {
    name: "Buyers",
    body: "We build a deep understanding of who your buyers are and what actually influences their decisions.",
    role: "center" as const,
  },
  {
    name: "Strategy",
    body: "Every program is shaped around your buyers, your market, and how decisions get made in your space.",
    role: "orbit" as const,
  },
  {
    name: "Execution",
    body: "We run the program across the right channels, with the right message, for the right people.",
    role: "orbit" as const,
  },
] as const;

export function B2bApproach() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Our approach"
        title="Our approach"
        sub="Understanding your buyers isn't a step in our process. It's the foundation everything else is built on. Audience, strategy, and execution, each one informed by who your buyers are and how they decide."
        className="mb-12 max-w-[720px]"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Orbital diagram */}
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="rgba(70,76,159,0.28)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <circle
              cx="200"
              cy="200"
              r="95"
              fill="none"
              stroke="rgba(70,76,159,0.18)"
              strokeWidth="1"
            />
            {/* Arc connectors Strategy <-> Buyers <-> Execution */}
            <path
              d="M 200 50 Q 280 120 200 200"
              fill="none"
              stroke="rgba(255,140,66,0.5)"
              strokeWidth="1.5"
            />
            <path
              d="M 200 350 Q 120 280 200 200"
              fill="none"
              stroke="rgba(70,76,159,0.5)"
              strokeWidth="1.5"
            />
            <path
              d="M 200 50 Q 320 200 200 350"
              fill="none"
              stroke="rgba(70,76,159,0.28)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M 200 50 Q 80 200 200 350"
              fill="none"
              stroke="rgba(70,76,159,0.28)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          {/* Center: Buyers */}
          <div className="absolute top-1/2 left-1/2 z-10 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-tangerine-400 bg-navy-900 shadow-[0_12px_40px_-12px_rgba(8,12,40,0.45)]">
            <span className="font-mono text-[10px] text-tangerine-400 tracking-[0.14em] uppercase">
              Core
            </span>
            <span className="mt-1 font-sans font-bold text-[18px] text-white">
              Buyers
            </span>
          </div>

          {/* Strategy (top) */}
          <div className="absolute top-0 left-1/2 z-10 flex h-[88px] w-[88px] -translate-x-1/2 flex-col items-center justify-center rounded-full border border-indigo-300/50 bg-indigo-50 shadow-sm">
            <span className="font-sans font-semibold text-[13px] text-navy-900">
              Strategy
            </span>
          </div>

          {/* Execution (bottom) */}
          <div className="absolute bottom-0 left-1/2 z-10 flex h-[88px] w-[88px] -translate-x-1/2 flex-col items-center justify-center rounded-full border border-indigo-300/50 bg-indigo-50 shadow-sm">
            <span className="font-sans font-semibold text-[13px] text-navy-900">
              Execution
            </span>
          </div>

          {/* Side orbit markers */}
          <div className="absolute top-1/2 left-0 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-indigo-400/70" />
          <div className="absolute top-1/2 right-0 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-tangerine-400/80" />
        </div>

        {/* Step copy */}
        <ol className="m-0 flex list-none flex-col gap-6 p-0">
          {STEPS.map((step, i) => (
            <li
              key={step.name}
              className="rounded-(--r-lg) border border-border bg-slate-50 p-5"
            >
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-mono text-[12px] text-tangerine-600">
                  0{i + 1}
                </span>
                <h3 className="m-0 font-sans font-semibold text-[18px] text-fg1">
                  {step.name}
                </h3>
              </div>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </LightSection>
  );
}
