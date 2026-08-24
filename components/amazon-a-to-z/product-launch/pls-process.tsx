import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const STEPS = [
  {
    n: "01",
    title: "Market research",
    body: "We conduct deep market research to understand demand and find the right products to launch, so you don't lose money going forward.",
  },
  {
    n: "02",
    title: "Product listing optimization",
    body: "Listing optimization establishes relevant signals that support visibility and early traction. Our team optimizes your product listing with catchy titles and persuasive descriptions that compel visitors to buy.",
  },
  {
    n: "03",
    title: "Keyword strategy",
    body: "Our team identifies the most relevant keywords for your product, balancing high-relevance terms with manageable competition to drive targeted traffic.",
  },
  {
    n: "04",
    title: "PPC campaign setup",
    body: "A solid Amazon PPC strategy can make or break a product launch. Setting up Sponsored Products early is a launch priority — to generate sales velocity quickly.",
  },
  {
    n: "05",
    title: "Performance monitoring",
    body: "After the launch, we continuously monitor sales performance and content. We adjust strategies using real-time data to maximize results and sustain performance over time.",
  },
] as const;

export function PlsProcess() {
  return (
    <LightSection id="our-process" className="scroll-mt-[72px]">
      <SectionHead
        label="Our proven process"
        title="Our structured Amazon product launch services framework"
        sub="Our 5-step Amazon product launch framework turns new products into early movers through strategic planning and execution."
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
    </LightSection>
  );
}
