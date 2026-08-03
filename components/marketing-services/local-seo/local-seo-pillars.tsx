import { OutcomeGrid } from "@/components/services";

const PILLARS = [
  {
    icon: "target",
    title: "Research and strategy",
    body: "The foundation of your campaign. We turn keyword and location research into a rolling 90-day action plan. Includes: local SEO campaign research; keyword, entity, and location research; 90-day plan reviewed quarterly; rank tracking and Local Search Grid setup.",
  },
  {
    icon: "gauge",
    title: "Website optimization",
    body: "We get more pages ranking and more visitors converting, auditing and improving your site month after month. Includes: full local SEO website audit; local homepage optimization; 10+ web pages optimized every month; schema markup implementation.",
  },
  {
    icon: "layers",
    title: "Content creation",
    body: "Targeted content for the keywords your customers use, building authority and expanding your reach. Includes: unique campaign content; city and service-area pages; short-form video created and published.",
  },
  {
    icon: "rocket",
    title: "Google Business Profile management",
    body: "Daily activity leads to consistent visibility. We manage and optimize your GBP so you show up in the map pack.",
  },
  {
    icon: "trending-up",
    title: "Citations and link building",
    body: "Consistent listings and authoritative local links. We build the citations and backlinks search engines trust most.",
  },
  {
    icon: "handshake",
    title: "Reporting",
    body: "No jargon and no guesswork. You get clear monthly updates from a dedicated account manager.",
  },
] as const;

export function LocalSeoPillars() {
  return (
    <OutcomeGrid
      label="What's included"
      title="Six pillars. One plan. Everything managed."
      sub="Every pillar below is a fully managed, ongoing service, not a one-off task. Together they cover everything you need to rank higher, get found more, and win more local customers across a tailored 12-month campaign."
      items={[...PILLARS]}
      columns={3}
    />
  );
}
