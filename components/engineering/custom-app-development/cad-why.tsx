import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "target",
    title: "Built to your requirements",
    body: "We build around your business rules and workflows rather than bending you to fit a template.",
  },
  {
    icon: "layers",
    title: "The right platform for the job",
    body: "We weigh native, hybrid, and cross-platform against your users, budget, and timeline before committing.",
  },
  {
    icon: "rocket",
    title: "Store-ready from the start",
    body: "We build to platform standards and guidelines, so publishing and distribution don't become a fight.",
  },
  {
    icon: "shield-check",
    title: "Supported past launch",
    body: "We stay with the app after deployment, so it keeps working as devices and platforms change.",
  },
] as const;

export function CadWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="Why teams build with us"
      items={[...WHY]}
    />
  );
}
