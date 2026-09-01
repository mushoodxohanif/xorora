import { ServiceFaq } from "@/components/services";

export const PYTHON_APP_FAQS = [
  {
    q: "What is Python application development used for?",
    a: "Python application development covers web applications, SaaS platforms, internal tools, data-driven systems, automation, and AI/machine learning-powered products. Its versatility means a single team can often handle backend logic, data processing, and AI integration in one coherent stack.",
  },
  {
    q: "How much do Python application development services cost?",
    a: "Cost depends primarily on scope: application complexity, framework choice, integrations, and whether AI/ML features are involved. A scoped API or internal tool costs meaningfully less than a full-stack SaaS platform with billing and third-party integrations. Get a written estimate against your specific requirements rather than relying on a generic price range.",
  },
  {
    q: "Which Python framework should I use for my application?",
    a: "Django suits full-featured web applications and platforms with complex data models. FastAPI is the stronger choice for modern, high-performance APIs and microservices. Flask fits smaller applications where you want more architectural control. The right choice depends on your project's specific requirements, not a universal best answer.",
  },
  {
    q: "What should I look for in a Python app development company?",
    a: "Real production experience with the framework your project needs, a documented testing and deployment process, and clarity on how AI or data features fit in if your roadmap includes them. Ask for examples of applications currently running in production, not just a portfolio of demos.",
  },
  {
    q: "Is Xorora a good choice for Python application development?",
    a: "Xorora builds Python applications — Django and FastAPI backends, REST APIs, and AI/ML-integrated systems — for startups and mid-market companies, alongside its broader full-stack and AI engineering practice. Projects start at $10,000, with pricing quoted directly against scope rather than a generic rate card.",
  },
  {
    q: "Who owns the code after delivery?",
    a: "You do, throughout. Source, infrastructure access, and technical documentation should be unambiguous from day one, and you have repository access from the first sprint.",
  },
] as const;

export function PadFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Python application development FAQs"
      items={[...PYTHON_APP_FAQS]}
      defaultOpen={0}
    />
  );
}
