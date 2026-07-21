import { ServiceFaq } from "@/components/services";

export const AC_FAQS = [
  {
    q: "What engagement models do you offer?",
    a: "We work in the model that fits your stage: fixed-scope projects, ongoing advisory, or embedding our specialists alongside your team. We'll recommend the right fit after understanding your goals and internal capacity. You're never locked into one shape of engagement.",
  },
  {
    q: "Do we need in-house AI experts?",
    a: "No. Many clients come to us precisely because they don't have that bench yet. Our data scientists, engineers, and designers cover the gaps, and our upskilling work leaves your team more capable than when we started.",
  },
  {
    q: "How do you ensure data security?",
    a: "Security and governance are part of the design, not an afterthought. We build compliant, auditable systems and set governance models around them, so your data and your brand stay protected as AI scales.",
  },
  {
    q: "How do you measure success?",
    a: "We agree on measurable KPIs during planning and track against them through delivery. Success is tied to business impact, adoption, and value in production, not a demo that looks good in a slide.",
  },
  {
    q: "How much do AI consultation services cost?",
    a: "It depends on scope and engagement model, so we don't quote a flat number blind. After a short discovery call we give you a clear proposal tied to what the work actually requires. Many clients start with a focused readiness assessment before committing further.",
  },
  {
    q: "How long does an AI consulting engagement take?",
    a: "A readiness assessment can take a couple of weeks, while a full path to production runs longer depending on complexity. We scope timelines with you up front and work in milestones, so progress stays visible throughout.",
  },
] as const;

export function AcFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="FAQs about AI consulting with Xorora"
      items={[...AC_FAQS]}
    />
  );
}
