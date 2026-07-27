import { ServiceCardGrid } from "@/components/services";

const SCENARIOS = [
  {
    icon: "compass",
    name: "Discovery and ROI framing",
    body: "We identify the AI opportunities most likely to create measurable business value and frame the ROI case.",
  },
  {
    icon: "database-zap",
    name: "AI feasibility and data readiness",
    body: "We check whether your data and workflows can actually support the AI you have in mind.",
  },
  {
    icon: "brain-circuit",
    name: "AI PoC development",
    body: "We build a proof of concept to test the idea against reality before you commit to a full build.",
  },
  {
    icon: "rocket",
    name: "AI MVP development",
    body: "We turn a validated concept into a lean, market-ready product focused on the features that matter.",
  },
  {
    icon: "workflow",
    name: "AI pilot scaling and production enablement",
    body: "We move from pilot to production with MLOps pipelines, performance tuning, and governance frameworks.",
  },
] as const;

export function MvpScenarios() {
  return (
    <ServiceCardGrid
      label="AI PoC stages"
      title="AI PoC and MVP services that reduce risk before you scale"
      sub="A staged path from opportunity to production, so risk drops before spend rises."
      items={[...SCENARIOS]}
      bg="var(--surface)"
    />
  );
}
