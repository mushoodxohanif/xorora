import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "cpu",
    name: "Senior tech talent",
    body: "Bring in vetted senior engineers with the exact skills your team needs, without the delay of hiring in-house.",
  },
  {
    icon: "layers",
    name: "Directly embedded",
    body: "Our engineers work your hours, use your tools, and follow your workflows. They operate like your internal team.",
  },
  {
    icon: "rocket",
    name: "Capacity with control",
    body: "Your leads set priorities and manage delivery. We add the capacity and technical depth to accelerate shipping.",
  },
  {
    icon: "compass",
    name: "Specialists across your stack",
    body: "From widely used frameworks to niche and legacy systems, we match engineers to your exact stack.",
  },
  {
    icon: "refresh-cw",
    name: "Flexible scaling",
    body: "Ramp incrementally, adding engineers in stages as the work grows, rather than committing everything up front.",
  },
  {
    icon: "workflow",
    name: "Works inside your toolchain",
    body: "Engineers plug into your repos, CI/CD, and project tools from day one. No new tools, no separate reporting layer.",
  },
] as const;

export function SaDeliver() {
  return (
    <ServiceCardGrid
      label="How we work"
      title="Bring in our engineers to keep delivery moving"
      sub="Fill specialized skill gaps, reinforce overstretched teams, or scale up for a major modernization. Our engineers work alongside yours as one extended team."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
      showLearnMore={true}
    />
  );
}
