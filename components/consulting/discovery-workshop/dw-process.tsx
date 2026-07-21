import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Align on goals and scope",
    body: "We agree on what success looks like and draw a clear boundary around what this project will and won't cover.",
  },
  {
    n: "02",
    name: "Define requirements and priorities",
    body: "We turn goals into concrete requirements and rank them, so the first build focuses on what matters most.",
  },
  {
    n: "03",
    name: "Validate critical assumptions",
    body: "We pressure-test the riskiest assumptions before you commit budget, not after.",
  },
  {
    n: "04",
    name: "Plan the delivery approach",
    body: "We map phases, effort, and timeline into a roadmap your team can pick up and run with.",
  },
] as const;

export function DwProcess() {
  return (
    <StepApproach
      label="The method"
      title="How we define, validate, and plan your project"
      sub="Four working steps take you from a loose idea to a plan your team can execute."
      steps={[...STEPS]}
      gradientId="dwProcessDia"
    />
  );
}
