import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const STEPS = [
  {
    n: "01",
    title: "Research and validation",
    body: "We start from your budget, target marketplaces, and any category preferences, then screen the catalogue against demand, competition, margin, and compliance filters. Candidates are stress-tested with keyword and sales-velocity data and modelled against Amazon fees, freight, and expected ad spend, so what reaches your shortlist is a small set of products with the numbers attached and the risks written down.",
  },
  {
    n: "02",
    title: "Supplier vetting and negotiation",
    body: "Once you pick a direction, we identify manufacturers who genuinely produce the product, verify their licences, capability, and certifications, and gather comparable quotes. We order and assess samples against your specification, then negotiate unit cost, minimum order quantities, tooling, lead times, and payment terms, and document the inspection criteria your supplier is expected to meet.",
  },
  {
    n: "03",
    title: "Launch and scale",
    body: "We prepare the product for market: branding and packaging, labelling and category requirements, listing content and keyword targeting, and the first-order quantity that matches your budget and risk tolerance. After launch we track sell-through and review feedback with you, feed what we learn back into reorder timing, and use the same research process to identify the next product in the line.",
  },
] as const;

export function AphProcess() {
  return (
    <LightSection
      id="our-process"
      bg="var(--slate-50)"
      className="scroll-mt-[72px]"
    >
      <SectionHead
        label="Our process"
        title="How we take you from research to a launched product"
        sub="Three phases, each with a clear decision point. You review the shortlist before we source, you approve the supplier before we order, and you sign off on the first purchase quantity before anything is manufactured."
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
          Book a free consultation
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
