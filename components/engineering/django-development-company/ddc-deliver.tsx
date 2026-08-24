import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Django platform development",
    body: "Applications with real domain complexity underneath. Permissions and object-level access, approval workflows, audit trails, and reporting. The systems where business rules matter more than the interface, which is where Django has always been strongest.",
  },
  {
    icon: "plug",
    name: "API development with DRF and Django Ninja",
    body: "Serializers, viewsets, and permission classes that stay readable past thirty endpoints. Django Ninja where async and Pydantic schemas suit the workload better than DRF's class hierarchy. Versioning that doesn't break clients you already have.",
  },
  {
    icon: "shield-check",
    name: "Django admin and internal operations tooling",
    body: "Used correctly, the admin gives your operations team a working interface in days. Used incorrectly, it becomes a customer-facing product with no design system and no tests. We know where that line sits and we tell you before you cross it.",
  },
  {
    icon: "layers",
    name: "Content platforms with Wagtail",
    body: "Editorial workflows, structured page models, and previews that editors actually use. Where content is the product rather than a section of it, Wagtail is the right layer on top of Django.",
    href: ROUTES.cmsDevelopment,
  },
  {
    icon: "refresh-cw",
    name: "Django upgrades and legacy modernization",
    body: "Django 2.x and 3.x applications, unsupported Python versions, and dependency trees where half the packages are abandoned. We sequence the upgrade so the system stays shippable throughout, and you get the assessment whether or not you continue with us.",
    href: ROUTES.applicationModernization,
  },
  {
    icon: "gauge",
    name: "Performance work on existing Django applications",
    body: "Slow Django is almost always the ORM, and almost always invisible in development. We profile against production-shaped data, fix the query patterns, and leave you with the tooling to catch the next one.",
  },
];

export function DdcDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Django development services"
        sub="Django's reputation is speed to first release, and it earns it. The harder problem is year three, when the models have grown, the migrations are risky, and every view knows too much. Our Django development services are built around the second problem, because the first one mostly solves itself."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
