import { BarChart3, Rocket, ShieldAlert } from "lucide-react";
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
    title: "Pilots that never ship",
    body: "Promising demos stall before production and never reach the users who would benefit from them.",
  },
  {
    icon: BarChart3,
    title: "ROI you can't point to",
    body: "Without a business case tied to real metrics, AI spend is hard to defend and easy to cut.",
  },
  {
    icon: ShieldAlert,
    title: "Governance left too late",
    body: "Bolting on security and compliance at the end slows launches and exposes you to avoidable risk.",
  },
];

export function AcChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why AI stalls"
        title="Where enterprise AI usually gets stuck"
        sub="Most AI programs don't fail on the technology. They stall on readiness, unclear value, and governance left too late."
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
