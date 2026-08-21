import {
  Building2,
  GraduationCap,
  Layers,
  type LucideIcon,
  Rocket,
  Timer,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Building2,
    title: "Established brands",
    body: "Brands that want to scale without adding Amazon headcount.",
  },
  {
    icon: GraduationCap,
    title: "Companies lacking Amazon expertise",
    body: "You recognize the platform's potential but don't have the in-house expertise; we become your expert team.",
  },
  {
    icon: Rocket,
    title: "Fast-growing businesses",
    body: "Businesses that want to accelerate growth and move faster than competitors.",
  },
  {
    icon: Timer,
    title: "Overwhelmed sellers",
    body: "Sellers tired of the day-to-day operational grind who want their time back.",
  },
  {
    icon: Layers,
    title: "Multi-SKU or multi-marketplace brands",
    body: "Brands managing catalog and channel complexity across SKUs and marketplaces.",
  },
];

export function AmWho() {
  return (
    <LightSection>
      <SectionHead
        label="Who needs this?"
        title="What full-service Amazon management really means"
        sub="Full-service Amazon management gives you a dedicated team that handles every part of your business, from listings and ads to inventory and customer experience."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,28px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
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
