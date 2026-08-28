"use client";

import Image from "next/image";
import { useState } from "react";
import { techStackDisplayIcon } from "@/lib/tech-stack-display-icons";

export type TechStackGroup = {
  title: string;
  logos: string[];
};

type TechStackGridProps = {
  groups: TechStackGroup[];
  title?: string;
};

const FALLBACK_ICON = "/assets/tech-stack/api.svg";

function StackLogo({ name }: { name: string }) {
  const initialSrc = techStackDisplayIcon(name);
  const [src, setSrc] = useState(initialSrc);
  const external = src.startsWith("http");

  const logo = external ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      title={name}
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== FALLBACK_ICON) setSrc(FALLBACK_ICON);
      }}
    />
  ) : (
    <Image
      src={src}
      alt={`${name} logo`}
      title={name}
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
      unoptimized
      onError={() => {
        if (src !== FALLBACK_ICON) setSrc(FALLBACK_ICON);
      }}
    />
  );

  return (
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
      {logo}
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
          <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {group.logos.map((name, index) => (
              <li
                key={`${group.title}-${name}-${index}`}
                className="flex min-h-[72px] items-center gap-3.5 rounded-(--r-md) border border-border bg-white px-5 py-4"
              >
                <StackLogo name={name} />
                <span className="min-w-0 flex-1 font-sans font-semibold text-[14px] text-fg1 leading-snug sm:text-[14.5px]">
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
