import type { LucideIcon } from "lucide-react";
import { FlaskConical, Leaf, LineChart } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const PRINCIPLES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Leaf,
    title: "Lean and focused",
    body: "Ship the smallest thing that proves the idea, not the biggest thing you can build.",
  },
  {
    icon: FlaskConical,
    title: "Rapid prototyping",
    body: "Move fast to something real users can touch, then learn from how they use it.",
  },
  {
    icon: LineChart,
    title: "Validated learning",
    body: "Let user data, not opinion, decide what gets built next.",
  },
];

export function MvpPrinciples() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="MVP principles"
        title="How to excel at MVPs"
        sub="Three principles that keep early builds honest, fast, and worth the spend."
        className="mb-12 max-w-[720px]"
      />
      <div className="ind-page-2grid grid grid-cols-3 gap-[22px]">
        {PRINCIPLES.map((item) => {
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
