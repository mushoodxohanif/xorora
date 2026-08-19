import { ServiceFaq } from "@/components/services";

export const NODEJS_WEB_FAQS = [
  {
    q: "What should I look for in a Node js web development company?",
    a: "Ask how they keep the event loop free under load, and how they scale WebSocket connections across more than one server. Those two answers tell you more than a portfolio does. Ask whether they ship TypeScript in strict mode. Ask who owns the source and infrastructure after launch.",
  },
  {
    q: "Express, NestJS, or Fastify?",
    a: "NestJS when the team is more than three engineers or the system has real domain complexity, because structure that is enforced beats structure that is agreed. Express when the surface is small and the team is senior. Fastify when raw throughput is the constraint. We confirm this in the architecture week rather than assuming it at the pitch.",
  },
  {
    q: "Is Node.js good for high-traffic applications?",
    a: "For I/O-heavy workloads, very. Thousands of concurrent connections on modest hardware is normal. The caveat is that one blocking operation degrades every request on that process, so high traffic on Node.js is an engineering discipline rather than a property you get for free.",
  },
  {
    q: "Node.js or Python for my backend?",
    a: "Node.js when the workload is real-time, connection-heavy, or when sharing types with a JavaScript frontend is worth real money. Python when the system involves machine learning, data processing, or needs an admin interface on day one. Plenty of systems run both, and we build them that way when it's the right answer.",
  },
  {
    q: "Can you take over an existing Node.js codebase?",
    a: "Yes. We start with a code and architecture review, with particular attention to blocking operations, untyped boundaries, and unbounded caches, because those are where inherited Node.js systems hide their problems. You get the findings whether or not you continue with us.",
  },
  {
    q: "Do you always use TypeScript?",
    a: "On anything we ship, yes. A JavaScript backend past roughly ten thousand lines cannot be refactored safely, and every hour saved by skipping types is repaid with interest in the second year.",
  },
  {
    q: "Which industries do you build Node.js systems for?",
    a: "Real-time SaaS, fintech, logistics, retail, and healthcare. Our deepest Node.js work sits in event-driven and notification-heavy platforms. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the code?",
    a: "You do, throughout. Source, infrastructure, and documentation transfer at handover, and you have repository access from the first sprint.",
  },
] as const;

export function NwdFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Node.js web development FAQs"
      items={[...NODEJS_WEB_FAQS]}
      defaultOpen={0}
    />
  );
}
