import { ArrowRight, Check, Users } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { V2Eyebrow, V2Light } from "./v2-shared";

const MODEL = {
  icon: Users,
  name: "Staff Augmentation",
  tagline: "Senior engineers embedded in your team.",
  body: "When you own the roadmap and need capacity or specialized skills, we embed vetted engineers into your team and process. They ramp fast, work in your stack, and report to you.",
  points: [
    "Vetted senior engineers",
    "Embed in your process",
    "Scale capacity up or down",
  ],
  best: "Best for in-house teams needing capacity or niche expertise.",
  href: ROUTES.staffAugmentation,
} as const;

export function V2Engagement() {
  return (
    <V2Light bg="var(--surface)">
      <div className="mb-[clamp(40px,5vw,56px)] max-w-[720px]">
        <V2Eyebrow>Staff augmentation</V2Eyebrow>
        <h2 className="mb-4 text-balance font-extrabold font-sans text-[clamp(28px,4.2vw,52px)] text-fg1 leading-tight tracking-tight">
          Scale your team with senior engineers
          <span className="text-tangerine-500">.</span>
        </h2>
        <p className="m-0 font-sans text-[clamp(15px,1.6vw,18px)] text-fg2 leading-relaxed">
          Embed vetted talent into your process — same senior pool, same
          delivery standards, without the hiring overhead.
        </p>
      </div>
      <div className="max-w-[420px]">
        <ModelCard {...MODEL} />
      </div>
    </V2Light>
  );
}

function ModelCard({
  icon: Icon,
  name,
  tagline,
  body,
  points,
  best,
  href,
}: typeof MODEL) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[var(--r-lg)] p-[clamp(26px,2.8vw,34px)] transition-all duration-220 ease-in-out",
        "hover:-translate-y-1 border border-border bg-slate-50 hover:border-border-strong hover:shadow-md",
      )}
    >
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[var(--r-md)] bg-indigo-50 text-xo-indigo">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
        </div>
        <h3 className="mb-1.5 font-bold font-sans text-[23px] text-fg1 tracking-tight">
          {name}
        </h3>
        <div className="mb-3.5 font-sans font-semibold text-[14.5px] text-xo-indigo">
          {tagline}
        </div>
        <p className="mb-5 font-sans text-[14.5px] text-fg2 leading-relaxed">
          {body}
        </p>
        <div className="mb-[22px] flex flex-col gap-[11px]">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-[11px]">
              <Check
                className="h-[17px] w-[17px] shrink-0 text-xo-indigo"
                aria-hidden
              />
              <span className="font-sans text-[14.5px] text-fg1">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto border-t border-border pt-5">
          <p className="mb-4 font-sans text-[13px] text-fg3 leading-snug">
            {best}
          </p>
          <Link
            href={href}
            className="inline-flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 font-sans font-semibold text-accent text-sm"
          >
            Learn about staff augmentation
            <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
