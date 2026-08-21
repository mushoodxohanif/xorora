import {
  ChartNoAxesCombined,
  Images,
  LineChart,
  type LucideIcon,
  PenLine,
} from "lucide-react";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: LineChart,
    title: "Data-driven optimization",
    body: "Every change starts with keyword and competitor data, then gets measured against rank, click-through, and conversion. We optimize what the numbers say to optimize, not what looks nice.",
  },
  {
    icon: PenLine,
    title: "SEO-rich copywriting",
    body: "Titles, bullets, and descriptions written for Amazon's algorithm and for the person reading them, so your listing ranks and still sounds like a brand worth buying from.",
  },
  {
    icon: Images,
    title: "A+ Content and visuals",
    body: "Enhanced brand content, infographics, and image sequences that answer objections, explain the product, and give shoppers a reason to choose you over the listing next to yours.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Long-term ROI",
    body: "Optimized listings keep earning after the work is done. We build detail pages that hold their rank and keep converting, rather than short-lived spikes.",
  },
];

export function AloAdvantage() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Why Xorora"
          title="The Xorora advantage"
          sub="Listing optimization is part copywriting, part search strategy, and part conversion design. Our Amazon team handles all three together, so your detail pages rank higher, convert better, and keep performing long after launch."
          onDark
          className="ind-reveal mb-12 max-w-[760px]"
        />
        <div className="vc-stagger grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="ind-reveal vc-card-lift-dark relative overflow-hidden rounded-(--r-lg) border border-white/12 bg-white/4 p-[clamp(22px,2.4vw,28px)]"
              >
                <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-300/32 bg-indigo-900/28 text-indigo-300">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-white leading-snug">
                  {card.title}
                </h3>
                <p className="m-0 font-sans text-[13.5px] text-white/62 leading-snug">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
