import { ArrowDown } from "lucide-react";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { buttonClassName } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

const METRICS = [
  { label: "Account health", value: "Monitored", sub: "Policy + listings" },
  { label: "Inventory", value: "In stock", sub: "IPI + FBA" },
  { label: "Advertising", value: "Full-funnel", sub: "ACOS / TACOS" },
  { label: "Cases", value: "Owned", sub: "End to end" },
] as const;

export function AmProblem() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHead
            label="Amazon account management services"
            title="Running your Amazon business shouldn't run your life"
            className="ind-reveal mb-6 max-w-[640px]"
          />
          <p className="ind-reveal m-0 mb-8 max-w-[640px] font-sans text-[16px] text-fg2 leading-relaxed">
            Between juggling PPC campaigns, managing inventory, optimizing
            listings, monitoring compliance, and handling customer service, most
            sellers end up drowning in operational tasks instead of focusing on
            strategic growth. Let experts handle your Amazon account while you
            focus on what matters most: building your brand and developing new
            products. Xorora provides comprehensive, full-service Amazon account
            management from A to Z. We become your dedicated Amazon team,
            handling every aspect of your seller account.
          </p>
          <a
            href="#free-audit"
            className={cn(
              "ind-reveal",
              buttonClassName({ variant: "primary", size: "lg" }),
            )}
          >
            Schedule your free account assessment
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="ind-reveal relative mx-auto w-full max-w-[480px]">
          <div className="vc-hero-glow absolute inset-0 rounded-[28px] bg-[#FF9900]/12 blur-3xl" />
          <div className="vc-hero-panel relative overflow-hidden rounded-(--r-xl) border border-border bg-navy-900 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between border-white/10 border-b px-5 py-3.5">
              <div className="flex items-center gap-3">
                <AmazonLogo className="h-6" />
                <span className="rounded-pill bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white/80 uppercase tracking-[0.16em]">
                  Channel ops
                </span>
              </div>
              <span className="vc-live-dot flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-300"
                  aria-hidden
                />
                Live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-5">
              {METRICS.map((metric, i) => (
                <div
                  key={metric.label}
                  className="vc-metric-card rounded-(--r-md) border border-white/10 bg-white/5 px-3.5 py-3"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                    {metric.label}
                  </div>
                  <div className="mt-1.5 font-sans font-semibold text-[15px] text-white">
                    {metric.value}
                  </div>
                  <div className="mt-0.5 font-sans text-[12px] text-white/55">
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LightSection>
  );
}
