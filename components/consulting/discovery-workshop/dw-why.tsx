import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "target",
    title: "Tailored to your product",
    body: "We shape each discovery workshop around your goals, not a fixed template, so the plan fits your product.",
  },
  {
    icon: "handshake",
    title: "Expert facilitation, whole picture",
    body: "Experienced facilitators keep sessions productive and connect every part of the project into one coherent plan.",
  },
  {
    icon: "trending-up",
    title: "Client-centric process",
    body: "We listen, ask, and build alongside you, keeping our recommendations tied to your vision throughout.",
  },
  {
    icon: "shield-check",
    title: "Proven delivery",
    body: "We've taken concepts through to production systems teams run their business on, not decks that stop at discovery.",
  },
] as const;

export function DwWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="Why teams run discovery with us"
      items={[...WHY]}
    />
  );
}
