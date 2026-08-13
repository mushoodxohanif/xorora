"use client";

import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    title: "Audience strategy using Amazon's first-party data",
    body: "Amazon's first-party data is the most valuable advertising asset in e-commerce. It reflects actual purchase behavior, product browsing, and streaming habits across hundreds of millions of consumers. We build audience segments that map the right data signals to your campaign objectives, so your DSP spend reaches the people most likely to convert.",
  },
  {
    title: "ROAS-focused optimization and reporting",
    body: "We manage to ROAS and report on it transparently, optimizing bids, audiences, and creative against return, not vanity impressions.",
  },
] as const;

export function AdspApproach() {
  const [open, setOpen] = useState(0);

  return (
    <LightSection>
      <div className="ind-reveal max-w-[760px]">
        <SectionHead
          label="Our approach"
          title="Customized Amazon DSP services built to drive impact"
          sub="First-party audience data, full-funnel reach."
          className="mb-6 max-w-[760px]"
        />
        <p className="mb-10 font-sans text-[16px] text-fg2 leading-relaxed">
          A program that leverages Amazon&apos;s first-party shopper data to
          reach your ideal customers at every stage of the purchase funnel.
          Every DSP campaign we run is part of a coordinated advertising
          strategy built to grow brand awareness upstream, drive consideration
          among in-market shoppers, convert high-intent audiences, and re-engage
          past visitors and customers, creating a compounding revenue effect
          that Sponsored Ads alone cannot deliver.
        </p>
        <div className="flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.title}
                className={cn(
                  "overflow-hidden rounded-(--r-lg) border bg-slate-50 transition-colors duration-180",
                  isOpen ? "border-border-strong" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-transparent px-[clamp(20px,2.4vw,28px)] py-[clamp(18px,2vw,22px)] text-left"
                >
                  <span className="font-sans font-semibold text-[clamp(15px,1.5vw,18px)] text-fg1 leading-snug">
                    {item.title}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-tangerine-500" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                  )}
                </button>
                {isOpen ? (
                  <p className="m-0 max-w-[760px] px-[clamp(20px,2.4vw,28px)] pb-[clamp(20px,2.4vw,26px)] font-sans text-[15px] text-fg2 leading-relaxed">
                    {item.body}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Get a proposal
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </LightSection>
  );
}
