import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const FITS = [
  {
    title: "Hard real-time constraints",
    body: "If your system needs guaranteed sub-millisecond response, Python's runtime is the wrong tool. Go or Rust.",
  },
  {
    title: "Native mobile",
    body: "Python does not build iOS or Android apps. It builds the backend they talk to. For the app itself, Flutter, Swift, or Kotlin.",
    href: ROUTES.customAppDevelopment,
    hrefLabel: "Custom app development",
  },
  {
    title: "CPU-bound number crunching at scale",
    body: "Python coordinates this work well and performs it slowly. If the compute itself is the product and it cannot be pushed into optimized libraries, use a compiled language.",
  },
  {
    title: "A brochure site",
    body: "With no application logic, a Python web stack is cost you do not need.",
  },
] as const;

export function PwdWrongFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="When Python is the wrong choice"
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
