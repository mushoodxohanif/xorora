import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Python web application development",
    body: "Django platforms with real business logic underneath. Permissions, workflows, audit trails, and admin tooling your operations team can actually use. We build the boring parts properly, because those are the parts that break at scale.",
  },
  {
    icon: "plug",
    name: "Python API development and integration",
    body: "FastAPI and Django REST Framework. Typed contracts, generated documentation, and versioning that doesn't break the clients you already have. Where you connect to payment providers, CRMs, or internal systems, we handle auth, rate limits, and retry behavior as part of the build rather than as an afterthought.",
  },
  {
    icon: "database-zap",
    name: "Data-heavy platforms and dashboards",
    body: "Reporting systems where query volume is the hard part. We design the pipeline and the interface together, so the numbers on screen match the numbers in the warehouse. Aggregation strategy gets decided before the first chart, not after the first timeout.",
  },
  {
    icon: "layers",
    name: "Multi-tenant SaaS platforms",
    body: "Role-based portals on a shared backend. One system, separate data boundaries, no logic duplicated per customer type. Adding a new role later becomes configuration rather than a new application.",
  },
  {
    icon: "bot",
    name: "AI features in production web products",
    body: "Retrieval, inference, and model orchestration wired into an application people already use. This is where Python earns its place over every alternative, and it is the work we do most.",
    href: ROUTES.aiSoftwareDevelopment,
  },
  {
    icon: "refresh-cw",
    name: "Python migration and modernization",
    body: "Legacy Django upgrades, Python 2 estates, and rewrites of systems that outgrew their original architecture. We map the risk before touching anything, and you get that assessment whether or not you continue with us.",
    href: ROUTES.applicationModernization,
  },
];

export function PwdDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Custom Python web development services"
        sub="Most teams come to us with a system that works and won't grow. Traffic doubled, queries slowed, and the codebase now resists every change. Our Python web development services start at that problem, not at a template. As a custom Python web development company, we scope every one of these to the system you have, not to a package."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
