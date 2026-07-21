import { ServiceFaq } from "@/components/services";

export const DT_FAQS = [
  {
    q: "How do you assess digital maturity?",
    a: "We evaluate your data, infrastructure, operating model, and engineering practices against where you want to go. The output is a clear read on readiness and the gaps worth closing first. It grounds the roadmap in facts, not assumptions.",
  },
  {
    q: "What's your approach to AI readiness?",
    a: "We check whether your data, infrastructure, and governance can actually support AI in production, not just in a demo. Where they can't yet, we sequence the work to get you there. AI only goes in where it earns its place.",
  },
  {
    q: "What frameworks or accelerators do you use to speed up transformation?",
    a: "We draw on enterprise architecture, Agile, DevSecOps, full-stack engineering, and cloud practices, plus reusable accelerators from past work. The point is to cut time-to-value without cutting corners on quality or security.",
  },
  {
    q: "Do you experiment with emerging technologies on our behalf?",
    a: "Yes, when there's a business reason to. We evaluate emerging tech like blockchain, IoT, and AR/VR against your goals and pilot what looks promising, so you get the upside without betting the roadmap on hype.",
  },
  {
    q: "How long does a digital transformation engagement take?",
    a: "It depends on scope, but our model is built to show value early rather than after a multi-year wait. We work in paced cycles with measurable milestones, so you see progress and can adjust as you go.",
  },
  {
    q: "How do you keep transformation from blowing the budget?",
    a: "We make change self-funding where we can, letting early gains pay for later phases. Work moves in increments tied to value, so spend stays connected to outcomes instead of an open-ended program.",
  },
] as const;

export function DtFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="FAQs about digital transformation services"
      items={[...DT_FAQS]}
    />
  );
}
