import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";

const BOUNDARIES = [
  {
    name: "Java 25 LTS",
    body: "Current LTS for anything new and anything migrating. Cross-platform, materially faster virtual threads, and still receiving investment. This is the default we recommend unless a hard dependency blocks the move.",
  },
  {
    name: "Java 8 and 11",
    body: "Only where a dependency genuinely blocks the move. Both are well past the point where staying is a neutral decision, and we will put a number on the cost of staying rather than leave it implicit.",
  },
  {
    name: "Spring Boot by default",
    body: "Spring Boot for the large majority of work — mature, extensively documented, and the ecosystem a new engineer already knows. Quarkus or Micronaut where startup time is a real constraint.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Language & runtime",
    logos: ["Java LTS", "Kotlin", "Spring Boot", "Jakarta EE"],
  },
  {
    title: "Data",
    logos: [
      "PostgreSQL",
      "Oracle",
      "Hibernate",
      "Spring Data",
      "Flyway",
      "Redis",
    ],
  },
  {
    title: "Messaging",
    logos: ["Kafka", "RabbitMQ", "Spring Cloud Stream"],
  },
  {
    title: "Build & infra",
    logos: [
      "Maven",
      "Gradle",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    title: "Quality",
    logos: [
      "JUnit 5",
      "Testcontainers",
      "ArchUnit",
      "Micrometer",
      "OpenTelemetry",
    ],
  },
];

const gridSeo = imageAltTitle({
  primary: "Java stack",
  secondary: "Spring Boot, Hibernate, Kafka, PostgreSQL, Testcontainers",
  context: "Spring Boot, Hibernate, Kafka, PostgreSQL, Testcontainers",
});

export function JwdStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our Java web development stack"
        sub="The first question on any Java engagement is which Java you're on, because it determines what's available and what's blocked."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {BOUNDARIES.map((item) => (
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
        Hibernate through Spring Data for most persistence, with JOOQ or plain
        JDBC where a query needs hand control. Quarkus or Micronaut where
        startup time is a real constraint — serverless deployment and aggressive
        autoscaling are the cases where a GraalVM native image earns its build
        complexity. Most systems do not need it, and we will say so.
      </p>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
