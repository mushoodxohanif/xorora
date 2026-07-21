import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "trending-up",
    title: "Rapid, high-impact value",
    body: "We align your software engineering, business agility, and architecture goals to deliver value fast.",
  },
  {
    icon: "target",
    title: "Built on a real foundation",
    body: "Business agility and software engineering meet in one foundation, so strategy and delivery don't drift apart.",
  },
  {
    icon: "shield-check",
    title: "Proven across sectors",
    body: "Experience operating in many industries gives us an edge in navigating your specific transformation.",
  },
  {
    icon: "handshake",
    title: "One partner, end to end",
    body: "With our partner ecosystem, Xorora offers accelerated paths to digital transformation success.",
  },
] as const;

export function DtWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="Why enterprises transform with us"
      sub="We drive transformation through expertise in enterprise architecture, Agile, DevSecOps, full-stack engineering, AI, and cloud."
      items={[...WHY]}
    />
  );
}
