import {
  type LucideIcon,
  BarChart3,
  FileText,
  Globe2,
  Layers,
  Megaphone,
  Package,
  ShieldAlert,
  Store,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "Documented Amazon strategy",
    body: "A written Seller Central strategy covering catalog, advertising, and margin goals, so the whole program pulls in one direction.",
  },
  {
    icon: Store,
    title: "Catalog setup and maintenance",
    body: "Clean catalog structure, variations, and data integrity that keep your listings healthy as you scale.",
  },
  {
    icon: Layers,
    title: "Listing optimization and A+ Content",
    body: "Optimized titles, bullets, descriptions, images, and A+ Content to lift visibility and conversion across your catalog.",
  },
  {
    icon: Megaphone,
    title: "Amazon advertising management",
    body: "Full-funnel PPC across Sponsored Products, Brands, and Display, managed to your ACOS and revenue targets.",
  },
  {
    icon: ShieldAlert,
    title: "Account compliance and risk",
    body: "Proactive monitoring of account health, policy, and listing compliance to prevent suspensions before they happen.",
  },
  {
    icon: Package,
    title: "FBA and inventory management",
    body: "Inventory forecasting and FBA planning that reduce stockouts and long-term storage fees while protecting Buy Box eligibility.",
  },
  {
    icon: BarChart3,
    title: "Analytics and reporting",
    body: "Clear reporting tied to the metrics that matter: revenue, ACOS/TACOS, organic rank, and Buy Box win rate.",
  },
  {
    icon: Globe2,
    title: "International marketplace",
    body: "Support for expanding into additional Amazon marketplaces when you're ready to grow beyond your home region.",
  },
];

export function ScIncluded() {
  return (
    <LightSection>
      <SectionHead
        title="A complete Amazon Seller Central management program"
        sub="Every engagement includes the strategy, catalog and listing work, advertising, compliance monitoring, and reporting infrastructure needed to build a profitable, scalable Amazon presence."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,28px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                {card.title}
              </h3>
              <p className="m-0 font-sans text-[14px] text-fg2 leading-relaxed">
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
