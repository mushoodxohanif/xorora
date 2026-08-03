import { ServiceFaq } from "@/components/services";

export const LOCAL_SEO_FAQS = [
  {
    q: "What specific services do you provide to help my business grow locally?",
    a: "We cover the full local program: strategy and research, website and Google Business Profile optimization, local content, citations and links, and reporting. Everything is managed and ongoing rather than a one-off task. We tailor the mix to your service areas and goals.",
  },
  {
    q: "How long does it take to see results?",
    a: "Some local wins, like an optimized Google Business Profile, can show within weeks, while ranking gains build over the campaign. Local SEO compounds, so momentum grows month over month. We set KPIs up front so progress is visible.",
  },
  {
    q: "How is Xorora different from managing it myself or using another agency?",
    a: "We run local SEO as a managed, ongoing program with a dedicated account manager and clear monthly reporting, not a checklist you chase alone. Every pillar ties back to local visibility and leads. You get expertise and accountability in one place.",
  },
  {
    q: "I'm an agency. Can I resell this under my own brand?",
    a: "Yes, we can work on a white-label basis so you deliver local SEO under your own brand. We'll agree on scope, reporting, and communication so it fits how you work with your clients.",
  },
  {
    q: "Do you work outside the US?",
    a: "Yes. We deliver local SEO for businesses across regions, adapting to the local search behavior, directories, and language of each market. Wherever your customers search, we optimize for it.",
  },
  {
    q: "Is there a minimum contract?",
    a: "Local SEO rewards consistency, so it works best as an ongoing program, but we'll be upfront about terms before you commit. We'd rather keep earning the work each month. We'll cover contract details during scoping.",
  },
] as const;

export function LocalSeoFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...LOCAL_SEO_FAQS]}
    />
  );
}
