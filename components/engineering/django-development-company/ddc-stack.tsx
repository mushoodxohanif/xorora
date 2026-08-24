import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

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

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Framework",
    logos: [
      { name: "Django LTS", src: "/assets/tech-stack/django.svg" },
      { name: "Python 3.12+", src: "/assets/tech-stack/python.svg" },
      { name: "Django REST Framework", abbr: "DR", color: "#A30000" },
      { name: "Django Ninja", abbr: "NJ", color: "#0E7C66" },
      { name: "Wagtail", abbr: "WG", color: "#2E1F5E" },
    ],
  },
  {
    title: "Frontend",
    logos: [
      { name: "Django templates", abbr: "DT", color: "#092E20" },
      { name: "HTMX", abbr: "HX", color: "#3D72D7" },
      { name: "Alpine", abbr: "AL", color: "#77C1D2" },
      { name: "React", src: "/assets/tech-stack/react.svg" },
      { name: "Vue", src: "/assets/tech-stack/vue.svg" },
    ],
  },
  {
    title: "Async",
    logos: [
      { name: "Celery", src: "/assets/tech-stack/celery.svg" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
      { name: "Django Channels", abbr: "CH", color: "#092E20" },
      { name: "ASGI", abbr: "AS", color: "#3776AB" },
    ],
  },
  {
    title: "Data",
    logos: [
      { name: "PostgreSQL", src: "/assets/tech-stack/postgresql.svg" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
      { name: "Elasticsearch", src: "/assets/tech-stack/elasticsearch.svg" },
      { name: "django-storages", abbr: "ST", color: "#092E20" },
    ],
  },
  {
    title: "Infra",
    logos: [
      { name: "Docker", src: "/assets/tech-stack/docker.svg" },
      { name: "Kubernetes", src: "/assets/ml-platforms/kubernetes.svg" },
      { name: "AWS", src: "/assets/tech-stack/aws.svg" },
      { name: "GCP", src: "/assets/tech-stack/google-cloud.svg" },
      { name: "GitHub Actions", src: "/assets/tech-stack/githubactions.svg" },
    ],
  },
  {
    title: "Quality",
    logos: [
      { name: "pytest-django", src: "/assets/tech-stack/pytest.svg" },
      { name: "factory_boy", abbr: "FB", color: "#3776AB" },
      { name: "ruff", abbr: "rf", color: "#D7FF64" },
      { name: "mypy", abbr: "my", color: "#1F425F" },
      { name: "Sentry", src: "/assets/tech-stack/sentry.svg" },
    ],
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
      <div className="flex flex-col gap-8" title={gridSeo.title}>
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.logos.map((logo) => (
                <li
                  key={`${group.title}-${logo.name}`}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-white px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    {"src" in logo ? (
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        title={logo.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                        unoptimized
                      />
                    ) : (
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-[8px] border font-bold font-sans text-[12px]"
                        style={{
                          background: `${logo.color}1A`,
                          borderColor: `${logo.color}40`,
                          color:
                            logo.color === "#D7FF64" ? "#3F4A00" : logo.color,
                        }}
                        title={logo.name}
                      >
                        {logo.abbr}
                      </span>
                    )}
                  </span>
                  <span className="font-sans font-semibold text-[14px] text-fg1 leading-snug">
                    {logo.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
