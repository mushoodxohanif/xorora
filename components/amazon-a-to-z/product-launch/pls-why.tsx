import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const POINTS = [
  "A customized launch plan that covers research, listing, keywords, and PPC — not a one-size template.",
  "Focus on early sales momentum and visibility signals Amazon rewards, with clear reporting along the way.",
  "One accountable team experienced across Amazon categories, from first listing to sustained performance.",
] as const;

export function PlsWhy() {
  return (
    <LightSection>
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHead
            title="What makes Xorora Amazon product launches work"
            sub="At Xorora, we combine marketplace expertise with disciplined tactics. We adopt a customized approach that focuses on getting initial sales for momentum. You can expect measured sales progress and improving visibility as performance signals strengthen."
            className="ind-reveal mb-8"
            titleSize="clamp(26px,3.2vw,38px)"
          />
          <ul className="ind-reveal m-0 flex list-none flex-col gap-3.5 p-0">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-(--r-lg) border border-border bg-slate-50 px-4 py-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="font-sans text-[15px] text-fg2 leading-snug">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="ind-reveal relative min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border bg-navy-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_0%,rgba(91,141,239,0.35),transparent_55%)]" />
          <div className="relative flex h-full min-h-[280px] flex-col justify-end p-[clamp(24px,3vw,36px)]">
            <p className="m-0 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.14em]">
              Structured launches
            </p>
            <p className="m-0 mt-2 font-sans font-semibold text-[clamp(20px,2.2vw,26px)] text-white leading-snug">
              Research. List. Rank signals. Then scale what works.
            </p>
          </div>
        </div>
      </div>
    </LightSection>
  );
}
