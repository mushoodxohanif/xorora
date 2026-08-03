import {
  DollarSign,
  Palette,
  Target,
  TrendingDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CHALLENGES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: TrendingDown,
    title: "Poor ad performance",
    body: "Campaigns can fail without expert guidance. We use advanced tools and strategies to make sure your ads hit the mark.",
  },
  {
    icon: DollarSign,
    title: "High ad spend with low ROI",
    body: "Inefficient targeting leads to wasted budget. Our Meta Ads experts focus on the highest return on investment.",
  },
  {
    icon: Palette,
    title: "Lack of creative resources",
    body: "Not every business has professional creative on hand. We handle everything from visuals to copy so your ads stand out.",
  },
  {
    icon: Target,
    title: "Complex audience targeting",
    body: "Meta offers unparalleled targeting, but businesses miss opportunities without expertise. We keep your campaigns laser-focused.",
  },
];

export function MetaAdsChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Where campaigns go wrong"
        title="Challenges businesses face with Meta Ads"
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid4 grid grid-cols-2 gap-[22px] md:grid-cols-4">
        {CHALLENGES.map((item) => {
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
