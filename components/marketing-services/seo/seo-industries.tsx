import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HeartPulse,
  Home,
  LayoutGrid,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const VERTICALS: {
  icon: LucideIcon;
  name: string;
  body: string;
}[] = [
  {
    icon: Building2,
    name: "Multi-location and franchise",
    body: "National consistency, local store visibility. We sync location listings, deploy local schema, and optimize map pins for nearby searches.",
  },
  {
    icon: Home,
    name: "Home services",
    body: "HVAC, plumbing, painting, and pest control. We build conversion-optimized city pages and target ready-to-book local searches.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare and wellness",
    body: "Clinics, medical practices, and care centers. We target high-intent medical queries, optimize practitioner profiles, and build organic E-E-A-T signals.",
  },
  {
    icon: ShoppingCart,
    name: "eCommerce and retail",
    body: "Storefronts, product SKUs, and marketplaces. We resolve technical architecture issues, optimize crawl budgets for large catalogs, and deploy product schema.",
  },
  {
    icon: LayoutGrid,
    name: "B2B, SaaS, and enterprise",
    body: "Software, lead generation, and complex services. We build high-intent content hubs and structure site hierarchy for crawler efficiency and AI visibility.",
  },
  {
    icon: UtensilsCrossed,
    name: "QSR and dining",
    body: "Quick-service restaurants and food services. We optimize locations on local maps, implement menu and location schema, and execute local store SEO.",
  },
];

export function SeoIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Who we serve"
        title="Who we serve"
        sub="We tailor SEO to the search behavior, competition, and conversion path of each vertical."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {VERTICALS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-[23px] w-[23px]" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[19px] text-fg1 leading-snug">
                {item.name}
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
