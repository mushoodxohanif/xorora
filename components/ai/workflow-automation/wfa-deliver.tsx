import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "workflow",
    name: "Process automation",
    body: "We identify and automate manual tasks to improve productivity and consistency across your operations.",
  },
  {
    icon: "layers",
    name: "Custom workflow development",
    body: "We design and deploy workflows tailored to your business, for consistent, scalable, cost-effective processes.",
  },
  {
    icon: "calendar-clock",
    name: "Task scheduling automation",
    body: "We enable efficient task allocation with automated scheduling that improves team productivity and resource use.",
  },
  {
    icon: "file-text",
    name: "Document automation systems",
    body: "We simplify document management with automated workflows for approvals, storage, and sharing.",
  },
  {
    icon: "plug",
    name: "Systems integration",
    body: "We connect disparate systems into unified, automated processes across your organization.",
  },
  {
    icon: "activity",
    name: "Workflow monitoring and analytics",
    body: "We track, measure, and analyze workflows in real time to drive continuous improvement.",
  },
  {
    icon: "map",
    name: "Process mapping and optimization",
    body: "We visualize and upgrade your processes with expert mapping and optimization strategies.",
  },
  {
    icon: "bot",
    name: "Robotic process automation (RPA)",
    body: "We use RPA to automate repetitive, high-volume tasks for greater accuracy and lower labor costs.",
  },
  {
    icon: "check-circle",
    name: "Automated approval systems",
    body: "We streamline sign-offs with automated approval routing, so work doesn't stall waiting on a decision.",
  },
  {
    icon: "scan-text",
    name: "Data capture",
    body: "We automate data capture that extracts and structures information, cutting manual entry and errors.",
  },
  {
    icon: "shield-check",
    name: "Compliance automation",
    body: "We support compliance by automating controls, documentation, and monitoring.",
  },
  {
    icon: "cloud",
    name: "Cloud-based workflows",
    body: "We build workflows that scale with your business and run reliably in the cloud.",
  },
] as const;

export function WfaDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="Our services"
        title="Xorora workflow automation services"
        sub="Streamline operations with workflow automation that lifts efficiency, cuts errors, and transforms tasks through custom workflows, automated approvals, and RPA."
        items={[...CAPABILITIES]}
        columns={3}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
