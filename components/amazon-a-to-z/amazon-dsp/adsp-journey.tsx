import {
  type LucideIcon,
  Factory,
  Home,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CATEGORIES: { icon: LucideIcon; name: string }[] = [
  { icon: ShoppingBag, name: "Retail" },
  { icon: Building2, name: "Real Estate" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Home, name: "Home Services" },
  { icon: UtensilsCrossed, name: "Restaurants and Hospitality" },
];

export function AdspJourney() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Reach customers across the buying journey"
        sub="Every product category has its own audience behaviors, purchase cycles, and competitive dynamics on Amazon DSP. We build programmatic programs tailored to how your buyers actually shop and reach them at the right moments in their journey."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-5">
        {CATEGORIES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="ind-reveal vc-card-lift flex flex-col items-start gap-4 overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(20px,2.2vw,24px)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="m-0 font-sans font-semibold text-[16px] text-fg1 leading-snug">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
