import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "target",
    title: "Best-fit frontier models",
    body: "We choose among leading frontier models rather than defaulting to whichever one we're tied to.",
  },
  {
    icon: "layers",
    title: "Open-weight when it fits",
    body: "Open-weight alternatives are on the table whenever they beat a hosted model on cost or control.",
  },
  {
    icon: "cloud",
    title: "Deploy on your cloud",
    body: "We deploy on AWS, Azure, or Google Cloud, so your AI runs inside the environment you already trust.",
  },
  {
    icon: "rocket",
    title: "Built to reach production",
    body: "We build for the part most teams skip: evaluation, deployment, and running it reliably at scale.",
  },
] as const;

export function AsdWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="A vendor-neutral approach across leading models and platforms"
      sub="We stay independent at the model layer, choosing the best-fit frontier model and deploying wherever your business needs it."
      items={[...WHY]}
    />
  );
}
