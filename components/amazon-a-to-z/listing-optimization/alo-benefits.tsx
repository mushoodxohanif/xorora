import {
  BadgeCheck,
  Eye,
  type LucideIcon,
  MousePointerClick,
  PiggyBank,
  TrendingUp,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Eye,
    title: "More visibility",
    body: "Keyword-rich, correctly structured listings rank for the searches your buyers actually use, so your products show up where the demand already is.",
  },
  {
    icon: MousePointerClick,
    title: "Higher conversion rates",
    body: "Clear titles, benefit-led bullets, and persuasive images answer the shopper's questions on the page, so more of the traffic you already have turns into orders.",
  },
  {
    icon: PiggyBank,
    title: "Lower ACoS",
    body: "When a listing converts, every ad click works harder. Optimized detail pages reduce wasted spend and bring your advertising cost of sale down.",
  },
  {
    icon: TrendingUp,
    title: "Increased sales",
    body: "Better rank and better conversion compound. Sales velocity feeds Amazon's algorithm, which rewards the listing with more placement.",
  },
  {
    icon: BadgeCheck,
    title: "Stronger brand presence",
    body: "Consistent copy, imagery, and A+ Content across your catalog make your brand look established and trustworthy, not like a one-off seller.",
  },
];

export function AloBenefits() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="The payoff"
        title="Why invest in listing optimization?"
        sub="A product detail page is where the buying decision happens. Improving it lifts every other part of your Amazon program."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {card.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
