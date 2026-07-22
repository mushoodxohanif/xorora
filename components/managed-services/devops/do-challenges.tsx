import { Cloud, Flame, Rocket } from "lucide-react";
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
    title: "Slow, risky releases",
    body: "Manual, infrequent deploys make every release a gamble and every fix a scramble.",
  },
  {
    icon: Cloud,
    title: "Cloud spend that creeps",
    body: "Without visibility and governance, cloud costs drift upward while no one's sure why.",
  },
  {
    icon: Flame,
    title: "Teams stuck firefighting",
    body: "When operations is all incidents and rollbacks, no one has time to improve the system itself.",
  },
];

export function DoChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why delivery slows"
        title="Where software delivery gets stuck"
        sub="Slow releases, drifting cloud spend, and constant firefighting quietly cap how fast your team can move."
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
