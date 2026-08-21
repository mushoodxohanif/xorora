import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const STEPS = [
  {
    n: "01",
    title: "Amazon SEO strategy and consulting",
    body: "We begin with a documented Amazon SEO strategy tied to your brand and goals. Our experts provide in-depth consultations to guide you through every step, from competitive analysis to personalized tactics aligned with your objectives.",
  },
  {
    n: "02",
    title: "Keyword research and listing optimization",
    body: "Our keyword research targets high-intent Amazon shoppers by identifying top-performing keywords for your category, including long-tail and niche variations. We then optimize titles, descriptions, and bullet points to highlight your products' unique benefits while improving rankings.",
  },
  {
    n: "03",
    title: "Structured data and content audits",
    body: "We incorporate structured data so Amazon's algorithm can better categorize your products, and we run comprehensive content audits to find and close gaps across product descriptions and brand content, so every listing is fully optimized.",
  },
  {
    n: "04",
    title: "Analytics reporting and continuous optimization",
    body: "We track progress with detailed analytics and reporting, surfacing keyword rankings, sales metrics, and conversion rates so you see exactly how Amazon SEO is affecting your bottom line, then refine the program over time.",
  },
] as const;

export function AseoProcess() {
  return (
    <LightSection id="our-process" className="scroll-mt-[72px]">
      <SectionHead
        label="Our process"
        title="How we help you get results"
        sub="Based on your needs, we create a fully customized plan to help you dominate Amazon search. The following are common components of a results-driven Amazon SEO strategy."
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
                <span
                  className="vc-step-line mt-2 w-px flex-1 bg-border"
                  aria-hidden
                />
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
          Get your free Amazon audit
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
