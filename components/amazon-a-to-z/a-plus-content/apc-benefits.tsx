import {
  BarChart3,
  Eye,
  Layers,
  MessageCircle,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Conversion rates up by 3–10%",
    body: "Amazon's own data shows A+ Content can lift conversion.",
  },
  {
    icon: Eye,
    title: "Visually engaging listings",
    body: "Rich modules that hold attention below the fold.",
  },
  {
    icon: Sparkles,
    title: "Storytelling with A+ Content",
    body: "Carry brand narrative past bare bullets and descriptions.",
  },
  {
    icon: Star,
    title: "Encourages positive reviews",
    body: "Clearer expectations reduce mismatch and return friction.",
  },
  {
    icon: BarChart3,
    title: "Improved brand awareness",
    body: "Consistent visual systems across the catalog.",
  },
  {
    icon: Layers,
    title: "Stand out from the competition",
    body: "Immersive PDPs that look premium next to plain listings.",
  },
  {
    icon: MessageCircle,
    title: "Answers most product questions",
    body: "Comparison charts and feature callouts handle objections early.",
  },
  {
    icon: Share2,
    title: "Cross-selling opportunities",
    body: "Modules that surface related ASINs and brand assortment.",
  },
] as const;

export function ApcBenefits() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Benefits"
        title="Amazon A+ Content benefits at a glance"
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="ind-reveal vc-card-lift rounded-(--r-lg) border border-border bg-surface p-5"
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-(--r-md) border border-indigo-200 bg-indigo-50 text-xo-indigo">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="mb-2 font-sans font-semibold text-[15.5px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[13.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
