/** Shared data for the AI services page (server + client safe). */

export const DAI_FAQS = [
  {
    q: "How do we know if our organization is ready for AI?",
    a: "Readiness depends on your use cases, workflows, and integration landscape. Most organizations begin with a focused assessment to identify high-value opportunities — agents, automation, RAG, or custom models — and the technical path to production. A clear evaluation reduces risk and accelerates adoption.",
  },
  {
    q: "How long does it take to implement an AI project?",
    a: "It depends on scope and complexity. A focused proof of value typically runs a few weeks, while production rollouts span a few months. We work in short, outcome-based phases so you see value early and decide each next step with evidence rather than guesswork.",
  },
  {
    q: "What is RAG and when should we use it?",
    a: "Retrieval-augmented generation (RAG) grounds LLM responses in your own documents, knowledge bases, and APIs. It is ideal when answers must be accurate, cite sources, and stay within your domain — support, internal search, sales enablement, and compliance-heavy workflows.",
  },
  {
    q: "Will AI solutions integrate with our existing systems?",
    a: "Yes. We build on open standards and connect to your existing stack — cloud platforms, databases, applications, and APIs — so new capabilities extend what you already run instead of replacing it. Interoperability is a design requirement from day one.",
  },
  {
    q: "How do you ensure responsible, secure, and compliant AI deployment?",
    a: "We bake in security, access controls, and governance from day one, with evaluation suites, monitoring, and human oversight. We align with standards such as SOC 2, GDPR, and industry-specific regulations depending on your context, so deployments are trustworthy and auditable.",
  },
] as const;
