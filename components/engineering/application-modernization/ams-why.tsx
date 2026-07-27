import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "target",
    title: "Faster, evidence-based modernization",
    body: "We map dependencies and code structure up front, so modernization decisions rest on evidence, not guesswork.",
  },
  {
    icon: "layers",
    title: "Performance tuning with microservices",
    body: "We minimize architectural risk and make the most of microservices, covering compliance, deployment, testing, and app-health monitoring.",
  },
  {
    icon: "cloud",
    title: "Simpler operations, serverless-ready",
    body: "We simplify IT operations with serverless architecture and powerful API development, so the modernized system is easier to run.",
  },
  {
    icon: "rocket",
    title: "Goal-oriented delivery",
    body: "We tie every step to a business outcome, so modernization moves you forward instead of churning for its own sake.",
  },
] as const;

export function AmsWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="AI-assisted modernization, built to scale"
      sub="We use GenAI and agentic AI to turn fragmented legacy systems into a continuous, automated modernization lifecycle, with deep visibility into your application landscape, dependencies, and code so decisions are evidence-based. Governance, security, and responsible-AI principles keep it controlled and business-aligned."
      items={[...WHY]}
    />
  );
}
