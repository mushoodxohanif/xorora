import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const STEPS = [
  {
    n: "01",
    title: "Vendor Central audit and strategy",
    body: "We start with a full review of your Vendor Central relationship: vendor agreements, wholesale pricing structure, chargeback history, content quality, ad setup, and inventory performance. The audit informs a strategy aligned to your revenue and margin goals.",
  },
  {
    n: "02",
    title: "Content, pricing, and compliance optimization",
    body: "We optimize listings for organic visibility and conversion (titles, bullets, A+ Content, Brand Story, backend keywords) while advising on pricing to protect margins within Amazon's wholesale controls and keeping you compliant with vendor program requirements.",
  },
  {
    n: "03",
    title: "Advertising and inventory management",
    body: "We build and run advertising that uses Vendor Central's unique access to Amazon DSP, Sponsored Brands video, and premium placements, coordinating ad strategy with inventory forecasting to prevent the stockouts and overstocking that hurt ranking and margin.",
  },
  {
    n: "04",
    title: "Ongoing optimization and reporting",
    body: "We manage the account continuously: chargeback disputes, purchase-order terms, compliance monitoring, and monthly reporting tied to shipped COGS, ROAS, organic ranking, and new-to-brand sales.",
  },
] as const;

export function VcProcess() {
  return (
    <LightSection id="our-process" className="scroll-mt-[72px]">
      <SectionHead
        label="Our process"
        title="A Vendor Central process built for profitable growth"
        sub="Our management follows a structured process designed to protect your margins and build compounding revenue. Every engagement moves through a clear progression: auditing the account, optimizing content and advertising, aligning inventory strategy, and improving continually on performance data. The result is a program that turns Amazon from a complex challenge into a reliable revenue engine."
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
          Schedule your free Vendor Central consultation
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
