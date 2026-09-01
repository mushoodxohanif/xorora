import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. For Python application builds this includes framework selection, integration inventory, and whether an AI or data layer belongs in scope from day one.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "Service boundaries, database design, deployment plan, and agreed performance targets. Django versus FastAPI is confirmed here against the constraint rather than assumed at the pitch.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working software at every sprint end and staging access from week one. Code review, typed interfaces, and test coverage are part of the sprint, not a phase we get to later.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Load testing, security pass, and monitoring live before launch rather than after the first incident.",
  },
  {
    n: "05",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source and infrastructure transfer to you.",
  },
] as const;

export function PadProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Python application development process"
        sub="A defined path from technical scope to handover, with repository access from the first sprint."
        steps={[...STEPS]}
        gradientId="pad-approach"
      />
    </div>
  );
}
