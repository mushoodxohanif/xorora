import { OutcomeGrid } from "@/components/services";

const REASONS = [
  {
    icon: "cpu",
    title: "AI workflow automation expertise",
    body: "A seasoned team with deep, hands-on experience across AI-driven workflow automation.",
  },
  {
    icon: "trending-up",
    title: "Cost-effective partners",
    body: "We prioritize cost-effective solutions that make us the partner of choice.",
  },
  {
    icon: "rocket",
    title: "Agile development and on-time delivery",
    body: "Agile methods keep projects on time and delivered on the schedule we set.",
  },
  {
    icon: "handshake",
    title: "Easy and regular communication",
    body: "Clear, consistent communication so you always know where the project stands.",
  },
  {
    icon: "shield-check",
    title: "Free post-development support",
    body: "Our specialists stay available after launch with hands-on support.",
  },
  {
    icon: "gauge",
    title: "Fast to start",
    body: "We can kick off quickly, so you're not waiting weeks to see progress.",
  },
] as const;

export function WfaWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="Reasons clients choose us for AI workflow automation"
      items={[...REASONS]}
      columns={3}
    />
  );
}
