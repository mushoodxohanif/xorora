import {
  ArrowUpRight,
  Building2,
  Layers,
  type LucideIcon,
  Rocket,
  Store,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const AUDIENCES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Rocket,
    title: "New sellers launching their first private-label product",
    body: "You're ready to start but don't want your first order to be an expensive lesson in picking the wrong product or the wrong factory.",
  },
  {
    icon: Store,
    title: "Existing sellers expanding their catalogue",
    body: "You already sell on Amazon and want to add products that complement your brand rather than compete with your own listings.",
  },
  {
    icon: Building2,
    title: "Brands entering Amazon for the first time",
    body: "You have a business elsewhere and need a product and supplier strategy built specifically for how Amazon buyers search and buy.",
  },
  {
    icon: Layers,
    title: "Sellers stuck with products that aren't moving",
    body: "Your current range isn't selling through and you want a research-led reset before committing more capital to inventory.",
  },
];

export function AphFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Who it's for"
        title="Is this service right for you?"
        sub="This service fits sellers who want the product decision made on evidence rather than instinct. If you recognise yourself below, it's worth a conversation."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        {AUDIENCES.map((audience) => {
          const Icon = audience.icon;
          return (
            <div
              key={audience.title}
              className="ind-reveal vc-card-lift flex gap-4 overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(22px,2.4vw,28px)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-[22px] w-[22px]" aria-hidden />
              </span>
              <div>
                <h3 className="mb-2 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                  {audience.title}
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                  {audience.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ind-reveal mt-10">
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Start my product hunting
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
