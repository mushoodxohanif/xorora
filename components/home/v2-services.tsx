import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { XWatermark } from "@/components/geometry/x-watermark";
import { type HomeServicesContent, requireSiteContent } from "@/lib/content";
import { ROUTES, XO_NAV } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import {
  DarkHead,
  DarkSurface,
  ServiceBlob,
  V2Rise,
  type V2RiseProps,
} from "./v2-shared";

type BlobShape = "star" | "ring" | "cluster" | "chevron" | "comet" | "hex";

interface ServiceItem {
  name: string;
  href: string;
  shape: BlobShape;
  desc: string;
  num: string;
}

const HOME_SERVICE_DEFAULTS: HomeServicesContent = {
  order: [
    "AI",
    "Engineering",
    "Managed Services",
    "Consulting",
    "Marketing Services",
    "Amazon A to Z Services",
  ],
  meta: {
    AI: {
      shape: "star",
      desc: "Applied ML, LLMs, RAG and agents — engineered for your domain. We turn unstructured chaos into models your business can trust.",
    },
    Engineering: {
      shape: "ring",
      desc: "Full-stack delivery — custom software and AI, engineered to ship and built to scale.",
    },
    "Managed Services": {
      shape: "cluster",
      desc: "Keep production secure, observed, and always on — DevOps, security, and infrastructure.",
    },
    Consulting: {
      shape: "chevron",
      desc: "Turn ambition into a costed, de-risked roadmap with senior engineering advice.",
    },
    "Marketing Services": {
      shape: "comet",
      desc: "Demand and growth, measured and compounding across every channel.",
    },
    "Amazon A to Z Services": {
      shape: "hex",
      desc: "End-to-end Amazon growth — sourcing, listings, launch, PPC, DSP, and account ops under one team.",
    },
  },
};

/** Ensure AI + Amazon tiles appear even if CMS seed is stale. */
function resolveHomeServices(content: HomeServicesContent): HomeServicesContent {
  const order = [...content.order];
  for (const name of HOME_SERVICE_DEFAULTS.order) {
    if (!order.includes(name)) order.push(name);
  }
  return {
    order,
    meta: { ...HOME_SERVICE_DEFAULTS.meta, ...content.meta },
  };
}

function buildServices(content: HomeServicesContent): ServiceItem[] {
  return content.order
    .map((name) => {
      const svc = XO_NAV.services.find((s) => s.name === name);
      const meta = content.meta[name];
      if (!svc || !meta) return null;
      return {
        name: svc.name,
        href: svc.href,
        shape: meta.shape as BlobShape,
        desc: meta.desc,
      };
    })
    .filter(
      (s): s is Omit<ServiceItem, "num"> => s !== null,
    )
    .map((s, i) => ({
      ...s,
      num: String(i + 1).padStart(2, "0"),
    }));
}

export async function V2Services() {
  const content = resolveHomeServices(
    await requireSiteContent<HomeServicesContent>("home:services"),
  );
  const services = buildServices(content);
  const [featured, ...rest] = services;
  const featuredRowSpan = Math.max(2, Math.ceil(rest.length / 2));

  return (
    <DarkSurface bloom="82% 4%" base="#070D20">
      <div className="mb-[clamp(40px,5vw,56px)] flex flex-wrap items-end justify-between gap-6">
        <DarkHead
          eyebrow="What we build"
          title={
            <>
              Our services<span className="text-tangerine-400">.</span>
            </>
          }
        />
        <V2Rise delay={140}>
          <Link
            href={ROUTES.consulting}
            className="inline-flex items-center gap-2 rounded-pill border border-white/28 bg-white/6 px-[22px] py-3 font-sans font-semibold text-[14.5px] text-white no-underline backdrop-blur-sm"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </V2Rise>
      </div>
      <div className="v2-svc-bento gridrows-[-1fr_1fr] grid grid-cols-[1.18fr_1fr_1fr] gap-[18px]">
        <ServiceFeatured svc={featured} rowSpan={featuredRowSpan} />
        {rest.map((svc, i) => (
          <ServiceTile key={svc.name} svc={svc} delay={i * 60} />
        ))}
      </div>
    </DarkSurface>
  );
}

function ServiceFeatured({
  svc,
  rowSpan,
}: {
  svc: ServiceItem;
  rowSpan: number;
}) {
  return (
    <Link
      href={svc.href}
      className={cn(
        "v2-svc-feat group relative flex min-h-[420px] flex-col overflow-hidden rounded-[var(--r-lg)] p-[clamp(28px,2.6vw,38px)] no-underline transition-all duration-300",
        "border border-[rgba(120,150,240,0.22)] bg-linear-to-br from-[#0C1430] via-[#0A1024] to-[#0B1640]",
        "shadow-[0_24px_60px_-40px_rgba(2,8,30,0.6)]",
        "hover:-translate-y-1 hover:border-[rgba(120,150,240,0.4)] hover:shadow-[0_40px_80px_-36px_rgba(2,8,30,0.8)]",
      )}
      style={{ gridRow: `1 / span ${rowSpan}` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_6%,rgba(70,96,200,0.4),transparent_58%)]" />
      <XWatermark
        size={360}
        color="rgba(120,150,240,0.06)"
        className="right-[-110px] bottom-[-150px]"
      />
      <div className="relative flex items-start justify-between">
        <ServiceBlob shape={svc.shape} size={84} />
        <span className="font-mono text-[13px] text-white/40 tracking-[0.14em]">
          {svc.num}
        </span>
      </div>
      <div className="relative mt-auto">
        <h3 className="mb-3.5 font-bold font-sans text-[clamp(24px,2.4vw,32px)] text-white leading-tight tracking-tight">
          {svc.name}
        </h3>
        <p className="mb-[22px] max-w-[460px] font-sans text-[15px] text-white/72 leading-relaxed">
          {svc.desc}
        </p>
        <span className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-tangerine-400">
          Read more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

function ServiceTile({
  svc,
  delay,
}: {
  svc: ServiceItem;
  delay: V2RiseProps["delay"];
}) {
  return (
    <V2Rise delay={delay}>
      <Link
        href={svc.href}
        className={cn(
          "group relative flex h-full min-h-[210px] flex-col overflow-hidden rounded-[var(--r-lg)] p-[clamp(24px,2.2vw,30px)] no-underline transition-all duration-300",
          "border border-white/12 bg-white/5 backdrop-blur-2xl",
          "hover:-translate-y-1 hover:border-white/24 hover:bg-white/10 hover:shadow-[0_30px_60px_-34px_rgba(2,8,30,0.7)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[var(--r-lg)] bg-linear-to-br from-white/12 to-transparent" />
        <div className="relative flex h-full flex-col">
          <div className="mb-[18px] flex items-start justify-between">
            <ServiceBlob shape={svc.shape} size={50} />
            <span className="font-mono text-white/34 text-xs tracking-[0.14em]">
              {svc.num}
            </span>
          </div>
          <h3 className="mb-2 font-bold font-sans text-[clamp(18px,1.5vw,21px)] text-white leading-tight tracking-tight">
            {svc.name}
          </h3>
          <p className="font-sans text-[13.5px] text-white/64 leading-snug">
            {svc.desc}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-[18px] font-sans font-semibold text-[13.5px] text-white/82 transition-colors duration-200 group-hover:text-tangerine-400">
            Read more
            <ArrowRight
              className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-[3px]"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </V2Rise>
  );
}
