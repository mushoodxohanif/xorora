import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const STEPS = [
  {
    n: "01",
    title: "Front-end and back-end optimization",
    body: "The front end is everything a shopper sees: title, bullets, description, images, and A+ Content. The back end is the part they never see: search terms, subject matter, attributes, and other fields that tell Amazon what your product is and which queries it belongs to. We tune both, because a listing that reads well but is indexed badly still won't be found.",
  },
  {
    n: "02",
    title: "Image optimization techniques",
    body: "We sequence the gallery so it works the way people actually shop: a compliant hero image, then infographics that carry the key specs, scale and use-case shots, and a comparison or lifestyle frame to close. Everything is checked at mobile size, where most of your traffic will see it first.",
  },
  {
    n: "03",
    title: "Keyword extraction and content optimization",
    body: "We pull the terms that matter from search data, competitor listings, and your own advertising reports, then place them where they earn indexing without wrecking readability. As performance data comes in, we rewrite and re-test rather than leaving the listing to age.",
  },
] as const;

export function AloOptimize() {
  return (
    <LightSection>
      <SectionHead
        label="Our process"
        title="How we optimize your listing, front to back"
        sub="Optimization isn't only what shoppers see. We tune the visible listing and the hidden fields behind it."
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
          Let&apos;s team up
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
