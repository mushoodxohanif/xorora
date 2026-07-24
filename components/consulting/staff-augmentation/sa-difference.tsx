import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const COLUMNS = [
  "Xorora staff augmentation",
  "Typical outsourcing vendor",
  "Onshore hire in US",
] as const;

const ROWS: {
  label: string;
  values: [string, string, string];
}[] = [
  {
    label: "Talent seniority",
    values: [
      "Senior engineers vetted to your stack",
      "Junior-heavy, variable",
      "Senior-level",
    ],
  },
  {
    label: "Collaboration speed",
    values: [
      "Daily overlap with your working hours, real-time collaboration",
      "Overnight handoffs",
      "Real-time collaboration",
    ],
  },
  {
    label: "Integration",
    values: [
      "Embedded in your tools, repos, and sprint cadence",
      "Separate reporting layer",
      "Fully internal",
    ],
  },
  {
    label: "Vetted experience",
    values: [
      "Multi-stage technical and communication vetting",
      "Varies by vendor",
      "Your own hiring process",
    ],
  },
  {
    label: "Time to start",
    values: ["2 weeks", "Weeks to months", "Three to six months"],
  },
  {
    label: "Cost",
    values: [
      "Meaningfully below equivalent US hires",
      "Low rates with hidden costs",
      "Highest cost",
    ],
  },
];

export function SaDifference() {
  return (
    <LightSection
      bg="var(--surface)"
      className="pt-[clamp(72px,9vw,118px)] pb-[clamp(48px,6vw,72px)]"
    >
      <SectionHead
        label="Staff augmentation vs. other options"
        title="Our model wins on quality, cost, and collaboration"
        className="mb-12 max-w-[720px]"
      />

      {/* Desktop table */}
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
                <th className="px-5 py-4 font-sans font-semibold text-[14px] text-fg1 align-top">
                  {row.label}
                </th>
                {row.values.map((value, colIndex) => (
                  <td
                    key={`${row.label}-${colIndex}`}
                    className={cn(
                      "px-5 py-4 font-sans text-[14px] leading-relaxed align-top",
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

      {/* Mobile stacked cards */}
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
