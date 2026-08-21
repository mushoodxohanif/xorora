import { ServiceFaq } from "@/components/services";

export const CUSTOM_DOTNET_FAQS = [
  {
    q: "What should I look for in a custom .NET development company?",
    a: "Ask how they decide how much architecture a system needs, because over-engineering is the characteristic failure of this stack. Ask where they terminate EF Core queries. Ask how they would sequence a Framework migration so the system stays shippable throughout. Also ask who owns the source and infrastructure after launch.",
  },
  {
    q: "Should we migrate from .NET Framework to modern .NET?",
    a: "Almost always yes, and the question is sequencing rather than whether. Framework 4.8 is in maintenance, Windows-only, and cut off from every performance improvement since 2019. The real cost is rarely the framework itself. It is the third-party packages that were abandoned along the way and the code with no test coverage. We assess both before quoting.",
  },
  {
    q: "How long does custom .NET software development take?",
    a: "A focused internal application runs 3 to 5 months. An enterprise platform with identity federation and multiple integrations runs 6 to 14 months. A Framework migration depends almost entirely on test coverage and dependency health, which is why we assess before estimating.",
  },
  {
    q: "Blazor or a JavaScript frontend?",
    a: "Blazor when one team should own the full stack in C# and the interface is primarily business functionality. A JavaScript frontend when you need a large front-end talent pool, a rich public-facing experience, or you already have a React or Vue team. Both are legitimate. We settle it in the architecture week.",
  },
  {
    q: "Can you work with our existing .NET codebase?",
    a: "Yes. We start with a runtime, dependency, and test coverage assessment, because inherited .NET systems usually hide their problems in abandoned packages and untested paths. You get the findings and a sequenced plan whether or not you continue with us.",
  },
  {
    q: "Is .NET still tied to Windows?",
    a: "No. Modern .NET runs on Linux and in containers, and most systems we deploy do. Only .NET Framework 4.8 carries the Windows requirement, which is one of the stronger reasons to move off it.",
  },
  {
    q: "Which industries do you build .NET systems for?",
    a: "Financial services and insurance, healthcare, manufacturing and supply chain, public sector, and enterprise B2B platforms. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the code?",
    a: "You do, throughout. Source, infrastructure, and pipeline access transfer at handover, and you have repository access from the first sprint.",
  },
] as const;

export function CdnFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Custom .NET development FAQs"
      items={[...CUSTOM_DOTNET_FAQS]}
      defaultOpen={0}
    />
  );
}
