import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "search",
    name: "Paid search",
    body: "An agency for tech and software companies, focused on conversions and pipeline. We handle everything from multi-touch attribution to benchmarking assets.",
  },
  {
    icon: "search-check",
    name: "Search engine optimization (SEO)",
    body: "We drive more qualified organic traffic. Our SEO is built for long sales cycles, technical buyers, and high-intent search that turns visibility into pipeline.",
  },
  {
    icon: "brain-circuit",
    name: "Generative engine optimization (GEO)",
    body: "A B2B GEO agency that helps SaaS companies show up where buyers now search: AI engines like Perplexity, Claude, and Google, plus Reddit.",
  },
  {
    icon: "layers",
    name: "Reddit",
    body: "We manage your Reddit presence and ad campaigns, so your brand shows up in the communities where B2B buyers research solutions. We handle targeting, content, engagement, and paid promotion.",
  },
  {
    icon: "pen-tool",
    name: "Content creation",
    body: "SEO and AI-search-focused content: whitepapers and guides, executive ghostwriting, and LinkedIn posts and articles that build credibility and drive visibility.",
  },
  {
    icon: "bar-chart-3",
    name: "Revenue attribution",
    body: "B2B paid search and display for companies focused on conversions and pipeline, from multi-touch revenue attribution to benchmarking assets.",
  },
] as const;

export function B2bDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="Our services"
        title="What we do"
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
