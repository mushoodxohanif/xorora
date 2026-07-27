import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STATS = [
  {
    figure: "74%",
    body: "Of organizations investing in GenAI and automation say those initiatives have met or exceeded their expected benefits.",
  },
  {
    figure: "88%",
    body: "Of organizations already use AI in at least one business function.",
  },
  {
    figure: "3.7x",
    body: "Average ROI reported by organizations already using AI in at least one business function.",
  },
] as const;

export function MvpChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="The case for validating first"
        title="Businesses are unlocking real ROI from AI"
        sub="Validating with a PoC or MVP isn't caution for its own sake. It's how organizations are turning AI investment into returns they can measure."
        className="mb-12 max-w-[720px]"
      />
      <div className="ind-page-2grid grid grid-cols-3 gap-[22px]">
        {STATS.map((stat) => (
          <div
            key={stat.figure}
            className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
          >
            <div className="mb-4 border-indigo-200 border-l-[3px] pl-5">
              <span className="font-extrabold font-sans text-[clamp(46px,5vw,64px)] text-fg1 leading-[0.95] tracking-[-0.03em]">
                {stat.figure}
              </span>
            </div>
            <p className="m-0 flex-1 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {stat.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
