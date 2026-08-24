import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { buttonClassName } from "@/lib/button-styles";

export function ApcByXorora() {
  return (
    <LightSection>
      <SectionHead
        title="A+ Content by Xorora"
        sub="We have the talent to turn browsers into buyers. Amazon combined Enhanced Brand Content and A+ Content into one streamlined feature called A+ Content — unlocking design possibilities that let brand owners outshine competitors with informative, immersive PDPs."
        className="ind-reveal mb-8 max-w-[820px]"
        titleSize="clamp(28px,3.4vw,42px)"
      />
      <p className="ind-reveal m-0 mb-8 max-w-[720px] font-sans text-[16.5px] text-fg2 leading-relaxed">
        At Xorora, we set your brand apart on Amazon with rich product content
        that highlights your story and value proposition. With striking visuals,
        compelling copy, insightful charts, and more, we help you stand out in
        even the most competitive markets.
      </p>
      <a
        href="#a-plus-form"
        className={buttonClassName({ variant: "primary", size: "lg" })}
      >
        Get a free quote
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>
    </LightSection>
  );
}
