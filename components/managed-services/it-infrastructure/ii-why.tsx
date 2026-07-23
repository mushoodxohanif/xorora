import { SectionHead } from "@/components/case-study/section-head";
import {
  Cloud,
  Gauge,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const BENEFITS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Target,
    title: "Built around your goals",
    body: "People-orchestrated solutions, purpose-built to meet your needs, budgets, and expected outcomes.",
  },
  {
    icon: Cloud,
    title: "A cloud blend that fits",
    body: "Strategies that support a custom mix of single and multi-tenant cloud, plus colocation.",
  },
  {
    icon: Gauge,
    title: "Faster, safer, leaner",
    body: "Architecture that raises security, speed, and scalability while trimming your software stack and hardware.",
  },
];

function MulticloudChart() {
  return (
    <div className="flex h-full flex-col rounded-(--r-lg) border border-white/12 bg-white/4 p-[clamp(24px,2.6vw,32px)]">
      <div className="mb-2 font-extrabold font-sans text-[clamp(48px,6vw,72px)] text-white leading-none tracking-[-0.03em]">
        89%
      </div>
      <p className="mb-6 m-0 max-w-[280px] font-sans text-[14px] text-white/68 leading-relaxed">
        of organizations have a multi-cloud strategy
      </p>

      <div
        className="relative mb-6 flex min-h-[180px] flex-1 flex-col justify-end"
        aria-hidden
      >
        <div className="absolute inset-0 mx-auto w-[min(100%,72px)] rounded-full bg-white/10" />
        <div
          className="relative mx-auto w-[min(100%,72px)] rounded-full bg-[#6B7FD7]"
          style={{ height: "89%" }}
        />
      </div>

      <svg
        viewBox="0 0 320 28"
        className="h-7 w-full shrink-0"
        role="img"
        aria-label="89 percent multi-cloud adoption bar"
      >
        <rect
          x="0"
          y="6"
          width="320"
          height="16"
          rx="8"
          fill="rgba(255,255,255,0.12)"
        />
        <rect
          x="0"
          y="6"
          width={320 * 0.89}
          height="16"
          rx="8"
          fill="#6B7FD7"
        />
      </svg>
    </div>
  );
}

export function IiWhy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_6%,rgba(91,141,239,0.28)_0%,rgba(39,85,195,0.10)_30%,rgba(1,12,40,0)_62%)]" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHead
          label="Multicloud, done right"
          title="Your cloud, your way. Built for modern workloads."
          sub="At Xorora, we design multi-cloud environments unique to your business. However complex your goals, our teams work with you from planning to deployment and beyond."
          onDark
          className="mb-[52px] max-w-[720px]"
        />
        <div className="grid grid-cols-1 items-stretch gap-[22px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-3 lg:grid-cols-1">
            {BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-(--r-lg) border border-white/12 bg-white/4 p-[clamp(22px,2.4vw,28px)]"
                >
                  <span className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-300/32 bg-indigo-900/28 text-indigo-300">
                    <Icon className="h-[22px] w-[22px]" aria-hidden />
                  </span>
                  <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="m-0 font-sans text-[13.5px] text-white/62 leading-snug">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
          <MulticloudChart />
        </div>
      </div>
    </section>
  );
}
