import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const ITEMS: { title: string; body: string }[] = [
  {
    title: "SEO keyword research",
    body: "We map the search terms your buyers actually use, including long-tail and competitor variations, then decide where each one belongs across the title, bullets, description, and backend fields.",
  },
  {
    title: "Compelling copywriting",
    body: "Titles, bullet points, and product descriptions written to rank and to sell, leading with the benefits that matter to your shopper and staying inside Amazon's style rules.",
  },
  {
    title: "Enhanced A+ Content",
    body: "Brand-registered A+ modules that expand your story below the fold: comparison charts, feature callouts, and lifestyle imagery that handle objections before they cost you the sale.",
  },
  {
    title: "Image and video optimization",
    body: "Main image compliance, infographic sequencing, and product video that shows the item in use, so the gallery does its job on both desktop and mobile.",
  },
  {
    title: "Performance monitoring",
    body: "We track rank, session-to-order conversion, and ad efficiency after launch, then iterate on the listings that have the most room left to gain.",
  },
];

export function AloIncluded() {
  return (
    <LightSection>
      <SectionHead
        label="What's included"
        title="What's included in our listing optimization service?"
        sub="Every engagement covers the research, copy, creative, and follow-through a detail page needs to compete."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="ind-reveal vc-card-lift flex gap-[18px] overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,30px)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-xo-indigo">
              <Check className="h-[18px] w-[18px]" aria-hidden />
            </span>
            <div>
              <h3 className="mb-2 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
