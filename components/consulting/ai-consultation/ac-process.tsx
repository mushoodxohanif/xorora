import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "AI readiness assessment",
    body: "We assess your AI maturity and identify the areas to improve before you invest in a build.",
  },
  {
    n: "02",
    name: "Technical evaluation",
    body: "We check data quality, infrastructure, and integration readiness to set a strong, scalable foundation.",
  },
  {
    n: "03",
    name: "Strategic planning and validation",
    body: "We build a roadmap with clear milestones and measurable KPIs, so there's a defined path to business impact.",
  },
  {
    n: "04",
    name: "Solution implementation",
    body: "We guide the build of scalable, user-centered AI solutions designed to deliver value well past launch.",
  },
] as const;

export function AcProcess() {
  return (
    <StepApproach
      label="Our approach"
      title="How we take you from readiness to rollout"
      sub="Four steps move you from a readiness check to AI running in production."
      steps={[...STEPS]}
      gradientId="acProcessDia"
    />
  );
}
