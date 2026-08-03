import { OutcomeGrid } from "@/components/services";

const APPROACH = [
  {
    icon: "target",
    title: "Campaign strategy",
    body: "A strong Meta ads campaign focuses on clear goals and the right audience. Continuous optimization ensures better performance and maximizes ROI.",
  },
  {
    icon: "gauge",
    title: "Campaign optimization",
    body: "We refine targeting, creatives, and bids to improve performance. Continuous adjustments drive better results and ROI.",
  },
  {
    icon: "trending-up",
    title: "Bid management",
    body: "We spend efficiently by adjusting bids to campaign goals. Smart bidding maximizes results while controlling costs.",
  },
  {
    icon: "layers",
    title: "Performance tracking",
    body: "We monitor key metrics like engagement, conversions, and ROI. Regular analysis helps optimize campaigns for better results.",
  },
] as const;

export function MetaAdsApproach() {
  return (
    <OutcomeGrid
      label="What we do"
      title="Driving success through strategic paid social advertising"
      sub="Transforming your brand's online presence and generating meaningful results is our priority. We bring together a unique blend of creativity and data-driven execution."
      items={[...APPROACH]}
      columns={4}
    />
  );
}
