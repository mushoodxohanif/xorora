import { ServiceCardGrid } from "@/components/services";

const SCENARIOS = [
  {
    icon: "layers",
    name: "Technology portfolio optimization",
    body: "We integrate acquired or fragmented systems into one ecosystem, so you can enter new markets and ship new experiences faster.",
  },
  {
    icon: "rocket",
    name: "New product development",
    body: "We take products from concept through development and scaling, standing up the platforms and services your users rely on.",
  },
  {
    icon: "cloud",
    name: "Cloud transformations",
    body: "We move trapped value out of legacy on-premise systems through cloud migration, optimized for resilience and cost.",
  },
] as const;

export function DtScenarios() {
  return (
    <ServiceCardGrid
      label="Transform scenarios"
      title="Where do you want to take your business next?"
      sub="Three of the most common places we help enterprises move."
      items={[...SCENARIOS]}
      bg="var(--surface)"
    />
  );
}
