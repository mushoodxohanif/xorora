import { ServiceFaq } from "@/components/services";

export const AMS_FAQS = [
  {
    q: "What is application modernization?",
    a: "It's upgrading or migrating legacy software so it's more secure, scalable, and cheaper to run, without throwing away the business logic inside it. That can mean refactoring, re-platforming, or replacing parts of a system. The goal is a modern foundation with minimal disruption.",
  },
  {
    q: "Does Xorora offer app modernization and migration?",
    a: "Yes. We handle both upgrading applications in place and migrating them to modern platforms or the cloud. We assess your landscape first, then execute with data-backed insight on risk, cost, and impact.",
  },
  {
    q: "Can Xorora modernize mainframe and midrange systems?",
    a: "Yes. We accelerate mainframe optimization using Agile and Dev(Sec)Ops, containerization, and automated code conversion. We sequence the work so critical systems keep running throughout.",
  },
  {
    q: "What is application portfolio and lifecycle management?",
    a: "It's taking a clear-eyed view of every application you run, deciding what to keep, retire, or transform, and managing each through its life. We rationalize the portfolio so investment goes where it delivers the most value.",
  },
  {
    q: "How does the AI-assisted approach to modernization work?",
    a: "We use GenAI and agentic AI to analyze legacy systems, map dependencies, and surface risks faster than manual review. It gives you evidence-based decisions and a continuous modernization lifecycle, with governance and security built in.",
  },
  {
    q: "How do I reduce the risk of a modernization project?",
    a: "Start with assessment, not code. We de-risk with a landscape review, a technical-debt read, and a validated business case before committing to change. Then we modernize incrementally, so you're never betting everything on one big-bang release.",
  },
] as const;

export function AmsFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...AMS_FAQS]}
    />
  );
}
