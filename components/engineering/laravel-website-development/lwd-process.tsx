import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. For Laravel builds this includes the frontend boundary decision and, on existing applications, a version and package audit. Those two drive most of the cost on this stack.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Domain model, permission structure, queue design, and where business logic lives relative to the framework. We keep domain code separable from Laravel itself, because that is what decides whether next year's major version is a weekend or a quarter.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. Pest coverage, PHPStan at a set level, and code review are part of the sprint rather than a phase we get to later.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing with production-shaped data, because N+1 queries are invisible against a small dataset. Query budgets verified per endpoint. Security pass. Monitoring, logging, and alerting live before launch.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source, infrastructure, and Forge or Vapor access transfer to you. You are never locked in by a repository you cannot reach.",
  },
] as const;

export function LwdProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Laravel website development process"
        sub="A defined path from technical scope to handover, with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="lwd-approach"
      />
    </div>
  );
}
