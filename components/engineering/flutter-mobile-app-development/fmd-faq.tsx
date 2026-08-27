import { ServiceFaq } from "@/components/services";

export const FLUTTER_DEV_FAQS = [
  {
    q: "What should I look for in a Flutter app development company?",
    a: "Ask what their state management default is and why, because that answer reveals whether they have maintained an app or only shipped one. Ask how they evaluate a plugin before depending on it. Ask what their plan is when a live release needs pulling. Then ask who holds the signing certificates and the store account, and make sure the answer is you.",
  },
  {
    q: "Do you work with clients in the USA?",
    a: "Yes. We work with US clients from our Austin, Texas office and across US time zones, alongside our engineering team in Pakistan. Calls, contracts, and delivery can run on US business hours when that is what the engagement needs.",
  },
  {
    q: "Is Flutter as good as native?",
    a: "For most applications, users cannot tell, and Impeller resolved most of the rendering criticism that was once fair. The gap is real in two places: apps built on deep platform SDK work like advanced camera or AR, and apps with hard size constraints. Both are covered on this page under when Flutter is the wrong choice.",
  },
  {
    q: "Riverpod, Bloc, or GetX?",
    a: "Riverpod as our default: compile-time safe, testable without a widget tree, and it resists the implicit state that makes Flutter apps hard to change. Bloc where the team is large or state transitions are genuinely complex. We don't start projects on GetX, because it couples state, routing, and dependency injection in a way that is expensive to unwind.",
  },
  {
    q: "Can you build the backend too?",
    a: "Yes, and we usually recommend it. Most app projects are two projects, and having one team own the contract between client and API removes an entire category of coordination cost. We build backends in Python, Node.js, Laravel, and .NET.",
  },
  {
    q: "How long does a Flutter app take to build?",
    a: "A focused single-purpose app runs 3 to 5 months. A production app with offline handling, native integrations, and a backend runs 6 to 14 months. Add one to three weeks for store review and plan for a rejection round rather than assuming a clean pass.",
  },
  {
    q: "Can you take over an existing Flutter app?",
    a: "Yes. We start with an SDK version, dependency, and state management assessment, because inherited Flutter apps usually hide their problems in abandoned plugins and state scattered across widgets. You get the findings whether or not you continue with us.",
  },
  {
    q: "Which industries do you build Flutter apps for?",
    a: "Retail, logistics and field operations, fintech, healthcare, and on-demand platforms. We will tell you on the call whether your domain is one we have shipped in or one we would be learning.",
  },
  {
    q: "Who owns the app?",
    a: "You do, throughout. Source, signing certificates, and store account access are yours from the first release, not transferred at the end.",
  },
] as const;

export function FmdFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Flutter app development FAQs"
      items={[...FLUTTER_DEV_FAQS]}
      defaultOpen={0}
    />
  );
}
