import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

export function JwdWrongFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="When Java is the wrong choice"
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
              Java rewards systems that live for a decade and taxes ones that
              might not survive the quarter. If you need a market answer in eight
              weeks,{" "}
              <Link
                href={ROUTES.djangoDevelopmentCompany}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Django
              </Link>{" "}
              or{" "}
              <Link
                href={ROUTES.laravelWebsiteDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Laravel
              </Link>{" "}
              gets you there sooner.
            </p>
          </li>
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              Cold-start-sensitive serverless
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              JVM startup is real. GraalVM native images help and bring their own
              build and debugging costs. If the workload is short-lived functions,
              another runtime is usually less total work.
            </p>
          </li>
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              Machine learning and data science
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              The libraries live in Python and it is not close. We build the
              Java service and put Python underneath it rather than pretending
              otherwise.{" "}
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
              A small team with no Java experience
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              The best stack is often the one your engineers can maintain on a
              Tuesday without calling us.
            </p>
          </li>
        </ul>
        <p className="mt-8 mb-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
          We build in eight stacks. The recommendation follows the problem.{" "}
          <Link
            href={ROUTES.customDotnetDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            Custom .NET development
          </Link>
          ,{" "}
          <Link
            href={ROUTES.customAppDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            custom app development
          </Link>
          , and{" "}
          <Link
            href={ROUTES.pythonWebDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            Python web development
          </Link>{" "}
          when Java is not the fit.
        </p>
      </div>
    </LightSection>
  );
}
