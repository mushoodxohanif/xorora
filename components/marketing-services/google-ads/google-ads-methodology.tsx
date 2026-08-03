import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Intent-led campaign structure",
    body: "We build the account around search intent, not just keywords.",
  },
  {
    n: "02",
    name: "Controlled budget allocation",
    body: "We put budget where the return is, and pull it from where it isn't.",
  },
  {
    n: "03",
    name: "Ongoing performance testing",
    body: "We keep testing and refining, because paid search rewards active management.",
  },
] as const;

export function GoogleAdsMethodology() {
  return (
    <StepApproach
      label="Methodology"
      title="Our paid search methodology"
      sub="Google Ads moves fast. It needs active management, not set-and-forget campaigns. Our approach combines clear targeting, disciplined testing, and continuous optimization to improve performance over time."
      steps={[...STEPS]}
      gradientId="googleAdsMethodologyDia"
    />
  );
}
