import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. On existing systems this includes a Java version and dependency audit, with specific attention to jakarta readiness, because that single question determines whether an upgrade is weeks or months.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Module boundaries, persistence strategy, concurrency model, and how much structure the system has actually earned. If the previous team built more layers than the problem justifies, this is the week we say so.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. JUnit and Testcontainers coverage, ArchUnit rules enforcing the boundaries we agreed, and code review inside the sprint rather than after it.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing held long enough to expose GC behaviour and memory growth rather than just peak throughput. Query budgets verified per endpoint. Security pass. Metrics, logging, and distributed tracing live before launch.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source, infrastructure, and pipeline access transfer to you. You are never locked in by a repository you cannot reach.",
  },
] as const;

export function JwdProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Java web development process"
        sub="Xorora Java web development process from discovery to handover — a defined path with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="jwd-approach"
      />
    </div>
  );
}
