import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "layers",
    name: "Build scalable POCs from day one",
    body: "We design your proof of concept with future growth in mind, avoiding costly migrations and redesigns as the product evolves.",
  },
  {
    icon: "rocket",
    name: "Move from PoC to MVP cleanly",
    body: "We give you a clear technical roadmap, so concept testing evolves into a market-ready product without a rebuild.",
  },
  {
    icon: "bar-chart-3",
    name: "Optimize resource allocation",
    body: "We help you focus on the features that truly matter, maximizing ROI in the critical early stages.",
  },
  {
    icon: "cpu",
    name: "Build an MVP without hiring a full team",
    body: "We deliver a quality, market-ready MVP faster than standing up an in-house team, collaborating closely throughout.",
  },
] as const;

export function MvpDeliver() {
  return (
    <ServiceCardGrid
      label="We will help you"
      title="MVP and POC development, without the wasted spend"
      sub="Four ways we take you from a raw idea to a market-ready product, at less cost and risk than building blind."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
      showLearnMore={true}
    />
  );
}
