import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "bot",
    name: "AI agents",
    body: "Autonomous agents that work around the clock, handling real workflows instead of scripted demos.",
  },
  {
    icon: "database-zap",
    name: "RAG development",
    body: "AI-powered knowledge retrieval that grounds answers in your own content, not a model's guesswork.",
  },
  {
    icon: "sigma",
    name: "NLP development",
    body: "Natural language processing that turns unstructured text into something your systems can act on.",
  },
  {
    icon: "cpu",
    name: "Computer vision",
    body: "Image and video solutions that read what's happening and feed decisions downstream.",
  },
  {
    icon: "brain-circuit",
    name: "Generative AI",
    body: "Custom LLM solutions shaped to your domain, your data, and the way your teams actually work.",
  },
  {
    icon: "refresh-cw",
    name: "LLM fine-tuning",
    body: "We tailor models to your data, so output matches your domain instead of a generic baseline.",
  },
  {
    icon: "bar-chart-3",
    name: "LLM evaluation",
    body: "We test and optimize for the model that fits your use case, on cost, latency, and quality.",
  },
  {
    icon: "workflow",
    name: "MLOps",
    body: "We deploy and scale AI in production, with the monitoring and pipelines to keep it reliable.",
  },
] as const;

export function AsdDeliver() {
  return (
    <ServiceCardGrid
      label="What we build"
      title="Our artificial intelligence development capabilities"
      sub="Eight capabilities that take AI from idea to something running in production."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
      showLearnMore={true}
    />
  );
}
