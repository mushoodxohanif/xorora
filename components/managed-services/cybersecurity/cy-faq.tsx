import { ServiceFaq } from "@/components/services";

export const CY_FAQS = [
  {
    q: "What sets Xorora apart from other cybersecurity services?",
    a: "Senior engineers, an accountable single team, and services that map to real security functions rather than a generic package. You get 24/7 detection, fast response, and specialists who track advanced threats. We layer capabilities in as you grow.",
  },
  {
    q: "How does Xorora ensure the confidentiality of my data?",
    a: "We protect data at rest and in transit with encryption, strong access controls, and a zero-trust design. We'll also sign an NDA before you share anything sensitive. Confidentiality is built into how we work, not bolted on.",
  },
  {
    q: "Can Xorora help with cybersecurity compliance?",
    a: "Yes. We run compliance and risk assessments against the standards you answer to, from SOC 2 to HIPAA to GDPR, and give you a clear path to close the gaps. We can help you prepare for audits and stay compliant over time.",
  },
  {
    q: "Why should my business invest in cybersecurity services?",
    a: "Because the cost of doing nothing keeps rising, breaches now take months to contain, and most involve a human element you can defend against. Strong security protects revenue, data, and trust. It's cheaper than a breach, every time.",
  },
  {
    q: "How experienced is Xorora's team?",
    a: "Our cybersecurity professionals bring 8+ years of experience each across detection, testing, incident response, and mitigation. We work across regulated industries where a breach is existential, not just expensive.",
  },
  {
    q: "Does Xorora serve international clients?",
    a: "Yes. We work with clients across regions and industries, adapting to the threats, data, and rules specific to each. Wherever you operate, we shape the security program around your context.",
  },
] as const;

export function CyFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...CY_FAQS]}
    />
  );
}
