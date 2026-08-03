import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const COLUMNS = ["Xorora", "Typical agency"] as const;

const ROWS: {
  label: string;
  values: [string, string];
}[] = [
  {
    label: "Strategy",
    values: [
      "Research-driven roadmaps with clear KPIs and testing plans",
      "Tactics-first, with unclear goals and measurement",
    ],
  },
  {
    label: "Creative",
    values: [
      "On-brand copy, graphics, and video tailored by platform",
      "One-size-fits-all creative assets",
    ],
  },
  {
    label: "Paid social",
    values: [
      "Full-funnel builds, advanced targeting, and budget pacing",
      "Basic boosts with minimal structure",
    ],
  },
  {
    label: "Influencer marketing",
    values: [
      "Vetted creators, FTC-compliant briefs, tracked deliverables",
      "Ad hoc outreach without clear ROI",
    ],
  },
  {
    label: "SEO synergy",
    values: [
      "Social amplifies link earning, branded search, and SERP coverage",
      "Social and SEO run in silos",
    ],
  },
  {
    label: "Reporting",
    values: [
      "Monthly insights tied to leads, revenue, and next steps",
      "Vanity metrics without business context",
    ],
  },
  {
    label: "Support",
    values: [
      "Dedicated strategists with fast response",
      "Slow response and unclear ownership",
    ],
  },
];

export function SmmDifference() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Why Xorora"
        title="Why choose Xorora as your social media agency"
        sub="A partner that blends creative excellence with rigorous performance management, and integrates social with your broader customer journey."
        className="mb-12 max-w-[720px]"
      />

      <div className="max-md:hidden overflow-hidden rounded-(--r-xl) border border-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-navy-900">
              <th className="w-[22%] px-5 py-4 font-sans font-semibold text-[13px] text-white/55">
                Criterion
              </th>
              {COLUMNS.map((col, i) => (
                <th
                  key={col}
                  className={cn(
                    "px-5 py-4 font-sans font-semibold text-[14.5px] leading-snug",
                    i === 0 ? "text-tangerine-400" : "text-white",
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={cn(
                  "border-border border-t",
                  rowIndex % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <th className="px-5 py-4 align-top font-sans font-semibold text-[14px] text-fg1">
                  {row.label}
                </th>
                {row.values.map((value, colIndex) => (
                  <td
                    key={`${row.label}-${colIndex}`}
                    className={cn(
                      "px-5 py-4 align-top font-sans text-[14px] leading-relaxed",
                      colIndex === 0
                        ? "font-semibold text-fg1"
                        : "text-fg2",
                    )}
                  >
                    {colIndex === 0 ? (
                      <span className="inline-flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-500"
                          aria-hidden
                        />
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {ROWS.map((row) => (
          <div
            key={row.label}
            className="overflow-hidden rounded-(--r-lg) border border-border bg-slate-50"
          >
            <div className="border-border border-b bg-navy-900 px-4 py-3 font-sans font-semibold text-[14px] text-white">
              {row.label}
            </div>
            <ul className="m-0 list-none divide-y divide-border p-0">
              {COLUMNS.map((col, i) => (
                <li key={col} className="px-4 py-3.5">
                  <div
                    className={cn(
                      "mb-1 font-sans font-semibold text-[12.5px]",
                      i === 0 ? "text-tangerine-600" : "text-fg3",
                    )}
                  >
                    {col}
                  </div>
                  <p
                    className={cn(
                      "m-0 font-sans text-[14px] leading-relaxed",
                      i === 0 ? "font-semibold text-fg1" : "text-fg2",
                    )}
                  >
                    {row.values[i]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
