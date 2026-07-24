import { ServiceFaq } from "@/components/services";

export const CAD_FAQS = [
  {
    q: "What is custom mobile application development?",
    a: "It's building an app specifically around your business requirements rather than adapting off-the-shelf software. You get the features, integrations, and workflows your operation actually needs. The tradeoff is a longer build for a much closer fit.",
  },
  {
    q: "What platforms should I develop my custom mobile app for?",
    a: "It depends on where your users are and what the app has to do. Native gives you the best performance and device access, cross-platform covers Android and iOS from one codebase, and hybrid can reach more devices faster. We'll weigh the tradeoffs with you before committing.",
  },
  {
    q: "How do I choose a mobile app development company?",
    a: "Look at whether they ship to production, how they handle requirements before coding starts, and what happens after launch. Ask about architecture, security, and maintenance, not just the build. The answers reveal whether you're getting engineers or order-takers.",
  },
  {
    q: "How can AI be integrated into custom mobile apps?",
    a: "AI can power biometric authentication, personalization, contextual search, automated QA testing, and in-app NLP chatbots. The right question isn't what AI can do, it's which feature earns its place in your app. We build the ones that do.",
  },
  {
    q: "How can I ensure that my custom mobile app is secure?",
    a: "Security belongs in the architecture, not bolted on at the end. We build with data encryption, controlled access, and a security roadmap set during business analysis. We also design to platform standards so your app clears store review.",
  },
  {
    q: "How much does custom app development cost?",
    a: "It depends on platform, feature scope, and whether you're building new or revamping. After business analysis we give you a clear proposal tied to the work involved, rather than a number pulled from thin air.",
  },
] as const;

export function CadFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Custom mobile app development: frequently asked questions"
      items={[...CAD_FAQS]}
    />
  );
}
