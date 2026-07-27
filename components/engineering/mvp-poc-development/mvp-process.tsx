import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Planning",
    body: "We define scope, priorities, and the features that matter, so the build starts with a clear target.",
  },
  {
    n: "02",
    name: "Development",
    body: "Our in-house developers deliver clean, scalable code, no freelancers or part-timers, bringing your vision to life efficiently.",
  },
  {
    n: "03",
    name: "Testing and deployment",
    body: "We test and deploy your product with confidence, ensuring smooth performance and reliability.",
  },
] as const;

export function MvpProcess() {
  return (
    <div id="process">
      <StepApproach
        label="Our process"
        title="Our process"
        sub="Three stages that take a raw idea from clear scope to a tested, live product."
        steps={[...STEPS]}
        gradientId="mvp-approach"
      />
    </div>
  );
}
