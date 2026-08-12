import { ArrowDown } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { buttonClassName } from "@/lib/button-styles";

const PAINS = [
  "Tired of wasting time on trial and error inside Amazon Seller Central?",
  "Struggling to keep up with constant listing, PPC, and policy changes?",
  "Want expert Amazon Seller Central guidance without hiring internally?",
  "Need a clear, fast-moving strategy that delivers measurable results?",
] as const;

export function ScWho() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Amazon Seller Central brands trust us"
        sub="Managing Amazon Seller Central shouldn't feel like another full-time job. Our brand managers reduce your workload and make selling on Amazon structured and manageable."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        {PAINS.map((pain, i) => (
          <div
            key={pain}
            className="ind-reveal vc-card-lift flex gap-4 overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(22px,2.4vw,28px)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 font-mono font-semibold text-sm text-xo-indigo">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="m-0 font-sans font-semibold text-[16px] text-fg1 leading-snug">
              {pain}
            </p>
          </div>
        ))}
      </div>
      <p className="ind-reveal mt-10 mb-7 max-w-[720px] font-sans text-[16px] text-fg2 leading-relaxed">
        If you answered yes to any of the above, it&apos;s time to talk with
        experts who know Amazon inside and out and can carry the workload for
        you.
      </p>
      <a
        href="#free-audit"
        className={buttonClassName({ variant: "primary", size: "lg" })}
      >
        Claim my free audit
        <ArrowDown className="h-4 w-4" aria-hidden />
      </a>
    </LightSection>
  );
}
