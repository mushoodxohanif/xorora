import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

const FRAMEWORKS = [
  {
    name: "Django",
    body: "When the system has real domain complexity. Admin, ORM, auth, and migrations arrive built in, so budget goes to your business logic instead of rebuilding scaffolding. Our default for platforms with users, roles, and workflows.",
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

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Frameworks",
    logos: [
      { name: "Python", src: "/assets/tech-stack/python.svg" },
      { name: "Django", src: "/assets/tech-stack/django.svg" },
      { name: "FastAPI", src: "/assets/tech-stack/fastapi.svg" },
      { name: "Flask", src: "/assets/tech-stack/flask.svg" },
      { name: "Django REST Framework", abbr: "DR", color: "#A30000" },
    ],
  },
  {
    title: "Async & queues",
    logos: [
      { name: "Celery", src: "/assets/tech-stack/celery.svg" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
      { name: "RabbitMQ", src: "/assets/tech-stack/rabbitmq.svg" },
      { name: "asyncio", abbr: "as", color: "#3776AB" },
    ],
  },
  {
    title: "Data",
    logos: [
      { name: "PostgreSQL", src: "/assets/tech-stack/postgresql.svg" },
      { name: "MongoDB", src: "/assets/tech-stack/mongodb.svg" },
      { name: "Elasticsearch", src: "/assets/tech-stack/elasticsearch.svg" },
      { name: "pandas", src: "/assets/tech-stack/pandas.svg" },
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
      { name: "pytest", src: "/assets/tech-stack/pytest.svg" },
      { name: "mypy", abbr: "my", color: "#1F425F" },
      { name: "ruff", abbr: "rf", color: "#D7FF64" },
      { name: "Sentry", src: "/assets/tech-stack/sentry.svg" },
    ],
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
            </p>
          </div>
        ))}
      </div>
      <p className="mb-10 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        Most systems we ship run more than one. A Django core with a FastAPI
        service handling inference or high-throughput endpoints is a common
        shape, and a deliberate one.
      </p>
      <div className="flex flex-col gap-8" title={gridSeo.title}>
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.logos.map((logo) => (
                <li
                  key={logo.name}
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
                          color: logo.color === "#D7FF64" ? "#3F4A00" : logo.color,
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
