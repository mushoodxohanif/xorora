import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "activity",
    name: "Real-time applications",
    body: "Live dashboards, collaborative tools, notification systems, and presence. WebSockets with reconnection, backpressure, and horizontal scaling handled properly, so the system survives more than one server. This is the work Node.js is genuinely better at than any alternative.",
  },
  {
    icon: "plug",
    name: "API and backend development",
    body: "REST and GraphQL services on Express, NestJS, or Fastify. Typed contracts end to end, generated documentation, and versioning that doesn't break the clients you already have. Rate limiting, auth, and retry behaviour are part of the build rather than a later ticket.",
  },
  {
    icon: "file-code-2",
    name: "Full-stack TypeScript applications",
    body: "One type definition shared between the API and the frontend that consumes it. A breaking change surfaces at compile time instead of in production. This is the strongest practical argument for Node.js as a backend, and most teams never set it up.",
  },
  {
    icon: "workflow",
    name: "Event-driven and microservice backends",
    body: "Message queues, event streams, and services that scale independently. BullMQ or a broker where the workload justifies it, with idempotent handlers so a retry cannot corrupt state.",
  },
  {
    icon: "cloud",
    name: "Serverless and edge deployment",
    body: "Node.js is the default runtime on Lambda, Vercel, and Cloudflare Workers. We build for cold starts, execution limits, and connection pooling from the beginning, because retrofitting a serverless system is close to a rewrite.",
    href: ROUTES.devops,
  },
  {
    icon: "refresh-cw",
    name: "Migration and modernization",
    body: "JavaScript to TypeScript, Express to NestJS, or a legacy backend moved onto Node.js. We map the risk before touching anything, and you get the assessment whether or not you continue with us.",
    href: ROUTES.applicationModernization,
  },
];

export function NwdDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Node.js web application development services"
        sub="Node.js gets chosen for the wrong reason more often than any other backend. Teams pick it because the frontend is already JavaScript, then discover that the event loop has rules and nobody wrote them down. Our Node.js web development services start with the concurrency model, because that is the thing that decides whether the system holds. Every one of these gets scoped to the system you have, not to a package."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
