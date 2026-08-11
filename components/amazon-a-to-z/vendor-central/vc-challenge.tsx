import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STATS = [
  {
    value: "40%+",
    body: "Amazon holds over 40% of U.S. e-commerce, so your first-party presence there is too big to run casually.",
  },
  {
    value: "8%",
    body: "Amazon's own data shows brands using A+ Content can see a meaningful lift in conversion.",
  },
  {
    value: "—",
    placeholder: true,
    body: "Xorora Vendor Central result pending. This card will show a real first-party outcome once published.",
  },
] as const;

export function VcChallenge() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="The challenge"
        title="Managing Amazon Vendor Central for maximum profitability"
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {STATS.map((stat) => (
          <div
            key={stat.value + stat.body}
            className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
          >
            <div className="mb-4 font-extrabold font-sans text-[clamp(40px,4.4vw,56px)] text-xo-indigo leading-none tracking-[-0.04em]">
              {stat.value}
            </div>
            {"placeholder" in stat && stat.placeholder ? (
              <span className="mb-3 w-fit rounded-pill bg-indigo-50 px-2.5 py-1 font-mono text-[10px] text-xo-indigo uppercase tracking-[0.16em]">
                Placeholder
              </span>
            ) : null}
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              {stat.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
