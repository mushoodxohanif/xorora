import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

const BOUNDARIES = [
  {
    name: "Modern .NET (LTS — .NET 10)",
    body: "For anything new and anything being migrated. Cross-platform, materially faster, and still receiving investment. This is the default we recommend unless a hard dependency blocks the move.",
  },
  {
    name: ".NET Framework 4.8",
    body: "Only where a hard dependency genuinely blocks the move. It is in maintenance and it is Windows-only. Staying is a decision with a cost, and we will put a number on it rather than leave it implicit.",
  },
  {
    name: "ASP.NET Core & Blazor",
    body: "ASP.NET Core for web applications and APIs — Minimal APIs where the surface is small, MVC or Razor Pages where it is not. Blazor when a rich interface belongs in C# next to the domain model.",
  },
] as const;

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Framework",
    logos: [
      { name: ".NET 10 LTS", src: "/assets/tech-stack/dotnet.svg" },
      { name: "C#", src: "/assets/tech-stack/csharp.svg" },
      { name: "ASP.NET Core", abbr: "ASP", color: "#512BD4" },
      { name: "Blazor", abbr: "BL", color: "#512BD4" },
      { name: "MAUI", abbr: "MA", color: "#512BD4" },
    ],
  },
  {
    title: "Data",
    logos: [
      { name: "SQL Server", src: "/assets/tech-stack/sql.svg" },
      { name: "PostgreSQL", src: "/assets/tech-stack/postgresql.svg" },
      { name: "EF Core", abbr: "EF", color: "#512BD4" },
      { name: "Dapper", abbr: "DP", color: "#D2691E" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
    ],
  },
  {
    title: "Messaging",
    logos: [
      { name: "Azure Service Bus", abbr: "SB", color: "#0078D4" },
      { name: "RabbitMQ", src: "/assets/tech-stack/rabbitmq.svg" },
      { name: "MassTransit", abbr: "MT", color: "#E85D04" },
      { name: "SignalR", abbr: "SR", color: "#512BD4" },
    ],
  },
  {
    title: "Identity",
    logos: [
      { name: "Entra ID", abbr: "EN", color: "#0078D4" },
      { name: "IdentityServer", abbr: "IS", color: "#F05033" },
      { name: "OAuth", abbr: "OA", color: "#000000" },
      { name: "OpenID Connect", abbr: "OI", color: "#F78C40" },
    ],
  },
  {
    title: "Infra",
    logos: [
      { name: "Azure", src: "/assets/tech-stack/azure.svg" },
      { name: "Docker", src: "/assets/tech-stack/docker.svg" },
      { name: "Kubernetes", abbr: "K8", color: "#326CE5" },
      { name: "Azure DevOps", abbr: "AO", color: "#0078D4" },
      { name: "GitHub Actions", src: "/assets/tech-stack/githubactions.svg" },
    ],
  },
  {
    title: "Quality",
    logos: [
      { name: "xUnit", abbr: "XU", color: "#25A9E0" },
      { name: "Testcontainers", abbr: "TC", color: "#291A3E" },
      { name: "Roslyn analyzers", abbr: "RA", color: "#68217A" },
      { name: "OpenTelemetry", abbr: "OT", color: "#F5A800" },
    ],
  },
];

const gridSeo = imageAltTitle({
  primary: ".NET stack",
  secondary: "ASP.NET Core, Blazor, EF Core, Azure Service Bus, SQL Server",
  context: "ASP.NET Core, Blazor, EF Core, Azure Service Bus, SQL Server",
});

export function CdnStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our .NET development stack"
        sub="We pick for the constraint, not the habit. The first question on any .NET engagement is which .NET you are actually on, because the answer changes everything downstream."
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
        Entity Framework Core for most data access, with Dapper where a query
        needs hand control. Server-side Blazor for internal applications,
        WebAssembly where the client needs to work without a live connection.
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
