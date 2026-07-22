import { ServiceFaq } from "@/components/services";

export const DO_FAQS = [
  {
    q: "What is DevOps, and what advantages can it bring to my business?",
    a: "DevOps unites development and operations so you release better software more often. In practice, that means faster updates, fewer failed deployments, and quicker recovery when something breaks. The result is a delivery pipeline your business can rely on.",
  },
  {
    q: "How does DevOps improve software quality?",
    a: "Automated testing, consistent processes, and continuous monitoring catch issues earlier and keep them from reaching users. Smaller, frequent releases are easier to verify than big-bang ones. Quality becomes a habit of the pipeline, not a final gate.",
  },
  {
    q: "What kind of DevOps services does Xorora offer?",
    a: "We cover cloud team management, cloud services, microservices, serverless, process automation, and application integration. We tailor the mix to your systems and goals rather than forcing a fixed package.",
  },
  {
    q: "How does Xorora implement DevOps?",
    a: "We build on four pillars: people, process, technology, and governance. We set up cross-functional teams, automate the pipeline, and put monitoring and governance around it, so delivery stays fast, secure, and reliable.",
  },
  {
    q: "How long does it take to see results from DevOps?",
    a: "Early wins like faster, more reliable releases often show within the first few cycles. Deeper gains in deployment frequency and recovery time build as automation and practices mature. We work in increments so progress stays visible.",
  },
  {
    q: "Do you offer ongoing managed DevOps, or one-time setup?",
    a: "Both. Some clients want us to stand up their pipeline and hand it over, others want us to run and improve it over time as a managed service. We'll recommend the right fit for your team's capacity.",
  },
] as const;

export function DoFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="FAQs about Xorora DevOps services"
      items={[...DO_FAQS]}
    />
  );
}
