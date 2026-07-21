import { ServiceFaq } from "@/components/services";

export const DW_FAQS = [
  {
    q: "What is a software discovery workshop?",
    a: "It's a structured working session where we define your goals, scope, requirements, and risks before development starts. The output is a costed, validated plan and roadmap you can build against. It exists to remove guesswork before you commit budget.",
  },
  {
    q: "How long does a discovery workshop take?",
    a: "Most run from a few days to a couple of weeks, depending on the size and complexity of your product. We scope the length with you up front so there are no surprises. Smaller MVPs move faster than platform builds.",
  },
  {
    q: "Who should be involved from your side?",
    a: "The people who own the outcome and the details: usually a founder or product lead plus anyone close to the users or operations. Fewer, well-chosen participants keep decisions sharp. We'll advise on the right group once we know the project.",
  },
  {
    q: "What outcomes can we expect from a discovery workshop?",
    a: "You leave with defined requirements, design specifications, a technical roadmap, and a cost and timeline estimate. In short, a plan detailed enough to start building or to take to stakeholders for sign-off.",
  },
  {
    q: "Can a discovery workshop be run remotely?",
    a: "Yes. We run sessions remotely, in person, or as a mix, using collaborative tools to keep everyone aligned. Remote sessions work well for distributed teams and lose none of the rigor.",
  },
  {
    q: "What does a discovery workshop cost?",
    a: "It depends on the scope and length, so we don't quote a flat number blind. After a short scoping call we give you a fixed price tied to what the workshop needs to cover, with no open-ended billing.",
  },
] as const;

export function DwFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Questions we get asked"
      items={[...DW_FAQS]}
    />
  );
}
