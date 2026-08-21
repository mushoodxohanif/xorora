import { BarChart3, type LucideIcon, ShieldCheck, Users } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: BarChart3,
    title: "Data-backed research",
    body: "Every recommendation arrives with the evidence behind it: demand and keyword data, competitor review depth, price bands, and a margin model that accounts for Amazon fees, freight, and advertising. If the numbers don't support a product, we tell you that instead of selling you the idea.",
  },
  {
    icon: Users,
    title: "Verified supplier network",
    body: "We work with manufacturers we have checked rather than names pulled from a directory, confirming licences, production capability, and export history, and comparing multiple quotes before recommending one. You own the relationship and the contract throughout.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance and risk protection",
    body: "We check category restrictions, required certifications, and labelling rules before an order is placed, and flag intellectual-property or gating risks early, so your launch isn't stopped by a problem that was visible at the research stage.",
  },
];

export function AphTrust() {
  return (
    <LightSection>
      <SectionHead
        label="Why Xorora"
        title="Why sellers trust Xorora for Amazon product hunting and sourcing"
        sub="No shortcuts and no inflated promises. What we offer is a rigorous process, transparent reasoning, and the willingness to tell you when a product isn't worth pursuing."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
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
