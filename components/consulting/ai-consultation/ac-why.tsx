import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "trending-up",
    title: "Accelerated ROI",
    body: "Reach production-ready solutions in weeks, up to 3x faster than traditional build approaches.",
  },
  {
    icon: "target",
    title: "Reduced risk",
    body: "We use data-driven insight to anticipate risks and steer around common AI implementation traps.",
  },
  {
    icon: "shield-check",
    title: "Regulatory confidence",
    body: "Stay compliant with evolving standards through governance and security built in from the start.",
  },
  {
    icon: "handshake",
    title: "Maximized value",
    body: "We keep your AI strategy aligned to high-level business goals, KPIs, and where the market is heading.",
  },
] as const;

export function AcWhy() {
  return (
    <OutcomeGrid
      label="The payoff"
      title="Benefits of AI consulting with Xorora"
      items={[...WHY]}
    />
  );
}
