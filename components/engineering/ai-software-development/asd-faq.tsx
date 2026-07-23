import { ServiceFaq } from "@/components/services";

export const ASD_FAQS = [
  {
    q: "What is an AI development company?",
    a: "It's a partner that designs, builds, and ships AI systems rather than just advising on them. That covers everything from model selection and data work to deployment and ongoing maintenance. The test is whether the work reaches production.",
  },
  {
    q: "How does Xorora approach AI development?",
    a: "We start from your business objective, choose the best-fit model rather than a default one, and build for production from day one. You stay informed through discovery, initiation, development, and maintenance. Nothing gets handed over half-finished.",
  },
  {
    q: "Can Xorora integrate AI into existing applications?",
    a: "Yes. Most of our work involves adding AI to systems that already exist and already matter. We design integrations that fit your current architecture rather than forcing a rebuild around the AI.",
  },
  {
    q: "What AI technologies does Xorora work with?",
    a: "We build with leading frontier models and open-weight alternatives, plus frameworks like LangChain and PyTorch, and deploy on AWS, Azure, or Google Cloud. We stay vendor-neutral so the choice always fits your use case.",
  },
  {
    q: "How much do AI development services cost?",
    a: "It depends on scope, data readiness, and whether you need a focused build or a full production system. After a short discovery call we give you a clear proposal tied to the work involved, with no open-ended billing.",
  },
  {
    q: "How long does it take to develop a custom AI solution?",
    a: "A focused build can move in weeks, while a full production system with evaluation and MLOps takes longer. We scope timelines up front and work in milestones, so progress stays visible and you can adjust as you go.",
  },
] as const;

export function AsdFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions about our AI development services"
      items={[...ASD_FAQS]}
    />
  );
}
