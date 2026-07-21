import { BarChart3, Layers, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CHALLENGES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Rocket,
    title: "Change that stalls",
    body: "Big-bang programs collapse under their own weight and rarely pay for themselves along the way.",
  },
  {
    icon: Layers,
    title: "Legacy that holds you back",
    body: "Aging systems make every change slow, risky, and expensive to ship into production.",
  },
  {
    icon: BarChart3,
    title: "AI with no clear return",
    body: "AI gets adopted for its own sake, without a line drawn back to real business value.",
  },
];

export function DtChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why transform stalls"
        title="Where digital transformation usually breaks down"
        sub="Most programs don't fail on ambition. They stall on scope, legacy drag, and AI with no clear return."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
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
