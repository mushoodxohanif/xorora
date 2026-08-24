import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const MODELS = [
  {
    title: "Direct-to-seller",
    body: "You own the ad account; we operate within it — with full visibility and full control.",
  },
  {
    title: "Agency partnerships",
    body: "We provide white-labeled PPC services for digital agencies looking to expand without in-house hiring.",
  },
  {
    title: "Aggregator support",
    body: "We build scalable, multi-brand dashboards and collect strategies while preserving brand-level segmentation and reporting.",
  },
] as const;

export function PpcEngagement() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Engagement models: flexible and transparent"
        className="ind-reveal mb-12 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {MODELS.map((model) => (
          <div
            key={model.title}
            className="ind-reveal vc-card-lift rounded-(--r-lg) border border-border bg-surface p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {model.title}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {model.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
