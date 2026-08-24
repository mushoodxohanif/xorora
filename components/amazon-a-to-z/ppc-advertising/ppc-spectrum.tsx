import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CAPABILITIES = [
  "Full-campaign architecture and optimization",
  "Optimization across ACoS, TACoS, CTR, CVR",
  "Product lifecycle-based strategies (launch, scale, defend)",
  "Sponsored Products, Sponsored Brands, and Display Ads expertise",
  "Bid-based / manual bidding systems",
  "Cross-region campaign scaling",
  "Weekly analysis + monthly growth calls",
  "Transparent reporting with live dashboards",
] as const;

const SERVICES = [
  {
    title: "Amazon Sponsored Products Ads",
    body: "We drive traffic to the products you're pushing. From setup and keyword harvesting to bid optimization, we manage the campaigns that convert.",
    includes:
      "Segmented campaigns by ASIN, keyword intent, and product stage; match types aligned to buyer intent; keyword research via Brand Analytics and Amazon data; negative-keyword sculpting; real-time bid optimization at placement and ASIN level.",
  },
  {
    title: "Amazon Sponsored Brands Ads",
    body: "Sponsored Brands amplify visibility and reinforce brand presence through effective Sponsored Ad management.",
    includes:
      "Keyword and audience research; A/B-tested product groupings, copy, and visuals; traffic to Storefront or product pages; Sponsored Brand Video to lift CTR; continuous testing and iteration.",
  },
  {
    title: "Amazon Sponsored Display Ads",
    body: "Essential for retargeting, brand defense, and audience expansion on and off Amazon — reclaiming high-intent shoppers who leave without buying.",
    includes:
      "Behavioral retargeting (cart abandoners, product viewers); competitor-ASIN targeting (offensive and defensive); purchase and video retargeting.",
  },
  {
    title: "Video Ads in Sponsored Products and Brands",
    body: "Video ads dominate search results and drive engagement even on mute — strong for premium, educational, or highly visual products.",
    includes:
      "Scripting and optimization for analytics; A/B testing of headlines, thumbnails, and CTAs; targeting by device and placement; view-to-click and click-to-conversion tracking.",
  },
  {
    title: "Amazon Storefront and Store Spotlight Ads",
    body: "An optimized Storefront supports holistic ad performance by guiding shoppers into curated, branded experiences.",
    includes:
      "Store design aligned with campaign structure; collection pages by keyword and targeting segments; Store Spotlight for category cross-traffic; consistent brand messaging.",
  },
  {
    title: "Full-funnel coordination",
    body: "Campaigns are engineered together — not in silos — so Sponsored Products, Brands, Display, and Store work as one program.",
    includes:
      "Cross-format planning, shared negatives and insights, and pacing that protects margin while compounding visibility.",
  },
] as const;

export function PpcSpectrum() {
  return (
    <LightSection>
      <SectionHead
        title="Introducing our full-spectrum Amazon PPC services"
        sub='We are not a generalist digital agency that "also does Amazon." We are Amazon-first — purpose-built for sellers, aggregators, and DTC brands that scale on the marketplace. From granular keyword targeting to cross-marketplace expansion, each campaign is engineered for performance, profitability, and growth.'
        className="ind-reveal mb-10 max-w-[860px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="ind-reveal mb-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CAPABILITIES.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
              <Check className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="font-sans text-[15px] text-fg2 leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="ind-reveal vc-card-lift flex flex-col rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[17px] text-fg1 leading-snug">
              {service.title}
            </h3>
            <p className="m-0 mb-3 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {service.body}
            </p>
            <p className="m-0 font-sans text-[13.5px] text-fg3 leading-relaxed">
              <span className="font-semibold text-fg2">Includes: </span>
              {service.includes}
            </p>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
