import {
  BarChart3,
  FileText,
  Handshake,
  Layers,
  type LucideIcon,
  Megaphone,
  Package,
  Percent,
  Plug,
  ShieldAlert,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "Documented Vendor Central strategy",
    body: "A written strategy covering advertising architecture, pricing guardrails, and revenue and margin goals.",
  },
  {
    icon: Handshake,
    title: "Vendor negotiation and account management",
    body: "We manage the vendor relationship and negotiate wholesale pricing structures and purchase-order terms.",
  },
  {
    icon: Percent,
    title: "Data-driven pricing strategy",
    body: "Margin analysis and competitively positioned pricing that protects profitability.",
  },
  {
    icon: Layers,
    title: "SEO and A+ Content optimization",
    body: "Optimized titles, bullets, descriptions, A+ Content, and Brand Story to lift visibility and conversion across your catalog.",
  },
  {
    icon: Megaphone,
    title: "Amazon advertising and DSP management",
    body: "Full-funnel advertising that leverages Vendor Central's access to Amazon DSP, Sponsored Brands video, and premium placements.",
  },
  {
    icon: Package,
    title: "Supply chain and inventory forecasting",
    body: "AI-driven forecasting to keep stock at optimal levels, reducing the stockouts and out-of-stocks that hurt rank.",
  },
  {
    icon: ShieldAlert,
    title: "Chargeback management and dispute resolution",
    body: "Proactive chargeback monitoring and dispute resolution to recover deductions and protect margin.",
  },
  {
    icon: BarChart3,
    title: "Analytics and monthly reporting",
    body: "Monthly reporting tied to shipped COGS, ROAS, organic rank, and new-to-brand metrics.",
  },
  {
    icon: Plug,
    title: "Vendor Central API integration",
    body: "Vendor Central API integration to keep reporting and operations connected to live account data.",
  },
];

export function VcIncluded() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="A complete Amazon Vendor Central management program"
        sub="Every engagement includes the negotiation support, content optimization, advertising management, inventory strategy, and reporting infrastructure needed to build a profitable, scalable first-party presence."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {card.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
