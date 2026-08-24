import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  {
    title: "In-depth Amazon PPC audit (free)",
    body: "We start with a detailed audit to uncover missed opportunities and unnecessary spending — campaign structure, keyword and match-type performance, ACoS/TACoS/CTR/CVR/ROAS benchmarking, ASIN groupings, and account-health issues. You receive a full audit and roadmap before we invest your ad spend.",
  },
  {
    title: "Custom campaign architecture",
    body: "We build campaign structures on real product and business logic, not templates — product lifecycle and sales phases, keyword intent, profit-margin and regional-brand fit.",
  },
  {
    title: "Daily, weekly, monthly optimization",
    body: "Daily: bid adjustment, search-term harvesting, budget pacing. Weekly: ACoS-trend analysis, keyword scaling, negative-keyword mining. Monthly: restructuring, creative testing, competitive benchmarking — handled by your dedicated campaign manager.",
  },
  {
    title: "Smart bidding and testing",
    body: "Automation with human oversight: dynamic bidding, peak-hour pacing, goal-margin targeting, and A/B testing of creatives, CTAs, keywords, and ASIN groupings.",
  },
  {
    title: "End-to-end alignment",
    body: "We align ad campaigns with your listings and brand so PPC works in full-funnel context — reducing TACoS while increasing total revenue.",
  },
  {
    title: "Transparent reporting",
    body: "Real-time dashboards, weekly performance reports, monthly strategy sessions with a real human, and competitor and market trend alerts.",
  },
] as const;

export function PpcHarder() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="How we make your Amazon PPC spend work harder"
        sub="Most agencies rely on automation or templates. We do not. Our Amazon advertising service applies structure, workflow, advanced tools, and hands-on strategy to improve profitability every month."
        className="ind-reveal mb-12 max-w-[820px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="ind-reveal vc-card-lift rounded-(--r-lg) border border-border bg-surface p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
              {card.title}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
