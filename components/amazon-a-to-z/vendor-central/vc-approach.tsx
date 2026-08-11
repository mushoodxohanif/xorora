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
    title: "Vendor negotiation and margin protection",
    body: "Amazon is a tough negotiator. Without expertise in vendor agreements and pricing structures, brands consistently leave money on the table. We bring negotiation experience and data-driven pricing to protect the margins that make the channel profitable.",
  },
  {
    title: "Content optimization for search and conversion",
    body: "We align content quality with search and conversion goals across your catalog, so every product page earns its traffic and converts it.",
  },
  {
    title: "Advertising and inventory coordination",
    body: "We run advertising and inventory planning as one coordinated program, so ad spend and stock levels reinforce each other instead of working against your margin.",
  },
] as const;

export function VcApproach() {
  const [open, setOpen] = useState(0);

  return (
    <LightSection>
      <SectionHead
        label="Our approach"
        title="Full-service Vendor Central management built around profitability"
        sub="Every dimension of your first-party Amazon relationship, managed for profitable growth."
        className="mb-10 max-w-[760px]"
      />
      <div className="mx-auto flex max-w-[900px] flex-col gap-3">
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
      <p className="mx-auto mt-10 max-w-[760px] font-sans text-[16px] text-fg2 leading-relaxed">
        We take a fully integrated approach, aligning negotiation, content,
        advertising, inventory, and analytics into one program built around your
        revenue and margin goals. We don&apos;t optimize listings or run ads in
        isolation. We manage the entire first-party relationship, from agreement
        terms to conversion rates, so every element compounds.
      </p>
      <div className="mx-auto mt-8 max-w-[760px]">
        <LetsTalkContactLink
          className={buttonClassName({ variant: "primary", size: "lg" })}
        >
          Get a proposal
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </LightSection>
  );
}
