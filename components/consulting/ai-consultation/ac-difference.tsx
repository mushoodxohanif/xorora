import {
  Cloud,
  Handshake,
  Link2,
  Scale,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const POINTS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Target,
    title: "Value-driven solutions",
    body: "We align strategy to user needs and business goals, so what we deliver produces measurable value.",
  },
  {
    icon: Cloud,
    title: "Future-ready scalability",
    body: "Cloud-native, modular architectures mean your AI grows with the business instead of fighting it.",
  },
  {
    icon: Link2,
    title: "Integration and adaptability",
    body: "We build AI that fits your existing systems, speeding adoption and time-to-value across complex IT environments.",
  },
  {
    icon: Handshake,
    title: "End-to-end support",
    body: "Data scientists, software engineers, and UX designers stay with you through the whole AI implementation.",
  },
  {
    icon: Scale,
    title: "Ethical and compliant AI",
    body: "We hold to fairness, transparency, and governance that protect your brand and earn long-term trust.",
  },
];

export function AcDifference() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="The difference"
        title="Why enterprises choose Xorora for AI consulting"
        sub="Years of work across industries taught us how to navigate complex, industry-specific challenges and position your business for the long term."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {POINTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
