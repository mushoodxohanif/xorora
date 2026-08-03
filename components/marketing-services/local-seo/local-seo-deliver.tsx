import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "search-check",
    name: "Local SEO audit and strategy",
    body: "We analyze your local SEO ranking, fix NAP consistency, and optimize landing pages to compete for your target local terms.",
  },
  {
    icon: "map-pin",
    name: "Google Business Profile management",
    body: "Our GBP experts optimize your profile, plus Bing and Yahoo local listings, so your business appears in nearby searches.",
  },
  {
    icon: "pen-tool",
    name: "Local keyword and content strategy",
    body: "We map the local keywords worth ranking for and build a content plan that turns local intent into customers.",
  },
  {
    icon: "file-text",
    name: "On-page local optimization",
    body: "We optimize your pages and local content so search engines rank you highly in your service areas.",
  },
  {
    icon: "layers",
    name: "Business citations",
    body: "We build accurate, consistent citations across the directories search engines trust, strengthening your local presence.",
  },
  {
    icon: "shield-check",
    name: "Online reputation",
    body: "We help manage reviews and your local reputation, since most customers check reviews before they buy.",
  },
] as const;

export function LocalSeoDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="Our services"
        title="Local SEO services that rank you and raise conversions"
        sub="We run in-depth local SEO to attract nearby buyers and manage your Google Business Profile, so your brand shows up when local customers are ready to convert."
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
