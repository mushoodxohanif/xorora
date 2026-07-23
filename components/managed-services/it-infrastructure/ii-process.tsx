import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Assess",
    body: "We audit your current setup, surface pain points, and find where change delivers the most ROI.",
  },
  {
    n: "02",
    name: "Plan",
    body: "We use capacity planning and resource analysis to choose the optimal strategy for your business.",
  },
  {
    n: "03",
    name: "Optimize",
    body: "We deliver the upgrades and modernizations, keeping operations running throughout.",
  },
  {
    n: "04",
    name: "Migrate and manage",
    body: "We move you to cloud, hybrid, or hosted as needed, then maintain the estate over time.",
  },
] as const;

export function IiProcess() {
  return (
    <StepApproach
      label="Our approach"
      title="How we modernize your infrastructure"
      sub="A clear path from audit to a setup that runs itself, tuned to your budget and goals."
      steps={[...STEPS]}
      gradientId="iiProcessDia"
    />
  );
}
