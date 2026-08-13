"use client";

import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { VcStatCounter } from "@/components/amazon-a-to-z/vendor-central/vc-stat-counter";

const STATS = [
  {
    end: 35,
    suffix: "%",
    title: "Amazon DSP ad spend is accelerating",
    body: "Amazon DSP ad spend is rising, so brands that build full-funnel programmatic reach audiences beyond Amazon's search results.",
  },
  {
    end: 34,
    suffix: "%",
    title: "Advanced targeting drives ROAS lift",
    body: "Leveraging Amazon DSP's machine-learning algorithms and first-party shopper data, advertisers have seen an average 34% increase in return on ad spend, making DSP management one of the highest-leverage advertising channels.",
  },
  {
    end: 15,
    suffix: "+",
    title: "Global DSP reach",
    body: "Amazon DSP is available in more than 15 countries, letting brands reach high-intent audiences in international markets and build coordinated global campaigns across multiple marketplaces.",
  },
] as const;

export function AdspChallenge() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="The challenge"
        title="Reaching, engaging, and converting your ideal Amazon customers"
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
