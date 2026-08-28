import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

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

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Language & runtime",
    logos: [
      { name: "Java LTS", src: "/assets/tech-stack/java.svg" },
      { name: "Kotlin", src: "/assets/tech-stack/kotlin.svg" },
      { name: "Spring Boot", src: "/assets/tech-stack/spring.svg" },
      { name: "Jakarta EE", abbr: "JAK", color: "#E76F00" },
    ],
  },
  {
    title: "Data",
    logos: [
      { name: "PostgreSQL", src: "/assets/tech-stack/postgresql.svg" },
      { name: "Oracle", abbr: "OR", color: "#F80000" },
      { name: "Hibernate", abbr: "HI", color: "#59666C" },
      { name: "Spring Data", abbr: "SD", color: "#6DB33F" },
      { name: "Flyway", abbr: "FW", color: "#CC0200" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
    ],
  },
  {
    title: "Messaging",
    logos: [
      { name: "Kafka", abbr: "KA", color: "#231F20" },
      { name: "RabbitMQ", src: "/assets/tech-stack/rabbitmq.svg" },
      { name: "Spring Cloud Stream", abbr: "SC", color: "#6DB33F" },
    ],
  },
  {
    title: "Build & infra",
    logos: [
      { name: "Maven", abbr: "MV", color: "#C71A36" },
      { name: "Gradle", abbr: "GR", color: "#02303A" },
      { name: "Docker", src: "/assets/tech-stack/docker.svg" },
      { name: "Kubernetes", abbr: "K8", color: "#326CE5" },
      { name: "GitHub Actions", src: "/assets/tech-stack/githubactions.svg" },
    ],
  },
  {
    title: "Quality",
    logos: [
      { name: "JUnit 5", abbr: "J5", color: "#25A162" },
      { name: "Testcontainers", abbr: "TC", color: "#291A3E" },
      { name: "ArchUnit", abbr: "AU", color: "#0066CC" },
      { name: "Micrometer", abbr: "MC", color: "#0066CC" },
      { name: "OpenTelemetry", abbr: "OT", color: "#F5A800" },
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
                        className="flex h-8 w-8 items-center justify-center rounded-[8px] border font-bold font-sans text-[11px]"
                        style={{
                          background: `${logo.color}1A`,
                          borderColor: `${logo.color}40`,
                          color: logo.color,
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
