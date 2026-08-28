import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Spring Boot application development",
    body: "Web applications and services with real domain logic underneath. Spring Security for auth and authorization, Spring Data for the persistence layer, and a module structure that keeps business rules separable from the framework holding them.",
  },
  {
    icon: "plug",
    name: "Enterprise APIs and integration",
    body: "Services connecting systems nobody wants to touch. Core banking platforms, payment rails, ERPs, and internal systems with behaviour documented only in the code. Typed contracts, versioning, and integration tests run against real containers rather than mocks that agree with you.",
  },
  {
    icon: "refresh-cw",
    name: "Java version and Jakarta EE migration",
    body: "Java 8 and 11 applications, and the javax to jakarta namespace break that blocks every Spring Boot 3 upgrade. This is the most common reason Java systems stall, and the cost sits almost entirely in third-party dependencies rather than in your own code.",
    href: ROUTES.applicationModernization,
  },
  {
    icon: "layers",
    name: "Event-driven systems with Kafka",
    body: "Kafka is a Java-native technology and the integration is first-class. Event sourcing, stream processing, and services that scale independently, with consumer semantics designed rather than assumed.",
    href: ROUTES.mlDataScience,
  },
  {
    icon: "layers",
    name: "Monolith decomposition",
    body: "Large Java codebases where every release is a negotiation. We map the seams before proposing any split, because most systems described as needing microservices need module boundaries and a test suite first.",
  },
  {
    icon: "database-zap",
    name: "Performance and JVM tuning",
    body: "Heap sizing that respects container limits, garbage collector selection matched to the workload, and profiling against production-shaped load. Slow Java is usually the database or the GC, and the two need telling apart before anything gets rewritten.",
  },
];

export function JwdDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Java web application development services"
        sub="Java is chosen for systems where being wrong is expensive and being slow to change is survivable. Core banking, claims processing, order management, and the integrations holding them together. Our Java web development services are shaped around that trade: correctness first, and a codebase that can still be modified by people who did not write it."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
