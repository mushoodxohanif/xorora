import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";

const FRAMEWORKS = [
  {
    name: "Django",
    body: "When the system has real domain complexity. Admin, ORM, auth, and migrations arrive built in, so budget goes to your business logic instead of rebuilding scaffolding. Our default for platforms with users, roles, and workflows.",
    depthHref: ROUTES.djangoDevelopmentCompany,
    depthLabel: "Django development",
  },
  {
    name: "FastAPI",
    body: "When the system is primarily an API, or when concurrency is the constraint. Async throughout, typed request and response models, and OpenAPI documentation generated from the code itself. Our default for services under load and for anything serving model inference.",
  },
  {
    name: "Flask",
    body: "When the surface is small and the deployment is tight. A focused service doing one job does not need Django's footprint.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Frameworks",
    logos: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Django REST Framework",
    ],
  },
  {
    title: "Async & queues",
    logos: ["Celery", "Redis", "RabbitMQ", "asyncio"],
  },
  {
    title: "Data",
    logos: ["PostgreSQL", "MongoDB", "Elasticsearch", "pandas"],
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
    logos: ["pytest", "mypy", "ruff", "Sentry"],
  },
];

const gridSeo = imageAltTitle({
  primary: "Python web development stack",
  secondary: "Django, FastAPI, Flask, Celery, PostgreSQL",
  context: "Django, FastAPI, Flask, Celery, PostgreSQL",
});

export function PwdStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our Python web development stack"
        sub="We pick the framework for the constraint, not the habit. Any Python web development company can list Django and FastAPI. The useful question is when each one wins."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {FRAMEWORKS.map((item) => (
          <div
            key={item.name}
            className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.name}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
              {"depthHref" in item && item.depthHref ? (
                <>
                  {" "}
                  For specialist depth, see our{" "}
                  <Link
                    href={item.depthHref}
                    className="font-semibold text-accent no-underline hover:text-tangerine-600"
                  >
                    {item.depthLabel}
                  </Link>{" "}
                  page.
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <p className="mb-10 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        Most systems we ship run more than one. A Django core with a FastAPI
        service handling inference or high-throughput endpoints is a common
        shape, and a deliberate one.
      </p>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
