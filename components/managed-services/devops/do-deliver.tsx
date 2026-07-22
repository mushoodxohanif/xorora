import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "cloud",
    name: "Cloud team",
    body: "We manage and optimize your cloud infrastructure, from containers to storage to networking, for reliable, scalable deployments.",
  },
  {
    icon: "layers",
    name: "Cloud services",
    body: "We bring automation and scale to development, testing, and deployment, streamlining your pipeline and lifting team efficiency.",
  },
  {
    icon: "workflow",
    name: "Microservices",
    body: "We break complex apps into small, service-based components, simplifying development, testing, and deployment.",
  },
  {
    icon: "cpu",
    name: "Serverless",
    body: "We let your DevOps team work across environments with minimal impact on others, releasing updates, patches, and infra changes.",
  },
  {
    icon: "refresh-cw",
    name: "Process automation",
    body: "We automate deployment with a robust Agile method, cutting production time and the risks that come with manual work.",
  },
  {
    icon: "database-zap",
    name: "Application integration",
    body: "We plan integrations with compatible tools, standard data formats, full testing, and security, then monitor and scale them to avoid vendor lock-in.",
  },
] as const;

export function DoDeliver() {
  return (
    <ServiceCardGrid
      label="What we offer"
      title="DevOps solutions and services we offer"
      sub="DevOps runs on four steps: develop and build, test, deploy, operate and monitor. We tailor each to your systems."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
    />
  );
}
