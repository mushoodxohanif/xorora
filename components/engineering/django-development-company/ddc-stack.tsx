import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    name: "DRF or Django Ninja",
    body: "DRF when the API is large, the team is familiar with it, and you need the ecosystem of third-party packages built around it. Ninja when you want async views, Pydantic schemas, and less ceremony per endpoint. Ninja is the better new-project default for API-first systems. DRF is the safer answer for teams already fluent in it.",
  },
  {
    name: "HTMX or a separate frontend",
    body: "Django templates with HTMX give you interactive interfaces without a second codebase, a second language, or a second team. This is the highest-leverage decision on most Django projects and it is usually made by default rather than deliberately. A separate React or Vue frontend when there is a mobile client too, or when the interface genuinely warrants it.",
  },
  {
    name: "Celery and Postgres",
    body: "Celery for anything outside the request. Redis as broker for most workloads, with idempotent tasks and monitoring from the first release rather than after the first silent failure. Postgres, effectively always — Django's Postgres-specific features are worth more than database portability you will never use.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Framework",
    logos: [
      "Django LTS",
      "Python 3.12+",
      "Django REST Framework",
      "Django Ninja",
      "Wagtail",
    ],
  },
  {
    title: "Frontend",
    logos: ["Django templates", "HTMX", "Alpine", "React", "Vue"],
  },
  {
    title: "Async",
    logos: ["Celery", "Redis", "Django Channels", "ASGI"],
  },
  {
    title: "Data",
    logos: [
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "django-storages",
    ],
  },
  {
    title: "Infra",
    logos: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "GitHub Actions",
    ],
  },
  {
    title: "Quality",
    logos: ["pytest-django", "factory_boy", "ruff", "mypy", "Sentry"],
  },
];

const gridSeo = imageAltTitle({
  primary: "Django stack",
  secondary: "DRF, Django Ninja, Celery, HTMX, Wagtail, PostgreSQL",
  context: "DRF, Django Ninja, Celery, HTMX, Wagtail, PostgreSQL",
});

export function DdcStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our Django development stack"
        sub="You've chosen Django, so the useful questions are the ones inside it."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {DECISIONS.map((item) => (
          <div
            key={item.name}
            className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.name}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
