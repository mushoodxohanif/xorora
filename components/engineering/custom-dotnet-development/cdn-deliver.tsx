import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Business applications and platforms",
    body: "ASP.NET Core systems with real domain logic underneath. Roles, approval workflows, audit trails, and reporting. Blazor where a rich interface belongs in C# alongside the backend, or a separate frontend where the team shape calls for it.",
  },
  {
    icon: "plug",
    name: "Enterprise APIs and integration",
    body: "Services that connect systems nobody wants to touch. ERPs, payment infrastructure, identity providers, and internal platforms with undocumented behaviour. Typed contracts, versioning, and integration tests against real payload shapes rather than optimistic mocks.",
  },
  {
    icon: "refresh-cw",
    name: ".NET Framework to modern .NET migration",
    body: "Framework 4.8 applications running on Windows-only infrastructure, cut off from every performance and tooling improvement since 2019. We assess what actually blocks the move, sequence it so the system stays shippable throughout, and stop the migration becoming a rewrite.",
    href: ROUTES.applicationModernization,
  },
  {
    icon: "cloud",
    name: "Cloud migration and Azure",
    body: "Lift-and-shift where that is genuinely the right answer, and re-platforming where it is not. App Service, Functions, Service Bus, and managed SQL. We tell you which of your workloads should not move.",
    href: ROUTES.devops,
  },
  {
    icon: "file-code-2",
    name: "Desktop and line-of-business modernization",
    body: "WinForms and WPF applications your operations still depend on. We can extend them, put an API in front of them, or move them to web or MAUI. Which of those is correct depends on who uses the system and how often.",
  },
  {
    icon: "layers",
    name: "Monolith decomposition",
    body: "Large .NET codebases where every change is expensive. We map the seams before proposing any split, because most systems described as needing microservices need a boundary and a test suite instead.",
  },
];

export function CdnDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Custom .NET development services"
        sub=".NET is chosen for systems that have to last. Long-lived business applications, regulated environments, and integrations with infrastructure that predates the project. Our custom .NET development services are shaped around that: correctness, maintainability, and an upgrade path that stays open."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
