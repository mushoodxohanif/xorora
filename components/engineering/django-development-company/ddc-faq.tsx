import { ServiceFaq } from "@/components/services";

export const DJANGO_DEV_FAQS = [
  {
    q: "What should I look for in a Django development company?",
    a: "Ask three questions. How do they write migrations that survive a rolling deploy. Where does business logic go once models get large. How far do they push the Django admin before it becomes a liability. Those answers tell you whether you are hiring people who maintain Django systems or people who hand them over and move on. Also ask who owns the source and infrastructure after launch.",
  },
  {
    q: "DRF or Django Ninja?",
    a: "DRF when the API is large, your team already knows it, or you need its third-party ecosystem. Ninja when you want async views, Pydantic schemas, and less ceremony per endpoint, which suits API-first systems and inference endpoints well. We settle it in the architecture week rather than assuming it at the pitch.",
  },
  {
    q: "Do we need a React frontend, or can Django templates work?",
    a: "Django templates with HTMX cover far more than most teams expect, including live updates and partial page changes, without a second codebase or a second team. A separate frontend earns its cost when there is a mobile client or the interface is genuinely complex. This is the highest-impact decision on most Django projects.",
  },
  {
    q: "Can you upgrade an old Django application?",
    a: "Yes. We start with a version and dependency audit, because upgrade cost usually sits in abandoned packages rather than in Django itself. You get the sequenced plan whether or not you continue with us.",
  },
  {
    q: "Our Django app has got slow. Can you fix it?",
    a: "Usually, and it is usually the ORM. Missing select_related inside loops, querysets evaluated in templates, and wide tables fetched in full account for most of what we find. We profile against production-shaped data, fix the patterns, and leave you with query budgets in the test suite so the next one gets caught before release.",
  },
  {
    q: "Is Django suitable for large applications?",
    a: "Yes, and the constraint is discipline rather than the framework. Large Django applications fail when logic accumulates in models and views until nothing can be tested in isolation. Systems that keep orchestration in a service layer stay maintainable at significant scale.",
  },
  {
    q: "Which industries do you build Django platforms for?",
    a: "Content and publishing, education, healthcare, marketplaces, and data platforms. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the code?",
    a: "You do, throughout. Source, infrastructure, and documentation transfer at handover, and you have repository access from the first sprint.",
  },
] as const;

export function DdcFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Django development FAQs"
      items={[...DJANGO_DEV_FAQS]}
      defaultOpen={0}
    />
  );
}
