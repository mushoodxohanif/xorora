import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. For Django this includes the permission model and the frontend boundary decision, plus a version and dependency audit on existing applications. Those three drive most of the cost on this stack.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Data model, permission structure, where the service layer sits relative to models, and queue design. On existing systems, a migration plan that keeps the application deployable at every step.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. pytest-django coverage, ruff and mypy in CI, and code review inside the sprint rather than after it.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing with production-shaped data, because N+1 queries are invisible against a small dataset. Query budgets asserted per view. Migrations rehearsed against production volume. Security pass. Monitoring and error tracking live before launch.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source and infrastructure transfer to you. You are never locked in by a repository you cannot reach.",
  },
] as const;

export function DdcProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Django development process"
        sub="A defined path from technical scope to handover, with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="ddc-approach"
      />
    </div>
  );
}
