import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";
import { SEO_LANDING_IMAGES } from "@/lib/seo-landing-images";

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
    icon: Landmark,
    name: "Financial services and insurance",
    href: ROUTES.industry("fintech"),
    cta: "Explore Fintech",
    body: "C# has a native decimal type built for money, which removes an entire class of rounding error that other runtimes work around with libraries. Combined with strong typing and a mature audit and identity story, this is why .NET holds the ground it does in finance. We build ledgers, reconciliation, and reporting where being approximately right is not acceptable.",
    img: SEO_LANDING_IMAGES.dotnet.industries.fintech,
    imageAlt:
      "Custom .NET development for financial services and insurance platforms",
    imageTitle: "Fintech .NET development — Xorora",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
    cta: "Explore Healthcare",
    body: "Patient administration, clinical workflow, and integration with record systems that have been in place for a decade. Role boundaries and audit trails are enforced at the domain layer rather than the interface, so a new integration cannot route around them.",
    img: SEO_LANDING_IMAGES.dotnet.industries.healthcare,
    imageAlt:
      "Custom .NET development for healthcare administration and clinical workflow",
    imageTitle: "Healthcare .NET development — Xorora",
  },
  {
    icon: Factory,
    name: "Manufacturing and supply chain",
    href: ROUTES.industry("logistics"),
    cta: "Explore Logistics",
    body: "ERP and WMS integration, production scheduling, and shop-floor systems. This is where .NET's ability to talk to old infrastructure matters more than any framework feature, and where migration projects usually live.",
    img: SEO_LANDING_IMAGES.dotnet.industries.manufacturing,
    imageAlt:
      "Custom .NET development for manufacturing and supply chain systems",
    imageTitle: "Manufacturing .NET development — Xorora",
  },
  {
    icon: Building2,
    name: "Government and public sector",
    href: ROUTES.industries,
    cta: "Explore industries",
    body: "Long procurement cycles, long service lives, and accessibility and audit requirements that are contractual rather than aspirational. .NET's LTS cadence and Microsoft's support commitments matter here in a way they do not elsewhere.",
    img: SEO_LANDING_IMAGES.dotnet.industries.government,
    imageAlt:
      "Custom .NET development for government and public sector platforms",
    imageTitle: "Public sector .NET development — Xorora",
  },
  {
    icon: LayoutGrid,
    name: "Enterprise B2B platforms",
    href: ROUTES.industry("saas"),
    cta: "Explore SaaS",
    body: "Multi-tenant systems with complex permission models and identity federation into customers' own directories. Entra ID and OpenID Connect are first-party rather than bolted on.",
    img: SEO_LANDING_IMAGES.dotnet.industries.enterprise,
    imageAlt:
      "Custom .NET development for enterprise B2B and multi-tenant platforms",
    imageTitle: "Enterprise B2B .NET development — Xorora",
  },
];

export function CdnIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Custom .NET development across industries"
        sub="Domain logic differs by sector. The requirement to be correct does not."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group hover:-translate-y-0.5 flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-white no-underline transition-all duration-200 hover:border-border-strong hover:shadow-md"
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
