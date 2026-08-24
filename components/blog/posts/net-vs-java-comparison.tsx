import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogArticleMeta } from "@/lib/blog/article-types";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const NET_VS_JAVA_SLUG =
  "net-vs-java-comparison-use-cases-pros-and-cons";

export const NET_VS_JAVA_FAQS = [
  {
    q: "What is the difference between .NET and Java?",
    a: ".NET is Microsoft's cross-platform development platform, built primarily around C#, with the deepest integration into the Azure and Microsoft ecosystem. Java is a platform-independent language that runs on the JVM, giving it broader reach across operating systems and devices. The core difference isn't syntax — both are mature, statically typed, object-oriented languages — it's ecosystem: Microsoft-centric versus vendor-neutral.",
  },
  {
    q: "Is C# similar to Java?",
    a: "Yes. Both are statically typed, object-oriented, C-family languages with garbage collection and mature tooling. A developer experienced in one can typically read the other's code with minimal friction. The meaningful differences are in platform and ecosystem, not language design.",
  },
  {
    q: "Which is faster, C# or Java?",
    a: "It depends on the workload. .NET generally performs better on CPU-bound tasks and cold starts thanks to Native AOT compilation. Java tends to hold an edge on high-concurrency I/O workloads thanks to tools like Netty and Project Loom. For most business applications, architecture and implementation quality matter more than the underlying platform's raw benchmark numbers.",
  },
  {
    q: "What are the pros and cons of Java programming?",
    a: "Pros: platform independence, strong security model, proven scalability, mature ecosystem, and excellent backwards compatibility. Cons: more boilerplate code than newer languages, higher memory use in some large deployments, and less convenient desktop UI development compared to .NET.",
  },
  {
    q: "Should I use Java or .NET for a new enterprise project?",
    a: "Use .NET if you're building on Azure, need a single language across your stack, or want strong performance in serverless environments. Use Java if you need provider-agnostic cloud infrastructure, you're targeting Android, or your team already has strong Java depth. Neither is objectively better — the right choice depends on your infrastructure and team.",
  },
  {
    q: "Is it hard to migrate from Java to .NET or .NET to Java?",
    a: 'It\'s rarely a simple port. Most successful migrations use an incremental "strangler fig" approach, building new functionality in the target stack while legacy services keep running, rather than attempting a full rewrite at once. The real driver of migration timeline is the quality of your existing architecture, not the languages involved.',
  },
  {
    q: "Does Xorora build with both .NET and Java?",
    a: "Yes. Xorora's engineering team works across .NET (C#, ASP.NET Core) and Java (Spring-based systems), alongside Python, Node.js, and Laravel, and can advise on platform selection, new builds, or modernizing an existing .NET or Java application.",
  },
] as const;

export const NET_VS_JAVA_META: BlogArticleMeta = {
  slug: NET_VS_JAVA_SLUG,
  seoTitle: ".NET vs Java: Comparison, use cases, pros and cons",
  seoDescription:
    ".NET vs Java compared on performance, cost, use cases, and AI integration. A practical, no-hype guide to help you pick the right stack for your next project.",
  keywords: [
    ".net vs java",
    "what is difference between net and java",
    "net vs java",
    "java vs net",
    "c# vs java speed",
    "is c# similar to java",
    "java vs c# speed",
    "c# vs java performance",
    "java versus .net",
    "dot net vs java",
    "java pros cons",
    "java vs .net",
    "java vs net framework",
  ],
  aiSummary:
    "A practical .NET vs Java comparison covering what each platform is, honest pros and cons, a full comparison table, C# vs Java speed by workload, development cost, when to choose each stack, market share, AI/ML integration, and migration paths. Xorora builds in both ecosystems and recommends based on infrastructure, team skillset, cloud provider, AI roadmap, and maintenance horizon — not a house-stack bias.",
  companies: [".NET", "Java"],
  faqs: [...NET_VS_JAVA_FAQS],
  toc: [
    { id: "what-is-dotnet", label: "What is .NET?" },
    { id: "what-is-java", label: "What is Java?" },
    { id: "comparison-table", label: "Full comparison table" },
    { id: "performance", label: "Performance & speed" },
    { id: "csharp-similar", label: "Is C# similar to Java?" },
    { id: "cost", label: "Development cost" },
    { id: "when-dotnet", label: "When to choose .NET" },
    { id: "when-java", label: "When to choose Java" },
    { id: "market-share", label: "Market share & talent" },
    { id: "ai-ml", label: "AI and machine learning" },
    { id: "migration", label: "Migration paths" },
    { id: "xorora", label: ".NET and Java at Xorora" },
    { id: "decision", label: "Final decision" },
    { id: "faq", label: "FAQ" },
  ],
};

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-accent no-underline hover:text-tangerine-600"
    >
      {children}
    </Link>
  );
}

const bodyClass = "m-0 font-sans text-[16.5px] text-fg2 leading-[1.75]";
const h2Class =
  "mt-12 mb-5 scroll-mt-[110px] font-bold font-sans text-[clamp(24px,3vw,32px)] text-fg1 tracking-[-0.02em]";
const h3Class =
  "mt-8 mb-3 font-sans font-semibold text-[clamp(18px,2vw,22px)] text-fg1";

const COMPARISON_ROWS: { category: string; dotnet: string; java: string }[] = [
  {
    category: "Development speed",
    dotnet:
      "Fast for UI-heavy and desktop apps; strong Windows-first prototyping",
    java: "Fast for backend services with Spring Boot, Maven, Gradle",
  },
  {
    category: "Development cost",
    dotnet: "Often more cost-effective in Microsoft-centric regions",
    java: "Larger global talent pool can lower hiring costs",
  },
  {
    category: "Performance",
    dotnet:
      "Strong on CPU-bound and cold-start workloads with newer AOT compilation",
    java: "Strong on high-concurrency I/O with modern JVM tooling",
  },
  {
    category: "Cross-platform",
    dotnet: "Fully cross-platform; shared C# mobile code via .NET MAUI",
    java: "JVM runs nearly anywhere; broadest device reach",
  },
  {
    category: "Community",
    dotnet: "Growing fast since going open-source; smaller than Java's",
    java: "Larger, more mature; deep library ecosystem",
  },
  {
    category: "Scalability",
    dotnet: "Scales well with Azure, async patterns, containers",
    java: "Proven at extreme scale (banking, telecom, stock exchanges)",
  },
  {
    category: "Cloud compatibility",
    dotnet: "Deepest integration with Azure; also runs on AWS/GCP",
    java: "Cloud-agnostic; equally strong across all major providers",
  },
  {
    category: "Security",
    dotnet: "Enterprise-grade, tightly tied to the Microsoft stack",
    java: "Strong sandboxing and mature encryption libraries",
  },
  {
    category: "Embedded/IoT",
    dotnet: "Works via Windows IoT and .NET nanoFramework",
    java: "Dominant in IoT; runs on constrained, heterogeneous hardware",
  },
  {
    category: "AI/ML integration",
    dotnet: "ML.NET, Semantic Kernel, tight Azure AI integration",
    java: "Deeplearning4j, Weka, strong Python interop via GraalVM",
  },
];

const DOTNET_PROS = [
  "Strong object-oriented structure that encourages modular, maintainable code",
  "True cross-platform support across Windows, macOS, and Linux since the move to .NET Core",
  "Mature tooling, particularly Visual Studio and NuGet, which speeds up development and dependency management",
  "Backed by Microsoft, meaning frequent updates, long-term support commitments, and deep documentation",
  "Strong Azure integration, useful for teams already committed to Microsoft's cloud",
  "Built-in security and memory management that reduces a class of common vulnerabilities",
];

const DOTNET_CONS = [
  "Some legacy pieces (Windows Workflow Foundation, Web Forms, older WCF services) aren't fully carried forward into modern .NET",
  "Frequent framework updates can mean more upkeep to stay current on best practices",
  "Older third-party libraries built for the original .NET Framework aren't always fully compatible with modern .NET",
];

const JAVA_PROS = [
  "Platform independence through the JVM, still one of Java's biggest structural advantages",
  "Strong runtime performance via modern JIT compilation",
  "Mature, disciplined object-oriented design that scales well across large codebases and large teams",
  "Security by design, including no direct pointer access and built-in protections against memory leaks",
  "A massive, decades-old open-source ecosystem (Spring, Hibernate, Apache projects)",
  "Proven at extreme scale in banking, telecom, and e-commerce systems handling millions of concurrent users",
  "Strong backwards compatibility, so upgrades rarely break existing production code",
];

const JAVA_CONS = [
  "More boilerplate code than some newer languages, which can slow initial development",
  "Rich desktop UI work (Swing, JavaFX) tends to be more cumbersome than equivalent .NET/WPF development",
  "Higher memory consumption in some large-scale enterprise deployments",
  "Some workloads run slower than natively compiled languages, particularly without careful JVM tuning",
];

const WHEN_DOTNET = [
  "You're building on Microsoft Azure and want native platform integration",
  "Your organization already runs on Microsoft 365, SharePoint, or Active Directory",
  "You need a single language across backend, frontend (Blazor), and ML (ML.NET)",
  "You're building Windows-native desktop software (financial trading tools, CAD, data visualization)",
  "Cold-start performance matters, such as in serverless functions",
];

const WHEN_JAVA = [
  "You need provider-agnostic cloud infrastructure, not tied to a single vendor",
  "You're building or maintaining systems that need to run reliably for a decade or more without a rewrite",
  "You're building for Android",
  "You run big data pipelines (Hadoop, Spark, Kafka)",
  "Your organization already has deep in-house Java expertise",
];

const DECISION_FACTORS = [
  {
    title: "Existing infrastructure",
    body: "What are you already running on?",
  },
  {
    title: "Team skillset",
    body: "What does your current or available team actually know?",
  },
  {
    title: "Cloud provider",
    body: "Are you Azure-first, or do you need to stay provider-agnostic?",
  },
  {
    title: "AI/ML roadmap",
    body: "Do you need native ML tooling, or are you fine with a polyglot Python layer?",
  },
  {
    title: "Maintenance horizon",
    body: "Are you building something meant to run largely unchanged for a decade, or something you expect to iterate on constantly?",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 list-disc space-y-2.5 pl-5 font-sans text-[16.5px] text-fg2 leading-[1.75]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function NetVsJavaArticle() {
  return (
    <div className="blog-article-body">
      <p className={cn(bodyClass, "mb-5")}>
        If you&apos;re comparing .NET vs Java for an upcoming project,
        you&apos;ve probably already noticed the problem: every guide claims to
        give you a straight answer, and most of them quietly favor whichever
        platform the agency writing the guide happens to specialize in.
        That&apos;s not useful when you&apos;re the one signing off on a
        multi-year technical decision.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        This guide skips the bias. Xorora builds production systems in both .NET
        and Java, alongside Python, Node.js, and Laravel, so this comparison
        isn&apos;t written to steer you toward one &quot;house stack.&quot;
        It&apos;s written to help you answer the actual question underneath net
        vs java: which platform fits your team, your infrastructure, your
        performance requirements, and your five-year maintenance horizon.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        We&apos;ll cover what each platform is, honest pros and cons, a full dot
        net vs java comparison table, real performance differences (including c#
        vs java speed and c# vs java performance), cost, use cases, and where AI
        and machine learning capability now factor into the decision.
      </p>

      <h2 id="what-is-dotnet" className={h2Class}>
        What is .NET?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        .NET is Microsoft&apos;s open-source, cross-platform development
        platform, built primarily around the C# language (with F# and VB.NET
        also supported). Modern .NET unifies what used to be two separate
        things, the legacy .NET Framework and .NET Core, into a single runtime
        that runs on Windows, macOS, and Linux. At its core, the Common Language
        Runtime (CLR) handles memory management, security, and code execution.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        .NET is used to build web applications, desktop software, mobile apps,
        cloud services, games, and IoT solutions, all from a single language and
        toolchain in most cases.
      </p>
      <h3 className={h3Class}>Pros of .NET</h3>
      <BulletList items={DOTNET_PROS} />
      <h3 className={h3Class}>Cons of .NET</h3>
      <BulletList items={DOTNET_CONS} />

      <h2 id="what-is-java" className={h2Class}>
        What is Java?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Java is a class-based, object-oriented language released by Sun
        Microsystems in 1995, built around a &quot;write once, run
        anywhere&quot; philosophy. Code compiles to bytecode that runs on any
        device with a Java Virtual Machine (JVM) installed, which is a large
        part of why Java became the default choice for so much enterprise
        infrastructure.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Java powers enterprise backend systems, Android mobile development, big
        data platforms (Hadoop, Spark), embedded and IoT devices, and
        large-scale web services.
      </p>
      <h3 className={h3Class}>Pros of Java</h3>
      <BulletList items={JAVA_PROS} />
      <h3 className={h3Class}>
        Cons of Java (pros and cons of Java programming)
      </h3>
      <BulletList items={JAVA_CONS} />

      <h2 id="comparison-table" className={h2Class}>
        .NET vs Java: Full Comparison Table
      </h2>
      <div className="mb-10 overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Category
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                .NET
              </th>
              <th className="px-5 py-3.5 font-sans font-semibold text-[13px] text-fg3">
                Java
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, index) => (
              <tr
                key={row.category}
                className={cn(
                  "border-border border-t",
                  index % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <th className="px-5 py-3.5 align-top font-sans font-semibold text-[14.5px] text-fg1">
                  {row.category}
                </th>
                <td className="px-5 py-3.5 align-top font-sans text-[14.5px] text-fg2">
                  {row.dotnet}
                </td>
                <td className="px-5 py-3.5 align-top font-sans text-[14.5px] text-fg2">
                  {row.java}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="performance" className={h2Class}>
        Performance: C# vs Java Speed and .NET vs Java Speed
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        This is where most c# vs java speed debates go wrong: they treat
        performance as one number, when it actually depends heavily on the
        workload.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        For CPU-bound tasks and API throughput, modern .NET&apos;s Ahead-of-Time
        (AOT) compilation removes JIT startup overhead, which tends to produce
        faster cold starts and smaller binaries, particularly valuable in
        serverless environments. Java, through GraalVM&apos;s native image
        compilation, has closed much of this gap but generally still trails in
        raw cold-start numbers.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        For high-concurrency I/O workloads, Java holds a real edge. Tools like
        Netty, combined with Java&apos;s virtual threads (Project Loom), make it
        easier to handle massive concurrent connections without the complexity
        that used to come with traditional thread-per-request models.
        .NET&apos;s async/await model and Kestrel server are strong competitors
        here, but Java&apos;s concurrency tooling is more battle-tested at
        extreme scale.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        On memory footprint, .NET tends to use less by default in lean,
        serverless-style deployments, though the JVM&apos;s overhead is highly
        tunable and often a non-issue once configured properly.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        The honest takeaway on java vs c# speed: for most business applications,
        the difference in raw runtime performance is smaller than the difference
        caused by bad architecture, N+1 database queries, or poor caching
        strategy. Choose based on your workload shape, then optimize.
      </p>

      <h2 id="csharp-similar" className={h2Class}>
        Is C# Similar to Java?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Yes, structurally, more than most languages you&apos;d compare them to.
        Both are statically typed, object-oriented languages with C-family
        syntax, garbage collection, strong standard libraries, and
        enterprise-grade tooling. A developer fluent in one can generally read
        the other&apos;s code without much friction, even before learning the
        language formally.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        The differences that matter in practice are ecosystem and platform, not
        syntax. C# is tied most closely to the Microsoft/.NET runtime and Azure;
        Java runs on the JVM and is platform-agnostic by design. That
        distinction, more than any language-level feature, is usually what
        decides java vs .net for a given project.
      </p>

      <h2 id="cost" className={h2Class}>
        Development Cost: .NET vs Java
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Cost comes down to region and talent availability more than the
        technology itself. In Microsoft-heavy markets like North America, the
        UK, and parts of Eastern Europe, .NET talent can be competitively
        priced, and Azure integration reduces some licensing overhead.
        Java&apos;s larger, more globally distributed talent pool often gives
        buyers more flexibility on hiring and scaling a team quickly.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        Both ecosystems are open-source at their core, so framework licensing
        isn&apos;t a major cost driver either way. The bigger cost variables are
        usually cloud hosting, third-party integrations, and how much custom
        tooling a project needs, not the base language.
      </p>

      <h2 id="when-dotnet" className={h2Class}>
        When to Choose .NET
      </h2>
      <p className={cn(bodyClass, "mb-4")}>.NET is the stronger choice when:</p>
      <BulletList items={WHEN_DOTNET} />

      <h2 id="when-java" className={h2Class}>
        When to Choose Java
      </h2>
      <p className={cn(bodyClass, "mb-4")}>Java is the stronger choice when:</p>
      <BulletList items={WHEN_JAVA} />

      <h2 id="market-share" className={h2Class}>
        Java vs .NET: Market Share and Talent Availability
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Both platforms remain firmly in the top tier of adoption. Independent
        developer surveys consistently place Java among the most widely used
        languages worldwide, with a talent pool built over three decades of
        enterprise use. C# and .NET have grown steadily since .NET went
        open-source, with strong and increasing adoption in cloud-native and
        enterprise development. Neither platform is anywhere close to obsolete,
        and hiring risk is low for either, provided you&apos;re recruiting in a
        market with reasonable depth in that ecosystem.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        The more relevant shift industry-wide isn&apos;t Java versus .NET,
        it&apos;s how much both are now being challenged by Python and
        TypeScript for new greenfield work, particularly anything AI-adjacent.
        For established enterprise backends and existing codebases, though, Java
        and .NET remain the default, safe choices.
      </p>

      <h2 id="ai-ml" className={h2Class}>
        AI and Machine Learning: Which Platform Integrates Better?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        AI/ML capability has become a real selection factor, not an
        afterthought.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        .NET offers ML.NET for native model training and inference directly in
        C#, plus Semantic Kernel for LLM orchestration with tight Azure OpenAI
        integration. Teams building AI-augmented enterprise software on Azure
        get a cohesive, single-ecosystem path.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Java leans heavily on interoperability with Python (via tools like
        GraalVM&apos;s polyglot runtime) plus JVM-native libraries like
        Deeplearning4j. Java&apos;s real strength here is MLOps maturity, it
        plugs cleanly into every major cloud provider&apos;s ML infrastructure,
        not just one.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        In practice, most serious AI/ML workloads today, regardless of whether
        the surrounding application is built in .NET or Java, lean on{" "}
        <TextLink href={ROUTES.mlDataScience}>
          Python for the model layer
        </TextLink>
        , with .NET or Java handling the surrounding application, APIs, and
        business logic. That polyglot pattern is increasingly the norm rather
        than the exception.
      </p>

      <h2 id="migration" className={h2Class}>
        Migration Paths: Moving Between .NET and Java
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Migrating between the two is a re-architecture project, not a simple
        port. The most common direction is Java-to-.NET, usually driven by an
        organization standardizing on Microsoft infrastructure or moving
        aggressively to Azure. The reverse, .NET-to-Java, typically happens
        after an acquisition brings in a Java-heavy engineering team, or when a
        company needs to go provider-agnostic on cloud.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        In both directions, the practical approach is incremental: new services
        get built in the target stack while legacy services keep running until
        they&apos;re safely replaced, sometimes called a &quot;strangler
        fig&quot; pattern. This lets a business keep shipping during the
        transition instead of freezing development for a risky big-bang rewrite.
      </p>

      <h2 id="xorora" className={h2Class}>
        .NET and Java Development at Xorora
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        Xorora builds production applications in both .NET and Java, alongside
        Python, Node.js, and Laravel, which means the platform recommendation
        you get from our team isn&apos;t shaped by which stack we&apos;d rather
        sell you. Our{" "}
        <TextLink href={ROUTES.engineering}>engineering practice</TextLink>{" "}
        covers C# and ASP.NET Core backends, enterprise Java and Spring-based
        systems,{" "}
        <TextLink href={ROUTES.customAppDevelopment}>
          custom application development
        </TextLink>{" "}
        across both ecosystems, and{" "}
        <TextLink href={ROUTES.applicationModernization}>
          modernization work
        </TextLink>{" "}
        for teams migrating a legacy .NET Framework or older Java codebase
        forward without a full rewrite.
      </p>
      <p className={cn(bodyClass, "mb-5")}>
        Because Xorora works across multiple stacks day to day, our engineers
        are used to making the .NET vs Java call based on your actual
        constraints, existing infrastructure, team skillset, cloud provider, and
        long-term maintenance plan, rather than defaulting to one answer. Across
        our broader engineering work, publicly cited results include a 3.5x
        median speed-up compared to building the same system in-house and 99.9%
        uptime across deployed systems.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        If your team is still weighing java versus .net for a specific project,
        the more useful next step usually isn&apos;t more research, it&apos;s a
        scoped architecture review against your actual codebase and
        infrastructure. You can see examples of our{" "}
        <TextLink href={ROUTES.ourWork}>recent engineering work</TextLink> or{" "}
        <TextLink href={ROUTES.home}>get in touch</TextLink> to talk through
        your specific case.
      </p>

      <h2 id="decision" className={h2Class}>
        Final Decision: Which One Should You Choose?
      </h2>
      <p className={cn(bodyClass, "mb-5")}>
        There&apos;s no universal winner in net vs java. Both platforms are
        mature, well-supported, and safe long-term bets. The decision should
        come down to five factors:
      </p>
      <div className="mb-8 flex flex-col gap-4">
        {DECISION_FACTORS.map((item) => (
          <div
            key={item.title}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              {item.title}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>{item.body}</p>
          </div>
        ))}
      </div>
      <p className={cn(bodyClass, "mb-5")}>
        Choose .NET if you&apos;re Azure-committed, want a single language
        across backend and frontend, or need strong cold-start performance for
        serverless workloads.
      </p>
      <p className={cn(bodyClass, "mb-10")}>
        Choose Java if you need provider-agnostic infrastructure, you&apos;re
        building for Android, you run big data pipelines, or your organization
        already has deep Java expertise.
      </p>

      <h2 id="faq" className={h2Class}>
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4">
        {NET_VS_JAVA_FAQS.map((faq, index) => (
          <div
            key={faq.q}
            className="rounded-(--r-lg) border border-border bg-white px-5 py-5"
          >
            <h3 className="m-0 mb-2 font-sans font-semibold text-[17px] text-fg1">
              Q{index + 1}: {faq.q}
            </h3>
            <p className={cn(bodyClass, "text-[15.5px]")}>
              {index === NET_VS_JAVA_FAQS.length - 1 ? (
                <>
                  Yes. Xorora&apos;s engineering team works across .NET (C#,
                  ASP.NET Core) and Java (Spring-based systems), alongside
                  Python, Node.js, and Laravel, and can advise on platform
                  selection, new builds, or{" "}
                  <TextLink href={ROUTES.applicationModernization}>
                    modernizing an existing .NET or Java application
                  </TextLink>
                  .
                </>
              ) : (
                faq.a
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
