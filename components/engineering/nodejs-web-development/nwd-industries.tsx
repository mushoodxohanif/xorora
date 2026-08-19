import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  HeartPulse,
  Landmark,
  LayoutGrid,
  ShoppingBag,
  Truck,
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
    name: "Real-time SaaS and B2B platforms",
    href: ROUTES.industry("saas"),
    cta: "Explore SaaS",
    body: "Live collaboration, presence, and instant notification are Node.js at its strongest. Our event notifier build runs on exactly this pattern: publish once, fan out, keep the read path cheap. Where a platform needs users to see the same state at the same moment, this is the stack we reach for first.",
    img: "/assets/saas/header-bg.jpg",
    imageAlt:
      "Node.js web development for real-time SaaS and B2B collaboration platforms",
    imageTitle: "Real-time SaaS Node.js development — Xorora",
  },
  {
    icon: Landmark,
    name: "Fintech",
    href: ROUTES.industry("fintech"),
    cta: "Explore Fintech",
    body: "Transaction feeds, live position updates, and event-sourced ledgers suit an event-driven runtime well. One caution we raise early: JavaScript's native number type is not safe for currency, so money is handled in minor units or a decimal library from the first commit rather than discovered during reconciliation.",
    img: "/assets/fintech/header-bg.jpg",
    imageAlt:
      "Node.js web development for fintech transaction feeds and live positions",
    imageTitle: "Fintech Node.js web development — Xorora",
  },
  {
    icon: Truck,
    name: "Logistics and supply chain",
    href: ROUTES.industry("logistics"),
    cta: "Explore Logistics",
    body: "Fleet tracking, live ETAs, and dispatch systems are thousands of low-payload connections, which is the workload Node.js handles better than almost anything. We can build the socket layer, the geospatial queries, and the operator dashboard on one runtime.",
    img: "/assets/logistics/header-bg.jpg",
    imageAlt:
      "Node.js web development for logistics fleet tracking and live ETAs",
    imageTitle: "Logistics Node.js web development — Xorora",
  },
  {
    icon: ShoppingBag,
    name: "Retail and e-commerce",
    href: ROUTES.industry("ecommerce"),
    cta: "Explore Retail",
    body: "Traffic in retail is spiky, and Node.js on serverless scales to a launch peak and back down without paying for idle capacity. We can build the storefront API, the checkout flow, and the inventory sync in one codebase with types shared to the frontend.",
    img: "/assets/ecommerce/header-bg.jpg",
    imageAlt:
      "Node.js web development for retail and e-commerce storefront APIs",
    imageTitle: "Retail Node.js web development — Xorora",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
    cta: "Explore Healthcare",
    body: "Appointment systems, clinical dashboards, and integrations with existing record systems. We can build the API layer and the audit trail on Node.js, though where the work is heavy clinical data processing we will usually recommend Python underneath it.",
    img: "/assets/healthtech/header-bg.jpg",
    imageAlt:
      "Node.js web development for healthcare appointment and clinical dashboards",
    imageTitle: "Healthcare Node.js web development — Xorora",
  },
];

export function NwdIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Node.js web development across industries"
        sub="Domain logic differs by sector. The concurrency model does not."
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
