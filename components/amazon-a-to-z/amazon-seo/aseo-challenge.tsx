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
    title: "Capture Amazon's top spots for key products",
    body: "Securing top visibility on Amazon for your main keywords means more eyes on your products and more chances to convert searchers into buyers. Our Amazon SEO boosts your ranking, strengthens your online presence, and funnels high-intent shoppers directly to your listings.",
  },
  {
    title: "Be seen by shoppers actively searching for your products",
    body: "We put your listings in front of the people already looking to buy what you sell.",
  },
  {
    title: "Build trust as a reliable, preferred brand",
    body: "Strong, consistent listings and content build the credibility that turns first-time buyers into repeat ones.",
  },
  {
    title: "First-page rankings are essential",
    body: "With most shoppers never leaving page one, first-page organic ranking is where the revenue is.",
  },
  {
    title: "SEO takes strategy and patience",
    body: "Amazon SEO compounds. We build for durable gains, not spikes that fade.",
  },
] as const;

export function AseoChallenge() {
  const [open, setOpen] = useState(0);

  return (
    <LightSection bg="var(--slate-50)">
      <div className="ind-reveal max-w-[760px]">
        <SectionHead
          label="The challenge"
          title="Reaching your target audience in Amazon's crowded marketplace"
          sub="A holistic Amazon strategy built for brand visibility."
          className="mb-6 max-w-[760px]"
        />
        <p className="mb-10 font-sans text-[16px] text-fg2 leading-relaxed">
          Earning a top spot in Amazon search isn&apos;t a walk in the park, and
          it isn&apos;t just about finding popular keywords. To truly see a
          return on your investment, you need a data-driven, strategic approach
          that aligns with the buying habits of your audience. Amazon SEO
          isn&apos;t simple, and your brand deserves an approach that treats it
          that way.
        </p>
        <div className="flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.title}
                className={cn(
                  "overflow-hidden rounded-(--r-lg) border bg-surface transition-colors duration-180",
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
            Talk to an expert
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </LightSection>
  );
}
