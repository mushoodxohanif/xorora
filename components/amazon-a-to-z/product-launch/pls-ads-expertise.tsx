import { ArrowUpRight } from "lucide-react";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { LightSection } from "@/components/case-study/light-section";
import { buttonClassName } from "@/lib/button-styles";

export function PlsAdsExpertise() {
  return (
    <LightSection bg="var(--indigo-50)">
      <div className="ind-reveal mx-auto max-w-[820px] text-center">
        <div className="mb-5 flex justify-center">
          <AmazonLogo className="h-8" />
        </div>
        <h2 className="m-0 mb-4 text-balance font-bold font-sans text-[clamp(28px,3.4vw,40px)] text-fg1 leading-[1.08] tracking-[-0.02em]">
          Amazon advertising expertise for new launches
        </h2>
        <p className="mx-auto mb-8 max-w-[640px] font-sans text-[16.5px] text-fg2 leading-relaxed">
          Sponsored Products and launch PPC are where early sales velocity is
          won. Our team structures campaigns to test keywords, protect ACoS, and
          feed the ranking signals your new ASIN needs — coordinated with
          listing and keyword strategy, not run in isolation.
        </p>
        <a
          href="#launch-form"
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          View detail
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </LightSection>
  );
}
