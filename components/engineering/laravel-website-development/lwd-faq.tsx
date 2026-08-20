import { ServiceFaq } from "@/components/services";

export const LARAVEL_WEB_FAQS = [
  {
    q: "What should I look for in a Laravel website development company?",
    a: "Ask three technical questions. How do they prevent N+1 queries. Where does business logic live relative to Eloquent models. What happens when Laravel ships its next major version. Those answers tell you whether you are hiring people who maintain applications or people who hand them over and leave. Also ask who owns the source and infrastructure after launch.",
  },
  {
    q: "Livewire, Inertia, or a separate frontend?",
    a: "Livewire when you want one team and one codebase, which suits most business applications. Inertia when the interface needs SPA behaviour but you do not need a public API. A separate frontend when something forces it, usually a mobile app. This is the highest-impact decision on a Laravel project and we settle it in the architecture week.",
  },
  {
    q: "Is Laravel suitable for large applications?",
    a: "Yes, and the constraint is discipline rather than the framework. Large Laravel applications fail when business logic ends up inside controllers and models, which makes them impossible to test and expensive to upgrade. Applications that keep domain logic separable stay maintainable at significant scale.",
  },
  {
    q: "Can you upgrade an old Laravel application?",
    a: "Yes. We start with a version and package audit, because upgrade cost usually sits in abandoned third-party packages rather than in Laravel itself. You get the assessment and the sequenced plan whether or not you continue with us.",
  },
  {
    q: "Laravel or Node.js for my project?",
    a: "Laravel when the system is business logic, workflows, roles, and billing, and you want an admin interface early. Node.js when the workload is real-time, connection-heavy, or shares types with a JavaScript frontend. Both are good backends. They are good at different things.",
  },
  {
    q: "How long does a Laravel build take?",
    a: "A focused internal tool runs 2 to 4 months. A SaaS platform with billing and multiple user types runs 5 to 12 months. Discovery gives you a fixed estimate against your actual scope.",
  },
  {
    q: "Which industries do you build Laravel platforms for?",
    a: "SaaS and subscription products, e-commerce and marketplaces, education, real estate, and healthcare. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the code?",
    a: "You do, throughout. Source, infrastructure, and deployment access transfer at handover, and you have repository access from the first sprint.",
  },
] as const;

export function LwdFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Laravel website development FAQs"
      items={[...LARAVEL_WEB_FAQS]}
      defaultOpen={0}
    />
  );
}
