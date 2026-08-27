import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const FITS = [
  {
    title: "One platform, and you already have that team",
    body: "If you're iOS-only with iOS engineers, Flutter adds a language and a build system for a cross-platform benefit you aren't using. Swift.",
  },
  {
    title: "Deep, evolving platform SDK work",
    body: "ARKit, advanced camera pipelines, and anything relying on APIs the day they're announced. Plugin coverage lags, and waiting on it is worse than writing native.",
  },
  {
    title: "Games",
    body: "Flutter is a UI framework. Unity or Godot.",
  },
  {
    title: "Hard app-size limits",
    body: "Flutter carries a baseline of several megabytes before your code. Where you're targeting low-end devices or markets with expensive data, that overhead matters.",
  },
] as const;

export function FmdWrongFit() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="When Flutter is the wrong choice"
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
              </p>
            </li>
          ))}
          <li>
            <h3 className="mb-1.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              A public marketing site
            </h3>
            <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
              Flutter can compile to web. It should not be your SEO surface,
              because the rendering model works against exactly the crawling and
              indexing you&apos;d want. That&apos;s a job for{" "}
              <Link
                href={ROUTES.pythonWebDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Python web development
              </Link>{" "}
              or{" "}
              <Link
                href={ROUTES.laravelWebsiteDevelopment}
                className="font-semibold text-accent no-underline hover:text-tangerine-600"
              >
                Laravel website development
              </Link>
              .
            </p>
          </li>
        </ul>
        <p className="mt-8 mb-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
          We build in eight stacks. The recommendation follows the problem. See{" "}
          <Link
            href={ROUTES.customAppDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            custom app development
          </Link>
          ,{" "}
          <Link
            href={ROUTES.pythonWebDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            Python web development
          </Link>
          , and{" "}
          <Link
            href={ROUTES.laravelWebsiteDevelopment}
            className="font-semibold text-accent no-underline hover:text-tangerine-600"
          >
            Laravel website development
          </Link>{" "}
          when Flutter is not the fit.
        </p>
      </div>
    </LightSection>
  );
}
