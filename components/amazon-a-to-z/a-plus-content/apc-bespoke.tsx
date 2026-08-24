import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const ITEMS = [
  "Customized EBC designs tailored to your brand and catalog.",
  "Complete execution and management of EBC submissions.",
  "Generation of meta-tag keywords for quick and easy content uploads.",
  "Continuous support and editorial feedback — your primary contact for A+ Content through Seller Central.",
  "In-depth analytics and performance tracking to optimize EBC for increased engagement and conversions.",
] as const;

export function ApcBespoke() {
  return (
    <LightSection>
      <SectionHead
        title="Bespoke design, implementation, and ongoing assistance"
        sub="Your brand deserves to shine. With our Amazon A+ Content design services, we create stunning visual layouts that align with your brand identity and reflect the quality of your products. We also support A+ content submission, approval, and management so everything leads to a sale."
        className="ind-reveal mb-10 max-w-[820px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <ul className="ind-reveal m-0 flex list-none flex-col gap-3.5 p-0">
        {ITEMS.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-(--r-lg) border border-border bg-slate-50 px-4 py-3.5"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
              <Check className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="font-sans text-[15px] text-fg2 leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </LightSection>
  );
}
