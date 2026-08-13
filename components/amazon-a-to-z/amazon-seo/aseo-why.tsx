import { type LucideIcon, EyeOff, SearchX, TrendingDown } from "lucide-react";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingDown,
    title: "Traffic is a trickle, not a flood",
    body: "You're not ranking for the keywords that actually bring in buyers, and it shows.",
  },
  {
    icon: SearchX,
    title: "Missing high-intent shoppers",
    body: "You're missing the high-intent shoppers who would convert if they could just find you.",
  },
  {
    icon: EyeOff,
    title: "Outpaced by competitors",
    body: "You watch competitors climb while your listings' images and descriptions aren't getting you anywhere.",
  },
];

export function AseoWhy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Why Xorora"
          title="Amazon optimization strategies that grow brands"
          sub="You've got products on Amazon, but if they aren't getting noticed, here's the wake-up call: without Amazon SEO, your listings are pretty much lost in the crowd, waiting for a miracle. Amazon SEO isn't post and pray. With the right strategy, you position your products in front of the right audience, the people actively searching for what you sell."
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
