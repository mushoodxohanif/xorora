import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "search-check",
    name: "Meta Ads audit",
    body: "Our audit pinpoints what's working, what's wasting budget, and where the biggest opportunities lie, with clear, no-nonsense insights designed to boost ROI.",
  },
  {
    icon: "layers",
    name: "Bespoke Facebook and Instagram advertising strategy",
    body: "You want a Meta Ads agency that gets you ROI, and we plan and execute a bespoke strategy built around your audience and goals.",
  },
  {
    icon: "map",
    name: "Precise audience targeting and expansion",
    body: "Targeting is often the difference between an okay campaign and a great one. We target the exact people who want to buy from you, then expand your reach to new, relevant audiences.",
  },
  {
    icon: "pen-tool",
    name: "Meta Ads copy and creative",
    body: "We pair expert copy with click-worthy ad creative, so every Instagram and Facebook ad, whether a bold static or a dynamic video, makes every pixel and word count.",
  },
  {
    icon: "gauge",
    name: "Meta Ads optimization",
    body: "Good campaigns are built; great ones are continually refined. We relentlessly improve, rethink, and test new angles to find better performance.",
  },
  {
    icon: "git-compare",
    name: "Meta Ads split testing",
    body: "Whether it's audiences, landing pages, or adverts, knowing when and what to test matters as much as being able to interpret and learn from the results.",
  },
  {
    icon: "refresh-cw",
    name: "Retargeting ads",
    body: "We bring back the people who engaged but didn't convert, so warm demand doesn't get missed.",
  },
  {
    icon: "bar-chart-3",
    name: "Data analysis and reporting",
    body: "We track and report on performance, so you're always up to date on the impact of your investment.",
  },
] as const;

export function MetaAdsDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="Our services"
        title="Our Meta Ads services"
        sub="We don't do guesswork. We build, test, and refine high-ROI Meta Ads campaigns that turn clicks into customers."
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
