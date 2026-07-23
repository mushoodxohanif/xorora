import { ServiceFaq } from "@/components/services";

export const II_FAQS = [
  {
    q: "What is IT infrastructure?",
    a: "It's the hardware, software, networks, and cloud that keep your business running, from servers and storage to the platforms your teams work on. Managed well, it stays fast, secure, and cost-effective. Managed poorly, it quietly holds everything back.",
  },
  {
    q: "How do you document IT infrastructure?",
    a: "We map your systems, dependencies, and configurations into clear records, so nothing lives only in one person's head. That documentation makes planning, audits, and change far less risky. We keep it current as your estate evolves.",
  },
  {
    q: "How much does IT infrastructure cost?",
    a: "It depends on your size, goals, and whether you run on-premises, cloud, or hybrid. We assess your setup first and give you a clear plan tied to ROI, rather than a number pulled from thin air. Many clients start with a consultancy audit.",
  },
  {
    q: "What are the main benefits of IT infrastructure services?",
    a: "Greater efficiency, lower costs, better customer experience, and stronger protection against threats like malware and unauthorized access. The right setup also scales with you instead of blocking growth.",
  },
  {
    q: "What services are included in IT infrastructure?",
    a: "Consultancy, integration, ongoing management, and cloud setup, covering assessment, upgrades, capacity planning, and migration. We tailor the mix to where you are and where you're headed.",
  },
  {
    q: "Do you manage multi-cloud and hybrid setups?",
    a: "Yes. We design and run private, public, hybrid, and multi-cloud environments, and can blend single and multi-tenant cloud with colocation. We'll recommend the mix that fits your workloads and budget.",
  },
] as const;

export function IiFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="IT infrastructure FAQs"
      items={[...II_FAQS]}
    />
  );
}
