import { ServiceFaq } from "@/components/services";

export const PYTHON_WEB_FAQS = [
  {
    q: "What should I look for in a Python web development company?",
    a: "Ask to see architecture decisions, not just a portfolio. A capable Python web development company can explain why it chose Django over FastAPI on a specific project, how it handles background work, and what its database scaling plan was. Ask who owns the source and infrastructure after launch. Ask what happens when the lead engineer leaves.",
  },
  {
    q: "Django or FastAPI for my project?",
    a: "Django when the system has domain complexity: users, roles, workflows, an admin surface. FastAPI when it is primarily an API, when concurrency is the constraint, or when you are serving model inference. Many systems run both. We confirm this during the architecture week rather than assuming it upfront.",
  },
  {
    q: "How long do Python web development services take to deliver?",
    a: "A focused internal tool runs 2 to 4 months. A production SaaS platform with multiple user types runs 6 to 16 months. Discovery gives you a fixed estimate against your actual scope.",
  },
  {
    q: "Can you take over an existing Python codebase?",
    a: "Yes. We start with a code and architecture review before committing to a plan, because inherited systems usually contain at least one surprise. You get the findings whether or not you continue with us.",
  },
  {
    q: "What makes a top Python web development company different from a cheap one?",
    a: "Test coverage, observability, and whether the architecture survives its second year. Ask any custom Python web development company how it handles background jobs and database scaling. The answer separates them quickly.",
  },
  {
    q: "Which industries do you build Python systems for?",
    a: "Fintech and regtech, B2B SaaS, healthcare, logistics, and retail. Our deepest Python work sits in compliance and multi-tenant SaaS platforms. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the code?",
    a: "You do, throughout. Source, infrastructure, and documentation transfer at handover, and you have repository access from the first sprint.",
  },
] as const;

export function PwdFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Python web development FAQs"
      items={[...PYTHON_WEB_FAQS]}
      defaultOpen={0}
    />
  );
}
