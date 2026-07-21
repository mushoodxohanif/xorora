import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Measure the value at stake",
    body: "We start from value, setting the metrics each cycle has to move before any work begins.",
  },
  {
    n: "02",
    name: "Move in agile cycles",
    body: "We adapt your business model piece by piece, delivering value in short, paced increments.",
  },
  {
    n: "03",
    name: "Let each cycle fund the next",
    body: "Early gains pay for what follows, so transformation stays self-funding rather than open-ended.",
  },
  {
    n: "04",
    name: "Keep evolving",
    body: "We build for ongoing evolution, so the platform and the operating model keep improving after launch.",
  },
] as const;

export function DtProcess() {
  return (
    <StepApproach
      label="Our approach"
      title="Our value-driven approach to digital transformation"
      sub="Change doesn't have to be torrential or costly. We make it incremental and self-funding, moving in agile cycles so momentum never stops."
      steps={[...STEPS]}
      gradientId="dtProcessDia"
    />
  );
}
