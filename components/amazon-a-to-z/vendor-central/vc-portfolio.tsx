import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const ITEMS = [
  {
    brand: "Confidential brand",
    tags: ["Vendor Central", "A+ Content"],
    metricLabel: "Focus",
    metricValue: "Catalog conversion",
    lead: "Rebuilt first-party listing content and Brand Story so organic visibility and conversion worked together across the catalog.",
  },
  {
    brand: "Confidential brand",
    tags: ["Amazon DSP", "Sponsored Brands"],
    metricLabel: "Focus",
    metricValue: "Full-funnel media",
    lead: "Coordinated DSP reach with Sponsored Brands placements so awareness spend fed high-intent demand without wasting margin.",
  },
  {
    brand: "Confidential brand",
    tags: ["Vendor Central", "Inventory"],
    metricLabel: "Focus",
    metricValue: "Shipped COGS",
    lead: "Aligned purchase-order forecasting with ad pacing to cut stockouts and keep shipped COGS compounding month over month.",
  },
] as const;

export function VcPortfolio() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Portfolio"
        title="Amazon programs we've run"
        sub="Vendor Central and first-party Amazon work shaped around margin, catalog quality, and paid media that actually compounds."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
        {ITEMS.map((item) => (
          <article
            key={`${item.brand}-${item.metricValue}`}
            className="ind-reveal vc-card-lift group flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface"
          >
            <div className="relative overflow-hidden bg-navy-900 px-5 pt-5 pb-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_0%,rgba(255,140,66,0.22),transparent_55%)]" />
              <div className="relative">
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-(--r-sm) border border-white/14 bg-white/8 px-2.5 py-1 font-mono text-[10.5px] text-white/75 tracking-[0.06em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="m-0 mb-1 font-mono text-[11px] text-tangerine-400 uppercase tracking-[0.14em]">
                  {item.metricLabel}
                </p>
                <p className="m-0 font-sans font-semibold text-[22px] text-white leading-snug tracking-[-0.02em]">
                  {item.metricValue}
                </p>
              </div>
            </div>
            <div className="flex grow flex-col p-[clamp(22px,2.4vw,28px)]">
              <h3 className="m-0 mb-2.5 font-sans font-semibold text-[17.5px] text-fg1 leading-snug">
                {item.brand}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.lead}
              </p>
            </div>
          </article>
        ))}
      </div>
    </LightSection>
  );
}
