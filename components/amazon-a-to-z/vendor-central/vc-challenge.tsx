"use client";

import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { VcStatCounter } from "./vc-stat-counter";

const STATS = [
  {
    end: 40,
    suffix: "%+",
    title: null as string | null,
    body: "Amazon holds over 40% of U.S. e-commerce, so your first-party presence there is too big to run casually.",
  },
  {
    end: 8,
    suffix: "%",
    title: null as string | null,
    body: "Amazon's own data shows brands using A+ Content can see a meaningful lift in conversion.",
  },
  {
    end: 82,
    suffix: "%",
    title: "Buy Box Drives Sales",
    body: "Approximately 82% of all Amazon desktop purchases are completed through the Buy Box, making Buy Box eligibility one of the most important metrics an Amazon brand can optimize.",
  },
] as const;

export function VcChallenge() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="The challenge"
        title="Managing Amazon Vendor Central for maximum profitability"
        className="ind-reveal mb-12 max-w-[720px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
        {STATS.map((stat) => (
          <div
            key={stat.end + stat.body}
            className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
          >
            <div className="mb-3 font-extrabold font-sans text-[clamp(40px,4.4vw,56px)] text-xo-indigo leading-none tracking-[-0.04em]">
              <VcStatCounter value={stat.end} suffix={stat.suffix} />
            </div>
            {stat.title ? (
              <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                {stat.title}
              </h3>
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
