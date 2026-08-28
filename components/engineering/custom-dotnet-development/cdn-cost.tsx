import { Cloud, FileText, GitBranch, Plug, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";
import { SEO_LANDING_IMAGES } from "@/lib/seo-landing-images";

const FACTORS = [
  {
    icon: GitBranch,
    title: "Which .NET you are starting from",
    body: "Greenfield on modern .NET, a Framework application that migrates cleanly, and one with a hard Windows dependency are three different projects. The assessment comes before the estimate.",
  },
  {
    icon: Plug,
    title: "Integration count and integration quality",
    body: "Eleven well-documented APIs cost less than three undocumented internal systems. Cost sits in discovery, not in the code.",
  },
  {
    icon: ShieldCheck,
    title: "Identity and compliance requirements",
    body: "Federation into customer directories, audit evidence, and access controls that survive a security review are real engineering rather than configuration.",
  },
  {
    icon: FileText,
    title: "Existing test coverage",
    body: "On legacy .NET work this drives more of the cost than the code itself. Changing a system with no tests means writing tests first or accepting risk we would not accept.",
  },
  {
    icon: Cloud,
    title: "Who operates it after launch",
    body: "A system your team runs needs different documentation and tooling than one we maintain.",
  },
] as const;

const photoSeo = imageAltTitle({
  primary: "Custom .NET development cost factors",
  secondary: "Infrastructure that production .NET systems run on",
  context: "production infrastructure",
});

export function CdnCost() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Scoping"
        title="Custom .NET development cost factors"
        sub="We scope from the constraint, not from a price list. Five things move the number on a .NET build."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid items-start gap-[clamp(28px,4vw,48px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border lg:sticky lg:top-24 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={SEO_LANDING_IMAGES.dotnet.cost}
            alt={photoSeo.alt}
            title={photoSeo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[center_20%]"
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
