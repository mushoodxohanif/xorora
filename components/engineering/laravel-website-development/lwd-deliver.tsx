import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Web application development",
    body: "Business platforms with real domain logic underneath. Roles, permissions, approval workflows, audit trails, and reporting. The kind of system where the rules matter more than the interface, which is where Laravel is strongest.",
  },
  {
    icon: "layers",
    name: "SaaS platforms with subscription billing",
    body: "Laravel Cashier handles subscriptions, plan changes, proration, trials, invoices, and failed payment recovery against Stripe or Paddle. Billing is where most SaaS builds lose a quarter, and on this stack it is largely solved before you start.",
  },
  {
    icon: "workflow",
    name: "E-commerce and marketplaces",
    body: "Multi-vendor platforms, custom checkout flows, inventory, and payouts. Where an off-the-shelf storefront cannot express your commercial model, custom Laravel web development gets you the flexibility without starting from an empty directory.",
  },
  {
    icon: "plug",
    name: "API development and headless backends",
    body: "Sanctum or Passport for auth, API resources for typed responses, and versioning that doesn't break the clients you already have. Laravel serving a mobile app, a separate frontend, or both.",
  },
  {
    icon: "gauge",
    name: "Admin panels and internal tools",
    body: "Filament gives you a working operations interface over your data model in days rather than months. Most agencies bill you to build this by hand. We would rather spend that budget on the part of your system nobody else has.",
  },
  {
    icon: "refresh-cw",
    name: "Laravel upgrades and legacy migration",
    body: "Laravel 5.x and 6.x estates, unsupported PHP versions, and applications that stopped receiving security patches years ago. We map the risk and sequence the upgrade before touching anything, and you get that assessment whether or not you continue with us.",
    href: ROUTES.applicationModernization,
  },
];

export function LwdDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Custom Laravel web development"
        sub="Laravel's advantage is not syntax. It is that auth, billing, queues, notifications, file storage, and admin tooling already exist and are maintained by someone else. A team that uses them ships in months. A team that rebuilds them ships in a year. Our Laravel website development services are built around using what's already there and writing custom code only where your business actually differs."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
