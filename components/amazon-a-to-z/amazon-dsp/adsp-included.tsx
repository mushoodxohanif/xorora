import {
  type LucideIcon,
  BarChart3,
  FileText,
  Handshake,
  Layers,
  Megaphone,
  Target,
  Users,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "Documented Amazon DSP strategy",
    body: "A written DSP strategy covering audience segments, campaign objectives, creative requirements, and ROAS targets, with clear budget allocation and performance benchmarks for each campaign phase.",
  },
  {
    icon: Handshake,
    title: "Expert strategy consultation",
    body: "Ongoing strategic guidance from our Amazon DSP specialists, including audience-architecture recommendations, competitive-landscape analysis, and coordination with your broader Amazon advertising and organic strategy.",
  },
  {
    icon: Users,
    title: "Audience targeting and segmentation",
    body: "First-party audience segment creation using Amazon's shopper data: in-market, lookalike, retargeting, and past-purchaser audiences, mapped to funnel stage and campaign objective for maximum targeting precision.",
  },
  {
    icon: Megaphone,
    title: "Paid advertising campaign management",
    body: "End-to-end DSP campaign management across display, video, and audio placements on Amazon properties and off-Amazon inventory, with continuous bid optimization and audience refinement.",
  },
  {
    icon: Layers,
    title: "Catalog and creative management",
    body: "Creative strategy and specifications guidance for display, video, and audio ad formats, so your creative is optimized for the DSP placements and audiences it runs against.",
  },
  {
    icon: Target,
    title: "Retargeting programs",
    body: "Strategic retargeting to re-engage high-intent audiences, including product-detail-page visitors, cart abandoners, and past purchasers, with relevant messaging designed to drive conversion and repeat purchase.",
  },
  {
    icon: BarChart3,
    title: "Analytics reporting",
    body: "Monthly performance reporting covering through-view, direct-page-view, purchase-rate, direct ROAS, and new-to-brand metrics, with attribution by audience segment and placement for actionable optimization insight.",
  },
];

export function AdspIncluded() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="What's included"
        title="A complete Amazon DSP program"
        sub="A full-funnel advertising program that reaches your ideal customers at scale."
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
