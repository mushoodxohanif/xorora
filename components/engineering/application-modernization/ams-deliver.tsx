import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "layers",
    name: "Application landscape rationalization",
    body: "We give you clarity on what stays, what goes, and what to transform, with data-backed insight on risk, cost, and business impact.",
  },
  {
    icon: "file-code-2",
    name: "Technical debt assessment",
    body: "We identify issues across your codebase, architecture, and infrastructure, then work hands-on to execute the fixes.",
  },
  {
    icon: "cloud",
    name: "Cloud readiness and TCO assessment",
    body: "We assess your readiness for cloud, find capability gaps, and prioritize migration, establishing DevOps, FinOps, and CloudOps practices.",
  },
  {
    icon: "compass",
    name: "Product strategy development",
    body: "We treat modernization as a chance to evolve your product portfolio and align it with your business success metrics.",
  },
  {
    icon: "pen-tool",
    name: "Experience design",
    body: "We reimagine how people interact with legacy apps using human-centered design, so the product captures attention and works faster.",
  },
  {
    icon: "cpu",
    name: "Solution discovery",
    body: "We de-risk your modernization strategy, combining market intelligence with engineering to define the right architecture.",
  },
] as const;

export function AmsDeliver() {
  return (
    <ServiceCardGrid
      label="Our services"
      title="Our application modernization services"
      sub="Six services that take legacy systems from assessment to a modernized, cloud-ready future."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
      showLearnMore={true}
    />
  );
}
