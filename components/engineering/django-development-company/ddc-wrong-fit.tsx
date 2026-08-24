import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const FITS = [
  {
    title: "A pure API with no admin and no ORM needs",
    body: "If you are serving model inference or building a high-throughput service with no relational domain behind it, Django's batteries are weight you carry for nothing. FastAPI.",
  },
  {
    title: "A single small service",
    body: "One endpoint doing one job does not need Django's project structure. Flask or FastAPI, deployed in an afternoon.",
  },
  {
    title: "Sustained real-time at high connection counts",
    body: "Django Channels handles moderate broadcasting well. Tens of thousands of persistent connections is a different problem, and Node.js is the more natural fit.",
    href: ROUTES.nodejsWebDevelopment,
    hrefLabel: "Node.js web development",
  },
  {
    title: "A team that will not maintain Python",
    body: "The best framework is the one your engineers can work in without us.",
  },
] as const;

export function DdcWrongFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="When Django is the wrong choice"
        sub="We would rather tell you now than three months in. Note that all four of these stay inside Python."
        className="mb-10 max-w-[640px]"
      />
      <div className="max-w-[760px]">
        <ul className="m-0 flex list-none flex-col gap-6 p-0">
          {FITS.map((item) => (
            <li key={item.title}>
              <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
                {item.body}
                {"href" in item && item.href ? (
                  <>
                    {" "}
                    <Link
                      href={item.href}
                      className="font-semibold text-accent no-underline hover:text-tangerine-600"
                    >
                      {item.hrefLabel}
                    </Link>
                    .
                  </>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 mb-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
          If you are still deciding between Python frameworks rather than
          committed to Django, our{" "}
          <Link
            href={ROUTES.pythonWebDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            Python web development services
          </Link>{" "}
          page covers that choice properly.
        </p>
      </div>
    </LightSection>
  );
}
