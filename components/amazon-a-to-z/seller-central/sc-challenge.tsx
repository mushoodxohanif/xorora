"use client";

import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { VcStatCounter } from "@/components/amazon-a-to-z/vendor-central/vc-stat-counter";

const STATS = [
  {
    end: 60,
    suffix: "%+",
    title: "Third-party seller competition",
    body: "More than 60% of Amazon's total sales come from third-party Seller Central accounts, making differentiated listings, advertising, and account management more critical than ever.",
  },
  {
    end: 20,
    suffix: "%+",
    title: "Rising fulfillment costs",
    body: "Amazon FBA fees have risen more than 20% across multiple categories in recent years, making proactive inventory and fulfillment strategy essential to protecting margins.",
  },
  {
    end: 82,
    suffix: "%",
    title: "Buy Box drives sales",
    body: "Around 82% of Amazon desktop purchases complete through the Buy Box, making Buy Box eligibility one of the most important metrics a Seller Central brand can optimize.",
  },
] as const;

export function ScChallenge() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="The challenge"
        title="Managing Amazon Seller Central for profitable growth"
        className="ind-reveal mb-12 max-w-[720px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
        {STATS.map((stat) => (
          <div
            key={stat.title}
            className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
          >
            <div className="mb-3 font-extrabold font-sans text-[clamp(40px,4.4vw,56px)] text-xo-indigo leading-none tracking-[-0.04em]">
              <VcStatCounter value={stat.end} suffix={stat.suffix} />
            </div>
            <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
              {stat.title}
            </h3>
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              {stat.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
