import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "compass",
    name: "AI strategy and roadmap development",
    body: "We validate use cases with our Lean Product Accelerator, so every initiative ties back to a business goal.",
  },
  {
    icon: "database-zap",
    name: "Data infrastructure optimization",
    body: "We modernize your data infrastructure for accurate, scalable AI, readying it for enterprise adoption.",
  },
  {
    icon: "bot",
    name: "Generative AI and LLM consulting",
    body: "We bring clarity to your generative AI strategy and help you plan the right LLM solutions with confidence.",
  },
  {
    icon: "bar-chart-3",
    name: "AI maturity assessment",
    body: "We evaluate your organization's AI readiness and pinpoint where the biggest improvements sit.",
  },
  {
    icon: "layers",
    name: "AI governance and security",
    body: "We set up governance models that keep your AI systems compliant, secure, and reliable in production.",
  },
  {
    icon: "cpu",
    name: "AI upskilling and enablement",
    body: "We equip your team with the skills and strategies to get the most out of every AI initiative.",
  },
] as const;

export function AcDeliver() {
  return (
    <ServiceCardGrid
      label="Our services"
      title="What our AI consultation services cover"
      sub="Six services that take you from readiness to production, chosen around where you are today."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
    />
  );
}
