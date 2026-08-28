import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";

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

const GROUPS: TechStackGroup[] = [
  {
    title: "Framework",
    logos: [".NET 10 LTS", "C#", "ASP.NET Core", "Blazor", "MAUI"],
  },
  {
    title: "Data",
    logos: [
      "SQL Server",
      "PostgreSQL",
      "EF Core",
      "Dapper",
      "Redis",
    ],
  },
  {
    title: "Messaging",
    logos: [
      "Azure Service Bus",
      "RabbitMQ",
      "MassTransit",
      "SignalR",
    ],
  },
  {
    title: "Identity",
    logos: ["Entra ID", "IdentityServer", "OAuth", "OpenID Connect"],
  },
  {
    title: "Infra",
    logos: [
      "Azure",
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "GitHub Actions",
    ],
  },
  {
    title: "Quality",
    logos: ["xUnit", "Testcontainers", "Roslyn analyzers", "OpenTelemetry"],
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
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
