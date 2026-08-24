"use client";

import { useState } from "react";
import type { CaseStudyCategory, CaseStudyListItem } from "@/lib/case-studies/types";
import { cn } from "@/lib/utils";
import { WorkTile } from "./work-tile";

type WorkFilter = "all" | CaseStudyCategory;

const FILTERS: Array<{ id: WorkFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "development", label: "Development" },
  { id: "amazon", label: "Amazon" },
];

interface WorkTilesProps {
  studies: CaseStudyListItem[];
}

export function WorkTiles({ studies }: WorkTilesProps) {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const visible =
    filter === "all"
      ? studies
      : studies.filter((study) => study.category === filter);

  return (
    <section
      id="work-tiles"
      className="scroll-mt-24 bg-surface px-8 py-[clamp(64px,8vw,104px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="sticky top-[72px] z-20 -mx-2 mb-10 bg-surface/90 px-2 py-3 backdrop-blur-md">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter case studies"
          >
            {FILTERS.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "rounded-[var(--r-md)] border px-4 py-2 font-sans text-[14px] font-medium transition-colors",
                    active
                      ? "border-xo-indigo bg-xo-indigo text-white"
                      : "border-border bg-white text-fg2 hover:border-border-strong hover:text-fg1",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-[var(--r-lg)] border border-border bg-slate-50 px-8 py-16 text-center">
            <p className="m-0 font-sans text-[16px] text-fg2">
              No case studies in this category yet.
            </p>
          </div>
        ) : (
          <div className="work-tiles-grid grid gap-7">
            {visible.map((study) => (
              <WorkTile key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
