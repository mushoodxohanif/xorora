import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STATS = [
  {
    figure: "85%",
    value: 85,
    body: "Of workload placements made before 2022 will no longer be optimal by 2027, as requirements change.",
  },
  {
    figure: "50%",
    value: 50,
    body: "Of enterprise platforms will run specialized infrastructure to support AI by 2028.",
  },
  {
    figure: "95%",
    value: 95,
    body: "Of new digital workloads will be deployed on cloud-native platforms by 2025.",
  },
  {
    figure: "80%",
    value: 80,
    body: "Of CIOs will use organizational change to harness AI, automation, and analytics for agile, insight-driven business by 2028.",
  },
  {
    figure: "75%",
    value: 75,
    body: "Of CIOs will build cybersecurity measures directly into systems and processes by 2026.",
  },
] as const;

function PercentArc({ value }: { value: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20 shrink-0" aria-hidden>
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

export function IiShift() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="The shift is here"
        title="A seismic shift in infrastructure is here"
        sub="The ground under enterprise IT is moving. These projections describe where infrastructure, cloud, and AI are heading, and how fast."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-6">
        {STATS.map((stat, i) => (
          <div
            key={stat.figure}
            className={`flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)] ${
              i < 3 ? "lg:col-span-2" : "lg:col-span-3"
            }`}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="font-extrabold font-sans text-[clamp(40px,5vw,56px)] text-fg1 leading-none tracking-[-0.03em]">
                {stat.figure}
              </span>
              <PercentArc value={stat.value} />
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
