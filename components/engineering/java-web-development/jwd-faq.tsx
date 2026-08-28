import { ServiceFaq } from "@/components/services";

export const JAVA_WEB_DEV_FAQS = [
  {
    q: "What should I look for in a Java web development company?",
    a: "Ask where they stand on virtual threads versus reactive and make them defend it, because that answer reveals whether they track the platform or repeat what was true in 2019. Ask how they handle Hibernate's session boundary. Ask how they would sequence a jakarta migration so the system stays shippable. Also ask who owns the source and infrastructure after launch.",
  },
  {
    q: "Should we migrate off Java 8 or 11?",
    a: "Almost always yes, and the question is sequencing rather than whether. The blocker is rarely your own code. It is third-party dependencies that never made the javax to jakarta namespace change, and Spring Boot 3 requires it. We audit the dependency tree first, because that audit tells you whether this is a three-week job or a three-month one.",
  },
  {
    q: "Virtual threads or reactive programming?",
    a: "Virtual threads for most systems. Reactive was widely adopted to handle concurrency without a thread per request, and virtual threads solved that problem more simply. Reactive still earns its place for streaming and genuine backpressure requirements. For a typical REST API it now adds difficulty without a matching return, and moving back is often worth scoping on its own.",
  },
  {
    q: "Spring Boot or Quarkus?",
    a: "Spring Boot for most work: mature, documented, and the ecosystem your next engineer already knows. Quarkus or Micronaut where startup time is a genuine constraint, which usually means serverless or aggressive autoscaling. Native images bring real build and debugging costs, so we recommend them when something forces it rather than by default.",
  },
  {
    q: "Can you work with our existing Java codebase?",
    a: "Yes. We start with a version, dependency, and test coverage assessment, because inherited Java systems hide their problems in abandoned libraries and untested paths. You get the findings and a sequenced plan whether or not you continue with us.",
  },
  {
    q: "How long does Java web application development take?",
    a: "A focused internal application runs 3 to 5 months. An enterprise platform with multiple integrations runs 6 to 14 months. A version migration depends almost entirely on dependency health and test coverage, which is why we assess before estimating.",
  },
  {
    q: "Our Java application has got slow. Can you fix it?",
    a: "Usually. Slow Java is normally the database or the garbage collector, and the two need telling apart before anything is rewritten. We profile under production-shaped load, separate query problems from memory problems, and leave you with the metrics to catch the next one before your users do.",
  },
  {
    q: "Which industries do you build Java systems for?",
    a: "Banking and payments, insurance, telecom, retail at scale, and logistics. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the code?",
    a: "You do, throughout. Source, infrastructure, and pipeline access transfer at handover, and you have repository access from the first sprint.",
  },
] as const;

export function JwdFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Java web development FAQs"
      items={[...JAVA_WEB_DEV_FAQS]}
      defaultOpen={0}
    />
  );
}
