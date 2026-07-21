import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CHALLENGES = [
  {
    value: 45,
    title: "45% run over budget",
    body: "Nearly half of projects exceed budget because the initial scoping was too thin to plan against.",
    source: "Project Management Institute (PMI)",
  },
  {
    value: 70,
    title: "70% miss expectations",
    body: "Most digital initiatives fall short when stakeholders never truly aligned on what was being built.",
    source: 'McKinsey, "Delivering large-scale IT projects"',
  },
  {
    value: 67,
    title: "67% slow to deliver",
    body: "Unclear requirements stall delivery, forcing teams to rework decisions that should have been made up front.",
    source: "Geneca",
  },
] as const;

const CHART_W = 160;
const CHART_H = 112;
const PAD_L = 28;
const PAD_R = 8;
const PAD_T = 10;
const PAD_B = 18;
const PLOT_W = CHART_W - PAD_L - PAD_R;
const PLOT_H = CHART_H - PAD_T - PAD_B;
const TICKS = [0, 50, 100] as const;

function StatBarChart({ value }: { value: number }) {
  const barH = (value / 100) * PLOT_H;
  const barX = PAD_L + PLOT_W * 0.28;
  const barW = PLOT_W * 0.44;
  const barY = PAD_T + PLOT_H - barH;
  const baselineY = PAD_T + PLOT_H;

  return (
    <div className="mb-6 w-full" aria-hidden>
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        className="mx-auto h-auto w-full max-w-[200px]"
        role="img"
      >
        <title>{`${value}%`}</title>
        {TICKS.map((tick) => {
          const y = PAD_T + PLOT_H - (tick / 100) * PLOT_H;
          return (
            <g key={tick}>
              <line
                x1={PAD_L}
                y1={y}
                x2={CHART_W - PAD_R}
                y2={y}
                stroke="var(--border, #E2E6F0)"
                strokeWidth={1}
              />
              <text
                x={PAD_L - 6}
                y={y + 3}
                textAnchor="end"
                className="fill-slate-400"
                style={{ fontSize: 9, fontFamily: "var(--font-sans, sans-serif)" }}
              >
                {tick}
              </text>
            </g>
          );
        })}
        <line
          x1={PAD_L}
          y1={PAD_T}
          x2={PAD_L}
          y2={baselineY}
          stroke="var(--border-strong, #C8CEDC)"
          strokeWidth={1.25}
        />
        <line
          x1={PAD_L}
          y1={baselineY}
          x2={CHART_W - PAD_R}
          y2={baselineY}
          stroke="var(--border-strong, #C8CEDC)"
          strokeWidth={1.25}
        />
        <rect
          x={barX}
          y={PAD_T}
          width={barW}
          height={PLOT_H}
          rx={4}
          fill="var(--indigo-50, #EEF1FB)"
        />
        <rect
          x={barX}
          y={barY}
          width={barW}
          height={barH}
          rx={4}
          fill="var(--xo-indigo, #2C57C9)"
        />
        <text
          x={barX + barW / 2}
          y={Math.max(barY - 6, PAD_T + 10)}
          textAnchor="middle"
          className="fill-xo-indigo"
          style={{
            fontSize: 13,
            fontWeight: 800,
            fontFamily: "var(--font-sans, sans-serif)",
          }}
        >
          {value}%
        </text>
      </svg>
    </div>
  );
}

export function DwChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Where projects go wrong"
        title="Do any of these early-stage problems sound familiar?"
        sub="Most software risk is set before development starts. Weak scoping and unclear requirements cost you time and budget you can't get back."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {CHALLENGES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
          >
            <StatBarChart value={item.value} />
            <h3 className="mb-2.5 text-center font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.title}
            </h3>
            <p className="m-0 flex-1 text-center font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
            </p>
            <p className="mt-5 m-0 text-center font-sans text-[12.5px] text-slate-400 leading-snug">
              Source: {item.source}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
