import type { LucideIcon } from "lucide-react";
import { Briefcase, Code2 } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const BENEFITS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Code2,
    title: "From the tech perspective",
    body: "Repay technical debt, strengthen security, adopt modern tools, improve integration, and eliminate outdated code, while revamping UX and brand consistency across channels.",
  },
  {
    icon: Briefcase,
    title: "From the business perspective",
    body: "Improve customer experience, save cost over the long run, meet industry regulations, and raise scalability, productivity, and competitive edge, with new tech capabilities to build on.",
  },
];

export function AmsChallenges() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why modernize"
        title="Benefits of software modernization, from both sides of the business"
        sub="Modernization pays off twice: once in the engineering it cleans up, and once in the business results that follow."
        className="mb-12 max-w-[720px]"
      />
      <div className="ind-page-2grid grid grid-cols-2 gap-[22px]">
        {BENEFITS.map((item) => {
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
