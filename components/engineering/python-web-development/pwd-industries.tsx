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
  body: string;
  img: string;
  imageAlt: string;
  imageTitle: string;
}[] = [
  {
    icon: Landmark,
    name: "Fintech and regtech",
    href: ROUTES.industry("fintech"),
    body: "Regulatory change detection is a parsing and classification problem, which is why Python's NLP ecosystem suits it better than any alternative. Decimal precision, immutable audit trails, and reconciliation logic are handled at the data layer rather than patched in later.",
    img: "/assets/fintech/header-bg.jpg",
    imageAlt:
      "Python web development for fintech and regtech compliance platforms",
    imageTitle: "Fintech Python web development — Xorora",
  },
  {
    icon: LayoutGrid,
    name: "B2B SaaS",
    href: ROUTES.industry("saas"),
    body: "Multi-tenancy is an access-control problem before it is a features problem. Django's permission framework and row-level scoping let us serve several user types from one backend without duplicating business rules.",
    img: "/assets/saas/header-bg.jpg",
    imageAlt: "Python web development for multi-tenant B2B SaaS platforms",
    imageTitle: "B2B SaaS Python development — Xorora",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
    body: "Clinical data arrives in HL7 and FHIR, and Python has mature libraries for parsing both. We can build the ingestion pipeline, the audit trail, and the application on top in one language, which keeps the compliance surface in one place instead of three.",
    img: "/assets/healthtech/header-bg.jpg",
    imageAlt:
      "Python web development for healthcare, HL7 and FHIR data platforms",
    imageTitle: "Healthcare Python web development — Xorora",
  },
  {
    icon: Truck,
    name: "Logistics and supply chain",
    href: ROUTES.industry("logistics"),
    body: "Route optimization and demand forecasting are constraint and modeling problems. Python runs OR-Tools and pandas natively, so the optimizer and the web application around it live in the same codebase rather than in a separate system nobody maintains.",
    img: "/assets/logistics/header-bg.jpg",
    imageAlt:
      "Python web development for logistics, routing and supply chain systems",
    imageTitle: "Logistics Python web development — Xorora",
  },
  {
    icon: ShoppingBag,
    name: "Retail and e-commerce",
    href: ROUTES.industry("ecommerce"),
    body: "Recommendation, inventory forecasting, and dynamic pricing are all model-backed features. We can build the model and the storefront backend in one stack, so a pricing change ships as a deployment rather than an integration project.",
    img: "/assets/ecommerce/header-bg.jpg",
    imageAlt:
      "Python web development for retail and e-commerce storefront backends",
    imageTitle: "Retail Python web development — Xorora",
  },
];

export function PwdIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Python web development across industries"
        sub="Domain logic differs by sector. The engineering discipline does not."
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
