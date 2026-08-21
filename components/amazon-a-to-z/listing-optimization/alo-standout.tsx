import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

export function AloStandout() {
  return (
    <LightSection>
      <div className="ind-reveal max-w-[760px]">
        <SectionHead
          label="Why it matters"
          title="Stand out. Rank higher. Sell more."
          className="mb-6 max-w-[760px]"
        />
        <p className="mb-8 font-sans text-[16.5px] text-fg2 leading-relaxed">
          Selling on Amazon means competing with thousands of products, and only
          the best listings make it to the top. At Xorora, we turn your product
          detail pages into powerful conversion engines, optimized for
          Amazon&apos;s algorithm and your customers.
        </p>
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Let&apos;s team up
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
