import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  {
    title: "In-house team of Amazon EBC specialists",
    body: "We handle every aspect of the Amazon A+ Content creation process internally. Our designers, copywriters, and project managers work together to deliver exceptional A+ content — from pet supplies to home décor and everything in between.",
  },
  {
    title: "Exemplary Amazon A+ Content designs for all businesses",
    body: "We develop visually striking PDPs for businesses of every size. From newcomers to well-known brands, Xorora works to exceed expectations at every turn.",
  },
  {
    title: "Always up-to-date policy",
    body: "We keep ourselves informed about Amazon's dos and don'ts, saving you unnecessary worry about TOS compliance — especially crucial for vendors selling medical and personal-care products.",
  },
] as const;

export function ApcWhy() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Why Xorora?"
        sub="We're proud to call ourselves specialists in Enhanced Brand Content design. As part of our Amazon marketing services, we maximize your A+ Content efforts."
        className="ind-reveal mb-12 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] lg:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="ind-reveal vc-card-lift flex flex-col rounded-(--r-lg) border border-border bg-surface p-[clamp(22px,2.4vw,28px)]"
          >
            <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
              <Check className="h-4 w-4" aria-hidden />
            </span>
            <h3 className="mb-3 font-sans font-semibold text-[17.5px] text-fg1 leading-snug">
              {card.title}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
