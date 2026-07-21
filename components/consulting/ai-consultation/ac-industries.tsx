import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { NavIcon } from "@/components/ui/nav-icon";
import type { NavIconName } from "@/lib/navigation";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const INDUSTRIES: {
  icon: NavIconName;
  name: string;
  body: string;
  href: string;
}[] = [
  {
    icon: "heart-pulse",
    name: "Healthcare",
    body: "AI-powered diagnostic support, patient data analysis, and predictive analytics for disease prevention.",
    href: ROUTES.industry("health-tech"),
  },
  {
    icon: "landmark",
    name: "Fintech",
    body: "Fraud detection, credit risk assessment, algorithmic trading, and automated compliance monitoring.",
    href: ROUTES.industry("fintech"),
  },
  {
    icon: "building-2",
    name: "Real Estate",
    body: "Property valuation models, listing recommendations, tenant risk scoring, and predictive maintenance for portfolios.",
    href: ROUTES.industry("real-estate"),
  },
  {
    icon: "shopping-cart",
    name: "E-commerce",
    body: "Personalized recommendations, dynamic pricing, inventory management, and churn prediction.",
    href: ROUTES.industry("ecommerce"),
  },
  {
    icon: "graduation-cap",
    name: "Edtech",
    body: "Personalized learning paths, automated grading, student performance prediction, and intelligent tutoring.",
    href: ROUTES.industry("edtech"),
  },
  {
    icon: "truck",
    name: "Logistics",
    body: "Route optimization, demand forecasting, warehouse automation, and real-time supply chain visibility.",
    href: ROUTES.industry("logistics"),
  },
  {
    icon: "layout-grid",
    name: "SaaS",
    body: "Churn prediction, in-product recommendations, support automation, and usage-driven expansion signals.",
    href: ROUTES.industry("saas"),
  },
  {
    icon: "rocket",
    name: "Startups",
    body: "Investor-ready AI MVPs, lean use-case validation, and production paths that scale with early traction.",
    href: ROUTES.industry("startups"),
  },
  {
    icon: "palmtree",
    name: "Travel & Hospitality",
    body: "Dynamic pricing, personalized itineraries, demand forecasting, and guest experience automation.",
    href: ROUTES.industry("travel-hospitality"),
  },
];

export function AcIndustries() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Industries"
        title="Industry-specific AI consulting"
        sub="Consulting shaped around the challenges specific to your industry."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[22px]">
        {INDUSTRIES.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)] no-underline",
              "transition-all duration-220 ease-in-out",
              "hover:translate-y-[-3px] hover:border-border-strong hover:shadow-md",
            )}
          >
            <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-indigo-400 to-tangerine-500 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo transition-all duration-200 group-hover:bg-xo-indigo group-hover:text-white group-hover:shadow-glow-indigo">
                <NavIcon name={item.icon} className="h-6 w-6" />
              </span>
              <ArrowUpRight
                className="group-hover:-translate-y-0.5 h-5 w-5 text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-tangerine-500"
                aria-hidden
              />
            </div>
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.name}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
            </p>
          </Link>
        ))}
      </div>
    </LightSection>
  );
}
