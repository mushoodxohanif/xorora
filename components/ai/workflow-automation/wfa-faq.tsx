import { ServiceFaq } from "@/components/services";

export const WFA_FAQS = [
  {
    q: "What business processes can AI automate?",
    a: "Repetitive, rule-based work is the sweet spot: approvals, data entry, document handling, scheduling, and systems that need to talk to each other. AI can also handle judgment-lighter parts of support and reporting. If a process is well-defined and happens often, it's usually a candidate.",
  },
  {
    q: "How much does AI workflow automation cost?",
    a: "It depends on how many processes you're automating and how complex they are. After a short assessment we give you a clear proposal tied to the work, rather than a flat number. Many clients start with one high-value workflow and expand from there.",
  },
  {
    q: "What's the difference between AI automation and RPA?",
    a: "RPA follows fixed rules and is great for structured, repetitive tasks. AI automation adds the ability to read unstructured input, make decisions, and adapt, so it handles cases rules alone can't. In practice we often combine the two.",
  },
  {
    q: "How long does it take to automate a workflow?",
    a: "A single, well-scoped workflow can be live in a few weeks. Larger, multi-system automations take longer, and we work in stages so you see value early. We'll give you a timeline after the assessment.",
  },
  {
    q: "Do you integrate with n8n, Make, or Zapier?",
    a: "Yes. We work with n8n, Make, Zapier, and similar tools where they're the right fit, and we build custom AI agents when you've outgrown them. We'll recommend the approach that suits your scale and budget.",
  },
  {
    q: "Do you migrate existing no-code automations to custom AI agents?",
    a: "Yes. When a no-code setup hits its limits, we migrate it to custom AI agents that are more capable and easier to scale. We map what you have first, so nothing breaks in the move.",
  },
] as const;

export function WfaFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...WFA_FAQS]}
    />
  );
}
