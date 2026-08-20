import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  ShoppingBag,
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
  cta: string;
  body: string;
  img: string;
  imageAlt: string;
  imageTitle: string;
}[] = [
  {
    icon: LayoutGrid,
    name: "SaaS and subscription platforms",
    href: ROUTES.industry("saas"),
    cta: "Explore SaaS",
    body: "Subscriptions, plan changes, proration, trials, and dunning are solved problems in Laravel Cashier against Stripe or Paddle. That is a quarter of engineering you do not spend. Where a platform bills on usage or has a commercial model Cashier does not cover, we extend it rather than replace it.",
    img: "/assets/saas/header-bg.jpg",
    imageAlt:
      "Laravel website development for SaaS and subscription platforms",
    imageTitle: "SaaS Laravel website development — Xorora",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce and marketplaces",
    href: ROUTES.industry("ecommerce"),
    cta: "Explore E-commerce",
    body: "Multi-vendor catalogues, custom checkout, commission logic, and vendor payouts. Laravel suits marketplaces specifically because the commercial rules are usually the custom part while the surrounding machinery is not.",
    img: "/assets/ecommerce/header-bg.jpg",
    imageAlt:
      "Laravel website development for e-commerce and marketplace platforms",
    imageTitle: "E-commerce Laravel website development — Xorora",
  },
  {
    icon: GraduationCap,
    name: "Education and learning platforms",
    href: ROUTES.industry("edtech"),
    cta: "Explore Edtech",
    body: "Course structures, cohorts, progress tracking, assessments, and certificates. Content-heavy platforms with role-based access map cleanly onto Laravel's permission and policy layer, and Filament gives course administrators a working interface early.",
    img: "/assets/edtech/header-bg.jpg",
    imageAlt:
      "Laravel website development for education and learning platforms",
    imageTitle: "Education Laravel website development — Xorora",
  },
  {
    icon: Building2,
    name: "Real estate and property",
    href: ROUTES.industry("real-estate"),
    cta: "Explore Real estate",
    body: "Listing portals, agent and landlord portals, viewing scheduling, and document workflows. Search and filtering at volume is the technical challenge here, and Laravel Scout with Meilisearch or Algolia handles it without a separate search team.",
    img: "/assets/realestate/header-bg.jpg",
    imageAlt:
      "Laravel website development for real estate and property portals",
    imageTitle: "Real estate Laravel website development — Xorora",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
    cta: "Explore Healthcare",
    body: "Appointment systems, patient portals, and practice administration. We can build the application, the audit trail, and the role boundaries on Laravel, though where the work involves clinical data processing at scale we will usually recommend Python underneath it.",
    img: "/assets/healthtech/header-bg.jpg",
    imageAlt:
      "Laravel website development for healthcare appointment and patient portals",
    imageTitle: "Healthcare Laravel website development — Xorora",
  },
];

export function LwdIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Laravel website development across industries"
        sub="Domain logic differs by sector. The framework's strengths do not."
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
                  {item.cta}
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
