"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const INDUSTRIES: {
  tab: string;
  href: string;
  body: string;
  bullets: string[];
}[] = [
  {
    tab: "Healthcare",
    href: ROUTES.industry("health-tech"),
    body: "We build clinical and operational AI that fits regulated workflows — from documentation support to triage and imaging assists — without putting patient safety or compliance at risk.",
    bullets: [
      "Clinical documentation and summarization",
      "Imaging triage and decision support",
      "Patient risk scoring and outreach",
      "HIPAA-aligned deployment patterns",
    ],
  },
  {
    tab: "Fintech",
    href: ROUTES.industry("fintech"),
    body: "Fraud, risk, and compliance systems that have to be accurate under pressure. We ship AI that monitors transactions, scores risk, and keeps audit trails intact.",
    bullets: [
      "Fraud detection and anomaly scoring",
      "Credit and underwriting models",
      "Automated compliance monitoring",
      "Customer support copilots for banking",
    ],
  },
  {
    tab: "Real Estate",
    href: ROUTES.industry("real-estate"),
    body: "Valuation, listing intelligence, and portfolio operations — AI that helps brokers and operators move faster without losing the judgment that closes deals.",
    bullets: [
      "Property valuation models",
      "Listing and lead recommendations",
      "Tenant risk scoring",
      "Predictive maintenance for portfolios",
    ],
  },
  {
    tab: "E-commerce",
    href: ROUTES.industry("ecommerce"),
    body: "Personalization and merchandising systems that raise conversion while keeping catalog, inventory, and fulfillment data in sync.",
    bullets: [
      "Product recommendations",
      "Dynamic pricing and promotions",
      "Demand and inventory forecasting",
      "Churn and lifetime-value models",
    ],
  },
  {
    tab: "EdTech",
    href: ROUTES.industry("edtech"),
    body: "Adaptive learning and assessment tools that personalize the path for each learner while giving instructors clearer signals on where to intervene.",
    bullets: [
      "Personalized learning paths",
      "Automated grading and feedback",
      "Student performance prediction",
      "Intelligent tutoring assistants",
    ],
  },
  {
    tab: "Logistics",
    href: ROUTES.industry("logistics"),
    body: "Routing, forecasting, and warehouse intelligence that cut cost and latency across the supply chain — with systems built for messy real-world data.",
    bullets: [
      "Route and fleet optimization",
      "Demand forecasting",
      "Warehouse automation assists",
      "Real-time supply chain visibility",
    ],
  },
  {
    tab: "SaaS",
    href: ROUTES.industry("saas"),
    body: "We build AI-driven coding tools that speed up development through AI-generated code, while raising codebase quality and improving the developer experience.",
    bullets: [
      "Coding assistants for code completion and generation",
      "Code change impact prediction",
      "Code review and debugging",
      "Cybersecurity tools for vulnerability detection",
    ],
  },
  {
    tab: "Startups",
    href: ROUTES.industry("startups"),
    body: "Investor-ready AI MVPs that prove the wedge fast — lean validation, clear architecture, and a path to production that scales with early traction.",
    bullets: [
      "AI MVP and POC builds",
      "Lean use-case validation",
      "Founder-led product acceleration",
      "Production path after first traction",
    ],
  },
  {
    tab: "Travel & Hospitality",
    href: ROUTES.industry("travel-hospitality"),
    body: "Guest experience and revenue systems that personalize stays, forecast demand, and automate the operational work that slows teams down.",
    bullets: [
      "Dynamic pricing and yield",
      "Personalized itineraries",
      "Demand forecasting",
      "Guest experience automation",
    ],
  },
];

export function AsdIndustries() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active] ?? INDUSTRIES[0];

  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="AI capabilities for different industries and use cases"
        sub="Tabbed by sector, each with its own use cases."
        className="mb-10 max-w-[720px]"
      />

      <div className="mb-7 flex flex-wrap gap-2.5">
        {INDUSTRIES.map((item, index) => (
          <button
            key={item.tab}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "cursor-pointer rounded-pill border px-[18px] py-[11px] font-sans font-semibold text-[14.5px] transition-all duration-180",
              active === index
                ? "border-transparent bg-xo-indigo text-white"
                : "border-border-strong bg-transparent text-fg2",
            )}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div className="ind-page-2col mb-10 grid grid-cols-2 gap-[clamp(28px,3.5vw,52px)] rounded-(--r-xl) border border-border bg-slate-50 p-[clamp(28px,3.5vw,44px)]">
        <div>
          <h3 className="mb-4 font-bold font-sans text-2xl text-fg1 tracking-[-0.01em]">
            {current.tab}
          </h3>
          <p className="mb-7 font-sans text-[15.5px] text-fg2 leading-[1.7]">
            {current.body}
          </p>
          <Link
            href={current.href}
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Explore {current.tab}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div>
          <div className="mb-4 font-sans font-semibold text-fg1 text-sm">
            Example use cases
          </div>
          <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
            {current.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 rounded-(--r-md) border border-border bg-surface px-4 py-3.5"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-500"
                  aria-hidden
                />
                <span className="font-sans text-[13.5px] text-fg1 leading-snug">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-(--r-xl) bg-navy-900 px-[clamp(28px,4vw,48px)] py-[clamp(28px,4vw,40px)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_90%_0%,rgba(70,76,159,0.45),transparent_58%)]" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <h3 className="m-0 max-w-[640px] text-balance font-extrabold font-sans text-[clamp(22px,3vw,32px)] text-white leading-tight tracking-tight">
            Team up with Xorora to build your AI solution
          </h3>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </LightSection>
  );
}
