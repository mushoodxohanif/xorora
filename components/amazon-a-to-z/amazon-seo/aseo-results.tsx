"use client";

import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { VcStatCounter } from "@/components/amazon-a-to-z/vendor-central/vc-stat-counter";

const STATS = [
  {
    end: 57,
    suffix: "%",
    title: "Product searches start on Amazon",
    body: "57% of U.S. consumers begin product searches on Amazon rather than a search engine, making Amazon organic ranking one of the highest-leverage SEO investments for any brand selling physical products.",
  },
  {
    end: 70,
    suffix: "%",
    title: "Shoppers rarely leave page one",
    body: "Around 70% of Amazon shoppers never scroll past the first page of results, so first-page organic ranking isn't a nice-to-have. It's the difference between being found and being invisible in your category.",
  },
  {
    end: 8,
    suffix: "%",
    title: "Conversion lift from A+ Content",
    body: "Amazon's own data shows listings with A+ Content see an average 8% higher conversion, making content optimization one of the most direct levers for improving both ranking and revenue per visitor.",
  },
] as const;

export function AseoResults() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Proven results"
        title="Outrank competitors with a winning Amazon SEO strategy"
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
