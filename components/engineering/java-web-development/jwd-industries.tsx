import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Landmark,
  Radio,
  Shield,
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
    icon: Landmark,
    name: "Banking and payments",
    href: ROUTES.industry("fintech"),
    cta: "Explore Fintech",
    body: "Core banking, ledgers, and payment processing, where Java holds the ground it does because the alternative to correctness is a reconciliation problem. Transactional integrity, audit trails, and reporting built to survive an examiner rather than a demo.",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Java web development for banking and payments platforms",
    imageTitle: "Banking Java development — Xorora",
  },
  {
    icon: Shield,
    name: "Insurance",
    href: ROUTES.industries,
    cta: "Explore industries",
    body: "Policy administration, claims, underwriting rules, and rating engines. These systems encode decades of rules that nobody can fully describe, which is why replacing them fails and modernizing them incrementally works. We map before we cut.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Java web development for insurance policy and claims systems",
    imageTitle: "Insurance Java development — Xorora",
  },
  {
    icon: Radio,
    name: "Telecom and high-volume platforms",
    href: ROUTES.industry("saas"),
    cta: "Explore SaaS",
    body: "Systems where throughput is the requirement rather than a nice property. Kafka pipelines, back-pressure handling, and JVM tuning against realistic load rather than a benchmark that flatters the design.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Java web development for telecom and high-volume platforms",
    imageTitle: "Telecom Java development — Xorora",
  },
  {
    icon: ShoppingBag,
    name: "Retail at scale",
    href: ROUTES.industry("e-commerce"),
    cta: "Explore E-commerce",
    body: "Order management, inventory, and fulfilment across channels. The hard part is consistency between systems that each believe they hold the truth, which is an integration problem before it is an application problem.",
    img: "https://images.unsplash.com/photo-1472851294607-062d31bd3a93?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Java web development for retail order management at scale",
    imageTitle: "Retail Java development — Xorora",
  },
  {
    icon: Truck,
    name: "Logistics and transportation",
    href: ROUTES.industry("logistics"),
    cta: "Explore Logistics",
    body: "Routing, scheduling, tracking, and the integrations into carrier and warehouse systems that were built before anyone considered an API. Java's ability to talk to old infrastructure matters more here than any framework feature.",
    img: "https://images.unsplash.com/photo-1601584115197-04c14bac0a0c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Java web development for logistics and transportation systems",
    imageTitle: "Logistics Java development — Xorora",
  },
];

export function JwdIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Java web development across industries"
        sub="Domain logic differs by sector. The cost of getting it wrong does not."
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
