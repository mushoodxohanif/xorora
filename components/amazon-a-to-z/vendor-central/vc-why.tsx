import { type LucideIcon, BarChart3, Layers, TrendingUp } from "lucide-react";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Proven Vendor Central results",
    body: "We help first-party brands grow revenue, improve year-over-year performance, and reduce ACOS, built around real outcomes, not activity metrics.",
  },
  {
    icon: Layers,
    title: "Full-service Amazon expertise",
    body: "From vendor negotiations and chargeback disputes to A+ Content and Amazon DSP, we handle every dimension under one program.",
  },
  {
    icon: BarChart3,
    title: "Data-driven decision making",
    body: "Every recommendation is backed by real-time analytics, competitive intelligence, and Amazon-specific data, turning complex Vendor Central reporting into action.",
  },
];

export function VcWhy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Why Xorora"
          title="Why Xorora for Amazon Vendor Central"
          sub="Our Amazon team has deep Vendor Central expertise: vendor negotiation strategy, chargeback dispute management, first-party advertising, and the analytics that first-party sellers need. We're not generalists who added Amazon to a service list. We manage Vendor Central relationships with one focus: profitable revenue growth."
          onDark
          className="ind-reveal mb-12 max-w-[760px]"
        />
        <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[18px]">
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
