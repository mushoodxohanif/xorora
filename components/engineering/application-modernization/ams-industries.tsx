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
    body: "Modernize clinical and operational systems so regulated workflows stay compliant while platforms become easier to extend.",
    href: ROUTES.industry("health-tech"),
  },
  {
    icon: "handshake",
    name: "HR and Employee Management",
    body: "Upgrade workforce platforms for onboarding, scheduling, and internal services without disrupting day-to-day operations.",
    href: ROUTES.industries,
  },
  {
    icon: "shopping-cart",
    name: "Retail and eCommerce",
    body: "Re-platform commerce, inventory, and loyalty systems so catalog and fulfillment stay in sync as you scale.",
    href: ROUTES.industry("ecommerce"),
  },
  {
    icon: "layout-grid",
    name: "Computer Software",
    body: "Refactor product apps and companion experiences so your platform can evolve without a full rewrite.",
    href: ROUTES.industry("saas"),
  },
  {
    icon: "landmark",
    name: "Finance and Accounting",
    body: "Migrate payments, reporting, and client portals to modern stacks with audit-ready design and stronger security.",
    href: ROUTES.industry("fintech"),
  },
  {
    icon: "megaphone",
    name: "Marketing and Recognition",
    body: "Bring campaign and engagement systems onto modern infrastructure so programs stay measurable and maintainable.",
    href: ROUTES.industries,
  },
  {
    icon: "rocket",
    name: "Startups",
    body: "Retire early technical debt and harden architecture so the product can scale from first release to production growth.",
    href: ROUTES.industry("startups"),
  },
];

export function AmsIndustries() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Industries"
        title="Industries"
        sub="Xorora modernizes business software for teams across sectors, including:"
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
