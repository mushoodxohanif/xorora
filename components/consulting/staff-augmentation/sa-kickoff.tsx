import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STEPS = [
  {
    n: "01",
    title: "Discuss solutions and decide team structure",
    body: "Tell us about your business, challenges, and project needs.",
  },
  {
    n: "02",
    title: "Onboard your team and get to work",
    body: "We'll align the project specifications, then select and onboard the right engineers.",
  },
  {
    n: "03",
    title: "We track performance on an ongoing basis",
    body: "We make sure our engineers meet your quantity and quality standards at all times.",
  },
] as const;

export function SaKickoff() {
  return (
    <LightSection
      bg="var(--slate-50)"
      className="pt-[clamp(48px,6vw,72px)] pb-[clamp(72px,9vw,118px)]"
    >
      <SectionHead
        label="Getting started"
        title="Kick off projects in 2 weeks"
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
          >
            <span className="mb-5 font-mono text-[13px] text-tangerine-600 tracking-[0.14em]">
              {step.n}
            </span>
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {step.title}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
