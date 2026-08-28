import { Cloud, FileText, GitBranch, Plug, Zap } from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const FACTORS = [
  {
    icon: GitBranch,
    title: "Which Java you're starting from",
    body: "Greenfield on a current LTS, a Java 11 application that migrates cleanly, and a Java 8 application with a jakarta-blocking dependency are three different projects. The dependency audit comes before the estimate.",
  },
  {
    icon: FileText,
    title: "Existing test coverage",
    body: "On legacy Java work this drives more cost than the code does. Changing a system with no tests means writing tests first or accepting risk we would not accept on your behalf.",
  },
  {
    icon: Plug,
    title: "Integration count and integration quality",
    body: "Eleven documented APIs cost less than three internal systems whose behaviour lives only in the code that calls them.",
  },
  {
    icon: Zap,
    title: "Whether the architecture is reactive",
    body: "WebFlux codebases take longer to change and longer to onboard onto. If a move back to virtual threads is on the table, that is its own scoped piece of work with its own return.",
  },
  {
    icon: Cloud,
    title: "Who operates it after launch",
    body: "A system your team runs needs different documentation, tooling, and observability than one we maintain.",
  },
] as const;

const photoSeo = imageAltTitle({
  primary: "Java web development cost factors",
  secondary: "Production JVM infrastructure and server operations",
  context: "production infrastructure",
});

export function JwdCost() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Scoping"
        title="Java web development cost factors"
        sub="We scope from the constraint, not from a price list. Five things move the number on a Java build."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid items-start gap-[clamp(28px,4vw,48px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border lg:sticky lg:top-24 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
            alt={photoSeo.alt}
            title={photoSeo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <div className="grid gap-[18px] sm:grid-cols-2">
          {FACTORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-fg1 leading-snug">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-8 mb-0 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        Discovery produces a fixed estimate. You see the number before you
        commit to the build.
      </p>
    </LightSection>
  );
}
