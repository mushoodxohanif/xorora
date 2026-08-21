import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

export function CdnWrongFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="When .NET is the wrong choice"
        sub="We would rather tell you now than three months in."
        className="mb-10 max-w-[640px]"
      />
      <div className="max-w-[760px]">
        <ul className="m-0 flex list-none flex-col gap-6 p-0">
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              An MVP with an unproven idea
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              .NET rewards systems that live for years and taxes ones that might
              not survive the quarter. If you need a market answer in eight
              weeks,{" "}
              <Link
                href={ROUTES.laravelWebsiteDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Laravel website development
              </Link>{" "}
              or{" "}
              <Link
                href={ROUTES.pythonWebDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Python web development
              </Link>{" "}
              will get you there sooner.
            </p>
          </li>
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              Machine learning and data work
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              ML.NET exists. The ecosystem is not close to Python&apos;s and
              pretending otherwise costs you more than the language consistency
              saves. We build the .NET application and put Python underneath it.{" "}
              <Link
                href={ROUTES.pythonWebDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Python web development services
              </Link>
              .
            </p>
          </li>
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              Sustained real-time at very high connection counts
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              SignalR is good and covers most cases well. Past a certain scale,{" "}
              <Link
                href={ROUTES.nodejsWebDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Node.js web development
              </Link>{" "}
              is the more natural fit.
            </p>
          </li>
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              A team with no C# and no plan to hire it
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              The best stack is often the one your people can maintain on a
              Tuesday afternoon without us.
            </p>
          </li>
        </ul>
        <p className="mt-8 mb-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
          We build in eight stacks. The recommendation follows the problem.{" "}
          <Link
            href={ROUTES.engineering}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            See engineering services
          </Link>
          .
        </p>
      </div>
    </LightSection>
  );
}
