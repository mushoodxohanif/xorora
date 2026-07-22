import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "People",
    body: "A talent pool with cross-functional skills, set up for autonomous, agile development teams.",
  },
  {
    n: "02",
    name: "Process",
    body: "Consistent processes across development and operations, so deployments run smoothly.",
  },
  {
    n: "03",
    name: "Technology",
    body: "DevOps tooling that automates the pipeline and accelerates delivery and support.",
  },
  {
    n: "04",
    name: "Governance",
    body: "Monitoring and assessment mechanisms that keep delivery smart, secure, and reliable.",
  },
] as const;

export function DoProcess() {
  return (
    <div id="devops-approach" className="scroll-mt-24">
      <StepApproach
        label="Our approach"
        title="The DevOps approach"
        sub="Our approach rests on four pillars: people, process, technology, and governance. Together they deliver high-quality software, released regularly, in a collaborative way."
        steps={[...STEPS]}
        gradientId="doProcessDia"
      />
    </div>
  );
}
