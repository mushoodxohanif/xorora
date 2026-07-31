import type { LucideIcon } from "lucide-react";
import { Gauge, Layers, Rocket, ShieldCheck, Zap } from "lucide-react";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";

const ACCELERATORS: {
  n: string;
  title: string;
  body: string;
  impact: string;
  icon: LucideIcon;
}[] = [
  {
    n: "01",
    title: "ML readiness assessment",
    body: "A structured evaluation of data quality, infrastructure, and AI maturity, with a prioritized implementation roadmap.",
    impact: "Identifies and resolves readiness gaps early",
    icon: Gauge,
  },
  {
    n: "02",
    title: "Feature store accelerator",
    body: "A pre-built feature-engineering framework that standardizes ML input pipelines across model types and business domains.",
    impact: "Reduces feature development time",
    icon: Layers,
  },
  {
    n: "03",
    title: "GenAI solution blueprint",
    body: "A structured GenAI architecture framework covering LLM selection, RAG design, guardrails, and enterprise integration patterns.",
    impact: "Reduces GenAI pilot delivery time",
    icon: Rocket,
  },
  {
    n: "04",
    title: "Model validation and governance framework",
    body: "Pre-built validation, bias testing, and governance documentation for enterprise-ready ML deployment.",
    impact: "Compresses model approval timelines",
    icon: ShieldCheck,
  },
];

/**
 * The "why Xorora" moment: named accelerators on a dark band, styled as a
 * 2x2 framework grid with impact footers — distinct from OutcomeGrid's
 * centered 4-up icon cards and the AAD why section's featured band.
 */
export function MdsAccelerators() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-navy-900 via-[#101A4A] to-[#1C3277] px-8 py-[clamp(72px,9vw,118px)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_100%_0%,rgba(91,141,239,0.22)_0%,transparent_55%)]"
        aria-hidden
      />
      <XWatermark
        size={440}
        color="rgba(120,150,240,0.05)"
        className="-left-20 top-[-160px]"
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <SignalRule color="var(--tangerine-400)" />
              <span className="font-mono text-tangerine-400 text-xs uppercase tracking-[0.2em]">
                Accelerators
              </span>
            </div>
            <h2 className="m-0 text-balance font-bold font-sans text-[clamp(30px,4.2vw,48px)] text-white leading-[1.08] tracking-[-0.02em]">
              AI/ML accelerators for faster delivery and production readiness
            </h2>
          </div>
          <p className="m-0 max-w-[460px] font-sans text-[16.5px] text-white/66 leading-[1.65] lg:justify-self-end lg:pb-1">
            Proprietary frameworks that compress AI development timelines and
            speed the path from experiment to production-grade business
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {ACCELERATORS.map((acc) => {
            const Icon = acc.icon;
            return (
              <article
                key={acc.n}
                className="group relative flex flex-col overflow-hidden rounded-(--r-xl) border border-white/10 bg-white/4 transition-colors duration-300 hover:border-indigo-300/40 hover:bg-white/6"
              >
                <div className="flex flex-1 flex-col p-[clamp(22px,2.8vw,32px)]">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-300/30 bg-indigo-900/35 text-indigo-200 transition-colors duration-300 group-hover:border-tangerine-400/35 group-hover:text-tangerine-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-mono text-[12px] text-indigo-300/70 tracking-[0.14em]">
                      {acc.n}
                    </span>
                  </div>
                  <h3 className="mb-2.5 font-sans font-semibold text-[clamp(18px,1.8vw,21px)] text-white leading-snug tracking-[-0.01em]">
                    {acc.title}
                  </h3>
                  <p className="m-0 font-sans text-[14.5px] text-white/62 leading-relaxed">
                    {acc.body}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 border-white/10 border-t bg-white/3 px-[clamp(22px,2.8vw,32px)] py-3.5">
                  <Zap
                    className="h-3.5 w-3.5 shrink-0 text-tangerine-400"
                    aria-hidden
                  />
                  <span className="font-sans text-[13.5px] text-white/74 leading-snug">
                    <span className="font-semibold text-tangerine-300">
                      Impact:
                    </span>{" "}
                    {acc.impact}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
