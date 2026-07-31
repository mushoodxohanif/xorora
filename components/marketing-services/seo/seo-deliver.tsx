import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "map-pin",
    name: "Local SEO",
    body: 'For local businesses, we optimize your Google Business Profile and NAP consistency to capture "near me" intent, so your brand shows exactly when local customers are ready to convert.',
  },
  {
    icon: "search",
    name: "Intent-based keyword research",
    body: "We identify the specific keywords that drive traffic and revenue, using search intent and topic clusters to match what your customers are actually searching for.",
  },
  {
    icon: "pen-tool",
    name: "High-value content",
    body: "Our SEO content service pairs you with expert writers across verticals. With custom brand guidelines, we produce authoritative, E-E-A-T-driven content that turns intent into customers.",
  },
  {
    icon: "search-check",
    name: "Technical SEO audits",
    body: "Our audits find errors in site architecture and Core Web Vitals, and check your crawling efficiency for AI and LLM bots, so your brand gets cited in generative answers.",
  },
  {
    icon: "git-compare",
    name: "Competitor analysis",
    body: "We run in-depth competitor analysis to help you rank for niche and long-tail keywords your rivals miss.",
  },
  {
    icon: "video",
    name: "Video and image SEO",
    body: "We optimize video and image assets for multimodal search, so your brand captures visual and voice search intent.",
  },
  {
    icon: "bot",
    name: "AI search visibility",
    body: "We build AI optimization into the core strategy, prioritizing E-E-A-T signals, structured data, and entity mapping so your brand is cited in generative results.",
  },
  {
    icon: "bar-chart-3",
    name: "Analytics and reporting",
    body: "We monitor performance with GA4, Search Console, Semrush, and proprietary tools, with custom dashboards that show your revenue drivers, not just rankings.",
  },
] as const;

export function SeoDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="Our services"
        title="Our SEO services include"
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
