import { Crosshair, LineChart, Swords } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const POINTS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Crosshair,
    title: "Search intent mapping",
    body: "We match campaigns to what searchers actually want, so spend follows real demand.",
  },
  {
    icon: Swords,
    title: "Competitor and auction analysis",
    body: "We read the auction and your rivals to find where you can win efficiently.",
  },
  {
    icon: LineChart,
    title: "Revenue and conversion tracking",
    body: "We make sure the numbers tie back to revenue, not vanity clicks.",
  },
];

export function GoogleAdsChallenge() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="The core challenge"
        title="Most Google Ads budget is wasted quietly"
        sub="Most Google Ads accounts waste budget because targeting, bidding, and measurement aren't aligned to revenue. We align intent, structure campaigns properly, and optimize against measurable return."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {POINTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 flex-1 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
