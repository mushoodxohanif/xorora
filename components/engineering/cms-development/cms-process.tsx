import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Basic CMS module",
    body: "A CMS module with core features: content creation, storage, organization, editing, and publishing.",
  },
  {
    n: "02",
    name: "Custom CMS development",
    body: "A custom CMS with tailored workflows, user roles, integrations, APIs, approval flows, and scalable content architecture.",
  },
  {
    n: "03",
    name: "Enterprise CMS platform",
    body: "A complex CMS with advanced personalization, multilingual support, analytics, automation, security controls, and multi-channel publishing.",
  },
] as const;

export function CmsProcess() {
  return (
    <div id="process">
      <StepApproach
        label="Our timeline"
        title="Timeline of our CMS development services"
        sub="Where your build lands depends on complexity. Here's what each stage typically covers."
        steps={[...STEPS]}
        gradientId="cms-approach"
      />
    </div>
  );
}
