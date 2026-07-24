import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Technical assessments",
    body: "Every candidate completes online assessments aligned to their specific technical skills, plus English and critical thinking exams.",
  },
  {
    n: "02",
    name: "Interview for communication and collaboration",
    body: "We test how candidates explain, question, and work with others, because embedded engineers live or die on this.",
  },
  {
    n: "03",
    name: "Technical interviews by senior SMEs",
    body: "Senior specialists in the candidate's own domain run the deep technical assessment.",
  },
  {
    n: "04",
    name: "AI-powered team recommendation",
    body: "We match vetted engineers to your stack, domain, and team context, rather than assigning whoever's free.",
  },
] as const;

export function SaProcess() {
  return (
    <div id="vetting">
      <StepApproach
        label="Our vetting process"
        title="How we put top performers on every team"
        sub="Our multi-stage vetting is built to find engineers who perform at a high level, not just interview well."
        steps={[...STEPS]}
        gradientId="sa-approach"
      />
    </div>
  );
}
