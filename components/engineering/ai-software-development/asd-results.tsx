import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const RESULTS = [
  {
    href: ROUTES.caseStudy("unified-ai-voice-operations"),
    img: "/assets/mocks/portal-business.webp",
    tag: "AI Voice Automation",
    title: "From fragmented tools to unified AI voice operations",
    body: "Four role-based portals on one shared backend, taken to production in 16 months.",
    stat: "16mo",
    statLabel: "Concept to production",
    imageAlt: "Unified AI voice operations platform dashboard",
    imageTitle: "AI voice automation case study",
  },
  {
    href: ROUTES.caseStudy("real-time-compliance-intelligence"),
    img: "/assets/regula/dashboard.webp",
    tag: "RegTech",
    title: "Turning regulatory chaos into real-time compliance intelligence",
    body: "Cut compliance workload by 70%, with change detection in under an hour.",
    stat: "70%",
    statLabel: "Less compliance workload",
    imageAlt: "RegTech compliance intelligence platform dashboard",
    imageTitle: "Real-time compliance intelligence case study",
  },
  {
    href: ROUTES.caseStudy("real-time-saas-event-monitoring"),
    img: "/assets/pingpanda/dashboard.webp",
    tag: "SaaS Monitoring",
    title: "From blind spots to instant visibility",
    body: "An API-first event notifier delivering full-context alerts, shipped in 13 months.",
    stat: "13mo",
    statLabel: "Concept to production",
    imageAlt: "Real-time SaaS event monitoring dashboard",
    imageTitle: "SaaS event monitoring case study",
  },
] as const;

export function AsdResults() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-5">
        <SectionHead
          label="Proof of work"
          title="Projects that shipped, and the results that followed"
        />
        <Link
          href={ROUTES.ourWork}
          className="inline-flex items-center gap-2 font-sans font-semibold text-[14.5px] text-accent no-underline"
        >
          View all
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <p className="mb-10 max-w-[560px] font-sans text-[16px] text-fg2 leading-relaxed">
        Live products built for real clients. A few recent wins.
      </p>
      <div className="svc-grid3 grid grid-cols-3 gap-6">
        {RESULTS.map((c) => (
          <AsdCaseCard key={c.href} {...c} />
        ))}
      </div>
    </LightSection>
  );
}

function AsdCaseCard({
  href,
  img,
  tag,
  title,
  body,
  stat,
  statLabel,
  imageAlt,
  imageTitle,
}: (typeof RESULTS)[number]) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block min-h-[360px] overflow-hidden rounded-(--r-xl) border border-white/10 bg-[#080C1E] no-underline",
        "shadow-[0_22px_56px_-34px_rgba(8,12,30,0.5)] transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_36px_80px_-34px_rgba(8,12,30,0.7)]",
      )}
    >
      <Image
        src={img}
        alt={imageAlt}
        title={imageTitle}
        fill
        sizes="33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,12,30,0.25)] via-[rgba(8,12,30,0.55)] to-[#080C1E]" />
      <span className="absolute top-[18px] left-[18px] rounded-pill bg-white px-[13px] py-1.5 font-sans font-semibold text-xo-ink text-xs">
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-[clamp(22px,2.4vw,28px)]">
        <h3 className="mb-2 font-bold font-sans text-[clamp(17px,1.6vw,21px)] text-white leading-tight">
          {title}
        </h3>
        <p className="mb-4 m-0 font-sans text-[13px] text-white/70 leading-snug">
          {body}
        </p>
        <div className="flex items-center justify-between border-white/18 border-t pt-3.5">
          <div>
            <div className="font-extrabold font-sans text-[22px] text-tangerine-400 leading-none tracking-[-0.02em]">
              {stat}
            </div>
            <div className="mt-1 font-sans text-white/65 text-xs">{statLabel}</div>
          </div>
          <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-xo-indigo text-white transition-all group-hover:bg-white group-hover:text-xo-ink">
            <ArrowUpRight className="h-[19px] w-[19px]" />
          </span>
        </div>
      </div>
    </Link>
  );
}
