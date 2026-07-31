import { ArrowUpRight, Boxes, Layers, Zap } from "lucide-react";
import { SignalRule } from "@/components/geometry/signal-rule";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

const POINTS = [
  {
    icon: Boxes,
    title: "Full-stack AI development",
    body: "End-to-end builds, from data and models to the interfaces your team uses.",
  },
  {
    icon: Layers,
    title: "AI agent orchestration",
    body: "Multiple specialized agents coordinated to deliver complex automations.",
  },
  {
    icon: Zap,
    title: "High velocity",
    body: "AI-first delivery moves faster than a traditional build.",
  },
] as const;

const STAGES = ["Plan", "Build", "Deploy", "Grow"] as const;

export function WfaVelocity() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#15225C] via-[#1E3784] to-[#2A4FBD] px-8 py-[clamp(72px,9vw,118px)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(140,175,255,0.45),transparent_56%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <SignalRule color="var(--tangerine-400)" />
              <span className="font-mono text-tangerine-400 text-xs uppercase tracking-[0.2em]">
                AI-first delivery
              </span>
            </div>
            <h2 className="m-0 text-balance font-bold font-sans text-[clamp(30px,4.2vw,48px)] text-white leading-[1.08] tracking-[-0.02em]">
              Build faster with AI-first engineers
            </h2>
          </div>
          <p className="m-0 max-w-[460px] font-sans text-[16.5px] text-white/66 leading-[1.65] lg:justify-self-end lg:pb-1">
            AI-first engineers plan, build, deploy, and grow your automation,
            delivering production-grade work.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-(--r-lg) border border-white/15 bg-white/8 p-[clamp(22px,2.4vw,28px)] backdrop-blur-sm"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-(--r-md) border border-indigo-300/30 bg-indigo-900/35 text-indigo-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mb-2 font-sans font-semibold text-[17.5px] text-white leading-snug">
                  {point.title}
                </h3>
                <p className="m-0 font-sans text-[14px] text-white/62 leading-relaxed">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-6 rounded-(--r-xl) border border-white/12 bg-white/6 px-[clamp(24px,3vw,36px)] py-[clamp(22px,2.8vw,30px)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[11px] text-indigo-200/80 uppercase tracking-[0.14em]">
              Delivery stages
            </p>
            <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0">
              {STAGES.map((stage, i) => (
                <li key={stage} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-sans font-semibold text-[13.5px] text-white">
                    {stage}
                  </span>
                  {i < STAGES.length - 1 && (
                    <span
                      className="hidden text-indigo-300/70 sm:inline"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "light", size: "lg" })}
          >
            Hire AI-first engineers
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </section>
  );
}
