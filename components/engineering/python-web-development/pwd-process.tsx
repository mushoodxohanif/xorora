import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. For Python web builds this includes a data model review and an integration inventory, because those two drive most of the risk on this stack.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Service boundaries, database design, deployment plan, and agreed performance targets. Framework selection is confirmed here against the constraint rather than assumed at the pitch. If Django is wrong for what you're building, this is the week we say so.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. You see the system as it grows rather than at the end. Code review, typed interfaces, and test coverage are part of the sprint, not a phase we get to later.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing against the targets set in architecture. Security pass. Monitoring, logging, and alerting live before launch rather than after the first incident.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source and infrastructure transfer to you. You are never locked in by a repository you cannot reach.",
  },
] as const;

export function PwdProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Python web development process"
        sub="A defined path from technical scope to handover, with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="pwd-approach"
      />
    </div>
  );
}
