import {
  Crosshair,
  ListChecks,
  Rocket,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const WHY: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Crosshair,
    title: "Guidance",
    body: "We guide you through every step of the way, so you're never running campaigns blind.",
  },
  {
    icon: ListChecks,
    title: "Details",
    body: "We give attention to even the tiniest details, protecting your brand and your budget.",
  },
  {
    icon: Rocket,
    title: "Scaling",
    body: "We grow brands to the next level, turning what works into sustained results.",
  },
  {
    icon: TrendingUp,
    title: "Success",
    body: "We measure success by ROI and pipeline, not vanity metrics — and we optimize until the spend earns its place.",
  },
];

export function MetaAdsWhy() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Why Xorora"
        title="Why choose us"
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid4 grid grid-cols-2 gap-[22px] md:grid-cols-4">
        {WHY.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
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
