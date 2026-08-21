import {
  Cpu,
  Database,
  type LucideIcon,
  Radar,
  SlidersHorizontal,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Radar,
    title: "Proactive, not reactive",
    body: "We plan reorders against lead times and sell-through rather than waiting for a low-stock alert. Watching velocity and supplier production windows together means restocks are triggered early enough to avoid the stockouts that reset your ranking.",
  },
  {
    icon: Database,
    title: "Data-driven accuracy",
    body: "Forecasts are built from your own sales history, seasonality, promotional calendar, and category demand signals, not round numbers. That keeps order quantities close to real demand, so capital isn't sitting in a warehouse or running out mid-launch.",
  },
  {
    icon: SlidersHorizontal,
    title: "Full control",
    body: "You see the same numbers we do: what's on hand, what's inbound, what the reorder point is, and what each decision costs. Nothing moves without your approval, and you keep every supplier relationship in your own name.",
  },
  {
    icon: Cpu,
    title: "Advanced automation tools",
    body: "We use inventory and analytics tooling to track sell-through, coverage days, and restock timing automatically, so the routine monitoring is handled by software and our team's attention goes to the decisions that actually need judgement.",
  },
];

export function AphInventory() {
  return (
    <LightSection>
      <SectionHead
        label="Inventory planning"
        title="Why count on us for Amazon inventory optimization service"
        sub="Sourcing doesn't end when the first order ships. Getting order quantities and reorder timing right is what keeps a winning product profitable through its second, third, and tenth production run."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
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
