import { ServiceFaq } from "@/components/services";

export const CMS_FAQS = [
  {
    q: "What is CMS development and why does my business need it?",
    a: "CMS development builds the platform your team uses to create, manage, and publish content. A custom CMS fits your workflows instead of forcing you into pre-built structures that slow publishing. The payoff is faster content operations and full control over how your content reaches users.",
  },
  {
    q: "How much does CMS development cost?",
    a: "It depends on scope, from a basic module to an enterprise platform, and which technologies fit your needs. After a short consultation we give you a clear proposal tied to the work involved, rather than a flat number. Many clients start with a focused module and scale from there.",
  },
  {
    q: "Will my CMS be secure and scalable?",
    a: "Yes. We build with security controls and an architecture designed to scale, including role-based access, tiered governance, and performance-optimized delivery. The system grows with your content and traffic rather than buckling as you add channels.",
  },
  {
    q: "Which CMS platform is best for my business?",
    a: "It depends on where your content needs to go and how much you need to customize. We work across custom, headless, WordPress, Drupal, and enterprise platforms, and recommend the fit for your channels, team, and budget rather than defaulting to one.",
  },
  {
    q: "Can you customize a CMS to fit my business needs?",
    a: "Yes. Custom workflows, content types, editorial interfaces, and integrations are the core of what we do. Whether we build from scratch or customize an open-source platform, the CMS is shaped around how your team actually works.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes. We support the CMS after launch with updates, monitoring, and enhancements, including post-migration rank monitoring where relevant. You're not left to maintain a complex platform alone.",
  },
] as const;

export function CmsFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...CMS_FAQS]}
    />
  );
}
