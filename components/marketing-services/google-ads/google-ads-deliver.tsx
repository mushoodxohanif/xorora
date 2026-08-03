import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "search",
    name: "Search campaigns",
    body: "We capture high-intent demand when customers are actively searching. Includes: search query refinement, exact and phrase strategy, campaign structure.",
  },
  {
    icon: "rocket",
    name: "Performance Max",
    body: "We align the search opportunity with commercial intent and revenue potential. Includes: feed integration, audience signals, asset group structuring.",
  },
  {
    icon: "layers",
    name: "Shopping and e-commerce",
    body: "We drive product-level revenue efficiently. Includes: category segmentation, Merchant Center, feed optimization.",
  },
  {
    icon: "video",
    name: "Display and video",
    body: "We extend reach and build brand awareness strategically. Includes: display prospecting, YouTube campaigns, remarketing.",
  },
  {
    icon: "activity",
    name: "Lead generation",
    body: "We align paid search to pipeline quality and business outcomes. Includes: CRM integration, lead-quality optimization, form and call tracking.",
  },
  {
    icon: "gauge",
    name: "Ongoing optimization",
    body: "We improve performance through disciplined testing and budget control. Includes: A/B testing, budget optimization, scaling.",
  },
] as const;

export function GoogleAdsDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we manage"
        title="Google Ads management, applied with intent"
        sub="Paid search applied with intent, so every dollar earns its place."
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
