import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery",
    body: "We assess your business objectives and the constraints around them before proposing anything.",
  },
  {
    n: "02",
    name: "Initiation",
    body: "We form the right team for your project and set up how the work will run.",
  },
  {
    n: "03",
    name: "Development",
    body: "Our engineers build your product while keeping you in the loop on progress and decisions.",
  },
  {
    n: "04",
    name: "Maintenance",
    body: "We assign QA specialists to address issues after launch and keep the system healthy.",
  },
] as const;

export function AsdProcess() {
  return (
    <StepApproach
      label="How we work"
      title="How we work"
      sub="Transparency and communication carry a project. We keep you informed at every step and stay available for questions throughout."
      steps={[...STEPS]}
      gradientId="asd-approach"
    />
  );
}
