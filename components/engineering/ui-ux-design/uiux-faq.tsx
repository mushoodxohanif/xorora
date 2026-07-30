import { ServiceFaq } from "@/components/services";

export const UIUX_FAQS = [
  {
    q: "What is the typical process for UI/UX design services?",
    a: "We move from research and information architecture into wireframes, then high-fidelity prototypes, testing, and a final design system. Each stage is reviewed with you before the next begins. The point is to validate the experience before development starts, when changes are cheap.",
  },
  {
    q: "How much does UI/UX design cost?",
    a: "It depends on scope, the number of screens, and whether you need research and a full design system or a focused piece of work. After a short discovery call we give you a clear proposal tied to the work. Investing here usually saves far more in avoided rework later.",
  },
  {
    q: "Do UI/UX designers need coding skills?",
    a: "Not necessarily, but it helps. Our designers understand how their work gets built, so what they hand over is realistic to implement. That shared understanding is why our full-cycle model reduces friction between design and development.",
  },
  {
    q: "What tools are used in UI/UX design?",
    a: "We work across design and prototyping tools like Sketch, Axure, InVision, and the Adobe suite, plus front-end technologies when needed. We pick the tools that fit the project rather than forcing one workflow onto every engagement.",
  },
  {
    q: "How do you ensure accessibility in UI/UX design?",
    a: "We design to accessibility standards from the start, covering contrast, navigation, and inclusive patterns, and we test for them. Accessible design reaches more users and is far cheaper to build in than to retrofit.",
  },
  {
    q: "Can UI/UX design improve business outcomes?",
    a: "Yes. Better usability lifts conversions, cuts cart abandonment, and reduces support load, and we optimize against real user data to get there. Good design is a business lever, not just a visual layer.",
  },
] as const;

export function UiuxFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...UIUX_FAQS]}
    />
  );
}
