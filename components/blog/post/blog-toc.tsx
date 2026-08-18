"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import type { BlogTocItem } from "@/lib/blog/article-types";
import { cn } from "@/lib/utils";

interface BlogTocProps {
  items: BlogTocItem[];
}

export function BlogToc({ items }: BlogTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [items]);

  const activeLabel =
    items.find((item) => item.id === activeId)?.label ?? "On this page";

  return (
    <>
      <nav aria-label="Table of contents" className="blog-post-toc-desktop">
        <TocList items={items} activeId={activeId} />
      </nav>

      <div className="blog-post-toc-mobile mb-8">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-(--r-md) border border-border bg-surface px-4 py-3 text-left"
          aria-expanded={open}
        >
          <span>
            <span className="mb-1 block font-mono text-[10.5px] text-fg3 uppercase tracking-[0.16em]">
              On this page
            </span>
            <span className="font-sans font-semibold text-[14px] text-fg1">
              {activeLabel}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-fg3 transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
        {open ? (
          <div className="mt-2 rounded-(--r-md) border border-border bg-surface p-3">
            <TocList
              items={items}
              activeId={activeId}
              onPick={() => setOpen(false)}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

function TocList({
  items,
  activeId,
  onPick,
}: {
  items: BlogTocItem[];
  activeId: string;
  onPick?: () => void;
}) {
  return (
    <div>
      <div className="mb-3 font-mono text-[11px] text-fg3 uppercase tracking-[0.16em]">
        Table of contents
      </div>
      <ol className="m-0 flex list-none flex-col gap-0.5 p-0">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onPick}
                className={cn(
                  "block rounded-(--r-sm) px-2.5 py-1.5 font-sans text-[13.5px] leading-snug no-underline transition-colors duration-150",
                  active
                    ? "bg-indigo-50 font-semibold text-xo-indigo"
                    : "text-fg2 hover:bg-slate-50 hover:text-fg1",
                )}
                aria-current={active ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
