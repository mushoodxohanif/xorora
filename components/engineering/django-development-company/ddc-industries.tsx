import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  LayoutGrid,
  Newspaper,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const INDUSTRIES: {
  icon: LucideIcon;
  name: string;
  href: string;
  body: string;
  img: string;
  imageAlt: string;
  imageTitle: string;
}[] = [
  {
    icon: Newspaper,
    name: "Content and publishing",
    href: ROUTES.cmsDevelopment,
    body: "Editorial workflows, scheduled publishing, structured content models, and previews editors trust. Wagtail on Django gives you a CMS your team can extend rather than work around, which matters when the content model is specific to your business.",
    img: "/assets/saas/header-bg.jpg",
    imageAlt:
      "Django development for publishing, editorial workflows and Wagtail CMS",
    imageTitle: "Publishing Django development — Xorora",
  },
  {
    icon: BookOpen,
    name: "Education and learning platforms",
    href: ROUTES.industry("edtech"),
    body: "Cohorts, course structures, progress tracking, and assessments. Django's permission system maps cleanly onto the role complexity these platforms accumulate, and the admin gives course operations a working interface early rather than as a phase two.",
    img: "/assets/edtech/header-bg.jpg",
    imageAlt:
      "Django development for education platforms, cohorts and assessments",
    imageTitle: "Edtech Django development — Xorora",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
    body: "Patient administration, clinical workflow, and integrations with record systems already in place. Audit trails and access rules enforced at the data layer, so a new integration cannot route around them.",
    img: "/assets/healthtech/header-bg.jpg",
    imageAlt:
      "Django development for healthcare patient admin and clinical workflows",
    imageTitle: "Healthcare Django development — Xorora",
  },
  {
    icon: Store,
    name: "Marketplaces and two-sided platforms",
    href: ROUTES.industry("ecommerce"),
    body: "Supply and demand sides with different permissions over shared objects, plus commission logic, payouts, and dispute handling. Object-level permissions are where these systems usually get it wrong, and Django gives you the tools to get it right.",
    img: "/assets/ecommerce/header-bg.jpg",
    imageAlt:
      "Django development for marketplaces and two-sided commerce platforms",
    imageTitle: "Marketplace Django development — Xorora",
  },
  {
    icon: LayoutGrid,
    name: "Data and analytics platforms",
    href: ROUTES.mlDataScience,
    body: "Where the interface sits on top of a real pipeline. Django serving the application while pandas, Celery, and the warehouse do the work behind it, in one language across both halves.",
    img: "/assets/fintech/header-bg.jpg",
    imageAlt:
      "Django development for data and analytics platforms with Celery pipelines",
    imageTitle: "Data platform Django development — Xorora",
  },
];

export function DdcIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Django development across industries"
        sub="Domain logic differs by sector. The ORM's failure modes do not."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={item.img}
                  alt={item.imageAlt}
                  title={item.imageTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex grow flex-col p-[clamp(22px,2.4vw,28px)]">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo transition-colors group-hover:bg-xo-indigo group-hover:text-white">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                  {item.name}
                </h3>
                <p className="mb-4 grow font-sans text-[14.5px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
                <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-accent">
                  Explore {item.name.split(" ")[0]}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </LightSection>
  );
}
