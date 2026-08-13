import { type LucideIcon, Crosshair, Layers, Megaphone } from "lucide-react";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Megaphone,
    title: "Amazon advertising specialists",
    body: "Our team specializes in Amazon's advertising ecosystem, including DSP, Sponsored Ads, and the interplay between paid and organic, so your DSP program isn't run in a silo.",
  },
  {
    icon: Crosshair,
    title: "First-party audience expertise",
    body: "Amazon's first-party shopper data is what makes DSP uniquely powerful. We use it effectively to reach the audience segments that convert, with campaign design built around real signals.",
  },
  {
    icon: Layers,
    title: "Full-funnel coordination",
    body: "We manage your DSP program in coordination with your Sponsored Ads and organic strategy, so awareness, consideration, and conversion reinforce each other for maximum reach, efficiency, and ROAS.",
  },
];

export function AdspWhy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Why Xorora"
          title="Why Xorora for Amazon DSP"
          sub="Our Amazon team manages DSP programs with one focus: delivering measurable return on your advertising investment across the full customer journey. We understand DSP's audience architecture, bidding mechanics, creative requirements, and attribution at a level that translates directly into better audience targeting, lower wasted spend, and higher ROAS. We coordinate your DSP program with your Sponsored Ads strategy and organic content to create a unified advertising presence that compounds results rather than isolated campaigns that compete with each other for audience and inventory."
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
