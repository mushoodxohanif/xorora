import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "compass",
    name: "Insightful business discovery",
    body: "We start by understanding your business and your goals, then lock in what your custom software or mobile app has to achieve.",
  },
  {
    icon: "file-code-2",
    name: "Tailored software design specifications",
    body: "We translate your goals into precise design specs that capture the features your product actually needs.",
  },
  {
    icon: "brain-circuit",
    name: "Strategic risk identification",
    body: "We surface the pitfalls early and build proactive plans, so your project stays secure and ready to scale.",
  },
  {
    icon: "bar-chart-3",
    name: "Competitive landscape immersion",
    body: "We study how your competitors operate and position your product a step ahead before the build begins.",
  },
  {
    icon: "layers",
    name: "Blueprinting digital architecture",
    body: "Our architects draft the preliminary design, setting up an intuitive experience that fits your product needs.",
  },
  {
    icon: "database-zap",
    name: "Comprehensive market analysis",
    body: "We read market dynamics to spot trends, forecast challenges, and find the openings that give your product an edge.",
  },
  {
    icon: "cpu",
    name: "Selecting the optimal tech framework",
    body: "We match the right technology stack to your requirements, so the tools you build on move the business forward.",
  },
  {
    icon: "rocket",
    name: "Estimation and technical roadmap",
    body: "You get a detailed plan with cost estimates and a phase-by-phase timeline, aligned to your budget and deadlines.",
  },
] as const;

export function DwDeliver() {
  return (
    <ServiceCardGrid
      label="Inside the workshop"
      title="What our software discovery workshop covers"
      sub="Every session is run to produce decisions, not notes. Here's what you walk away with."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
    />
  );
}
