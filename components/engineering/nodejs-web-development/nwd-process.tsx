import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. For Node.js builds this includes a concurrency target and an integration inventory, because connection volume drives most of the architecture on this stack.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Framework selection, process model, data layer, deployment target, and agreed performance budgets including event loop lag. If NestJS is heavier than your system needs, this is the week we say so.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. TypeScript strict mode, code review, and test coverage are part of the sprint rather than a phase we get to later.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing at target concurrency, held long enough to expose memory growth rather than just peak throughput. Security pass. Monitoring, logging, and tracing live before launch.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source and infrastructure transfer to you. You are never locked in by a repository you cannot reach.",
  },
] as const;

export function NwdProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Node.js web development process"
        sub="A defined path from technical scope to handover, with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="nwd-approach"
      />
    </div>
  );
}
