import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "workflow",
    name: "Workflow and process automation agents",
    body: "We automate repetitive, rule-based tasks like payroll, invoice validation, inventory updates, approvals, and scheduling, integrating across HR, finance, and sales to cut manual load.",
  },
  {
    icon: "bot",
    name: "Conversational and experience agents",
    body: "We deliver natural communication over chat, voice, or email, handling support tickets, reminders, order updates, and onboarding queries with 24/7 responsiveness.",
  },
  {
    icon: "bar-chart-3",
    name: "Predictive and decision intelligence agents",
    body: "We analyze real-time and historical data to forecast outcomes and recommend next steps, from sales forecasting to risk scoring.",
  },
  {
    icon: "layers",
    name: "Orchestrator and multi-agent systems",
    body: "We coordinate multiple specialized agents as one intelligence layer, enabling collaboration and optimization across complex, cross-functional workflows.",
  },
  {
    icon: "cpu",
    name: "Generative and knowledge agents",
    body: "We create, summarize, and contextualize content for marketing, support, and knowledge management using secure LLMOps pipelines.",
  },
  {
    icon: "database-zap",
    name: "Vision and data agents",
    body: "We extract, validate, and analyze data from text and visual inputs like invoices, reports, and product images to improve accuracy and compliance.",
  },
] as const;

export function AadDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Types of AI agents we build"
        sub="From workflow automation to multi-agent orchestration — agents designed for your systems, data, and guardrails."
        items={[...CAPABILITIES]}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
