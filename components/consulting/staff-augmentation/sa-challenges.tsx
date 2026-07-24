import { Clock, Puzzle, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CHALLENGES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Clock,
    title: "Hiring takes too long",
    body: "Recruiting, interviewing, and onboarding one engineer can take three to six months. Your roadmap can't wait.",
  },
  {
    icon: Puzzle,
    title: "Specialized gaps stay open",
    body: "One missing skill, in a niche framework or legacy system, can hold up an entire release.",
  },
  {
    icon: Users,
    title: "Teams stretched thin",
    body: "Overloaded teams ship slower and burn out faster, and adding headcount permanently isn't always the answer.",
  },
];

export function SaChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why roadmaps stall"
        title="Where delivery capacity runs out"
        sub="Hiring takes months you don't have, and the gap shows up as a roadmap that stops moving."
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
