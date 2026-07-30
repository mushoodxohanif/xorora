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
    body: "Use AI agents to improve patient outcomes, reduce operational costs, and support clinical teams with faster, more accurate data processing and decision support — within HIPAA-aligned guardrails.",
    bullets: [
      "Readmission prediction and early-warning agents",
      "Medical billing and claims fraud detection",
      "EHR data processing and summarization",
      "Hospital resource and bed-management agents",
    ],
  },
  {
    tab: "Fintech",
    href: ROUTES.industry("fintech"),
    body: "Agents that monitor transactions, score risk, and handle compliance workflows under pressure — with audit trails that stand up to scrutiny.",
    bullets: [
      "Fraud detection and anomaly agents",
      "Credit and underwriting copilots",
      "Automated compliance monitoring",
      "Customer support agents for banking",
    ],
  },
  {
    tab: "Real Estate",
    href: ROUTES.industry("real-estate"),
    body: "Agents that help brokers and operators move faster — from listing intelligence to portfolio ops — without losing the judgment that closes deals.",
    bullets: [
      "Listing and lead qualification agents",
      "Property valuation assistants",
      "Tenant risk scoring agents",
      "Portfolio maintenance copilots",
    ],
  },
  {
    tab: "E-commerce",
    href: ROUTES.industry("ecommerce"),
    body: "Agents that personalize merchandising, handle order workflows, and keep catalog and fulfillment data in sync so teams spend less time on busywork.",
    bullets: [
      "Product recommendation agents",
      "Order status and returns agents",
      "Demand forecasting copilots",
      "Catalog and inventory sync agents",
    ],
  },
  {
    tab: "EdTech",
    href: ROUTES.industry("edtech"),
    body: "Agents that personalize learning paths, grade at scale, and surface where instructors should intervene — tuned to how education teams actually work.",
    bullets: [
      "Personalized learning path agents",
      "Automated grading and feedback",
      "Student performance prediction",
      "Intelligent tutoring assistants",
    ],
  },
  {
    tab: "Logistics",
    href: ROUTES.industry("logistics"),
    body: "Agents for routing, forecasting, and warehouse coordination that cut cost and latency across messy, real-world supply chains.",
    bullets: [
      "Route and fleet optimization agents",
      "Demand forecasting copilots",
      "Warehouse exception agents",
      "Real-time supply chain visibility",
    ],
  },
  {
    tab: "SaaS",
    href: ROUTES.industry("saas"),
    body: "Agents embedded in product and engineering workflows — from support triage to coding assists — that raise quality without slowing your team down.",
    bullets: [
      "In-product support and onboarding agents",
      "Code review and debugging copilots",
      "Ticket triage and escalation agents",
      "Churn and expansion signal agents",
    ],
  },
  {
    tab: "Startups",
    href: ROUTES.industry("startups"),
    body: "Lean agent MVPs that prove the wedge fast — clear architecture, measured ROI, and a path from pilot to production as traction grows.",
    bullets: [
      "Agent MVP and POC builds",
      "Lean use-case validation",
      "Founder-led product acceleration",
      "Production path after first traction",
    ],
  },
  {
    tab: "Travel & Hospitality",
    href: ROUTES.industry("travel-hospitality"),
    body: "Guest experience and ops agents that personalize stays, forecast demand, and automate the work that slows front-desk and revenue teams.",
    bullets: [
      "Guest experience and concierge agents",
      "Dynamic pricing copilots",
      "Demand forecasting agents",
      "Booking and itinerary automation",
    ],
  },
];

export function AadIndustries() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active] ?? INDUSTRIES[0];

  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Industries"
        title="Real-world AI agent solutions across your industry"
        sub="We build AI agents for teams across sectors, tuned to the data, decisions, and rules each one runs on."
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
            Example agent use cases
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
            Team up with Xorora to build your AI agent
          </h3>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Book a scoping call
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
      </div>
    </LightSection>
  );
}
