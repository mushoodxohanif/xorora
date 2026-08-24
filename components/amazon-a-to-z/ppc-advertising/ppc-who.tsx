import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  "Established Amazon sellers looking to improve performance",
  "Growing brands scaling product catalogs and ad strategy",
  "Aggregators managing multiple seller accounts",
  "DTC brands expanding into Amazon",
  "Marketing agencies needing white-labeled Amazon-ads support",
  "Vendor sellers seeking to structure campaigns",
] as const;

export function PpcWho() {
  return (
    <LightSection>
      <SectionHead
        title="Who we serve?"
        sub="Our Amazon PPC services are built for brands that treat Amazon as a strategic growth channel, not just another marketplace. We work with:"
        className="ind-reveal mb-12 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card}
            className="ind-reveal vc-card-lift rounded-(--r-lg) border border-border bg-slate-50 px-5 py-5 font-sans text-[15px] text-fg2 leading-snug"
          >
            {card}
          </div>
        ))}
      </div>
      <p className="ind-reveal m-0 mt-10 max-w-[640px] font-sans text-[16px] text-fg2 leading-relaxed">
        If Amazon PPC is a core part of your growth engine, we&apos;re built to
        help you scale it.
      </p>
    </LightSection>
  );
}
