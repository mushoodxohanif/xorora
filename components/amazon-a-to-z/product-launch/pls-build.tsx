import { ArrowUpRight, Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { buttonClassName } from "@/lib/button-styles";

const GET = [
  "Complete store setup and brand optimization",
  "End-to-end advertising, SEO, and sales management",
  "Ongoing reporting, strategy, and growth tracking",
] as const;

/** Abstract performance chrome — illustrative only, not Xorora results. */
function PerformanceVisual() {
  return (
    <div className="relative overflow-hidden rounded-(--r-xl) border border-border bg-navy-900 p-[clamp(24px,3vw,36px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(70,76,159,.4),transparent_60%)]" />
      <p className="relative m-0 mb-1 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.14em]">
        Product performance
      </p>
      <p className="relative m-0 mb-6 font-sans text-[13px] text-white/50">
        Illustrative framework — not a Xorora result claim
      </p>
      <div className="relative grid grid-cols-3 gap-3">
        {[
          { label: "Visibility", bar: "72%" },
          { label: "Conversion", bar: "58%" },
          { label: "Ad efficiency", bar: "64%" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-(--r-md) border border-white/10 bg-white/5 p-3"
          >
            <div className="mb-3 h-20 overflow-hidden rounded-(--r-sm) bg-white/8">
              <div
                className="mt-auto h-full w-full bg-linear-to-t from-tangerine-500/80 to-indigo-400/40"
                style={{ clipPath: `inset(${100 - Number.parseInt(item.bar, 10)}% 0 0 0)` }}
              />
            </div>
            <div className="font-mono text-[11px] text-white/55">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlsBuild() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            title="Already have a great product? Let's build your Amazon business around it."
            sub="If you're launching a new product on Amazon, you can rely on Xorora to handle the rest. We take care of everything, from Amazon product launch strategy to managing Amazon ads."
            className="ind-reveal mb-8"
            titleSize="clamp(26px,3.2vw,38px)"
          />
          <ul className="ind-reveal m-0 mb-8 flex list-none flex-col gap-3 p-0">
            {GET.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="font-sans text-[15.5px] text-fg2 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#unlock-form"
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Get started
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="ind-reveal">
          <PerformanceVisual />
        </div>
      </div>
    </LightSection>
  );
}
