import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  {
    title: "Ads are active but not converting",
    body: "Traffic without conversion drains budget and signals a targeting or listing problem.",
  },
  {
    title: "ACoS rising while ROAS fluctuates",
    body: "Spend climbs while returns swing unpredictably — and no one's sure why.",
  },
  {
    title: "Impressions without sales",
    body: "Sponsored campaigns drive visibility but generate few sales — a structure and relevance issue.",
  },
  {
    title: "Stale keyword targeting",
    body: "Keyword targeting lacks precision or hasn't been updated, quietly wasting spend.",
  },
  {
    title: "Competitors dominate placements",
    body: "Rivals with sharper campaigns push you down the page.",
  },
  {
    title: "More spend, thinner margins",
    body: "Ad budgets increase while margins shrink — a losing trade.",
  },
  {
    title: "Manual vs. automation gaps",
    body: "Manual setups lack optimization; automation delivers erratic results when neither is tuned properly.",
  },
  {
    title: "Siloed Sponsored Ads",
    body: "Campaigns operating in silos miss full-funnel synergy and leave reach and efficiency on the table.",
  },
] as const;

export function PpcUnderperform() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Why most Amazon ads underperform?"
        sub="Even experienced advertisers on Amazon face these common issues."
        className="ind-reveal mb-12 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="ind-reveal vc-card-lift rounded-(--r-lg) border border-border bg-surface p-5"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[15.5px] text-fg1 leading-snug">
              {card.title}
            </h3>
            <p className="m-0 font-sans text-[13.5px] text-fg2 leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>
      <p className="ind-reveal m-0 mt-10 max-w-[720px] font-sans text-[16px] text-fg2 leading-relaxed">
        The problem often isn&apos;t your product — it&apos;s execution. There
        is often a clear driver Amazon advertising services can help.
      </p>
    </LightSection>
  );
}
