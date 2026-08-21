import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

const PATTERNS = [
  {
    href: ROUTES.applicationModernization,
    tag: "Migration",
    title: "Framework to modern .NET, still shippable",
    body: "Version and dependency audits first. Abandoned packages usually drive more cost than the framework itself. You keep the assessment either way.",
  },
  {
    href: ROUTES.customAppDevelopment,
    tag: "Enterprise APIs",
    title: "Integrations with typed contracts",
    body: "ERPs, identity providers, and internal platforms with undocumented behaviour. Real payload shapes in tests, not optimistic mocks.",
  },
  {
    href: ROUTES.devops,
    tag: "Azure",
    title: "Cloud moves with an honest scope",
    body: "Lift-and-shift where it fits, re-platforming where it does not. We tell you which workloads should stay put.",
  },
] as const;

export function CdnPortfolio() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="How we ship"
        title="Our .NET development portfolio"
        sub="The pattern we use on .NET platforms: settle the runtime fork early, keep domain logic separable from the framework, and leave the upgrade path open."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,40px)]">
          <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
            Framework migrations
          </p>
          <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,28px)] text-fg1 leading-snug">
            Sequence the move. Do not rewrite by accident.
          </h3>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Enterprise buyers searching these keywords are usually afraid of a
            Framework migration going wrong. The obvious approach — freeze
            features, rebuild everything, cut over in one weekend — is how
            migrations become rewrites.
          </p>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            We assess what actually blocks the move, sequence packages and
            Windows-only dependencies so the system stays shippable throughout,
            and put a number on staying versus migrating before anyone commits.
          </p>
          <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Domain logic stays out of the framework shell, so next year&apos;s
            LTS upgrade is a planned effort rather than a quarter-long freeze.
          </p>
        </article>
        <article className="flex flex-col justify-between rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,36px)]">
          <div>
            <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
              Abstraction discipline
            </p>
            <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,26px)] text-fg1 leading-snug">
              Structure when a boundary is real.
            </h3>
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              Clean Architecture and CQRS are good tools and a bad default. We
              add layers when we can explain why each one exists. If we cannot,
              it comes out.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.ourWork}
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              See our work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "secondary", size: "lg" })}
            >
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
          </div>
        </article>
      </div>
      <div className="svc-grid3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATTERNS.map((item) => (
          <Link
            key={item.href + item.title}
            href={item.href}
            className="group hover:-translate-y-1 overflow-hidden rounded-(--r-xl) border border-border bg-white no-underline shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-md"
          >
            <div className="p-[clamp(22px,2.4vw,28px)]">
              <p className="mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.12em]">
                {item.tag}
              </p>
              <h3 className="mb-2 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 mb-4 font-sans text-[14px] text-fg2 leading-relaxed">
                {item.body}
              </p>
              <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-accent">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </LightSection>
  );
}
