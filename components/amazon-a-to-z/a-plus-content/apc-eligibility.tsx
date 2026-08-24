import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STEPS = [
  {
    n: "01",
    tone: "bg-[#EEF1FB] border-indigo-200 text-xo-indigo",
    title: "Registered trademark",
    body: "Your brand must have a registered and active word mark or design mark, and your trademark should appear on your products or packaging.",
  },
  {
    n: "02",
    tone: "bg-[#FFF1E8] border-[#F5C4A3] text-tangerine-700",
    title: "Trademark owner applies",
    body: "Amazon requires trademark owners — the person or entity whose name the word mark or design mark is registered to — to submit Brand Registry applications.",
  },
  {
    n: "03",
    tone: "bg-navy-900 border-navy-900 text-tangerine-400",
    title: "Enroll your brand",
    body: "Complete Brand Registry enrollment so A+ Content, Brand Story, and related brand tools unlock for your catalog.",
  },
] as const;

export function ApcEligibility() {
  return (
    <LightSection>
      <SectionHead
        title="A+ Content eligibility requirements"
        sub="To experience the benefits of Enhanced Brand Content, you must register under Amazon's Brand Registry (ABR). Here's a quick guide to follow."
        className="ind-reveal mb-12 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="ind-reveal vc-card-lift overflow-hidden rounded-(--r-lg) border border-border bg-surface"
          >
            <div
              className={`border-b px-5 py-4 font-mono font-semibold text-sm ${step.tone}`}
            >
              Step {step.n}
            </div>
            <div className="p-5">
              <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                {step.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
