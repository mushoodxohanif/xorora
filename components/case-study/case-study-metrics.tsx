import { SignalRule } from "@/components/geometry/signal-rule";
import type { CaseStudyMetric } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";
import { DarkSection } from "./dark-section";
import { StatBlock } from "./stat-block";

interface CaseStudyMetricsProps {
  metrics: CaseStudyMetric[];
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  if (metrics.length === 0) {
    return null;
  }

  return (
    <DarkSection bloom="50% -10%" pad="clamp(44px,5.5vw,68px) 32px">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-3">
          <SignalRule color="var(--tangerine-400)" />
          <span className="font-mono text-[13px] text-tangerine-400 uppercase tracking-[0.24em]">
            Key Metrics
          </span>
          <SignalRule color="var(--tangerine-400)" className="scale-x-[-1]" />
        </div>
      </div>
      <div
        className={cn(
          "cs-metrics-grid mx-auto grid max-w-[1000px] gap-[clamp(20px,3vw,40px)]",
          metrics.length === 2 && "grid-cols-2",
          metrics.length === 3 && "grid-cols-3",
          metrics.length >= 4 && "grid-cols-4",
        )}
      >
        {metrics.map((metric) => (
          <StatBlock
            key={metric.id}
            value={metric.value}
            label={metric.label}
            onDark
            align="center"
            arrow={false}
          />
        ))}
      </div>
    </DarkSection>
  );
}
