import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "compass",
    name: "Social media strategy development",
    body: "We develop tailored social media strategies that align with your business goals and strengthen your online presence.",
  },
  {
    icon: "pen-tool",
    name: "Social media content creation",
    body: "We create compelling content that resonates with your target audience and reinforces your brand's voice.",
  },
  {
    icon: "rocket",
    name: "Social media advertising",
    body: "We design and manage targeted paid social campaigns to increase conversions and reach potential customers.",
  },
  {
    icon: "activity",
    name: "Follower growth tactics",
    body: "We use proven tactics to grow your following and expand your reach on the platforms that matter.",
  },
  {
    icon: "workflow",
    name: "Community management",
    body: "We engage with your community to build a loyal customer base and foster meaningful connections.",
  },
  {
    icon: "bar-chart-3",
    name: "Analytics and performance tracking",
    body: "We track performance with analytics to refine strategy and achieve better business results.",
  },
  {
    icon: "layers",
    name: "Influencer marketing",
    body: "We collaborate with influencers to create authentic campaigns that reach and engage your audience.",
  },
  {
    icon: "shield-check",
    name: "Social media brand management",
    body: "We manage your brand's image across channels, keeping messaging consistent and interactions positive.",
  },
  {
    icon: "search",
    name: "Social media SEO",
    body: "We optimize your social content to improve search visibility and drive more traffic to your profiles.",
  },
  {
    icon: "map",
    name: "Social media audience research",
    body: "We research your audience to tailor content and strategy to their preferences on each network.",
  },
  {
    icon: "video",
    name: "Social media video content",
    body: "We produce captivating video content to increase engagement and connect with your audience.",
  },
  {
    icon: "check-circle",
    name: "Reputation management",
    body: "We monitor and manage your brand's reputation, addressing concerns and maintaining a positive image.",
  },
] as const;

export function SmmDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="Our services"
        title="Our social media management services"
        sub="Maximize your social media impact. Our team connects with your target audience, grows your following, and drives meaningful engagement across every channel."
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
