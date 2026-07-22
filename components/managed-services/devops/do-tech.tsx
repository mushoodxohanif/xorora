import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const TOOLS = [
  "Datadog",
  "Kubernetes",
  "Ansible",
  "Azure",
  "Chef",
  "Amazon CloudWatch",
  "Grafana",
  "Jenkins",
  "JFrog",
  "Nagios",
  "New Relic",
  "Prometheus",
  "Puppet",
  "Splunk",
  "Terraform",
  "Maven",
  "PM2",
] as const;

export function DoTech() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Tools and technologies"
        sub="The platforms and tooling we use to automate pipelines, observe systems, and keep delivery reliable."
        className="mb-12 max-w-[720px]"
      />
      <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
        {TOOLS.map((name) => (
          <li
            key={name}
            className="flex items-center rounded-(--r-md) border border-border bg-surface px-5 py-3 shadow-xs"
          >
            <span className="whitespace-nowrap font-sans font-semibold text-[15px] text-fg1">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </LightSection>
  );
}
