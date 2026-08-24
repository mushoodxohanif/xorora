import { Check } from "lucide-react";
import { AmazonLeadForm } from "@/components/amazon-a-to-z/amazon-lead-form";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const BENEFITS = [
  {
    title: "30-minute deep-dive strategy call",
    body: "A detailed session to analyze your current performance, identify immediate growth opportunities, and define the winning roadmap for your brand.",
  },
  {
    title: "Customized growth solutions",
    body: "A high-level plan to optimize your PPC management, listing conversion rates, and creative asset strategies.",
  },
  {
    title: "Exclusive market opportunity report",
    body: "Specialized insights into your top-performing keywords and a data-backed analysis of your potential market share expansion.",
  },
] as const;

export function PlsUnlock() {
  return (
    <LightSection bg="var(--slate-50)" id="unlock">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHead
            title="Unlock your brand's potential with proven Amazon launch expertise"
            sub="Navigate Amazon's complexities with Xorora, your strategic partner for premium launch services. We deliver data-driven strategies that provide clarity and measurable growth for your Amazon new-launch products."
            className="ind-reveal mb-8"
            titleSize="clamp(26px,3.2vw,38px)"
          />
          <p className="ind-reveal mb-4 font-sans font-semibold text-[14px] text-fg1">
            What you&apos;ll get when you connect with our team:
          </p>
          <ul className="ind-reveal m-0 flex list-none flex-col gap-3.5 p-0">
            {BENEFITS.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-(--r-lg) border border-border bg-white px-4 py-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div>
                  <div className="mb-1 font-sans font-semibold text-[15px] text-fg1">
                    {item.title}
                  </div>
                  <p className="m-0 font-sans text-[14px] text-fg2 leading-snug">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ind-reveal">
          <AmazonLeadForm
            id="unlock-form"
            formName="product-launch-unlock"
            title="Get started"
            submitLabel="Submit"
            variant="surface"
          />
        </div>
      </div>
    </LightSection>
  );
}
