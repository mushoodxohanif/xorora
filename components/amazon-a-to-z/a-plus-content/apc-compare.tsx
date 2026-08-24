import { Check, X } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const ROWS = [
  {
    feature: "Availability",
    aPlus: "All brand-registered vendors",
    aPlusPlus: "Invite-only",
  },
  {
    feature: "Text and images",
    aPlus: true,
    aPlusPlus: true,
  },
  {
    feature: "Image size",
    aPlus: "970 × 300",
    aPlusPlus: "1464 × 600",
  },
  {
    feature: "Comparison table",
    aPlus: true,
    aPlusPlus: true,
  },
  {
    feature: "Allowable modules on PDP",
    aPlus: "5",
    aPlusPlus: "7",
  },
  {
    feature: "Video and hotspot",
    aPlus: true,
    aPlusPlus: true,
  },
  {
    feature: "Navigation carousel",
    aPlus: false,
    aPlusPlus: true,
  },
] as const;

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-success" aria-label="Yes" />
    ) : (
      <X className="mx-auto h-5 w-5 text-fg3" aria-label="No" />
    );
  }
  return (
    <span className="font-sans text-[14.5px] text-fg2 leading-snug">{value}</span>
  );
}

export function ApcCompare() {
  return (
    <LightSection>
      <SectionHead
        title="Amazon A+ vs. A++ Content comparison guide"
        className="ind-reveal mb-10 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <div className="ind-reveal overflow-x-auto rounded-(--r-xl) border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="px-5 py-4 font-sans font-semibold text-[14px]">
                Type
              </th>
              <th className="px-5 py-4 font-sans font-semibold text-[14px]">
                A+
              </th>
              <th className="px-5 py-4 font-sans font-semibold text-[14px]">
                A++
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, index) => (
              <tr
                key={row.feature}
                className={index % 2 === 0 ? "bg-surface" : "bg-slate-50"}
              >
                <th
                  scope="row"
                  className="px-5 py-4 font-sans font-semibold text-[14.5px] text-fg1"
                >
                  {row.feature}
                </th>
                <td className="px-5 py-4 text-center sm:text-left">
                  <Cell value={row.aPlus} />
                </td>
                <td className="px-5 py-4 text-center sm:text-left">
                  <Cell value={row.aPlusPlus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LightSection>
  );
}
