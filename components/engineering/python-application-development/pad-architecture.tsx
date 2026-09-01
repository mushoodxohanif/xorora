import { Bot, Code2, Database, Workflow } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";

const FITS = [
  {
    icon: Code2,
    title: "One language across the stack",
    body: "A team doesn't need to switch languages between building a REST API, automating a data pipeline, and prototyping a machine learning model. That consistency reduces hiring complexity and keeps a smaller team productive.",
  },
  {
    icon: Database,
    title: "Data through the application layer",
    body: "Web applications, internal tools, and reporting systems where Python's data ecosystem integrates directly into the product — not as a separate analytics warehouse nobody maintains.",
  },
  {
    icon: Bot,
    title: "AI capability in the same codebase",
    body: "Projects that need to move data, logic, and increasingly AI capability cleanly through one coherent stack rather than stitching together several languages for different layers.",
    href: ROUTES.mlDataScience,
    hrefLabel: "ML and data science services",
  },
  {
    icon: Workflow,
    title: "Connective layer, not a silo",
    body: "Python sits as a connective layer between application code and AI/ML work rather than treating them as separate disciplines — which is how we structure our engineering practice.",
    href: ROUTES.engineering,
    hrefLabel: "engineering practice",
  },
] as const;

export function PadArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="What it is"
        title="What is Python application development?"
        sub="Python application development is the process of building software, web applications, backend systems, automation tools, or data-driven products using Python as the core programming language."
        className="mb-12 max-w-[760px]"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {FITS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-(--r-lg) border border-border bg-white p-[clamp(20px,2.2vw,26px)]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-[22px] w-[22px]" aria-hidden />
              </span>
              <h3 className="mb-2 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[14px] text-fg2 leading-relaxed">
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
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
