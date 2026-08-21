import {
  ArrowUpRight,
  Banknote,
  Globe,
  type LucideIcon,
  Palette,
  Tag,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const NEEDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Banknote,
    title: "Your budget range",
    body: "What you're comfortable investing in a first order, including product cost, freight, and launch spend. Budget shapes which categories and order quantities are realistic, so an honest range up front saves everyone time.",
  },
  {
    icon: Globe,
    title: "Target marketplaces",
    body: "Which Amazon marketplaces you want to sell in. Demand, competition, pricing, and compliance requirements differ by region, so we research against the marketplaces you actually intend to launch in.",
  },
  {
    icon: Tag,
    title: "Category preferences",
    body: "Any categories you want to pursue or avoid, plus anything you already know about your customer. Existing category experience or supplier contacts are useful context, even if informal.",
  },
  {
    icon: Palette,
    title: "Branding guidelines",
    body: "If you have a brand name, logo, colour palette, or packaging direction, share it. If you don't, we'll help you build one as part of the private-label setup.",
  },
];

export function AphNeeds() {
  return (
    <LightSection>
      <SectionHead
        label="What we need"
        title="What we need from you for ideal results"
        sub="The research is only as good as the brief behind it. Four pieces of information let us start narrowing the field immediately instead of guessing at your constraints."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <ul className="vc-stagger m-0 grid list-none grid-cols-1 gap-[22px] p-0 sm:grid-cols-2">
        {NEEDS.map((need) => {
          const Icon = need.icon;
          return (
            <li
              key={need.title}
              className="ind-reveal vc-card-lift flex gap-4 overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,28px)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-[22px] w-[22px]" aria-hidden />
              </span>
              <div>
                <h3 className="mb-2 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                  {need.title}
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                  {need.body}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="ind-reveal mt-10 mb-8 max-w-[720px] font-sans text-[16px] text-fg2 leading-relaxed">
        Don&apos;t have a category in mind? No problem, we&apos;ll help you pick
        the best category.
      </p>
      <div className="ind-reveal">
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Start my product hunting now
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
