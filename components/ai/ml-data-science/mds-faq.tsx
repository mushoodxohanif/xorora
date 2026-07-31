import { ServiceFaq } from "@/components/services";

export const MDS_FAQS = [
  {
    q: "Should my company use a large language model (LLM) like ChatGPT, or build a custom machine learning model?",
    a: "It depends on the problem. LLMs are strong for language, generation, and reasoning over text, while a custom model often wins on narrow, high-stakes prediction where you control the data. Sometimes the right answer is both. We help you choose based on your use case, not the hype.",
  },
  {
    q: "How long does an AI or machine learning project typically take to go from concept to production?",
    a: "A focused proof of concept can take a few weeks, while a full production system with data pipelines and governance takes longer. We work in stages, so you see value early and can adjust. Nothing goes live before it's validated and integrated.",
  },
  {
    q: "Can Xorora integrate AI into our existing software systems, or does it require a complete rebuild?",
    a: "In most cases we integrate with what you already run rather than rebuilding. We design around your current architecture and data sources, adding AI where it fits. A full rebuild is the exception, not the default.",
  },
  {
    q: "Does Xorora offer AI consulting for businesses that are just starting to explore AI?",
    a: "Yes. Many clients come to us before they've committed to anything. We start with a readiness assessment and use-case discovery, so your first step is grounded in what's feasible and valuable, not guesswork.",
  },
  {
    q: "What does Xorora's delivery process look like from first contact to project completion?",
    a: "We move from studying the problem through data analysis, preparation, modeling, and solution design, then support it after launch. You get transparency at each stage and a team that stays through to production and beyond.",
  },
] as const;

export function MdsFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Common questions about AI/ML services"
      items={[...MDS_FAQS]}
    />
  );
}
