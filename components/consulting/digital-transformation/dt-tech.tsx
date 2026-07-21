import { Code2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS: {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}[] = [
  {
    icon: Zap,
    title: "Business agility",
    bullets: [
      "Product-aligned operating model",
      "Agile ways of working",
      "Product management maturity",
    ],
  },
  {
    icon: Code2,
    title: "Software engineering",
    bullets: [
      "DevSecOps and SRE",
      "Platform engineering and observability",
      "Full-stack development",
    ],
  },
];

export function DtTech() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="The foundation we build on"
        sub="Business agility and software engineering meet in one foundation, so strategy and delivery stay aligned."
        className="mb-12 max-w-[720px]"
      />
      <div className="ind-page-2grid grid grid-cols-2 gap-[22px]">
        {GROUPS.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.title}
              className="overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-4 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {group.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {group.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 font-sans text-[14.5px] text-fg2 leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-xo-indigo"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
