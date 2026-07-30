import { ServiceFaq } from "@/components/services";

export const AAD_FAQS = [
  {
    q: "What are AI agents?",
    a: "AI agents are software that can take actions toward a goal, not just answer questions. They connect to your tools, follow rules you set, and handle multi-step work like processing an invoice or resolving a ticket end to end. The useful ones run reliably in production, not just in a demo.",
  },
  {
    q: "What can AI agents do for my business?",
    a: "They automate repetitive workflows, handle support conversations, forecast outcomes, and process documents and images. The result is less manual load, faster turnaround, and decisions backed by real-time data. We build the agents that map to your actual operations.",
  },
  {
    q: "What is the typical timeline for your AI agent development services?",
    a: "Discovery takes one to two weeks, and from there timeline depends on complexity. We work in stages — Discover, Prove, Pilot, Scale — so you see value early and can adjust. Nothing goes to production before it's tested and integrated.",
  },
  {
    q: "Who should consider adopting AI agents?",
    a: "Any team spending significant time on repetitive, rule-based work, high-volume support, or data-heavy decisions. If a process is well-defined and happens often, it's usually a strong candidate. We help you find the highest-value place to start.",
  },
  {
    q: "How does Xorora help businesses with agentic AI adoption?",
    a: "We handle the full path in-house, from use-case discovery and ROI modeling through to a production system with governance and monitoring. You work with one team start to finish, and we leave your people able to run and extend what we build.",
  },
  {
    q: "How secure are AI agents developed by Xorora?",
    a: "Security and governance are built in from discovery, covering what the agent can access, what it's allowed to do, and full audit trails. We use secure LLMOps pipelines and design around your compliance requirements rather than bolting them on later.",
  },
] as const;

export function AadFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...AAD_FAQS]}
    />
  );
}
