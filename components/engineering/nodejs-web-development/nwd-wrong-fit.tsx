import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const FITS = [
  {
    title: "CPU-bound work",
    body: "Image processing, video transcoding, and heavy computation block the event loop and take the whole process down with them. Worker threads help. A different runtime helps more. Go or Rust.",
  },
  {
    title: "Machine learning and data science",
    body: "The libraries live in Python and they are not close to being matched. We build the Node.js API and put Python underneath it rather than pretending otherwise.",
    href: ROUTES.pythonWebDevelopment,
    hrefLabel: "Python web development services",
  },
  {
    title: "Systems that need an admin out of the box",
    body: "Node.js has no equivalent to Django's admin. If your operations team needs a working interface over the data model on day one, Django saves months.",
    href: ROUTES.pythonWebDevelopment,
    hrefLabel: "Python web development",
  },
  {
    title: "Native mobile",
    body: "Node.js builds the backend the app talks to, not the app. Flutter, Swift, or Kotlin.",
    href: ROUTES.customAppDevelopment,
    hrefLabel: "Custom app development",
  },
] as const;

export function NwdWrongFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="When Node.js is the wrong choice"
        sub="We would rather tell you now than three months in."
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
