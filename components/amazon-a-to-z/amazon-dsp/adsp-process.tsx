import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const STEPS = [
  {
    n: "01",
    title: "Audience strategy and campaign architecture",
    body: "We start by defining your target audiences using Amazon's first-party data, including in-market shoppers, past purchasers, and lookalike segments. We build the audience architecture and set ROAS targets and budget allocation for each segment.",
  },
  {
    n: "02",
    title: "Creative development and campaign launch",
    body: "We advise on ad creative across display, video, and audio formats, ensuring your creative is built for the DSP placements and audiences it will run against. Campaigns launch with conversion tracking and attribution configured for accurate ROAS measurement from day one.",
  },
  {
    n: "03",
    title: "Campaign management and optimization",
    body: "We manage your DSP campaigns continuously, monitoring delivery, audience performance, placement efficiency, and ROAS, and making real-time optimizations to bid, audience, creative rotation, and budget allocation to maximize performance across the funnel.",
  },
  {
    n: "04",
    title: "Reporting and strategic refinement",
    body: "We provide reporting across through-view, direct-page-view, purchase-rate, direct ROAS, and new-to-brand metrics, with clear attribution to individual audience segments and placements. We use this data to refine strategy and improve campaign efficiency over time.",
  },
] as const;

export function AdspProcess() {
  return (
    <LightSection id="our-process" className="scroll-mt-[72px]">
      <SectionHead
        label="Our process"
        title="An Amazon DSP process built around full-funnel revenue growth"
        sub="Our Amazon DSP management follows a structured process built to drive full-funnel advertising programs that reach your ideal audience at every stage of the purchase journey. Every engagement moves through clear audience strategy, creative development, campaign activation, and continuous optimization based on performance data. The result is a DSP program that reaches the right customers before they start searching and converts them at a higher rate when they do."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <ol className="vc-stagger m-0 flex list-none flex-col gap-0 p-0">
        {STEPS.map((step, index) => (
          <li
            key={step.n}
            className="ind-reveal grid grid-cols-[72px_1fr] gap-[clamp(16px,2.4vw,28px)] md:grid-cols-[88px_1fr]"
          >
            <div className="flex flex-col items-center">
              <span className="vc-step-node flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 font-mono font-semibold text-sm text-xo-indigo">
                {step.n}
              </span>
              {index < STEPS.length - 1 ? (
                <span className="vc-step-line mt-2 w-px flex-1 bg-border" aria-hidden />
              ) : null}
            </div>
            <div className={index < STEPS.length - 1 ? "pb-10" : "pb-2"}>
              <h3 className="mb-2 font-sans font-semibold text-[clamp(18px,1.7vw,22px)] text-fg1 leading-snug">
                {step.title}
              </h3>
              <p className="m-0 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Talk to an Amazon DSP expert
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
