import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Define the architecture",
    body: "We set the vision for your application and technology alongside business capabilities, aligning value to your objectives and results.",
  },
  {
    n: "02",
    name: "Plan your journey",
    body: "We assess the application portfolio, develop the renewal business case, rationalize it, and define the target architecture.",
  },
  {
    n: "03",
    name: "Transform processes",
    body: "We boost efficiency and security with Agile and Dev(Sec)Ops coaching and specialized tools and processes.",
  },
  {
    n: "04",
    name: "Modernize apps your way",
    body: "We deliver planned modernizations by progressive or scaled pathways, supported by proven accelerators and methods.",
  },
  {
    n: "05",
    name: "Modernize the mainframe",
    body: "We accelerate mainframe optimization using Agile/Dev(Sec)Ops, containerization, and automated code conversion.",
  },
] as const;

export function AmsProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we help"
        title="How we help"
        sub="A clear path from architecture vision to modernized processes, matched to how much change your business can absorb at once."
        steps={[...STEPS]}
        gradientId="ams-approach"
      />
    </div>
  );
}
