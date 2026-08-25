import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Calendar,
  Globe,
  Layers,
  LayoutGrid,
  Rocket,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  industryHref,
  serviceHref,
  splitServiceNames,
} from "@/lib/case-studies/meta-links";
import type { CaseStudy } from "@/lib/case-studies/types";

const META_ICONS: Record<string, LucideIcon> = {
  Engagement: Briefcase,
  Team: Users,
  Architecture: LayoutGrid,
  "Delivery model": Rocket,
  Domain: Layers,
  Market: Globe,
  Product: Briefcase,
  Industry: Globe,
  Services: Layers,
};

function metaIcon(label: string): LucideIcon {
  return META_ICONS[label] ?? Calendar;
}

function getOverviewMeta(study: CaseStudy) {
  const overview = study.sections.find(
    (section) => section.type === "overview",
  );
  return overview?.content.meta ?? [];
}

function MetaValue({ label, value }: { label: string; value: string }) {
  if (label === "Industry") {
    const href = industryHref(value);
    if (href) {
      return (
        <Link
          href={href}
          className="mt-0.5 font-sans font-semibold text-[14.5px] text-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-tangerine-400 hover:decoration-tangerine-400"
        >
          {value}
        </Link>
      );
    }
  }

  if (label === "Services") {
    const names = splitServiceNames(value);
    return (
      <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-sans font-semibold text-[14.5px] text-white">
        {names.map((name, index) => {
          const href = serviceHref(name);
          return (
            <span key={name} className="inline-flex items-center gap-1.5">
              {href ? (
                <Link
                  href={href}
                  className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-tangerine-400 hover:decoration-tangerine-400"
                >
                  {name}
                </Link>
              ) : (
                <span>{name}</span>
              )}
              {index < names.length - 1 && (
                <span className="text-white/35" aria-hidden>
                  ·
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-0.5 font-sans font-semibold text-[14.5px] text-white">
      {value}
    </div>
  );
}

export function CaseStudyMetaBar({ study }: { study: CaseStudy }) {
  const meta = getOverviewMeta(study);

  if (meta.length === 0) {
    return null;
  }

  return (
    <div className="relative border-white/8 border-t bg-navy-950">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-7 px-8 py-5">
        <div className="flex flex-wrap gap-[clamp(20px,4vw,48px)]">
          {meta.map((item) => {
            const Icon = metaIcon(item.label);
            return (
              <div key={item.label} className="flex items-start gap-3">
                <Icon
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-tangerine-400"
                  aria-hidden
                />
                <div className="min-w-0">
                  <div className="font-mono text-[10.5px] text-white/45 uppercase tracking-[0.12em]">
                    {item.label}
                  </div>
                  <MetaValue label={item.label} value={item.value} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
