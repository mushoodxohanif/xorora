import Image from "next/image";
import { techStackDisplayIcon } from "@/lib/tech-stack-display-icons";

export type TechStackGroup = {
  title: string;
  logos: string[];
};

type TechStackGridProps = {
  groups: TechStackGroup[];
  title?: string;
};

function StackLogo({ name }: { name: string }) {
  const src = techStackDisplayIcon(name);

  return (
    <span className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/70 bg-slate-50 p-1.5">
      <Image
        src={src}
        alt={`${name} logo`}
        title={name}
        width={24}
        height={24}
        className="h-full w-full object-contain"
        unoptimized
      />
    </span>
  );
}

export function TechStackGrid({ groups, title }: TechStackGridProps) {
  return (
    <div className="flex flex-col gap-8" title={title}>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
            {group.title}
          </h3>
          <ul className="m-0 grid list-none gap-3 p-0 [grid-template-columns:repeat(auto-fill,minmax(min(100%,9.75rem),1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(10.75rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(11.5rem,1fr))]">
            {group.logos.map((name, index) => (
              <li
                key={`${group.title}-${name}-${index}`}
                className="flex min-h-[4.5rem] items-start gap-3 rounded-(--r-md) border border-border bg-white p-3.5 sm:min-h-[4.75rem] sm:gap-3.5 sm:p-4"
              >
                <StackLogo name={name} />
                <span className="min-w-0 flex-1 font-sans font-semibold text-[13px] text-fg1 leading-snug sm:text-[14px]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
