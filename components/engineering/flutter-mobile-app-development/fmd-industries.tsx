import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  HeartPulse,
  LayoutGrid,
  Store,
  Truck,
  Wallet,
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
  body: string;
  img: string;
  imageAlt: string;
  imageTitle: string;
}[] = [
  {
    icon: Store,
    name: "Retail and commerce",
    href: ROUTES.industry("ecommerce"),
    body: "Checkout, loyalty, and store integration, where the measure is conversion on a phone rather than feature count. Fast startup, forgiving forms, and payment flows that survive a connection dropping halfway through.",
    img: SEO_LANDING_IMAGES.flutter.industries.retail,
    imageAlt:
      "Flutter app development for retail, commerce checkout and loyalty",
    imageTitle: "Retail Flutter app development — Xorora",
  },
  {
    icon: Truck,
    name: "Logistics and field operations",
    href: ROUTES.industry("logistics"),
    body: "Driver, courier, and technician apps used in places with no signal. Local-first data, queued actions that sync when the connection returns, and battery behaviour that survives a ten-hour shift. This is where Flutter's single codebase pays most, because field fleets are rarely all on one platform.",
    img: SEO_LANDING_IMAGES.flutter.industries.logistics,
    imageAlt:
      "Flutter app development for logistics and field operations offline apps",
    imageTitle: "Logistics Flutter app development — Xorora",
  },
  {
    icon: Wallet,
    name: "Fintech",
    href: ROUTES.industry("fintech"),
    body: "Banking, payments, and wallet applications. Biometric auth, certificate pinning, secure storage, and jailbreak and root detection. Financial apps get scrutinised at store review more than any other category, and we build for that review rather than reacting to it.",
    img: SEO_LANDING_IMAGES.flutter.industries.fintech,
    imageAlt:
      "Flutter app development for fintech banking payments and wallets",
    imageTitle: "Fintech Flutter app development — Xorora",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    href: ROUTES.industry("health-tech"),
    body: "Patient apps, appointment management, and remote monitoring. Health data permissions differ substantially between iOS and Android, and that difference is designed for rather than discovered.",
    img: SEO_LANDING_IMAGES.flutter.industries.healthcare,
    imageAlt:
      "Flutter app development for healthcare patient apps and remote monitoring",
    imageTitle: "Healthcare Flutter app development — Xorora",
  },
  {
    icon: LayoutGrid,
    name: "On-demand and marketplace apps",
    href: ROUTES.industry("ecommerce"),
    body: "Two-sided apps where supply and demand each need their own experience. Live location, push at the right moment, and state that stays correct when the app is backgrounded mid-transaction.",
    img: SEO_LANDING_IMAGES.flutter.industries.marketplace,
    imageAlt:
      "Flutter app development for on-demand and marketplace platforms",
    imageTitle: "On-demand Flutter app development — Xorora",
  },
];

export function FmdIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Flutter app development across industries"
        sub="Domain logic differs by sector. The device in someone's hand does not."
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
