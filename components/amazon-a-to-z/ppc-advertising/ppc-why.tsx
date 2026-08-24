import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  {
    title: "Strategic, not transactional",
    body: 'We treat your account like a growth asset, not just something to "optimize." Every move ties to bottom-line profitability.',
  },
  {
    title: "Integrated conversion strategy",
    body: "More than ad-buying — we connect PPC to listing content, A+ modules, and organic ranking so total sales and brand equity move together.",
  },
  {
    title: "KPI-driven reporting",
    body: "We report on what matters: ACoS, TACoS, CTR, ROAS, consistent sales, and revenue per click — with no fluff.",
  },
  {
    title: "Direct expert access",
    body: "You'll work directly with your strategist — no shuffling systems or junior handoffs.",
  },
  {
    title: "Marketplace intelligence, built in",
    body: "We monitor bid-movement trends, algorithm shifts, competitor keyword strategies, and category-level benchmarks so we can adjust faster.",
  },
] as const;

export function PpcWhy() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Why choose Xorora as your Amazon PPC management agency"
        className="ind-reveal mb-12 max-w-[820px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="ind-reveal vc-card-lift flex flex-col rounded-(--r-lg) border border-border bg-surface p-[clamp(22px,2.4vw,28px)]"
          >
            <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
              <Check className="h-4 w-4" aria-hidden />
            </span>
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
