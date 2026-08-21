import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

export function AphWhat() {
  return (
    <LightSection>
      <div className="ind-reveal max-w-[820px]">
        <SectionHead
          label="The basics"
          title="What is Amazon product hunting and sourcing?"
          sub="Two connected disciplines: finding a product worth selling, then finding someone reliable to make it."
          className="mb-7 max-w-[760px]"
        />
        <p className="mb-5 font-sans text-[16px] text-fg2 leading-relaxed">
          Amazon product hunting is the research process of identifying winning
          products: items with real, consistent demand, competition you can
          realistically break into, and margins that still work after Amazon
          fees, shipping, and advertising. It is a numbers exercise before it is
          an instinct one. We look at search volume, sales velocity, review
          depth, price bands, seasonality, and category restrictions, then
          narrow hundreds of candidates down to a short list you can actually
          defend.
        </p>
        <p className="mb-9 font-sans text-[16px] text-fg2 leading-relaxed">
          Sourcing is the other half. A great product idea is worthless without
          a trustworthy supplier behind it, so we identify manufacturers, verify
          their credentials and production capability, request and assess
          samples, and negotiate pricing and terms on your behalf. The outcome
          is a product you believe in and a supplier relationship that holds up
          once orders start repeating.
        </p>
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
