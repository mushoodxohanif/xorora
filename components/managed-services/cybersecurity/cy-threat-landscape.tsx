import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

type ThreatStat =
  | {
      kind: "percent";
      figure: string;
      value: number;
      body: string;
    }
  | {
      kind: "cost";
      figure: string;
      body: string;
    }
  | {
      kind: "days";
      figure: string;
      body: string;
    };

const STATS: ThreatStat[] = [
  {
    kind: "percent",
    figure: "88%",
    value: 88,
    body: "Of breaches at small and mid-sized businesses involved ransomware. Size is no longer a hiding place.",
  },
  {
    kind: "cost",
    figure: "$10.22M",
    body: "Average cost of a data breach in the United States, a record high, while the global average held at $4.44M.",
  },
  {
    kind: "percent",
    figure: "60%",
    value: 60,
    body: "Of breaches involved a human element, from a clicked phish to a reused password. People are the front line.",
  },
  {
    kind: "days",
    figure: "241",
    body: "Days, on average, to identify and contain a breach. Every day undetected is a day the damage compounds.",
  },
];

function PercentArc({ value }: { value: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20" aria-hidden>
      <circle
        cx="48"
        cy="48"
        r={r}
        fill="none"
        stroke="var(--border, #E2E6F0)"
        strokeWidth="8"
      />
      <circle
        cx="48"
        cy="48"
        r={r}
        fill="none"
        stroke="var(--xo-indigo, #464C9F)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 48 48)"
      />
    </svg>
  );
}

function CostBars() {
  return (
    <svg viewBox="0 0 96 72" className="h-16 w-24" aria-hidden>
      <rect x="12" y="28" width="22" height="36" rx="4" className="fill-indigo-200" />
      <rect x="42" y="8" width="22" height="56" rx="4" className="fill-xo-indigo" />
      <rect x="72" y="38" width="14" height="26" rx="3" className="fill-indigo-100" />
      <text
        x="53"
        y="6"
        textAnchor="middle"
        className="fill-xo-indigo"
        style={{ fontSize: 8, fontFamily: "var(--font-sans)" }}
      >
        US
      </text>
    </svg>
  );
}

function DayTicker() {
  return (
    <svg viewBox="0 0 120 48" className="h-12 w-[7.5rem]" aria-hidden>
      <rect
        x="1"
        y="1"
        width="118"
        height="46"
        rx="8"
        fill="none"
        stroke="var(--border-strong, #C8CEDC)"
        strokeWidth="1.5"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={10 + i * 36}
            y="10"
            width="28"
            height="28"
            rx="4"
            className="fill-indigo-50"
          />
          <text
            x={24 + i * 36}
            y="30"
            textAnchor="middle"
            className="fill-xo-indigo"
            style={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "var(--font-sans)",
            }}
          >
            {"241"[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

function StatVisual({ stat }: { stat: ThreatStat }) {
  if (stat.kind === "percent") return <PercentArc value={stat.value} />;
  if (stat.kind === "cost") return <CostBars />;
  return <DayTicker />;
}

export function CyThreatLandscape() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="The threat landscape"
        title="The cost of doing nothing keeps going up"
        sub="Attackers stopped skipping smaller companies long ago. These figures come from two of the most cited annual industry studies and describe the environment every business now operates in."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        {STATS.map((stat) => (
          <div
            key={stat.figure}
            className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="font-extrabold font-sans text-[clamp(40px,5vw,56px)] text-fg1 leading-none tracking-[-0.03em]">
                {stat.figure}
              </span>
              <StatVisual stat={stat} />
            </div>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {stat.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
