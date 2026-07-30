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
    body: "CMS platforms for patient education, provider portals, and regulated content with role-based publishing and audit-ready workflows.",
    href: ROUTES.industry("health-tech"),
  },
  {
    icon: "shopping-cart",
    name: "E-Commerce & Retail",
    body: "Content and catalog models that keep merchandising, campaigns, and product pages in sync across storefronts and channels.",
    href: ROUTES.industry("ecommerce"),
  },
  {
    icon: "landmark",
    name: "Banking & Finance",
    body: "Secure content systems for product pages, client portals, and compliance-sensitive communications with governed access.",
    href: ROUTES.industry("fintech"),
  },
  {
    icon: "truck",
    name: "Transportation & Logistics",
    body: "Publishing hubs for route updates, partner portals, and operational content that needs to stay accurate across regions.",
    href: ROUTES.industry("logistics"),
  },
  {
    icon: "building-2",
    name: "Real Estate",
    body: "Property and listing CMS builds that connect listings, marketing sites, and broker tools without duplicate content entry.",
    href: ROUTES.industry("real-estate"),
  },
  {
    icon: "server-cog",
    name: "Telecommunications",
    body: "Multi-brand, multi-region CMS for plan pages, support content, and campaign launches at carrier scale.",
    href: ROUTES.industries,
  },
  {
    icon: "layout-grid",
    name: "B2B & SaaS",
    body: "Headless CMS for product docs, marketing sites, and in-app help so one edit reaches every customer touchpoint.",
    href: ROUTES.industry("saas"),
  },
  {
    icon: "megaphone",
    name: "Subscription & Loyalty",
    body: "Content platforms for membership programs, rewards messaging, and lifecycle campaigns tied to your CRM and commerce stack.",
    href: ROUTES.industries,
  },
];

export function CmsIndustries() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Industries"
        title="Industries we serve with CMS web development"
        sub="Xorora builds CMS platforms for teams across sectors, including:"
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
