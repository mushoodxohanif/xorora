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
  href: string;
}[] = [
  {
    icon: "heart-pulse",
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
  },
  {
    icon: "landmark",
    name: "Fintech",
    href: ROUTES.industry("fintech"),
  },
  {
    icon: "building-2",
    name: "Real Estate",
    href: ROUTES.industry("real-estate"),
  },
  {
    icon: "shopping-cart",
    name: "E-commerce",
    href: ROUTES.industry("ecommerce"),
  },
  {
    icon: "graduation-cap",
    name: "Edtech",
    href: ROUTES.industry("edtech"),
  },
  {
    icon: "truck",
    name: "Logistics",
    href: ROUTES.industry("logistics"),
  },
  {
    icon: "layout-grid",
    name: "SaaS",
    href: ROUTES.industry("saas"),
  },
  {
    icon: "rocket",
    name: "Startups",
    href: ROUTES.industry("startups"),
  },
  {
    icon: "palmtree",
    name: "Travel & Hospitality",
    href: ROUTES.industry("travel-hospitality"),
  },
];

export function WfaIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Industries we have worked with"
        sub="We build AI workflow automation for teams across the sectors Xorora already serves."
        className="mb-12 max-w-[720px]"
      />
      <div className="svc-grid3 grid grid-cols-3 gap-[18px]">
        {INDUSTRIES.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group relative flex items-center gap-4 overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 px-5 py-4 no-underline",
              "transition-all duration-220 ease-in-out",
              "hover:translate-y-[-2px] hover:border-border-strong hover:bg-white hover:shadow-md",
            )}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo transition-all duration-200 group-hover:bg-xo-indigo group-hover:text-white">
              <NavIcon name={item.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1 font-sans font-semibold text-[15.5px] text-fg1 leading-snug">
              {item.name}
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-tangerine-500"
              aria-hidden
            />
          </Link>
        ))}
      </div>
    </LightSection>
  );
}
