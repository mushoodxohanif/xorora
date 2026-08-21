import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. On existing .NET systems this includes a runtime and dependency assessment, because which .NET you are on and what blocks the move drive most of the cost on this stack.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Domain model, service boundaries, data access strategy, identity design, and how much structure the system has actually earned. If the answer is less than the previous team built, this is the week we say so.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. xUnit coverage, Roslyn analyzers enforced in CI, and code review are part of the sprint rather than a phase we get to later.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing held long enough to expose thread pool starvation rather than just peak throughput. Query budgets verified per endpoint. Security pass. Monitoring, logging, and distributed tracing live before launch.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source, infrastructure, and pipeline access transfer to you. You are never locked in by a repository you cannot reach.",
  },
] as const;

export function CdnProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our .NET development process"
        sub="A defined path from technical scope to handover, with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="cdn-approach"
      />
    </div>
  );
}
